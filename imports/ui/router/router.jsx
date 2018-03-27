import React, { Component } from "react";
import PropTypes from "prop-types";
import {mount, withOptions} from "react-mounter";
import {LayoutContainer} from "/imports/ui/layouts/layout.jsx";
import {NotFound} from "/imports/ui/pages/not_found/not_found.jsx";
import {LoginPageContainer} from "/imports/ui/pages/login/login.jsx";
import {DashboardPageContainer} from "/imports/ui/pages/dashboard/dashboard.jsx";
import {OrganizationsPageContainer} from "/imports/ui/pages/organizations/organizations.jsx";
import {OrganizationsInsertPageContainer} from "/imports/ui/pages/organizations/insert/insert.jsx";
import {OrganizationsEditPageContainer} from "/imports/ui/pages/organizations/edit/edit.jsx";
import {EmployeesPageContainer} from "/imports/ui/pages/employees/employees.jsx";
import {EmployeesInsertPageContainer} from "/imports/ui/pages/employees/insert/insert.jsx";
import {EmployeesEditPageContainer} from "/imports/ui/pages/employees/edit/edit.jsx";
import {PartnersPageContainer} from "/imports/ui/pages/partners/partners.jsx";
import {PartnersInsertPageContainer} from "/imports/ui/pages/partners/insert/insert.jsx";
import {PartnersEditPageContainer} from "/imports/ui/pages/partners/edit/edit.jsx";
import {ProjectsPageContainer} from "/imports/ui/pages/projects/projects.jsx";
import {ProjectsInsertPageContainer} from "/imports/ui/pages/projects/insert/insert.jsx";
import {ProjectsEditPageContainer} from "/imports/ui/pages/projects/edit/edit.jsx";
import {RolesPageContainer} from "/imports/ui/pages/roles/roles.jsx";
import {RolesInsertPageContainer} from "/imports/ui/pages/roles/insert/insert.jsx";
import {RolesEditPageContainer} from "/imports/ui/pages/roles/edit/edit.jsx";
import {CustomersPageContainer} from "/imports/ui/pages/customers/customers.jsx";
import {CustomersInsertPageContainer} from "/imports/ui/pages/customers/insert/insert.jsx";
import {CustomersEditPageContainer} from "/imports/ui/pages/customers/edit/edit.jsx";
import {InvoicesPageContainer} from "/imports/ui/pages/invoices/invoices.jsx";
import {InvoicesInsertPageContainer} from "/imports/ui/pages/invoices/insert/insert.jsx";
import {InvoicesEditPageContainer} from "/imports/ui/pages/invoices/edit/edit.jsx";
import {PaycheksPageContainer} from "/imports/ui/pages/paycheks/paycheks.jsx";
import {PaycheksInsertPageContainer} from "/imports/ui/pages/paycheks/insert/insert.jsx";
import {PaycheksEditPageContainer} from "/imports/ui/pages/paycheks/edit/edit.jsx";
import {VacationsPageContainer} from "/imports/ui/pages/vacations/vacations.jsx";
import {VacationsInsertPageContainer} from "/imports/ui/pages/vacations/insert/insert.jsx";
import {VacationsEditPageContainer} from "/imports/ui/pages/vacations/edit/edit.jsx";
import {VerifyEmailPageContainer} from "/imports/ui/pages/verify_email/verify_email.jsx";
import {ForgotPasswordPageContainer} from "/imports/ui/pages/forgot_password/forgot_password.jsx";
import {ChangePasswordPageContainer} from "/imports/ui/pages/change_password/change_password.jsx";
import {ResetPasswordPageContainer} from "/imports/ui/pages/reset_password/reset_password.jsx";
import {RegisterPageContainer} from "/imports/ui/pages/register/register.jsx";
/*IMPORTS*/

const reactMount = withOptions({
	rootProps: {
		className: "react-root"
	}
}, mount);

var userDataSubscription = Meteor.subscribe("current_user_data");

Tracker.autorun(function() {
	if(userDataSubscription.ready() && !FlowRouter._initialized) {
		// user data arrived, start router
		FlowRouter.initialize();
	}
});


Tracker.autorun(function() {
	var userId = Meteor.userId();
	var user = Meteor.user();
	if(userId && !user) {
		return;
	}

	var currentContext = FlowRouter.current();
	var route = currentContext.route;
	if(route) {
		if(user) {
			if(route.group.name == "public") {
				FlowRouter.reload();
			}
		} else {
			if(route.group.name == "private") {
				FlowRouter.reload();
			}
		}
	}
});


const publicRouteNames = [
	"login",
	"register",
	"verify_email",
	"forgot_password",
	"reset_password",
	"create_password"
];

const privateRouteNames = [
	"dashboard",
	"organizations",
	"organizations.insert",
	"organizations.edit",
	"employees",
	"employees.insert",
	"employees.edit",
	"partners",
	"partners.insert",
	"partners.edit",
	"projects",
	"projects.insert",
	"projects.edit",
	"roles",
	"roles.insert",
	"roles.edit",
	"customers",
	"customers.insert",
	"customers.edit",
	"invoices",
	"invoices.insert",
	"invoices.edit",
	"paycheks",
	"paycheks.insert",
	"paycheks.edit",
	"vacations",
	"vacations.insert",
	"vacations.edit",
	"change_password"
];

