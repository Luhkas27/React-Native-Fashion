import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from '../../components';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
    flex: 1,
  },
  subtitle: {
    marginBottom: 12,
    color: '#0C0D34',
    textAlign: 'center',
  },
  description: {
    marginBottom: 40,
    color: '#0C0D34',
    textAlign: 'center',
  },
});

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2">{subtitle}</Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        {...{ onPress }}
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
      />
    </View>
  );
};

export default Subslide;
