import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Stack } from 'expo-router';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import apartments from '../../../../assets/data/day5/apartments.json' 
import CustomMarker from '../../../components/day5/CustomMarker';
import ApartmentListItem from '../../../components/day5/ApartmentListItem';

type Apartment = (typeof apartments)[0];

const AirbnbScreen = () => {
  const [selectedApartment, setSelectedApartment] = React.useState<Apartment | null>(
    null
  );
  const [mapRegion, setMapRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const snapPoints = React.useMemo(() => [80, '50%', '90%'], []);

  const removeSelectedPlace = () => {
    setSelectedApartment(null)
    // if ( selectedApartment ) {
    //   const filter = apartments.filter((data) => data.id !== selectedApartment.id);
    //   console.log(filter)
    //   return filter
    // };
  };

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView 
        style={styles.map }
        region={mapRegion}
        provider={PROVIDER_GOOGLE}
      >
        {apartments.map((apartment) => (
          <CustomMarker
            key={apartment.id}
            apartment={apartment}
            onPress={() => setSelectedApartment(apartment)}
          />
        ))}
      </MapView>  
      {/* Display selected apartment */}
      {selectedApartment && (
        <ApartmentListItem 
          apartment={selectedApartment}
          containerStyle={styles.selectedContainer}
          close={true}
          removeItem={removeSelectedPlace}
        />
      )}

      <BottomSheet index={0} snapPoints={snapPoints}>
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Over {apartments.length} places</Text>
          <BottomSheetFlatList
            data={apartments}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => <ApartmentListItem apartment={item} />}
          />
        </View>
      </BottomSheet>
    </View>
  )
};

const styles = StyleSheet.create({
  map: {
      width: '100%',
      height: '100%'
  },
  listTitle: {
    textAlign: 'center',
    fontFamily: 'InterSemi',
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 22,
  },
  selectedContainer: {
    position: 'absolute',
    bottom: 100,
    right: 10,
    left: 10,
  }, 
})

export default AirbnbScreen