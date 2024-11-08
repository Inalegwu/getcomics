'use client';

import { Flex, Text } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import { Info, LayoutDashboard, Library, Sidebar } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';

export default function AdminLayout({
  children,
}: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Flex align="center" className="w-full h-screen">
      <motion.div
        initial={false}
        className="h-full"
        animate={{
          width: isOpen ? '20%' : '0%',
          display: isOpen ? 'block' : 'none',
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <Flex
          direction="column"
          align="start"
          className="py-[3.9rem] border-r-solid border-r-zinc-200 border-r-[1px] bg-zinc-100/20"
          width="100%"
          height="100%"
        >
          <Link
            href="/admin"
            className="px-3 py-4 cursor-pointer border-b-zinc-200 border-b-[1px] border-b-solid hover:bg-zinc-200/20 w-full"
          >
            <Flex align="center" justify="start" gap="2">
              <LayoutDashboard size={12} />
              <Text size="2">Dashboard</Text>
            </Flex>
          </Link>
          <Link
            href="/manage"
            className="px-3 py-4 cursor-pointer border-b-zinc-200 border-b-[1px] border-b-solid hover:bg-zinc-200/20 w-full"
          >
            <Flex align="center" justify="start" gap="2">
              <Library size={12} />
              <Text size="2">Manage Issues and Collections</Text>
            </Flex>
          </Link>
          <Link
            href="/feedback"
            className="px-3 py-4 cursor-pointer border-b-zinc-200 border-b-[1px] border-b-solid hover:bg-zinc-200/20 w-full"
          >
            <Flex align="center" justify="start" gap="2">
              <Info size={12} />
              <Text size="2">Feedback and Suggestions</Text>
            </Flex>
          </Link>
        </Flex>
      </motion.div>
      <motion.div
        className="h-full"
        initial={false}
        animate={{ width: isOpen ? '80%' : '100%' }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <Flex width="100%" height="100%" className="py-[4rem] relative">
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="fixed bottom-2 right-2 bg-zinc-100 border-[1px] border-zinc-200 border-solid px-2.5 py-2.5 rounded-md shadow-sm"
          >
            <Sidebar size={12} />
          </button>
          {children}
        </Flex>
      </motion.div>
    </Flex>
  );
}
