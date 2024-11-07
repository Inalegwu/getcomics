'use client';
import google from '@/app/assets/images/google.png';
import { authClient } from '@/lib/auth-client';
import { Button, Flex, Text, TextField } from '@radix-ui/themes';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

type SignupError = {
  field: 'email' | 'password';
  message: string;
};

export default function Page() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async () =>
    await authClient.signUp.email(
      {
        email,
        password,
        name: email.split('@')[0],
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: (ctx) => {
          setIsLoading(false);
          console.log('sign up success');
        },
        onError: (ctx) => {
          setIsLoading(false);
          toast.error(ctx.error.message || ctx.error.statusText);
        },
      },
    );

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
            loading={isLoading}
            onClick={signUp}
            className="w-full cursor-pointer"
            variant="surface"
            size="3"
            type="submit"
          >
            <Flex align="center" justify="center">
              <Text>Create Account</Text>
            </Flex>
          </Button>
        </Flex>
        <div className="w-full p-[.5px] bg-zinc-100 rounded-full" />
        <Flex
          flexGrow="1"
          gap="3"
          direction="column"
          align="center"
          justify="center"
        >
          <Flex align="center" justify="center" gap="4" width="100%">
            <button className="px-2.5 py-2.5 bg-zinc-50 rounded-full border-[1px] border-zinc-100 border-solid">
              <Image alt="google_logo" src={google} width={20} height={20} />
            </button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
