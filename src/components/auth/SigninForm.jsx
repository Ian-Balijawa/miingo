import {
  Box,
  Button,
  Heading,
  Spinner,
  Stack,
  Text,
  useColorModeValue as mode
} from '@chakra-ui/react';

import { DividerWithText } from './DividerWithText';
import { FaGoogle } from 'react-icons/fa';
import Input from '../Input';
import axios from '../../services/axios-config';
import { signin } from '../../app/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post('/auth/signin', {
        email,
        password
      });

      console.log('RES: ', data);
      dispatch(signin(data));
      setIsLoading(false);

      delete data.user.accessToken;

      navigate('/feed');
    } catch (err) {
      setError(err.response.data.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      minH="100vh"
      css={{ backgroundImage: `url("/social.png")`, backgroundSize: 'cover' }}
    >
      <Box
        maxW="md"
        mx="auto"
        py={{ base: '10', md: '20' }}
        px={{ base: '4', md: '10' }}
      >
        <Box w="full" maxW="6xl" mx="auto">
          <Box
            bg={mode('white', 'gray.700')}
            p={{ base: '4', md: '12' }}
            borderWidth={{ md: '1px' }}
            borderColor={mode('gray.200', 'transparent')}
            shadow={{ md: 'lg' }}
          >
            <Heading textAlign="center" mb="8" size="lg" fontWeight="extrabold">
              Sign In
            </Heading>
            <form onSubmit={handleSignin}>
              <Stack spacing="4">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <Text color="red.500" fontSize="sm">
                    {error}
                  </Text>
                )}
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                >
                  {isLoading ? <Spinner size="md" color="white" /> : 'Sign in'}
                </Button>
                <DividerWithText>or</DividerWithText>
                <Stack spacing="4">
                  <Button
                    variant="outline"
                    leftIcon={<Box as={FaGoogle} color="red.500" />}
                    disabled
                  >
                    Sign in with Google
                  </Button>
                </Stack>
                <Text mt="8" align="center" fontWeight="medium">
                  Don't have an account?{' '}
                  <Box
                    as="a"
                    href="/register"
                    color={mode('blue.600', 'blue.200')}
                    display={{ base: 'block', md: 'inline-block' }}
                  >
                    Sign up
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
