import React from 'react';
import { Box, Text, useTheme } from '../../components/Theme';
import { Image, Dimensions } from 'react-native';
import { Button } from '../../components';
import { StackNavigationProps, Routes } from '../../components/Navigation';

const { width } = Dimensions.get('window');

const picture = {
  src: require('../../../assets/5.png'),
  width: 3383,
  height: 5074,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, 'Welcome'>) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          source={picture.src}
          style={{
            marginTop: 120,
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>

      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Box
            backgroundColor="white"
            borderTopLeftRadius="xl"
            justifyContent="space-evenly"
            alignItems="center"
            flex={1}
            padding="xl"
          >
            <Text variant="title2">Let's get started</Text>
            <Text variant="body" textAlign="center">
              Login to your account below or signup for an amazing experience
            </Text>
            <Button
              variant="primary"
              label="Have an account? Login"
              onPress={() => navigation.navigate('Login')}
            />
            <Button label="Join us, it's Free" />
            <Button variant="transparent" label="Forgot Password?" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
