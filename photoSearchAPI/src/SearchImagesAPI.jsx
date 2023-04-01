import axios from 'axios';

const APIKEY = '-5esPmms54ySrBHCnsgWhPyzxsa9UAFSiJD5KKPWYoU';
const URL = 'https://api.unsplash.com/search/photos';

const SearchImagesAPI = async (searchTerm) => {
  const response = await axios.get(URL, {
    headers: {
      Authorization: `Client-ID ${APIKEY}`,
    },
    params: {
      query: searchTerm,
    },
  });

  return response.data.results;
};

export default SearchImagesAPI;
