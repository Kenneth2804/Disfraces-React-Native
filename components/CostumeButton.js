import React from 'react';
import { Button, StyleSheet } from 'react-native';

const CostumeButton = ({ onPress }) => {
  return (
    <Button title="Get Random Costume" onPress={onPress} style={styles.button} />
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});

export default CostumeButton;
