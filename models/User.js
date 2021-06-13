const { Schema, model, Types} = require('mongoose');

const User = new Schema(
	{
		email: {
			type: String,
			require: true,
			unique: true
		},
		name: {
			type: String,
			require: true,
			unique: true
		},
		password: {
			type: String,
			require: true
		},
		offers: [{type: Types.ObjectId, ref: 'Offer'}]
	},
	{
		collection: 'users',
	}
);

module.exports = model('User', User);