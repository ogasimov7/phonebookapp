import { UserInfo } from '../../api/form/collections';
import './list.html'

Template.list.onCreated(function() {
    let self = this;

    self.subscribe('usersinfo');
})

Template.list.helpers({ 
   datas(){
      return UserInfo.find({}).fetch()
   }
}); 

Template.list.events({ 
    'click .deletUser'(event, template) { 
         let id = event.target.getAttribute("data-id")
         
         Meteor.call('removeUser', id, function(error, success) { 
             if (error) { 
                 console.log('error', error); 
             } 
             if (success) { 
                  console.log('removed');
                  alert('User removed')
             } 
         });
    } 
}); 
