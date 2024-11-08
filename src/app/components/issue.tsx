'use client';
import { formatDate } from '@/lib/functions';
import type { Issue as DBIssue } from '@prisma/client';
import { Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  issue: DBIssue;
};

export default function Issue({ issue }: Props) {
  return (
    <Flex
      direction="column"
      gap="2"
      className="h-full w-full md:w-[13%] lg:w-[13%] md:h-fit lg:h-fit"
    >
      <Image
        src={issue.thumbnailUrl}
        alt={'this-week-image-cover'}
        width={500}
        height={400}
        className="border-[1px] border-zinc-200 border-solid rounded-md w-full h-full"
      />
      <Link href={`/issue/${issue.id}`}>
        <Flex direction="column">
          <Text size="2">{issue.name}</Text>
          <Text size="1" color="gray">
            {formatDate(issue.dateReleased)}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
