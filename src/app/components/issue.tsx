'use client';
import absolute from '@/app/assets/images/a0001_absolute-superman_cover52.jpg';
import type { Issue as DBIssue } from '@prisma/client';
import { Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';

type Props = {
  issue: DBIssue;
};

export default function Issue({ issue }: Props) {
  return (
    <Flex
      direction="column"
      gap="2"
      className="h-[500px] w-full md:w-[13%] lg:w-[13%] md:h-fit lg:h-fit"
    >
      <Image
        src={absolute}
        alt={'this-week-image-cover'}
        width={500}
        height={400}
        className="border-[1px] border-zinc-200 border-solid rounded-md w-full h-full"
      />
      <Flex direction="column" className="cursor-pointer">
        <Text size="2">{issue.name}</Text>
        <Text size="1" color="gray">
          3 hours ago
        </Text>
      </Flex>
    </Flex>
  );
}
