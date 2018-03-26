import {Mongo} from "meteor/mongo";

export const Vacations = new Mongo.Collection("vacations");

Vacations.userCanInsert = function(userId, doc) {
	return true;
};

Vacations.userCanUpdate = function(userId, doc) {
	return true;
};

Vacations.userCanRemove = function(userId, doc) {
	return true;
};
