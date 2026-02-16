import { createContext } from "react";

interface PageContextType {
    page: string;
    updatePage: (newPage: string) => void;
}

export const PageContext = createContext<PageContextType | undefined>(undefined)