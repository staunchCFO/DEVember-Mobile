import { View, Text } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';
import apartments from '../../../assets/data/day5/apartments.json'

type Apartment = (typeof apartments)[0];

type ApartmentTypes = {
  apartment: Apartment,
  onPress: () => void
};

const CustomMarker = ({ apartment, onPress }: ApartmentTypes) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 20,
        }}
      >
        <Text style={{ fontFamily: 'Inter' }}>$ {apartment.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;