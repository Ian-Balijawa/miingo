import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue as mode
} from '@chakra-ui/react';

import { DividerWithText } from './DividerWithText';
import { FaGoogle } from 'react-icons/fa';

export const SignupForm = () => {
  return (
    <Box minH="100vh" bg={{ md: mode('gray.100', 'inherit') }}>
      <Box
        maxW="6xl"
        mx="auto"
        py={{ base: '10', md: '20' }}
        px={{ base: '4', md: '10' }}
      >
        <Box w="full" maxW="xl" mx="auto">
          <Box
            bg={{ md: mode('white', 'gray.700') }}
            rounded={{ md: '2xl' }}
            p={{ base: '4', md: '12' }}
            borderWidth={{ md: '1px' }}
            borderColor={mode('gray.200', 'transparent')}
            shadow={{ md: 'lg' }}
          >
            <Heading textAlign="center" mb="8" size="lg" fontWeight="extrabold">
              Sign up for an account
            </Heading>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // your submit logic here
              }}
            >
              <Stack spacing="4">
                <Input type="text" autoComplete="name" placeholder="Name" />
                <Input type="email" autoComplete="email" placeholder="Email" />
                <Input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                >
                  Sign up
                </Button>
                <DividerWithText>or</DividerWithText>

                <Stack spacing="4">
                  <Button
                    variant="outline"
                    leftIcon={<Box as={FaGoogle} color="red.500" />}
                    disabled
                  >
                    Sign up with Google
                  </Button>
                </Stack>
                <Text mt="8" align="center" fontWeight="medium">
                  Already have an account?{' '}
                  <Box
                    as="a"
                    href="/login"
                    color={mode('blue.600', 'blue.200')}
                    display={{ base: 'block', md: 'inline-block' }}
                  >
                    Sign in
                  </Box>
                </Text>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
