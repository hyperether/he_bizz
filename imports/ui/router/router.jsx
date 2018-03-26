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
/*IMPORTS*/

const reactMount = withOptions({
	rootProps: {
		className: "react-root"
	}
}, mount);

const freeRouteNames = [
	"login",
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
	"verify_email",
	"forgot_password",
	"change_password",
	"reset_password"
];

export const routeGranted = function(routeName) {
	return true;
};

const freeRoutes = FlowRouter.group( { name: "free" } );

FlowRouter.notFound = {
	action () {
		reactMount(LayoutContainer, {
			content: (<NotFound />)
		});
	}
};

freeRoutes.route("/", {
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

freeRoutes.route("/dashboard", {
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

freeRoutes.route("/organizations", {
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

freeRoutes.route("/organizations/insert", {
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

freeRoutes.route("/organizations/edit/:customerId", {
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

freeRoutes.route("/employees", {
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

freeRoutes.route("/employees/insert", {
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

freeRoutes.route("/employees/edit/:customerId", {
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

freeRoutes.route("/partners", {
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

freeRoutes.route("/partners/insert", {
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

freeRoutes.route("/partners/edit/:customerId", {
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

freeRoutes.route("/projects", {
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

freeRoutes.route("/projects/insert", {
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

freeRoutes.route("/projects/edit/:customerId", {
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

freeRoutes.route("/roles", {
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

freeRoutes.route("/roles/insert", {
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

freeRoutes.route("/roles/edit/:customerId", {
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

freeRoutes.route("/customers", {
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

freeRoutes.route("/customers/insert", {
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

freeRoutes.route("/customers/edit/:customerId", {
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

freeRoutes.route("/invoices", {
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

freeRoutes.route("/invoices/insert", {
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

freeRoutes.route("/invoices/edit/:customerId", {
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

freeRoutes.route("/paycheks", {
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

freeRoutes.route("/paycheks/insert", {
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

freeRoutes.route("/paycheks/edit/:customerId", {
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

freeRoutes.route("/vacations", {
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

freeRoutes.route("/vacations/insert", {
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

freeRoutes.route("/vacations/edit/:customerId", {
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

freeRoutes.route("/verify_email/:verifyEmailToken", {
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

freeRoutes.route("/forgot_password", {
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

freeRoutes.route("/change_password", {
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

freeRoutes.route("/reset_password/:resetPasswordToken", {
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
