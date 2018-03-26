import {Meteor} from "meteor/meteor";
import {Customers} from "/imports/api/collections/both/customers.js";

Meteor.publish("customers", function() {
	return Customers.find({}, {});
});

Meteor.publish("customers_empty", function() {
	return Customers.find({_id:null}, {});
});

Meteor.publish("customers_selected", function(customerId) {
	return Customers.find({_id:customerId}, {});
});

