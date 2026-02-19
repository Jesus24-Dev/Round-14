export class WeightModel {
    id?: string;
    date: string;
    weight: number;
    hoursOfSleep: number;
    energy: number;
    waterIntake: number;

    constructor(id: string, date: string, weight: number, hoursOfSleep: number, energy: number, waterIntake: number){
        this.id = id;
        this.date = date;
        this.weight = weight;
        this.hoursOfSleep = hoursOfSleep;
        this.energy = energy;
        this.waterIntake = waterIntake;
    }
}