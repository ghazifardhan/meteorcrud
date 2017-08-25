import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';
import { Employees } from '../api/employees.js';

import './list.js';
import './form.js';
import './data.html';

Router.route('/', function(){

    var template = Template.employee;
    var container = document.getElementById("wrapper");

    Blaze.render(template, container);
})

Router.route('/create', function(){

    var template = Template.form;
    var container = document.getElementById("wrapper");

    if(Template.employee.isRendered){
        Blaze.remove(Template.employee);
    }
    
    Blaze.render(template, container);
    
})