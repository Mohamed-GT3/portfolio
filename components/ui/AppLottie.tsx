'use client';
import dynamic from 'next/dynamic';
import { LottieProps } from 'react-lottie';

const ReactLottie = dynamic(() => import('react-lottie'), {
  ssr: false,
});

const AppLottie = (props: LottieProps) => {
  return <ReactLottie {...props} />;
};

export default AppLottie;
