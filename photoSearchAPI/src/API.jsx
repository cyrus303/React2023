import axios from 'axios';

const APIKEY = '-5esPmms54ySrBHCnsgWhPyzxsa9UAFSiJD5KKPWYoU';
const URL = 'https://api.unsplash.com/search/photos';

const searchImages = async () => {
  const response = await axios.get(URL, {
    headers: {
      Authorization: `Client-ID ${APIKEY}`,
    },
    params: {
      query: 'cars',
    },
  });

  console.log(response);
  return response;
};

export default searchImages;
