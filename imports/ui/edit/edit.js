import './edit.html'
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { UserInfo } from '../../api/form/collections';

Template.edit.onCreated(function(params) {
    let self = this;
    self.userId = new ReactiveVar(null)


   let id = FlowRouter.getParam('_id')
   self.userId.set(id)
    self.subscribe('userInfoForEdit', self.userId.get() );
})

Template.edit.helpers({ 
   data(){
     return UserInfo.findOne({_id: Template.instance().userId.get()})
   }
}); 

Template.edit.events({ 
    'submit .editInfoForm'(event, template) { 
        event.preventDefault();
        let name = $("#username").val()
        let phone = $("#userphone").val()

        let data={
            name, 
            phone
        }

        Meteor.call('editUser',Template.instance().userId.get(), data, function(error, success) { 
            if (error) { 
                console.log('error', error); 
            } 
            if (success) { 
                 console.log('edited');
                 alert('User edited')
                 FlowRouter.go("/list")
            } 
        });
         
    } 
}); 
