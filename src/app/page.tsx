'use client';
import { DropdownMenu, Flex, Text, Tooltip } from '@radix-ui/themes';
import { ChevronRight, Sliders } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import absolute from './assets/images/a0001_absolute-superman_cover52.jpg';
import dc from './assets/images/dc.png';
import marvel from './assets/images/marvel.png';

export default function Home() {
  // const isExpanded = useObservable(false);

  return (
    <Flex
      direction="column"
      className="w-full h-screen overflow-y-scroll bg-zinc-50/60"
    >
      <Flex className="px-3 py-3" gap="6" direction="column">
        {/* filters */}
        <Flex align="center" justify="start" gap="2">
          <Tooltip content="Filter Comics">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <button className="bg-zinc-100 shadow-sm border-[1px] border-solid border-zinc-200 px-2 py-2 rounded-md text-zinc-600">
                  <Sliders size={13} />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content size="1" variant="soft">
                <DropdownMenu.Item className="cursor-pointer">
                  <Flex align="center" justify="start" gap="2">
                    <Image alt="dc-logo" width={16} height={16} src={dc} />
                    <Text size="1">DC Comics</Text>
                  </Flex>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="cursor-pointer">
                  <Flex align="center" justify="start" gap="2">
                    <Image
                      alt="marvel-logo"
                      width={16}
                      height={16}
                      src={marvel}
                    />
                    <Text size="1">Marvel Comics</Text>
                  </Flex>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Tooltip>
        </Flex>
        {/* new this week */}
        <Flex direction="column" gap="3">
          <Flex align="center" justify="between">
            <Text size="7" weight="bold">
              New This Week
            </Text>
            <Link href="/week">
              <Flex
                align="center"
                className="text-blue-600"
                justify="end"
                gap="2"
              >
                <Text size="2">See More</Text>
                <ChevronRight size={13} />
              </Flex>
            </Link>
          </Flex>
          <Flex className="overflow-x-scroll h-80" gap="3" align="center">
            {new Array(5).fill(0).map((v, idx) => (
              <Flex
                direction="column"
                gap="2"
                key={idx}
                className="h-full w-[14%]"
              >
                <Image
                  src={absolute}
                  alt={`this-week-image-cover-${idx}`}
                  width={500}
                  height={400}
                  className="border-[1px] border-zinc-200 border-solid rounded-md w-full h-full"
                />
                <Flex direction="column" className="cursor-pointer">
                  <Text size="2">Absolute Superman</Text>
                  <Text size="1" color="gray">
                    3 hours ago
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
