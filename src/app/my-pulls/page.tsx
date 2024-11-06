import dc from '@/app/assets/images/dc.png';
import marvel from '@/app/assets/images/marvel.png';
import { Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';

export default function Page() {
  return (
    <Flex
      direction="column"
      className="w-full h-screen bg-zinc-100 py-[3.6rem]"
      gap="3"
    >
      <Flex
        className="px-3 py-3 w-full bg-slate-50/30 backdrop-blur-lg fixed border-y-solid border-y-[1px] border-y-zinc-200"
        align="center"
        justify="between"
      >
        <Flex align="end" justify="start" gap="3">
          <Text weight="bold" size="3">
            Publishers:{' '}
          </Text>
          <button className="px-7 py-1 shadow-sm rounded-md bg-zinc-100 hover:bg-zinc-400/5 border-zinc-200 border-[1px] border-solid">
            <Flex width="100%" align="center" justify="start" gap="2">
              <Image alt="dc-logo" width={16} height={16} src={dc} />
              <Text size="2" weight="medium">
                DC
              </Text>
            </Flex>
          </button>
          <button className="px-7 py-1 shadow-sm rounded-md bg-zinc-100 hover:bg-zinc-400/5 border-zinc-200 border-[1px] border-solid">
            <Flex width="100%" align="center" justify="start" gap="2">
              <Image alt="dc-logo" width={16} height={16} src={marvel} />
              <Text size="2" weight="medium">
                Marvel
              </Text>
            </Flex>
          </button>
        </Flex>
      </Flex>
      <Flex className="px-3 py-[5rem]">
        <Text size="8" weight="bold">
          My Pulls
        </Text>
      </Flex>
    </Flex>
  );
}
