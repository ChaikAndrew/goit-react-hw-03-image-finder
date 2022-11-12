import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const KEY = '30220761-19f9286ae78f3e4900bbf1b48';

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=10`
  );
  return data;
};
