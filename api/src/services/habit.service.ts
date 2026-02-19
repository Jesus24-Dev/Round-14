import { HabitModel } from "../models/Habit.js";
import {initDatabase} from "../loaders/database.loader.js"

export class HabitService {
    async createHabit(habit: HabitModel): Promise<HabitModel> {
        const query = 'INSERT INTO habits (area_id, title, description, frequency, is_done) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [habit.areaId, habit.title, habit.description, habit.frequency, false]
        const result = await initDatabase.query(query, values);
        return result.rows[0];
    }

    async getHabitsByAreaId(areaId: number): Promise<HabitModel[]> {
        const query = 'SELECT * FROM habits WHERE area_id = $1';
        const values = [areaId];
        const result = await initDatabase.query(query, values);
        return result.rows;
    }

    async updateHabit(habit: HabitModel): Promise<HabitModel> {
        const query = 'UPDATE habits SET title = $1, description = $2, frequency = $3, is_done = $4 WHERE id = $5 RETURNING *';
        const values = [habit.title, habit.description, habit.frequency, habit.isDone, habit.id];
        const result = await initDatabase.query(query, values);
        return result.rows[0];
    }

    async deleteHabit(habitId: number): Promise<void> {
        const query = 'DELETE FROM habits WHERE id = $1';
        const values = [habitId];
        await initDatabase.query(query, values);
    }
}