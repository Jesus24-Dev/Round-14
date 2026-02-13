import {useState, useEffect} from 'react'
import { type Areas } from '../types/Areas'
import { getAreas } from '../api/getAreas'

export const useAreas = () => {
    const [data, setData] = useState<Areas | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            getAreas().then(retrievedData => {
                setData({ cards: retrievedData.areas});
                setIsLoading(false);
            })
        }, 0); 

        return () => clearTimeout(timer);
    }, []);

    return { data, isLoading };
};