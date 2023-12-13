import { Stack, router } from 'expo-router'
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Pressable, Platform } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler'
import Animated, { 
  FadeIn, 
  FadeOut, 
  SlideInRight, 
  SlideOutLeft
} from 'react-native-reanimated'


const onboardingSteps = [
  {
    title: "Welcome to DEVember",
    description: "Daily React Native tutorial during December",
    icon: "snowflake"
  },
  {
    title: "Learn and grow together",
    description: "Learn by building 24 projects with React Native amd Expo",
    icon: "people-arrows"
  },
  {
    title: "Education for Children",
    description: "Contribute to the fundraiser 'Education for Children' to help the children in providing education",
    icon: "book-reader"
  }
]
const Onboarding = () => {
  const [screenIndex, setScreenIndex] = React.useState(0);
  const data = onboardingSteps[screenIndex];

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  }

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;

    if (isLastScreen) {
      setScreenIndex(0);
      router.back();
    } else {
      setScreenIndex(screenIndex + 1)
    }
  }
  const onBack = () => {
    const isFirstScreen = screenIndex === 0;

    if (isFirstScreen) {
      endOnboarding()
    } else {
      setScreenIndex(screenIndex - 1)
    }
  }

  const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onContinue);

  const swipeFBackward = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(onBack)
  
  const swipes = Gesture.Simultaneous(swipeFBackward, swipeForward)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setScreenIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % onboardingSteps.length;
        if (newIndex === (onboardingSteps.length - 1)) {
          clearInterval(interval);
        }
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false}} />
      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((_, index) => (
          <View style={[ 
              styles.stepIndicator,
              {
                backgroundColor: index === screenIndex ? '#cef202' : 'gray'
              }
            ]} 
            key={index}
          ></View>
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View 
          style={styles.pageContent}
          key={screenIndex}
        >
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
          >
            <FontAwesome5 name={data.icon} size={150} color='#cef202' style={styles.image} />
          </Animated.View>
        
          <View style={styles.footer}>
            <Animated.Text style={styles.title} entering={SlideInRight} exiting={SlideOutLeft}>{data.title}</Animated.Text>
            <Animated.Text style={styles.description} entering={SlideInRight.delay(50)} exiting={SlideOutLeft}>{data.description}</Animated.Text>

            <View style={styles.buttons}>
            <Text style={styles.buttonText} onPress={endOnboarding}>Skip</Text>

            <Pressable style={styles.button} onPress={onContinue}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: '#15141a',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  pageContent: {
    flex: 1, 
    padding: 15,
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    gap: 5,
    marginVertical: Platform.OS === 'android' ? 15 : 0,
    marginHorizontal: 10
  },
  stepIndicator: {
    flex: 1,
    width: 100,
    height: 3,
    backgroundColor: 'gray',
    borderRadius: 10
  },
  image: {
    alignSelf: 'center',
    margin: 20,
    marginTop: 80
  },
  footer: {
    marginTop: 'auto'
  },
  title: {
    fontSize: 50,
    fontFamily: 'Inter',
    letterSpacing: 1.3,
    color: '#fdfdfd',
    marginVertical: 20
  },
  description: {
    fontSize: 20,
    fontFamily: 'InterRegular',
    lineHeight: 28,
    color: 'gray'
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    gap: 20
  },
  button: {
    flex: 1,
    backgroundColor: '#302e38',
    borderRadius: 20,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'InterSemi',
    padding: 15,
    paddingHorizontal: 25,
    color: '#fdfdfd',
  }
})

export default Onboarding