export const getWeights = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/weights");
         if (response.ok) {
         const data = await response.json();
                return data;
            }
        } catch (error) {
            console.error("Error fetching weights:", error);
        }
    }