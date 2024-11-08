import { Flex, Text } from '@radix-ui/themes';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Flatlist } from './atoms';

type Props<T> = {
  title: string;
  path: string;
  data: Array<T>;
  renderItem: (item: T, index: number) => React.ReactNode;
};

export default function SectionList<T extends Record<string, unknown>>({
  title,
  path,
  data,
  renderItem,
}: Props<T>) {
  return (
    <Flex direction="column" gap="3">
      <Flex width="100%" align="center" justify="between">
        <Text size="7" weight="bold">
          {title}
        </Text>
        <Link href={path}>
          <Flex
            align="center"
            className="text-blue-500 hover:underline"
            justify="end"
            gap="1"
          >
            <Text size="2">See More</Text>
            <ChevronRight size={13} />
          </Flex>
        </Link>
      </Flex>
      <Flex
        className="overflow-x-scroll space-y-6 h-full md:space-y-0 lg:space-y-0 md:h-80 lg:h-80 flex flex-wrap items-start w-full md:flex-row lg:flex-row md:items-center lg:items-center md:w-full lg:w-full"
        gap="3"
      >
        <Flatlist scrollbars="horizontal" data={data} renderItem={renderItem} />
      </Flex>
    </Flex>
  );
}
