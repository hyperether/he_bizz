import {Vacations} from "/imports/api/collections/both/vacations.js";

Meteor.methods({
	"vacationsInsert": function(data) {
		if(!Vacations.userCanInsert(this.userId, data)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		return Vacations.insert(data);
	},

	"vacationsUpdate": function(id, data) {
		var doc = Vacations.findOne({ _id: id });
		if(!Vacations.userCanUpdate(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Vacations.update({ _id: id }, { $set: data });
	},

	"vacationsRemove": function(id) {
		var doc = Vacations.findOne({ _id: id });
		if(!Vacations.userCanRemove(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Vacations.remove({ _id: id });
	}
});
