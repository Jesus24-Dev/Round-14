import {Router} from 'express';
import { WeightController } from '../controllers/weight.controller.js';

const weightController = new WeightController();

const router = Router();

router.post('/', weightController.createWeight.bind(weightController));
router.get('/', weightController.getWeights.bind(weightController));
router.put('/', weightController.updateWeight.bind(weightController));
router.delete('/:id', weightController.deleteWeight.bind(weightController));

export default router;