import { Button, Input, Stack } from '@chakra-ui/react';

export const SigninForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // your submit logic here
      }}
    >
      <Stack spacing="4">
        <Input type="password" placeholder="Old Password" />
        <Input type="password" placeholder="New Password" />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Update Password
        </Button>
      </Stack>
    </form>
  );
};