const roleMap = [
	{ route: "dashboard", roles: [] },
	{ route: "organizations", roles: [] },
	{ route: "organizations.insert", roles: ["admin", "board"] },
	{ route: "organizations.edit", roles: ["admin", "board"] },
	{ route: "employees", roles: [] },
	{ route: "employees.insert", roles: ["admin", "board"] },
	{ route: "employees.edit", roles: ["admin", "board"] },
	{ route: "partners", roles: ["admin", "board", "finance"] },
	{ route: "partners.insert", roles: ["admin","board", "finance"] },
	{ route: "partners.edit", roles: ["admin", "board", "finance"] },
	{ route: "projects", roles: ["admin", "board", "finance"] },
	{ route: "projects.insert", roles: ["admin", "board"] },
	{ route: "projects.edit", roles: ["admin", "board"] },
	{ route: "roles", roles: ["admin"] },
	{ route: "roles.insert", roles: ["admin"] },
	{ route: "roles.edit", roles: ["admin"] },
	{ route: "customers", roles: ["admin", "board", "finance"] },
	{ route: "customers.insert", roles: ["admin", "board", "finance"] },
	{ route: "customers.edit", roles: ["admin", "board", "finance"] },
	{ route: "invoices", roles: ["admin", "board", "finance"] },
	{ route: "invoices.insert", roles: ["admin", "board", "finance"] },
	{ route: "invoices.edit", roles: ["admin", "board", "finance"] },
	{ route: "paycheks", roles: ["admin", "board", "finance"] },
	{ route: "paycheks.insert", roles: ["admin", "board", "finance"] },
	{ route: "paycheks.edit", roles: ["admin", "board", "finance"] },
	{ route: "vacations", roles: ["admin", "employee"] },
	{ route: "vacations.insert", roles: ["admin", "employee"] },
	{ route: "vacations.edit", roles: ["admin", "employee"] },
	{ route: "change_password", roles: [] }
];

const firstGrantedRoute = function(preferredRoute) {
	if(preferredRoute && routeGranted(preferredRoute)) return preferredRoute;

	var grantedRoute = "";

	_.every(privateRouteNames, function(route) {
		if(routeGranted(route)) {
			grantedRoute = route;
			return false;
		}
		return true;
	});
	if(grantedRoute) return grantedRoute;

	_.every(publicRouteNames, function(route) {
		if(routeGranted(route)) {
			grantedRoute = route;
			return false;
		}
		return true;
	});
	if(grantedRoute) return grantedRoute;

	if(!grantedRoute) {
		console.log("All routes are restricted for current user.");
		return "notFound";
	}

	return "";
};

// this function returns true if user is in role allowed to access given route
export const routeGranted = function(routeName) {
	if(!routeName) {
		// route without name - enable access (?)
		return true;
	}

	if(!roleMap || roleMap.length === 0) {
		// this app doesn't have role map - enable access
		return true;
	}

	var roleMapItem = _.find(roleMap, function(roleItem) { return roleItem.route == routeName; });
	if(!roleMapItem) {
		// page is not restricted
		return true;
	}

	// if user data not arrived yet, allow route - user will be redirected anyway after his data arrive
	if(Meteor.userId() && !Meteor.user()) {
		return true;
	}

	if(!Meteor.user() || !Meteor.user().roles) {
		// user is not logged in or doesn't have "role" member
		return false;
	}

	// this page is restricted to some role(s), check if user is in one of allowedRoles
	var allowedRoles = roleMapItem.roles;
	var granted = _.intersection(allowedRoles, Meteor.user().roles);
	if(!granted || granted.length === 0) {
		return false;
	}

	return true;
};


FlowRouter.subscriptions = function() {
	this.register("current_user_data", Meteor.subscribe("current_user_data"));
};

const publicRoutes = FlowRouter.group({
	name: "public",
	triggersEnter: [
		function(context, redirect, stop) {
			if(Meteor.user()) {
				var redirectRoute = firstGrantedRoute("dashboard");
				redirect(redirectRoute);
			}
		}
	]
});

const privateRoutes = FlowRouter.group({
	name: "private",
	triggersEnter: [
		function(context, redirect, stop) {
			if(!Meteor.user()) {
				// user is not logged in - redirect to public home
				var redirectRoute = firstGrantedRoute("login");
				redirect(redirectRoute);
			} else {
				// user is logged in - check role
				if(!routeGranted(context.route.name)) {
					// user is not in allowedRoles - redirect to first granted route
					var redirectRoute = firstGrantedRoute("dashboard");
					redirect(redirectRoute);
				}
			}
		}
	]
});

FlowRouter.notFound = {
	action () {
		reactMount(LayoutContainer, {
			content: (<NotFound />)
		});
	}
};

//PRIVATE ROUTES

