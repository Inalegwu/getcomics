'use client';
import absolute from '@/app/assets/images/a0001_absolute-superman_cover52.jpg';
import dc from '@/app/assets/images/dc.png';
import marvel from '@/app/assets/images/marvel.png';
import { DropdownMenu, Flex, Text, Tooltip } from '@radix-ui/themes';
import { ArrowDownAZ, ChevronRight, ChevronsDown, Sliders } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Flex
      direction="column"
      className="w-full h-screen overflow-y-scroll bg-zinc-50/60"
    >
      <Flex gap="6" direction="column">
        {/* filters */}
        <Flex
          align="center"
          className="fixed w-full px-3 py-3 mt-[.6rem] backdrop-blur-lg bg-slate-50/30 border-y-solid border-y-[1px] border-y-zinc-200"
          justify="start"
          gap="2"
        >
          <Tooltip content="Publishers">
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
          <Tooltip content="Sort">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <button className="bg-zinc-100 shadow-sm border-[1px] border-solid border-zinc-200 px-2 py-2 rounded-md text-zinc-600">
                  <ArrowDownAZ size={13} />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content size="1" variant="soft">
                todo
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Tooltip>
          <Tooltip content="My Pulls">
            <button className="bg-zinc-100 shadow-sm border-[1px] border-solid border-zinc-200 px-2 py-2 rounded-md text-zinc-600">
              <Link href="/my-pulls">
                <ChevronsDown size={13} />
              </Link>
            </button>
          </Tooltip>
        </Flex>
        {/* new this week */}
        <Flex direction="column" className="px-3 py-[7rem]">
          <Flex direction="column" gap="3">
            <Flex align="center" justify="between">
              <Text size="7" weight="bold">
                New This Week
              </Text>
              <Link href="/week">
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
              {new Array(5).fill(0).map((v, idx) => (
                <Flex
                  direction="column"
                  gap="2"
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={idx}
                  className="h-[500px] w-full md:w-[14%] lg:w-[14%] md:h-full lg:h-full"
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
    </Flex>
  );
}
