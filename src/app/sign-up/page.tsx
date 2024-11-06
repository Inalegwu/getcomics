import { Flex, Text, TextField } from '@radix-ui/themes';
import { User } from 'lucide-react';

export default function Page() {
  return (
    <Flex className="w-full h-screen px-3" align="center" justify="center">
      <Flex
        direction="column"
        gap="3"
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
          flexGrow="1"
          width="100%"
          direction="column"
          align="start"
          justify="center"
        >
          <TextField.Root size="2" className="w-full" placeholder="Username">
            <TextField.Slot>
              <User size={14} />
            </TextField.Slot>
          </TextField.Root>
        </Flex>
      </Flex>
    </Flex>
  );
}
