/**
 * All the functions for interacting with ToxicUser data in the MongoDB database
 */
 import { ToxicUser } from '../models/toxic_users.model';
 
 /**
  * Creates a new user in the database.
  * @param name - string representing the first name of the user
  * @param year - string representing the email of the user
  * @param majors - string representing the password of the user
  * @param traits - string lit of traits
  * @param image - link to the image
  * @returns The created {@link ToxicUser}
  */
 const createUser = async (
   name: string,
   year: string,
   majors: string,
   traits: string,
   image: string
 ) => {
   const newUser = new ToxicUser({
     name,
     year,
     majors,
     traits,
     image,
   });
   const user = await newUser.save();
   return user;
 };
 
 /**
  * Gets a user from the database by their name but doesn't include the
  * password in the returned user.
  * @param name The email of the user to get
  * @returns The {@link ToxicUser} or null if the user was not found.
  */
 const getUserByName = async (name: string) => {
   const user = await ToxicUser.findOne({ name })
     .exec();
   return user;
 };
 
 /**
  * Gets a user from the database by their id but doesn't include the
  * password in the returned user.
  * @param id The id of the user to get.
  * @returns The {@link ToxicUser} or null if the user was not found.
  */
 const getUserById = async (id: string) => {
   const user = await ToxicUser.findById(id).exec();
   return user;
 };
 
 /**
  * @returns All the {@link ToxicUser}s in the database without their passwords.
  */
 const getAllUsersFromDB = async () => {
   const userList = await ToxicUser.find({}).exec();
   return userList;
 };
 
 /**
  * A function that deletes a user from the database.
  * @param id The id of the user to delete.
  * @returns The deleted {@link ToxicUser}
  */
 const deleteUserByName = async (name: string) => {
  const result = await ToxicUser.deleteMany({ name }).exec();
  return result;
 };
 
 export {
   createUser,
   getUserById,
   getAllUsersFromDB,
   deleteUserByName,
 };
 