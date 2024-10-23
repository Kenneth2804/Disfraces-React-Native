const API_KEY = '4eo8ogM1bTnHFflAziDwec0JiJaFSh1eBKe8dbEiYPH7ZWI80JiBhxzL'; 


export const getCostumes = async () => {

try {
    
const response = await fetch(`https://api.pexels.com/v1/search?query=halloween%20costume`, {
    headers: {
        Authorization: API_KEY,
      },
    });
    const data = await response.json();
    return data.photos.map(photo => ({
        name: 'Halloween Costume',
        image: photo.src.original,
        description: 'A random Halloween costume image.',
      }));
} catch (error) {
    console.error('Error fetching costumes:', error);
    return [];
}
}

export const getRandomCostume = async () => {
    const costumes = await getCostumes();
    if (costumes.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * costumes.length);
    return costumes[randomIndex];
  };