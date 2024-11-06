import { SearchButton, UserButton } from '@/app/components';
import { Flex, Link, Text, Theme, Tooltip } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Megaphone } from 'lucide-react';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import local from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'Get Comics',
  description: 'All Your Favourite Comics Digitally Available',
};

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
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
      <body className={`${bricolage.variable} ${virus.variable} antialiased`}>
        <Theme accentColor="gray" className="font-bricolage outline-none">
          {/* page header */}
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
              <Tooltip content="News & Info">
                <Link
                  href="/news-info"
                  className="bg-zinc-100 shadow-sm border-[1px] border-solid border-zinc-200 px-2.5 py-2.5 rounded-md text-zinc-600"
                >
                  <Megaphone size={12} />
                </Link>
              </Tooltip>
              <UserButton />
            </Flex>
          </Flex>
          <Flex className="py-[3rem] bg-zinc-50/60">{children}</Flex>
        </Theme>
      </body>
    </html>
  );
}
