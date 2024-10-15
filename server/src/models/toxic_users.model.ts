/* eslint-disable prettier/prettier */
/**
 * Defines the User model for the database and also the interface to
 * access the model in TypeScript.
 */
import mongoose from 'mongoose';

const ToxicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  majors: {
    type: String,
    required: true,
  },
  traits: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

interface IToxicUser extends mongoose.Document {
  _id: string,
  name: string,
  year: string,
  majors: string,
  traits: [string],
  image: string,
}

const ToxicUser = mongoose.model<IToxicUser>('User', ToxicSchema);

export { IToxicUser, ToxicUser };
