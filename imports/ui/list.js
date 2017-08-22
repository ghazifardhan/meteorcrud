import {Template} from 'meteor/templating';
import {Employees} from '../api/employees.js';

import './list.html';

Template.employee.helpers({
    employees() {
        return Employees.find({});
    },
});

Template.employee.events({
    'click .create-emp'(event){

        event.preventDefault();

        Router.go('/create');
        console.log("Click me");
    },
    'click .delete-emp'(){
        Employees.remove(this._id);
    }
})