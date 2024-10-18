/* eslint-disable prettier/prettier */
/**
 * Defines the User model for the database and also the interface to
 * access the model in TypeScript.
 */
import mongoose from 'mongoose';

const ToxicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  majors: {
    type: String,
    required: false,
  },
  traits: {
    type: [String],
    required: false,
  },
  image: {
    type: String,
    required: false,
  }
});

interface IToxicUser extends mongoose.Document {
  _id: string;
  name: string;
  year: string,
  majors: string,
  traits: [string],
  image: string,
}

const ToxicUser = mongoose.model<IToxicUser>('ToxicUser', ToxicSchema);

export { IToxicUser, ToxicUser };
