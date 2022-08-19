const { Schema, Types } = require('mongoose');
// const time = require('../utils/time');
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            //set default
            default: new Date,
            //format timestamp on query
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)
module.exports = reactionSchema;