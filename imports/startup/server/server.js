import "/imports/api/collections/both/customers.js";
import "/imports/api/collections/both/projects.js";
import "/imports/api/collections/both/employees.js";
import "/imports/api/collections/both/partners.js";
import "/imports/api/collections/both/organizations.js";
import "/imports/api/collections/both/roles.js";
import "/imports/api/collections/both/paycheks.js";
import "/imports/api/collections/both/vacations.js";
import "/imports/api/collections/both/invoices.js";

import "/imports/api/collections/server/rules/customers.js";
import "/imports/api/collections/server/rules/projects.js";
import "/imports/api/collections/server/rules/employees.js";
import "/imports/api/collections/server/rules/partners.js";
import "/imports/api/collections/server/rules/organizations.js";
import "/imports/api/collections/server/rules/roles.js";
import "/imports/api/collections/server/rules/paycheks.js";
import "/imports/api/collections/server/rules/vacations.js";
import "/imports/api/collections/server/rules/invoices.js";

import "/imports/api/collections/server/publications/customers.js";
import "/imports/api/collections/server/publications/projects.js";
import "/imports/api/collections/server/publications/employees.js";
import "/imports/api/collections/server/publications/partners.js";
import "/imports/api/collections/server/publications/organizations.js";
import "/imports/api/collections/server/publications/roles.js";
import "/imports/api/collections/server/publications/paycheks.js";
import "/imports/api/collections/server/publications/vacations.js";
import "/imports/api/collections/server/publications/invoices.js";

import "/imports/api/methods/customers.js";
import "/imports/api/methods/projects.js";
import "/imports/api/methods/employees.js";
import "/imports/api/methods/partners.js";
import "/imports/api/methods/organizations.js";
import "/imports/api/methods/roles.js";
import "/imports/api/methods/paycheks.js";
import "/imports/api/methods/vacations.js";
import "/imports/api/methods/invoices.js";

import "/imports/api/server_routes/router.js";

Meteor.startup(function() {
	// read environment variables from Meteor.settings
	if(Meteor.settings && Meteor.settings.env && _.isObject(Meteor.settings.env)) {
		for(var variableName in Meteor.settings.env) {
			process.env[variableName] = Meteor.settings.env[variableName];
		}
	}

	
});
