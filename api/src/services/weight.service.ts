import { WeightModel } from "../models/Weight.js";
import { initDatabase } from "../loaders/database.loader.js";

export class WeightService {
    async createWeight(weight: WeightModel): Promise<WeightModel> {
        const query = 'INSERT INTO weights (date_registered, weight, hours_of_sleep, energy, water_intake) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [weight.date, weight.weight, weight.hoursOfSleep, weight.energy, weight.waterIntake];
        const result = await initDatabase.query(query, values);
        return result.rows[0];
    }

    async getWeights(): Promise<WeightModel[]> {
        const query = 'SELECT * FROM weights';
        const result = await initDatabase.query(query);
        return result.rows;
    }

    async updateWeight(weight: WeightModel): Promise<WeightModel> {
        const query = 'UPDATE weights SET date_registered = $1, weight = $2, hours_of_sleep = $3, energy = $4, water_intake = $5 WHERE id = $6 RETURNING *';
        const values = [weight.date, weight.weight, weight.hoursOfSleep, weight.energy, weight.waterIntake, weight.id];
        const result = await initDatabase.query(query, values);
        return result.rows[0];
    }

    async deleteWeight(weightId: number): Promise<void> {
        const query = 'DELETE FROM weights WHERE id = $1';
        const values = [weightId];
        await initDatabase.query(query, values);
    }
}