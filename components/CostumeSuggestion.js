import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const CostumeSuggestion = ({ costume }) =>{
  if (!costume) return null;

  return (
    <View style={styles.costumeContainer}>
      <Text style={styles.costumeName}>{costume.name}</Text>
      <Text>{costume.description}</Text>
      <Image source={{ uri: costume.image }} style={styles.costumeImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  costumeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  costumeImage: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  costumeName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default CostumeSuggestion;