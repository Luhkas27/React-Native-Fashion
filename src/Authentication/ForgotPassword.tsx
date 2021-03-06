import React from 'react';
import { Linking } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { StackNavigationProps, Routes } from '../components/Navigation';
import { Container, Button, Text, Box } from '../components';
import Footer from './components/Footer';
import TextInput from './components/Form/TextInput';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<Routes, 'ForgotPassword'>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: ForgotPasswordSchema,
    initialValues: { email: '' },
    onSubmit: (values) => console.log(values),
  });

  const footer = (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => Linking.openURL('mailto:help@support.com')}
    />
  );

  return (
    <Container {...{ footer }}>
      <Box padding="xl" justifyContent="center" flex={1}>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>

        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>

          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Reset password"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
