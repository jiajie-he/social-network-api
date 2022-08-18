const {Schema,model} = require('mongoose');
const userSchema = new Schema(
    {
        username:{
            type:String,
            unique:true,
            require:true,
            trim:true
        },
        email:{
            type:String,
            require:true,
            unique:true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']
        },
        thoughts:[
            {}
        ],
        friends:[
            {}
        ]
    },
    {
        toJSON:{
            virtuals:true
        },
        id:false
    }
)
constUser = model('user', userSchema);

module.exports = User;