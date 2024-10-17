import express from 'express';
import { getAllUsers, createToxicPersonController, deleteUser } from '../controllers/toxic_users.controller';

const router = express.Router();

router.get('/all', getAllUsers);
router.post('/createPerson', createToxicPersonController);
router.delete('/deletePerson', deleteUser);

export default router;