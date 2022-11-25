import {
  Box,
  Button,
  Heading,
  Select,
  Spinner,
  Stack,
  Text,
  useColorModeValue as mode
} from '@chakra-ui/react';

import { DividerWithText } from './DividerWithText';
import { FaGoogle } from 'react-icons/fa';
import Input from '../Input';
import axios from '../../services/axios-config';
import { register } from '../../app/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log('DATA: ', {
    email,
    name,
    password,
    gender: selectedGender
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post('/auth/signup', {
        name,
        email,
        password,
        gender: selectedGender
      });
      dispatch(register(data));
      setIsLoading(false);
      console.log('RES: ', data);
      navigate('/feed');
    } catch (err) {
      setError(err.response.data.message);
      setIsLoading(false);
    }
  };

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
            <form onSubmit={handleSignup}>
              <Stack spacing="4">
                <Input
                  type="text"
                  autoComplete="name"
                  name="name"
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                  placeholder="Name"
                />
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
                <Input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
                {error && (
                  <Text color="red.500" fontSize="sm">
                    {error}
                  </Text>
                )}
                <Select
                  placeholder="Select Gender"
                  onChange={setSelectedGender}
                  value={selectedGender}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
                <Input
                  type="date"
                  // placeholder="Password"
                  name="dateOfBirth"
                  value={dateOfBirth}
                  onChange={({ target }) => setDateOfBirth(target.value)}
                />
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                >
                  {isLoading ? <Spinner size="sm" color="white" /> : 'Sign up'}
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
