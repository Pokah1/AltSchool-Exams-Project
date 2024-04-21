const BASE_URL = 'https://api.github.com';

 const fetchRepo = async (page = 1, perPage = 10) => {
    try {
        const response  = await fetch(`${BASE_URL}/users/Pokah1/repos?page=${page}&per_page=${perPage}`);
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching repositories:', error);
         throw error
    }
};
export default fetchRepo;