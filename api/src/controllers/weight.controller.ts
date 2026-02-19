import {type Request, type Response} from 'express';
import { WeightService } from '../services/weight.service.js';

const weightService = new WeightService();

export class WeightController {
    async createWeight(req: Request, res: Response): Promise<void> {
        try {
            const weight = await weightService.createWeight(req.body);
            res.status(201).json(weight);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create weight record' });
        }
    }

    async getWeights(req: Request, res: Response): Promise<void>{
        try {
            const weights = await weightService.getWeights();
            res.status(200).json(weights);
        } catch (error){
            res.status(500).json({ error: 'Failed to retrieve weight records' });
        }
    }

    async updateWeight(req: Request, res: Response): Promise<void> {
        try {
            const weight = await weightService.updateWeight(req.body);
            res.status(200).json(weight);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update weight record' });
        }
    }

    async deleteWeight(req: Request<{id: string}>, res: Response): Promise<void> {

        const id = req.params.id;

        if (!id || isNaN(parseInt(id))) {
            res.status(400).json({ error: 'Invalid weight ID' });
            return;
        }
        try {
            await weightService.deleteWeight(parseInt(id));
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete weight record' });
        }
    }
}