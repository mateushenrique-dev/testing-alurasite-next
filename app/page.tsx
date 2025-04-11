import { getCat } from './getCat';

/* eslint-disable @next/next/no-img-element */
export default async function Home() {
  const cat = await getCat();

  return (
    <img src={cat} alt="" />
  );
}

export const dynamic = 'force-dynamic';