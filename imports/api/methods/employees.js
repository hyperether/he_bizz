import {Employees} from "/imports/api/collections/both/employees.js";

Meteor.methods({
	"employeesInsert": function(data) {
		if(!Employees.userCanInsert(this.userId, data)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		return Employees.insert(data);
	},

	"employeesUpdate": function(id, data) {
		var doc = Employees.findOne({ _id: id });
		if(!Employees.userCanUpdate(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Employees.update({ _id: id }, { $set: data });
	},

	"employeesRemove": function(id) {
		var doc = Employees.findOne({ _id: id });
		if(!Employees.userCanRemove(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Employees.remove({ _id: id });
	}
});
