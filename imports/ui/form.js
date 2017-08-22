import {Template} from 'meteor/templating';
import {Employees} from '../api/employees.js';

import './form.html';

Template.form.events({
    'click .submit'(event){
        event.preventDefault();

        const name = $('input[name="name"]').val();
        const age = $('input[name="age"]').val();

        const insert = Employees.insert({
            name,
            age,
            createdAt: new Date(),
        });

        if(insert){
            Router.go('/');
        }
        
    }
});