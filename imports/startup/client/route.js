import { FlowRouter } from "meteor/ostrio:flow-router-extra";


import '../../ui/home/home';
FlowRouter.route("/home", {
    name: "home",
    action() {
      this.render("home", {
        main: "home",
      });
    },
});


import '../../ui/add/add'
FlowRouter.route("/add", {
    name: "add",
    action() {
      this.render("add", {
        main: "add",
      });
    },
});

import '../../ui/list/list'
FlowRouter.route("/list", {
    name: "list",
    action() {
      this.render("list", {
        main: "list",
      });
    },
});

import '../../ui/edit/edit'
FlowRouter.route("/edit/:_id", {
    name: "edit",
    action() {
      this.render("edit", {
        main: "edit",
      });
    },
});