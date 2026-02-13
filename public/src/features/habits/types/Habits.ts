export interface Habits {
    id?: string,
    areaId: string,
    title: string,
    description: string,
    frequency: string, // TODO: change to enum weekly | daily | monthly
}