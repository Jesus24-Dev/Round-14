import express from 'express';
import cors from 'cors';
import { initDatabase } from './loaders/database.loader.js';
import habitRoutes from "./routes/habit.routes.js";
import weightRoutes from "./routes/weight.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/habits', habitRoutes);
app.use('/api/weights', weightRoutes);

app.listen(PORT, async () => {
    await initDatabase.connect(() => {
        console.log('connected to database.')
    })
    console.log(`Server running on port ${PORT}`)
})