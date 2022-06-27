import { UserInfo } from "./collections";

Meteor.methods({ 
    addUser(data) {
        console.log(data, 'data');
        data.createdAt = new Date()
        let num = UserInfo.find({sort: {createdAt:-1}}).number
        console.log(num, 'num');
        data.number = num? num + 1 :1
        
     return UserInfo.insert(data)
    },
    
    editUser(id, data) {
        return UserInfo.update({ _id: id },
            {
                $set: {
                    name: data.name,
                    phone: data.phone
                }
            })
    },

    removeUser(id){
        return UserInfo.remove({_id:id})
    }
});