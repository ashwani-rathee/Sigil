using FaceDetection, Serialization # Serialization is so that you can save your results

num_classifiers = 10 # this is the number of Haar-like features you want to select

# provide paths to directories of training images
pos_training_path = "./data/trainset/faces/" # positive images are, for example, faces
neg_training_path = "./data/trainset/non-faces/" # negative images are, for example, non-faces.  However, the Viola-Jones algorithm is for object detection, not just for face detection

max_feature_width, max_feature_height, min_feature_height, min_feature_width = ( 4, 4, 1, 1) # or use the function to select reasonable sized feature parameters given your maximum image size (see below)
determine_feature_size(pos_training_path, neg_training_path)

# learn the features from
classifiers = learn(pos_training_path, neg_training_path, num_classifiers, min_feature_height, max_feature_height, min_feature_width, max_feature_width)

# provide paths to directories of testing images
pos_testing_path = "./data/testset/faces/"
neg_testing_path = "./data/testset/non-faces/"

# obtain results
num_faces, num_non_faces = length(filtered_ls(pos_testing_path)), length(filtered_ls(neg_testing_path));
correct_faces = sum(ensemble_vote_all(pos_testing_path, classifiers));
correct_non_faces = num_non_faces - sum(ensemble_vote_all(neg_testing_path, classifiers));
correct_faces_percent = (correct_faces / num_faces) * 100;
correct_non_faces_percent = (correct_non_faces / num_non_faces) * 100;

# print results
println("$(string(correct_faces, "/", num_faces)) ($(correct_faces_percent) %) of positive images were correctly identified.")
println("$(string(correct_non_faces, "/", num_non_faces)) ($(correct_non_faces_percent) %) of positive images were correctly identified.")