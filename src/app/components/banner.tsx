import { observable } from '@legendapp/state';
import { Flex, Text } from '@radix-ui/themes';
import { X } from 'lucide-react';

type BannerStore = {
  message: string | null;
  isVisible: boolean;
};

export const banner$ = observable<BannerStore>({
  message: null,
  isVisible: false,
});

export default function Banner() {
  const banner = banner$.get();

  if (!banner.isVisible) return null;

  return (
    <Flex
      width="100%"
      className="py-2 px-1 bg-indigo-500 text-white"
      align="center"
      justify="center"
      gap="8"
    >
      <Text>{banner.message}</Text>
      <button onClick={() => banner$.isVisible.set(false)}>
        <X size={10} />
      </button>
    </Flex>
  );
}
