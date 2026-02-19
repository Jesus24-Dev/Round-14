import {useEffect, useState} from "react";
import { type WeightCardProps } from "../../../components/WeightCard";
import { getWeights } from "../api/getWeights";

export function useWeights(){
    const [weights, setWeights] = useState<WeightCardProps[]>([]);

    useEffect(() => {
        const fetchWeights = async () => {
            try {
                const data = await getWeights();
                setWeights(data);
            } catch (error) {
                console.error("Error fetching weights:", error);
            }
        };

        fetchWeights();
    }, []);

    return {weights};
}