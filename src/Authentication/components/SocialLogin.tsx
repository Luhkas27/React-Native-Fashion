import React, { ReactNode } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Box, useTheme } from '../../components';

const Google = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8.355.644C5.468 1.658 2.972 3.842 1.568 6.573 1.1 7.509.71 8.523.553 9.615.007 12.19.397 14.998 1.568 17.34a11.51 11.51 0 003.276 3.979c1.249 1.014 2.73 1.794 4.37 2.184 2.028.546 4.134.546 6.084.078a10.345 10.345 0 004.915-2.574c1.483-1.327 2.497-3.043 3.043-4.993.624-2.029.702-4.213.312-6.32H12.334v4.681h6.475c-.234 1.483-1.17 2.887-2.418 3.667-.78.546-1.717.858-2.653 1.014a8.955 8.955 0 01-2.886 0c-.937-.156-1.873-.624-2.653-1.17-1.248-.858-2.262-2.184-2.73-3.667-.547-1.482-.547-3.12 0-4.68.39-1.015.936-2.029 1.716-2.81a6.288 6.288 0 013.589-1.95c1.17-.234 2.34-.234 3.51.156a7.67 7.67 0 012.575 1.483l2.184-2.185 1.17-1.17C19.121 2.048 17.795 1.19 16.391.644a12.862 12.862 0 00-8.036 0z"
      fill="#fff"
    />
    <Path
      d="M8.355.644c2.575-.859 5.461-.859 8.035.078 1.405.546 2.731 1.326 3.823 2.418l-1.17 1.17-2.184 2.185c-.703-.702-1.639-1.249-2.575-1.483a7.6 7.6 0 00-3.51-.156c-1.327.312-2.575 1.015-3.59 1.95-.78.78-1.404 1.795-1.716 2.81-1.326-1.015-2.574-2.029-3.9-3.043 1.404-2.73 3.9-4.915 6.787-5.93z"
      fill="#EA4335"
    />
    <Path
      d="M.553 9.615a15.48 15.48 0 011.015-3.042c1.326 1.014 2.574 2.028 3.9 3.042-.546 1.483-.546 3.121 0 4.681-1.326 1.014-2.574 2.029-3.9 3.043C.398 14.92.008 12.189.553 9.615z"
      fill="#FBBC05"
    />
    <Path
      d="M12.256 9.693H23.49c.39 2.107.312 4.291-.312 6.32a11.12 11.12 0 01-3.043 4.993c-1.248-1.015-2.496-1.95-3.823-2.965a5.927 5.927 0 002.419-3.667h-6.475v-4.68z"
      fill="#4285F4"
    />
    <Path
      d="M1.568 17.339c1.326-1.014 2.574-2.028 3.9-3.043.468 1.483 1.483 2.809 2.73 3.667.781.546 1.717.936 2.653 1.17a8.957 8.957 0 002.887 0c.936-.156 1.872-.546 2.652-1.014 1.249 1.014 2.497 1.95 3.823 2.965-1.404 1.248-3.042 2.106-4.915 2.574-2.028.468-4.134.468-6.085-.078-1.56-.39-3.042-1.17-4.369-2.184-1.326-1.17-2.496-2.575-3.276-4.057z"
      fill="#34A853"
    />
  </Svg>
);

const Facebook = () => (
  <Svg viewBox="0 0 155.139 155.139" width={22} height={22}>
    <Path
      d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
      fill="#415A93"
    />
  </Svg>
);

const Apple = () => (
  <Svg viewBox="0 0 512 512" width={24} height={24} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M185.255 512c-76.201-.439-139.233-155.991-139.233-235.21 0-129.404 97.075-157.734 134.487-157.734 16.86 0 34.863 6.621 50.742 12.48 11.104 4.087 22.588 8.306 28.975 8.306 3.823 0 12.832-3.589 20.786-6.738 16.963-6.753 38.071-15.146 62.651-15.146h.146c18.354 0 74.004 4.028 107.461 54.272l7.837 11.777-11.279 8.511c-16.113 12.158-45.513 34.336-45.513 78.267 0 52.031 33.296 72.041 49.292 81.665 7.061 4.248 14.37 8.628 14.37 18.208 0 6.255-49.922 140.566-122.417 140.566-17.739 0-30.278-5.332-41.338-10.034-11.191-4.761-20.845-8.862-36.797-8.862-8.086 0-18.311 3.823-29.136 7.881C221.496 505.73 204.752 512 185.753 512h-.498zM351.343 0c1.888 68.076-46.797 115.304-95.425 112.342C247.905 58.015 304.54 0 351.343 0z"
      fill="#000000"
    />
  </Svg>
);

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
