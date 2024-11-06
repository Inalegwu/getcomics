import { SearchButton, ThemeButton } from '@/app/components';
import { DropdownMenu, Flex, Link, Text, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { User } from 'lucide-react';
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
        <Theme accentColor="gray" className="font-bricolage">
          {/* page header */}
          <Flex
            className="px-3 py-3 bg-white fixed top-0 left-0 w-full border-b-solid border-b-[1px] border-b-zinc-200"
            align="center"
            justify="between"
          >
            <Flex gap="4" align="center">
              <Link href="/">
                <Text size="6" className="font-virus">
                  GetComics
                </Text>
              </Link>
              <SearchButton />
            </Flex>
            <Flex align="center" justify="end" gap="2">
              <ThemeButton />
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <button className="px-2.5 shadow-sm py-2.5 rounded-md bg-zinc-100 border-zinc-200 border-[1px] border-solid">
                    <User size={12} />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content size="1" variant="soft">
                  user menu
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </Flex>
          </Flex>
          <Flex className="py-[4rem] bg-zinc-50/60">{children}</Flex>
        </Theme>
      </body>
    </html>
  );
}
