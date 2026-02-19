export class HabitModel {
    id?: number;
    areaId?: number;
    title: string;
    description: string;
    frequency: string;
    isDone: boolean;

    constructor(id: number, areaId: number, title: string, description: string, frequency: string, isDone: boolean){
        this.id = id;
        this.areaId = areaId;
        this.title = title;
        this.description = description;
        this.frequency = frequency;
        this.isDone = isDone;
    }
}