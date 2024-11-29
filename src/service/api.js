const API_URL = import.meta.env.VITE_API_URL;

export const getData = async () => {
    try {
      const response = await fetch(`${API_URL}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };