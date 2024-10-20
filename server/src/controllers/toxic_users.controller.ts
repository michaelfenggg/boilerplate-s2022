/**
 * All the controller functions containing the logic for routes relating to
 * admin users such as getting all users, deleting users and upgrading users.
 */
 import express from 'express';
 import crypto from 'crypto';
 import ApiError from '../util/apiError';
 import StatusCode from '../util/statusCode';
 import { IUser } from '../models/user.model';
 import {
    createUser,
    getUserById,
    getAllUsersFromDB,
    deleteUserByName,
  } from '../services/ToxicUser.service';
 import { IInvite } from '../models/invite.model';
 import { emailInviteLink } from '../services/mail.service';
import { ToxicUser } from '../models/toxic_users.model';
 
 /**
  * Get all users from the database. Upon success, send the a list of all users in the res body with 200 OK status code.
  */
 const getAllUsers = async (
   req: express.Request,
   res: express.Response,
   next: express.NextFunction,
 ) => {
   return (
     getAllUsersFromDB()
       .then((userList) => {
         res.status(StatusCode.OK).send(userList);
       })
       // eslint-disable-next-line @typescript-eslint/no-unused-vars
       .catch((e) => {
         next(ApiError.internal('Unable to retrieve all users'));
       })
   );
 };
 
 
 /**
  * Delete a user from the database. The email of the user is expected to be in the request parameter (url). Send a 200 OK status code on success.
  */
 const deleteUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { name } = req.params;
  if (!name) {
    next(ApiError.missingFields(['name']));
    return;
  }
  
  try {
    const result = await deleteUserByName(name);
    if (result.deletedCount > 0) {
      res.sendStatus(StatusCode.OK);
    } else {
      next(ApiError.notFound(`User with name ${name} not found`));
    }
  } catch (e) {
    next(ApiError.internal('Failed to delete user.'));
  }
};

 
 const createToxicPersonController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
    ) => {
    const { description, gradYear, imgURL, name, school, traitsList } = req.body;
    const toxicPerson = await createUser(description, gradYear, imgURL, name, school, traitsList);
    res.json(toxicPerson);
}
 
 export { getAllUsers, deleteUser, createToxicPersonController };
 