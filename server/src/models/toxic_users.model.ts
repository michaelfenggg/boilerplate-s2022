/* eslint-disable prettier/prettier */
/**
 * Defines the User model for the database and also the interface to
 * access the model in TypeScript.
 */
import mongoose from 'mongoose';

const ToxicSchema = new mongoose.Schema({
  description: {
    type: String,
    required: false,
  },
  gradYear: {
    type: String,
    required: false,
  },
  imgURL: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  school: {
    type: String,
    required: false,
  },
  traitsList: {
    type: [String],
    required: false,
  },
});

interface IToxicUser extends mongoose.Document {
  _id: string;
  description: string;
  gradYear: string,
  imgURL: string,
  name: string,
  school: string,
  traitsList: [string],
}

const ToxicUser = mongoose.model<IToxicUser>('ToxicUser', ToxicSchema);

export { IToxicUser, ToxicUser };
