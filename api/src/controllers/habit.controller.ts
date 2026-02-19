import {type Request, type Response} from 'express';
import { HabitService } from '../services/habit.service.js';

const habitService = new HabitService();

export class HabitController {
    async createHabit(req: Request, res: Response): Promise<void> {
            try {
                const habit = await habitService.createHabit(req.body);
                res.status(201).json(habit);
            } catch (error) {
                res.status(500).json({ error: 'Failed to create Habit record' });
            }
        }
    
        async getHabits(req: Request<{areaId: string}>, res: Response): Promise<void>{

            const areaId = req.params.areaId;
    
            if (!areaId || isNaN(parseInt(areaId))) {
                res.status(400).json({ error: 'Invalid Area ID' });
                return;
            }

            try {
                const Habits = await habitService.getHabitsByAreaId(parseInt(areaId));
                res.status(200).json(Habits);
            } catch (error){
                res.status(500).json({ error: 'Failed to retrieve Habit records' });
            }
        }
    
        async updateHabit(req: Request, res: Response): Promise<void> {
            try {
                const Habit = await habitService.updateHabit(req.body);
                res.status(200).json(Habit);
            } catch (error) {
                res.status(500).json({ error: 'Failed to update Habit record' });
            }
        }
    
        async deleteHabit(req: Request<{id: string}>, res: Response): Promise<void> {
    
            const id = req.params.id;
    
            if (!id || isNaN(parseInt(id))) {
                res.status(400).json({ error: 'Invalid Habit ID' });
                return;
            }
            try {
                await habitService.deleteHabit(parseInt(id));
                res.status(204).send();
            } catch (error) {
                res.status(500).json({ error: 'Failed to delete Habit record' });
            }
        }
}