publicRoutes.route("/", {
    name: "login",

    title: "",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<LoginPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

//PUBLIC ROUTES

publicRoutes.route("/verify_email/:verifyEmailToken", {
	name: "verify_email",

	title: "",

	triggersEnter: [
		function(context, redirect, stop) {

		}
	],
	action: function(routeParams, routeQuery) {
		reactMount(LayoutContainer, {
			content: (
				<VerifyEmailPageContainer routeParams={routeParams} />
			)
		});

	},
	triggersExit: [
		function(context, redirect) {

		}
	]
});

publicRoutes.route("/forgot_password", {
	name: "forgot_password",

	title: "",

	triggersEnter: [
		function(context, redirect, stop) {

		}
	],
	action: function(routeParams, routeQuery) {
		reactMount(LayoutContainer, {
			content: (
				<ForgotPasswordPageContainer routeParams={routeParams} />
			)
		});

	},
	triggersExit: [
		function(context, redirect) {

		}
	]
});

publicRoutes.route("/reset_password/:resetPasswordToken", {
	name: "reset_password",

	title: "",

	triggersEnter: [
		function(context, redirect, stop) {

		}
	],
	action: function(routeParams, routeQuery) {
		reactMount(LayoutContainer, {
			content: (
				<ResetPasswordPageContainer routeParams={routeParams} />
			)
		});

	},
	triggersExit: [
		function(context, redirect) {

		}
	]
});

//PRIVATE ROUTES

privateRoutes.route("/dashboard", {
    name: "dashboard",

    title: "",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<DashboardPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/organizations", {
    name: "organizations",

    title: "Organizations",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<OrganizationsPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/organizations/insert", {
    name: "organizations.insert",

    title: "Organizations",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<OrganizationsInsertPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/organizations/edit/:customerId", {
    name: "organizations.edit",

    title: "Organizations",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<OrganizationsEditPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/employees", {
    name: "employees",

    title: "Employees",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<EmployeesPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/employees/insert", {
    name: "employees.insert",

    title: "Employees",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<EmployeesInsertPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/employees/edit/:customerId", {
    name: "employees.edit",

    title: "Employees",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<EmployeesEditPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/partners", {
    name: "partners",

    title: "Partners",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<PartnersPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/partners/insert", {
    name: "partners.insert",

    title: "Partners",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<PartnersInsertPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/partners/edit/:customerId", {
    name: "partners.edit",

    title: "Partners",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<PartnersEditPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/projects", {
    name: "projects",

    title: "Projects",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<ProjectsPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/projects/insert", {
    name: "projects.insert",

    title: "Projects",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<ProjectsInsertPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/projects/edit/:customerId", {
    name: "projects.edit",

    title: "Projects",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<ProjectsEditPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/roles", {
    name: "roles",

    title: "Roles",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<RolesPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/roles/insert", {
    name: "roles.insert",

    title: "Roles",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<RolesInsertPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/roles/edit/:customerId", {
    name: "roles.edit",

    title: "Roles",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<RolesEditPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/customers", {
    name: "customers",

    title: "Customers",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<CustomersPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/customers/insert", {
    name: "customers.insert",

    title: "Customers",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<CustomersInsertPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/customers/edit/:customerId", {
    name: "customers.edit",

    title: "Customers",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<CustomersEditPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/invoices", {
    name: "invoices",

    title: "Invoices",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<InvoicesPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/invoices/insert", {
    name: "invoices.insert",

    title: "Invoices",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<InvoicesInsertPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/invoices/edit/:customerId", {
    name: "invoices.edit",

    title: "Invoices",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<InvoicesEditPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/paycheks", {
    name: "paycheks",

    title: "Paycheks",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<PaycheksPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/paycheks/insert", {
    name: "paycheks.insert",

    title: "Paycheks",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<PaycheksInsertPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/paycheks/edit/:customerId", {
    name: "paycheks.edit",

    title: "Paycheks",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<PaycheksEditPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/vacations", {
    name: "vacations",

    title: "Vacations",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<VacationsPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/vacations/insert", {
    name: "vacations.insert",

    title: "Vacations",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<VacationsInsertPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/vacations/edit/:customerId", {
    name: "vacations.edit",

    title: "Vacations",

	triggersEnter: [
		function(context, redirect, stop) {
			
		}
	],
    action: function(routeParams, routeQuery) {
    	reactMount(LayoutContainer, {
			content: (
				<VacationsEditPageContainer routeParams={routeParams} />
			)
		});

    },
	triggersExit: [
		function(context, redirect) {
			
		}
	]
});

privateRoutes.route("/change_password", {
	name: "change_password",

	title: "",

	triggersEnter: [
		function(context, redirect, stop) {

		}
	],
	action: function(routeParams, routeQuery) {
		reactMount(LayoutContainer, {
			content: (
				<ChangePasswordPageContainer routeParams={routeParams} />
			)
		});

	},
	triggersExit: [
		function(context, redirect) {

		}
	]
});

publicRoutes.route("/register", {
	name: "register",

	title: "",

	triggersEnter: [
		function(context, redirect, stop) {

		}
	],
	action: function(routeParams, routeQuery) {
		reactMount(LayoutContainer, {
			content: (
				<RegisterPageContainer routeParams={routeParams} />
			)
		});

	},
	triggersExit: [
		function(context, redirect) {

		}
	]
});
