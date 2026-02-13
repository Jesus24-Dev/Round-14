import { createContext } from "react";

interface HabitContextType {
    areaId: string;
    updateAreaId: (newAreaId: string) => void;
}

export const HabitContext = createContext<HabitContextType | undefined>(undefined)