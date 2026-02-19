export const getHabits = async (areaId: string) => {
    try {
        const response = await fetch(`http://localhost:3000/api/habits/${areaId}`);
         if (response.ok) {
         const data = await response.json();
                return data;
            }
        return await response.json();
    } catch (error) {
        console.error('Error fetching habits:', error);
        throw error;
    }
}
