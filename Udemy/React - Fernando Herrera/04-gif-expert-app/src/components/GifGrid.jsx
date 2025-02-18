const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=4SxgvKArB2ZWSyMAzQtbFd8nA0U290kV&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  // console.log(data);

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};

export const GifGrid = ({ category }) => {
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
