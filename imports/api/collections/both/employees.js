import {Mongo} from "meteor/mongo";

export const Employees = new Mongo.Collection("employees");

Employees.userCanInsert = function(userId, doc) {
	return true;
};

Employees.userCanUpdate = function(userId, doc) {
	return true;
};

Employees.userCanRemove = function(userId, doc) {
	return true;
};
