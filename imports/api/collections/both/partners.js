import {Mongo} from "meteor/mongo";

export const Partners = new Mongo.Collection("partners");

Partners.userCanInsert = function(userId, doc) {
	return true;
};

Partners.userCanUpdate = function(userId, doc) {
	return true;
};

Partners.userCanRemove = function(userId, doc) {
	return true;
};
