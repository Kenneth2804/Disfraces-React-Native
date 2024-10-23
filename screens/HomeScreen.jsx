import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Button, Image } from 'react-native';
import { getRandomCostume } from '../services/costumeService';

const HomeScreen = () =>{
  const [costume, setCostume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePress = async () =>{
    setLoading(true);
    setError(null);
    try {
      const newCostume = await getRandomCostume();
      setCostume(newCostume);
    } catch (err) {
      setError('Failed to load costume');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#6200EE" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {costume ? (
        <View style={styles.costumeContainer}>
          <Text style={styles.costumeName}>{costume.name}</Text>
          <Text>{costume.description}</Text>
          {costume.image ? (
            <Image source={{ uri: costume.image }} style={styles.costumeImage} />
          ) : (
            <Text>No image available</Text>
          )}
        </View>
      ) : (
        <Text>No costume selected yet</Text>
      )}
      <Button title="Get Random Costume" onPress={handlePress} />
    
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
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


export default HomeScreen;