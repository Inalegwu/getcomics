'use client';
import { authClient } from '@/lib/auth-client';
import { Button, Flex, Text, TextField } from '@radix-ui/themes';
import { useState } from 'react';

export default function Page() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signUp = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name: email.split('@')[0],
      },
      {
        onSuccess: (ctx) => {
          console.log('sign up success');
        },
      },
    );
    console.log({ data, error });
  };

  return (
    <Flex className="w-full h-screen px-3" align="center" justify="center">
      <Flex
        direction="column"
        gap="5"
        justify="center"
        className="bg-white w-2/6 h-4/6 rounded-md px-3 py-3 border-zinc-200/40 border-solid border-[1px]"
      >
        <Flex direction="column">
          <Text weight="bold" size="5">
            Sign Up
          </Text>
          <Text weight="medium" size="3" color="gray">
            to start enjoy digital comics at your finger tips
          </Text>
        </Flex>
        <Flex
          gap="5"
          flexGrow="1"
          width="100%"
          direction="column"
          align="start"
        >
          <Flex gap="1" direction="column" width="100%">
            <Text size="2" color="gray">
              Email
            </Text>
            <TextField.Root
              onChange={(e) => setEmail(e.currentTarget.value)}
              size="3"
              className="w-full"
            />
          </Flex>
          <Flex gap="1" direction="column" width="100%">
            <Text size="2" color="gray">
              Password
            </Text>
            <TextField.Root
              onChange={(e) => setPassword(e.currentTarget.value)}
              type="password"
              size="3"
              className="w-full"
            />
          </Flex>
          <Button
            onClick={signUp}
            className="w-full cursor-pointer"
            variant="surface"
            size="3"
          >
            <Flex align="center" justify="center">
              <Text>Create Account</Text>
            </Flex>
          </Button>
        </Flex>
        <div className="w-full p-[.5px] bg-zinc-300 rounded-full" />
        <Flex
          flexGrow="1"
          gap="3"
          direction="column"
          align="center"
          justify="center"
        >
          <Text>Or</Text>
          <Flex align="center" justify="center" gap="4" width="100%">
            <button className="px-4 py-2.5 bg-zinc-50 rounded-full border-[1px] border-zinc-100 border-solid">
              G
            </button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
