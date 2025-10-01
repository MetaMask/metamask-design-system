import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type MyButtonProps = {
  onPress?: () => void;
  text: string;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: 'purple',
    alignSelf: 'flex-start',
    borderRadius: 8,
  },
  text: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

const defaultOnPress = () => {
  // Default press handler - no action needed
};

export const MyButton = ({ onPress = defaultOnPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
