import {Mongo} from "meteor/mongo";

export const Projects = new Mongo.Collection("projects");

Projects.userCanInsert = function(userId, doc) {
	return true;
};

Projects.userCanUpdate = function(userId, doc) {
	return true;
};

Projects.userCanRemove = function(userId, doc) {
	return true;
};
