import React from 'react'
import LottieView from 'lottie-react-native'
import AnimatedSplashScreen from '../../../components/day4/AnimatedSplashScreen'

const AnimationScreen = () => {
  const animation = React.useRef<LottieView>(null);

  return <AnimatedSplashScreen />;
};

export default AnimationScreen;