import {Mongo} from "meteor/mongo";

export const Paycheks = new Mongo.Collection("paycheks");

Paycheks.userCanInsert = function(userId, doc) {
	return true;
};

Paycheks.userCanUpdate = function(userId, doc) {
	return true;
};

Paycheks.userCanRemove = function(userId, doc) {
	return true;
};
