import {Organizations} from "/imports/api/collections/both/organizations.js";

Meteor.methods({
	"organizationsInsert": function(data) {
		if(!Organizations.userCanInsert(this.userId, data)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		return Organizations.insert(data);
	},

	"organizationsUpdate": function(id, data) {
		var doc = Organizations.findOne({ _id: id });
		if(!Organizations.userCanUpdate(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Organizations.update({ _id: id }, { $set: data });
	},

	"organizationsRemove": function(id) {
		var doc = Organizations.findOne({ _id: id });
		if(!Organizations.userCanRemove(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Organizations.remove({ _id: id });
	}
});
