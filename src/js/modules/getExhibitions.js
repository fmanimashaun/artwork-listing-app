const URL = 'https://api.artic.edu/api/v1/exhibitions?limit=24 ';

const getExhibitions = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
};

export default getExhibitions;