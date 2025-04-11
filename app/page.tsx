/* eslint-disable @next/next/no-img-element */
export default async function Home() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search', {
    cache: 'force-cache'
  });
  const data = await response.json();
  const imageUrl = data[0].url;

  return (
    <img src={imageUrl} alt="" />
  );
}

export const dynamic = 'force-dynamic';