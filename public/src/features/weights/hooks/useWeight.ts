import { useState, useEffect } from "react";
import { getWeights } from "../api/getWeights";
import { type WeightListProps } from "../types/Weights";

export function useWeight(){ //Add parameter for userID
    const [ weights, setWeights ] = useState<WeightListProps | null>(null);

    useEffect(() => {
        getWeights().then((data) => {
            setWeights({weights: data});
        })
    }, [])

    return {weights}
} 