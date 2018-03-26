import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker, createContainer } from "meteor/react-meteor-data";
import {pathFor, menuItemClass} from "/imports/modules/client/router_utils.js";


export class Layout extends Component {
	constructor () {
		super();
	}

	componentDidMount() {
		$(document).on("click", function (e) {
			var clickover = $(e.target).closest(".dropdown-toggle").length;
			var opened = $(".navbar-collapse").hasClass("in");
			if (opened === true && !clickover) {
				$(".navbar-collapse").collapse("hide");
			}
		});

		$(document).on("keydown", function (e) {
			var opened = $(".navbar-collapse").hasClass("in");
			if (opened === true) {
				$(".navbar-collapse").collapse("hide");
			}
		});
	}

	render() {
		return (
	<FreeLayoutContainer content={this.props.content} />
);
	}
}

export const LayoutContainer = withTracker(function(props) {
	var data = {};

	return { data: data };
})(Layout);
export class FreeLayout extends Component {
	constructor () {
		super();
	}

	render() {
		if(this.props.data.dataLoading) {
			return (
	<Loading />
);
		} else {
			return (
	<div className="layout-root">
		<div id="content" className="sticky-wrapper">
			<div id="navbar" className="navbar navbar-fixed-top navbar-default" role="navigation">
				<div className="navbar-container container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span className="sr-only">
								Toggle navigation
							</span>
							<span className="icon-bar">
							</span>
							<span className="icon-bar">
							</span>
							<span className="icon-bar">
							</span>
						</button>
						<a className="navbar-brand" href="/">
						</a>
					</div>
					<div id="menu" className="collapse navbar-collapse">
						<FreeLayoutMainMenu data={this.props.data} routeParams={this.props.routeParams} />
					</div>
				</div>
			</div>
			<div className="navbar-spacer">
			</div>
			{this.props.content}
		</div>
		<div id="footer" className="sticky-footer">
			<div className="footer-container container">
				<p className="text-muted">
				</p>
			</div>
		</div>
	</div>
);
		}
	}
}

export const FreeLayoutContainer = withTracker(function(props) {
		var isReady = function() {
		

		var subs = [
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	};

	var data = { dataLoading: true };

	if(isReady()) {
		

		data = {

			};
		

		
	}
	return { data: data };

})(FreeLayout);
export class FreeLayoutMainMenu extends Component {
	constructor () {
		super();
		
	}

	componentWillMount() {
		/*TEMPLATE_CREATED_CODE*/
	}

	componentWillUnmount() {
		/*TEMPLATE_DESTROYED_CODE*/
	}

	componentDidMount() {
		/*TEMPLATE_RENDERED_CODE*/
	}

	

	render() {
		return (
	<ul id="menu-items" className="nav navbar-nav">
		<li id="menu-item-simple" className={menuItemClass('dashboard')}>
			<a href={pathFor('dashboard', {})}>
				<span className="item-title">
					Home
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('organizations')}>
			<a href={pathFor('organizations', {})}>
				<span className="item-title">
					Organizations
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('employees')}>
			<a href={pathFor('employees', {})}>
				<span className="item-title">
					Employees
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('partners')}>
			<a href={pathFor('partners', {})}>
				<span className="item-title">
					Partners
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('projects')}>
			<a href={pathFor('projects', {})}>
				<span className="item-title">
					Projects
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('roles')}>
			<a href={pathFor('roles', {})}>
				<span className="item-title">
					Roles
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('customers')}>
			<a href={pathFor('customers', {})}>
				<span className="item-title">
					Customers
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('invoices')}>
			<a href={pathFor('invoices', {})}>
				<span className="item-title">
					Invoices
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('paycheks')}>
			<a href={pathFor('paycheks', {})}>
				<span className="item-title">
					Paycheks
				</span>
			</a>
		</li>
		<li id="menu-item-simple" className={menuItemClass('vacations')}>
			<a href={pathFor('vacations', {})}>
				<span className="item-title">
					Vacations
				</span>
			</a>
		</li>
	</ul>
);
	}
}
