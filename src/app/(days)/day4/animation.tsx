import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Animation = () => {
    const animation = React.useRef<LottieView>(null)
  return (
    <View>
      <LottieView 
        ref={animation}
        style={{
            width: 200,
            height: 200,
            backgroundColor: '#eee',
        }}
        source={require('../../../../assets/lottie/netflix.json')}
      />

      <View style={styles.btnContainer}>
        <Button title='Play' onPress={() => animation.current?.play()} />
        <Button title='Pause' onPress={() => animation.current?.pause()} />
        <Button title='Reset' onPress={() => animation.current?.reset ()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    btn: {
        flex: 1
    }
})

export default Animation