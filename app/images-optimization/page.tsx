/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function ImagesOptimization() {
  return (
    <div>
      <Image src="/cat.jpg" width={200} height={200} alt="" />
      <img src="/cat.jpg" alt="" />
    </div>
  );
}