import {Router} from 'express';
import { HabitController } from '../controllers/habit.controller.js';

const habitController = new HabitController();

const router = Router();

router.post('/', habitController.createHabit.bind(habitController));
router.get('/:areaId', habitController.getHabits.bind(habitController));
router.put('/', habitController.updateHabit.bind(habitController));
router.delete('/:id', habitController.deleteHabit.bind(habitController));

export default router;