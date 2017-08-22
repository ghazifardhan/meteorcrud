import { Template } from 'meteor/templating';
import { Employees } from '../api/employees.js';

import './list.js';
import './form.js';
import './data.html';

Router.route('/', function(){
    this.render('employee');
})

Router.route('/create', function(){
    this.render('form');
})