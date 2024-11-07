import { Banner, SearchButton, UserButton } from '@/app/components';
import {
  Button,
  Dialog,
  Flex,
  Link,
  Text,
  Theme,
  Tooltip,
} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { DownloadCloud, Megaphone } from 'lucide-react';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import local from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata: Metadata = {
  title: 'Get Comics',
  description: 'All Your Favourite Comics Digitally Available',
};

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});
const virus = local({
  src: './assets/fonts/virus.ttf',
  variable: '--font-virus',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${virus.variable} antialiased bg-zinc-50/60`}
      >
        <Theme accentColor="gray" className="font-bricolage outline-none">
          {/* page header */}
          <Banner />
          <Flex
            className="px-3 py-3 bg-white fixed top-0 left-0 w-full border-b-solid border-b-[1px] border-b-zinc-200"
            align="center"
            justify="between"
          >
            <Flex gap="4" align="center">
              <Link href="/">
                <Text size="7" className="font-virus text-blue-500">
                  GetComics
                </Text>
              </Link>
              <SearchButton />
            </Flex>
            <Flex align="center" justify="end" gap="2">
              <Tooltip content="Get Vision">
                <Dialog.Root>
                  <Dialog.Trigger>
                    <button className="bg-zinc-100 shadow-sm border-[1px] border-solid border-zinc-200 px-2.5 py-2.5 rounded-md text-zinc-600">
                      <DownloadCloud size={12} />
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <Dialog.Title size="7">Get Vision</Dialog.Title>
                    <Flex direction="column" gap="4">
                      <Text size="4">
                        Download Vision Comic Reader to read your comics on your
                        device and offline
                      </Text>
                      <Button
                        className="cursor-pointer"
                        size="2"
                        variant="surface"
                      >
                        <Flex align="center" justify="center" gap="2">
                          <Text>Download</Text>
                          <DownloadCloud size={13} />
                        </Flex>
                      </Button>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>
              </Tooltip>
              <Tooltip content="News & Info">
                <Link
                  href="/news-info"
                  className="bg-zinc-100 relative shadow-sm border-[1px] border-solid border-zinc-200 px-2.5 py-2.5 rounded-md text-zinc-600"
                >
                  <div className="absolute z-10 -right-1 -top-[5px] bg-red-600 p-[5px] rounded-full" />
                  <Megaphone size={12} />
                </Link>
              </Tooltip>
              <UserButton />
            </Flex>
          </Flex>
          <Flex className="bg-zinc-50/60">{children}</Flex>
          <Toaster position="bottom-center" />
        </Theme>
      </body>
    </html>
  );
}
