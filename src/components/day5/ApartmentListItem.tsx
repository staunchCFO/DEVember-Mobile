import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';
import React from 'react';
import apartments from '../../../assets/data/day5/apartments.json'

type ApartmentListItem = {
  apartment: (typeof apartments)[0];
  containerStyle?: ViewStyle;
  close?: boolean,
  removeItem?: () => void
};

const ApartmentListItem = ({
  apartment,
  containerStyle,
  close = false,
  removeItem
}: ApartmentListItem) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: apartment.image }} style={styles.image} />
      {close && (
        <Text style={styles.close} onPress={removeItem}>X</Text>
      )}
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{apartment.title}</Text>
        <Text style={styles.description}>
          Stay at this apartment for an affordable price
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>$ {apartment.price} night</Text>
          <Text style={styles.price}>
            ★ {apartment.rating} ({apartment.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',

    flexDirection: 'row',
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    width: 150,
    aspectRatio: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  close: {
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: 'white',
    borderRadius: 100,
    paddingHorizontal: 5
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontFamily: 'InterSemi',
    marginBottom: 10,
    fontSize: 16,
  },
  description: {
    color: 'gray',
  },
  price: {
    fontFamily: 'InterSemi',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
});

export default ApartmentListItem;