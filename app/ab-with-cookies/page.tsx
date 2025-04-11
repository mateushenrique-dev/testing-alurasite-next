/* eslint-disable @next/next/no-img-element */
import { cookies } from 'next/headers';
import { getCat } from '../getCat';

export default async function AbWithCookies() {

  const cookieStore = await cookies();
  const abTestCookie = cookieStore.get('ab_test_cookie');

  const cat = await getCat();

  return (
    <div>
      <h1>Página {abTestCookie?.value}</h1>
      <img src={cat} alt="" />
    </div>
  )
}