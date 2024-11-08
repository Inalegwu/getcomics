import cowboy from '@/app/assets/images/381166574_11479456.png';
import image from '@/app/assets/images/cdnlogo.com_image-comics.svg';
import dc from '@/app/assets/images/dc.png';
import marvel from '@/app/assets/images/marvel.png';
import db from '@/lib/db';
import { isDateInCurrentWeek } from '@/lib/functions';
import { DropdownMenu, Flex, Text, Tooltip } from '@radix-ui/themes';
import { ChevronsDown, Sliders } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Issue, SectionList } from './components';

export default async function Home() {
  const issues = await db.issue.findMany();

  const newThisWeek = issues.filter(
    (issue) => !isDateInCurrentWeek(issue.dateReleased),
  );

  return (
    <Flex
      direction="column"
      className="w-full h-screen overflow-y-scroll bg-zinc-50/60"
    >
      <Flex gap="6" direction="column">
        {/* filters */}
        <Flex
          align="center"
          className="fixed w-full px-3 py-3 mt-[3.5rem] backdrop-blur-lg bg-slate-50/30 border-y-solid border-y-[1px] border-y-zinc-200"
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
                  <Link href="/categories/dc">
                    <Flex align="center" justify="start" gap="2">
                      <Image alt="dc-logo" width={16} height={16} src={dc} />
                      <Text size="1">DC Comics</Text>
                    </Flex>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="cursor-pointer">
                  <Link href="/categories/marvel">
                    <Flex align="center" justify="start" gap="2">
                      <Image
                        alt="marvel-logo"
                        width={16}
                        height={16}
                        src={marvel}
                      />
                      <Text size="1">Marvel Comics</Text>
                    </Flex>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="cursor-pointer">
                  <Link href="/categories/image">
                    <Flex align="center" justify="start" gap="2">
                      <Image
                        alt="image-logo"
                        width={16}
                        height={16}
                        src={image}
                      />
                      <Text size="1">Image Comics</Text>
                    </Flex>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="cursor-pointer">
                  <Link href="/categories/indie">
                    <Flex align="center" justify="start" gap="2">
                      <Image
                        alt="indie-logo"
                        width={20}
                        height={20}
                        src={cowboy}
                      />
                      <Text size="1">Indie +</Text>
                    </Flex>
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Tooltip>
          {/* <Tooltip content="Sort">
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
          </Tooltip> */}
          <Tooltip content="My Pulls">
            <button className="bg-zinc-100 shadow-sm border-[1px] border-solid border-zinc-200 px-2 py-2 rounded-md text-zinc-600">
              <Link href="/my-pulls">
                <ChevronsDown size={13} />
              </Link>
            </button>
          </Tooltip>
        </Flex>
        <Flex direction="column" className="px-3 py-[8rem]">
          {/* new this week */}
          {/* <Flex direction="column" gap="3">
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
              {newThisWeek.map((issue) => (
                <Issue key={issue.id} issue={issue} />
              ))}
            </Flex>
          </Flex> */}
          <SectionList
            title="New This Week"
            path="/this-week"
            data={newThisWeek}
            renderItem={(item) => <Issue key={item.id} issue={item} />}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
