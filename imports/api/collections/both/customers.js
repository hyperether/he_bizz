import {Mongo} from "meteor/mongo";

export const Customers = new Mongo.Collection("customers");

Customers.userCanInsert = function(userId, doc) {
	return true;
};

Customers.userCanUpdate = function(userId, doc) {
	return true;
};

Customers.userCanRemove = function(userId, doc) {
	return true;
};
