import { auth } from '@/lib/auth';
import { DropdownMenu, Flex, Text } from '@radix-ui/themes';
import { Key, Lock, User } from 'lucide-react';
import { headers } from 'next/headers';
import Link from 'next/link';

export default async function UserButton() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="px-2.5 shadow-sm py-2.5 rounded-md bg-zinc-100 border-zinc-200 border-[1px] border-solid">
          <User size={12} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="1" variant="soft">
        {session === null ? (
          <>
            <DropdownMenu.Item>
              <Link href="/sign-up">
                <Flex align="center" width="100%" justify="between" gap="2">
                  <Key size={11} />
                  <Text>Sign Up</Text>
                </Flex>
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/log-in">
                <Flex align="center" width="100%" justify="between" gap="2">
                  <Lock size={11} />
                  <Text>Log in</Text>
                </Flex>
              </Link>
            </DropdownMenu.Item>
          </>
        ) : (
          <></>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
