import './add.html'
import {Random} from 'meteor/random'
import { FlowRouter } from "meteor/ostrio:flow-router-extra";


Template.add.events({ 
    'submit .addInfoForm'(event, template) { 
        event.preventDefault()
        let name = $("#username").val()
        let phone = $("#userphone").val()
        let id = Random.id()
        
         let data = {
           id,
           name,
           phone
         }

         console.log(data, 'data');

         Meteor.call('addUser', data, function(error, success) { 
             if (error) { 
                 console.log('error', error); 
             } 
             if (success) { 
                  console.log('added');
                  FlowRouter.go('/list')
                  alert("New user added")
             } 
         });
    } 
}); 
