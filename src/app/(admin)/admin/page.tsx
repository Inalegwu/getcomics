import db from '@/lib/db';
import { Flex, Text } from '@radix-ui/themes';

export default async function Page() {
  const issues = await db.issue.findMany();
  const collections = await db.collection.findMany();

  return (
    <Flex className="w-full h-full px-5 py-5" direction="column">
      {/* issues and collections overview */}
      <Flex gap="3" align="center">
        <Flex
          className="w-[500px] px-3 py-3 bg-gradient-to-br from-zinc-300 to-zinc-200 overflow-hidden relative h-[300px] rounded-md bg-zinc-100 border-zinc-200 border-solid border-[1px]"
          direction="column"
          align="end"
          justify="end"
        >
          <Text size="3">{issues.length}</Text>
          <Text size="2" color="gray">
            Total Issues
          </Text>
        </Flex>
        <Flex
          className="w-[500px] px-3 py-3 bg-gradient-to-br from-zinc-300 to-zinc-200 overflow-hidden relative h-[300px] rounded-md bg-zinc-100 border-zinc-200 border-solid border-[1px]"
          direction="column"
          align="end"
          justify="end"
        >
          <Text size="3">{collections.length}</Text>
          <Text size="2" color="gray">
            Total Collections
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
