/* eslint-disable import/no-anonymous-default-export */
import { Spinner, Stack } from '@chakra-ui/react';
export default () => {
  return (
    <Stack
      w={'100vw'}
      h={'100vh'}
      direction="column"
      justify={'center'}
      align="center"
    >
      <Spinner size="xl" />;
    </Stack>
  );
};
