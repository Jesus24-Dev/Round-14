import {useState, useEffect} from 'react'
import { type Areas } from '../types/Areas'
import { areas as areasAPI } from '../api/getAreas'

export const useAreas = () => {
    const [data, setData] = useState<Areas | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setData({ cards: areasAPI });
            setIsLoading(false);
        }, 0); 

        return () => clearTimeout(timer);
    }, []);

    return { data, isLoading };
};