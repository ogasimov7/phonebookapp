import { UserInfo } from "./collections";

Meteor.publish('usersinfo', function() {
    return UserInfo.find({}).fetch()
});

Meteor.publish('userInfoForEdit', function(id) {
    return UserInfo.findOne({_id:id})
});