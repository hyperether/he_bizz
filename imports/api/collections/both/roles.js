import {Mongo} from "meteor/mongo";

export const Roles = new Mongo.Collection("roles");

Roles.userCanInsert = function(userId, doc) {
	return true;
};

Roles.userCanUpdate = function(userId, doc) {
	return true;
};

Roles.userCanRemove = function(userId, doc) {
	return true;
};
