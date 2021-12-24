using Genie
using Genie.Router
using HTTP
import Genie.Renderer.Json: json
using Genie.Renderer.Json, Genie.Requests
using Genie.Renderer.Html
using LibPQ, Tables
using DataFrames, PrettyTables
using Genie.Renderer
conn = LibPQ.Connection("dbname=danenfcgd5khab host=ec2-35-153-114-74.compute-1.amazonaws.com port=5432 user=hbwwyuvguzemdw password=514ffbe17667034ddf0db74ae2d5157c2caf0374c5ac127d0ce38a679345786e sslmode=require")

function launchServer(port)

    Genie.config.run_as_server = true
    Genie.config.server_host = "0.0.0.0"
    Genie.config.server_port = port


    println("port set to $(port)")

    route("/") do
        "Hi there! This is server 1"
    end

    route("/jsontest") do
        (:message => "Hi there!this is a json test") |> json
    end

    route("/echo", method = POST) do
        message = jsonpayload()
        (:echo => (message["message"] * " ")^message["repeat"]) |> json
    end

    route("/send") do
        response = HTTP.request(
            "POST",
            "https://julia-apiserver1.herokuapp.com/echo",
            [("Content-Type", "application/json")],
            """{"message":"hello", "repeat":3}""",
        )

        response.body |> String |> json
    end

    route("/create") do
        result = execute(conn, """
        CREATE TABLE customers (
    customer_id bpchar NOT NULL,
    company_name character varying(40) NOT NULL,
    contact_name character varying(30),
    contact_title character varying(30),
    address character varying(60),
    city character varying(15),
    region character varying(15),
    postal_code character varying(10),
    country character varying(15),
    phone character varying(24),
    fax character varying(24)
);
        """)
    end
    
    route("/delete") do 
        result = execute(conn, """
        DROP TABLE IF EXISTS customers;
        """)
    end

    route("/adddata") do 
        result = execute(conn, """
        INSERT INTO customers VALUES ('ALFKI', 'Alfreds Futterkiste', 'Maria Anders', 'Sales Representative', 'Obere Str. 57', 'Berlin', NULL, '12209', 'Germany', '030-0074321', '030-0076545');
        INSERT INTO customers VALUES ('ANATR', 'Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Owner', 'Avda. de la Constitución 2222', 'México D.F.', NULL, '05021', 'Mexico', '(5) 555-4729', '(5) 555-3745');
        INSERT INTO customers VALUES ('ANTON', 'Antonio Moreno Taquería', 'Antonio Moreno', 'Owner', 'Mataderos  2312', 'México D.F.', NULL, '05023', 'Mexico', '(5) 555-3932', NULL);
        INSERT INTO customers VALUES ('AROUT', 'Around the Horn', 'Thomas Hardy', 'Sales Representative', '120 Hanover Sq.', 'London', NULL, 'WA1 1DP', 'UK', '(171) 555-7788', '(171) 555-6750');
        INSERT INTO customers VALUES ('BERGS', 'Berglunds snabbköp', 'Christina Berglund', 'Order Administrator', 'Berguvsvägen  8', 'Luleå', NULL, 'S-958 22', 'Sweden', '0921-12 34 65', '0921-12 34 67');
        """)
    end

    holder = "SELECT * FROM COMPANY;"

    form = """
    <form action="/command" method="POST" enctype="multipart/form-data">
    <textarea id="name" style="resize: none;" name="name" rows="4" cols="50" />$holder</textarea> <br><br>
    <input type="submit" value="Run Postgres SQL >>" />
    </form>
    """

    restore = """
    DROP TABLE IF EXISTS COMPANY;
    CREATE TABLE COMPANY(
    ID INT PRIMARY KEY     NOT NULL,
    NAME           TEXT    NOT NULL,
    AGE            INT     NOT NULL,
    ADDRESS        CHAR(50),
    SALARY         REAL,
    JOIN_DATE	  DATE
    );
    INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (1, 'Paul', 32, 'California', 20000.00,'2001-07-13');
    INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,JOIN_DATE) VALUES (2, 'Allen', 25, 'Texas', '2007-12-13');
    INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (3, 'Teddy', 23, 'Norway', 20000.00, DEFAULT );
    INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00, '2007-12-13' ), (5, 'David', 27, 'Texas', 85000.00, '2007-12-13');
    """

    restoreform = """
    <form action="/restore" method="POST" enctype="multipart/form-data">
    <input type="submit" value="Restore Database" />
    </form>
    """

    route("/restore", method = POST) do
        result = execute(conn, """ $restore""")
        redirect(:get_com)

    end

    route("/command",named=:get_com) do
        html("SQL STATEMENT:\n" * form * "\n Restore Database:\n" * restoreform)
    end

    route("/command", method = POST) do
        holder = "$(postpayload(:name, "Anon"))"
        form = """
        <form action="/command" method="POST" enctype="multipart/form-data">
        <textarea id="name" style="resize: none;" name="name" rows="4" cols="50" />$holder</textarea> <br><br>
        <input type="submit" value="Run Postgres SQL >>" />
        </form>
        """
        result = DataFrame(execute(conn, """ $(postpayload(:name, "Anon")) """))
        data = pretty_table(String, result; backend = Val(:html))
        html("SQL STATEMENT:\n" * form * "\n " * "Output From Query:" * data * "\n Restore Database:\n" * restoreform)
    end

    Genie.AppServer.startup(async = false)
end
conn = LibPQ.Connection("dbname=danenfcgd5khab host=ec2-35-153-114-74.compute-1.amazonaws.com port=5432 user=hbwwyuvguzemdw password=514ffbe17667034ddf0db74ae2d5157c2caf0374c5ac127d0ce38a679345786e sslmode=require")

launchServer(parse(Int, ARGS[1]))
launchServer( 8001)


