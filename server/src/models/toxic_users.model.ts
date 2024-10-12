/* eslint-disable prettier/prettier */
/**
 * Defines the User model for the database and also the interface to
 * access the model in TypeScript.
 */
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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
  }
});

interface IUser extends mongoose.Document {
  _id: string;
  name: string;
  year: string,
  majors: string,
  traits: [string]
}

const User = mongoose.model<IUser>('User', UserSchema);

export { IUser, User };
