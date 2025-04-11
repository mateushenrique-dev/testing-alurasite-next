export async function getCat() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search', {
    cache: 'force-cache'
  });
  const data = await response.json();
  return data[0].url;
}