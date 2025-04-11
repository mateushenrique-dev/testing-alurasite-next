/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function ImagesOptimization() {
  return (
    <div>
      <Image src="/cat.jpg" width={500} height={375} alt="" />
      <img src="/cat.jpg" alt="" />
    </div>
  );
}