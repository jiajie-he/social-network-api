const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// const time = require('../utils/time');
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            //set default native JavaScript
            default: new Date
            //format timestamp on query
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('thought', thoughtSchema);

module.exports = Thought;