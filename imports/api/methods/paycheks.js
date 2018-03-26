import {Paycheks} from "/imports/api/collections/both/paycheks.js";

Meteor.methods({
	"paycheksInsert": function(data) {
		if(!Paycheks.userCanInsert(this.userId, data)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		return Paycheks.insert(data);
	},

	"paycheksUpdate": function(id, data) {
		var doc = Paycheks.findOne({ _id: id });
		if(!Paycheks.userCanUpdate(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Paycheks.update({ _id: id }, { $set: data });
	},

	"paycheksRemove": function(id) {
		var doc = Paycheks.findOne({ _id: id });
		if(!Paycheks.userCanRemove(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Paycheks.remove({ _id: id });
	}
});
