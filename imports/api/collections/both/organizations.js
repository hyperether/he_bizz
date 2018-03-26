import {Mongo} from "meteor/mongo";

export const Organizations = new Mongo.Collection("organizations");

Organizations.userCanInsert = function(userId, doc) {
	return true;
};

Organizations.userCanUpdate = function(userId, doc) {
	return true;
};

Organizations.userCanRemove = function(userId, doc) {
	return true;
};
