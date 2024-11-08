import dc from '@/app/assets/images/dc.png';
import { Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';

export default async function Page({
  params,
}: { params: Promise<{ cat: string }> }) {
  const _category = (await params).cat;
  const category = () => {
    switch (_category) {
      case 'dc': {
        return 'DC';
      }
      case 'marvel': {
        return 'MARVEL';
      }
      case 'image': {
        return 'IMAGE';
      }
      case 'indie': {
        return 'INDIE';
      }
      default: {
        return "YOU SHOULDN'T BE HERE";
      }
    }
  };

  return (
    <Flex
      direction="column"
      gap="4"
      className="px-3 py-[4.5rem] w-full h-screen"
    >
      <Flex align="center" justify="start" gap="2">
        <Image alt="category-logo" src={dc} width={23} height={23} />
        <Text size="7" weight="bold">
          You're looking at {category().toLocaleUpperCase()} Comics
        </Text>
      </Flex>
      <Flex
        className="w-full h-full"
        align="center"
        justify="start"
        gap="2"
        wrap="wrap"
      ></Flex>
    </Flex>
  );
}
