import { Flex } from '@radix-ui/themes';

export default async function Page({
  params,
}: { params: Promise<{ issueSlug: string }> }) {
  const slug = (await params).issueSlug;

  console.log(slug);

  return <Flex className="w-full h-screen py-[4rem]">{slug}</Flex>;
}
