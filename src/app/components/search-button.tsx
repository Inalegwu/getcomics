'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';
import globalState$ from '../state';

export default function SearchButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const colorMode = globalState$.colorMode.get();

  return (
    <motion.div
      className="bg-zinc-100 border-[1px] border-solid border-zinc-200 rounded-md flex flex-row items-center justify-center"
      animate={{ width: isExpanded ? '400px' : 'fit-content' }}
      transition={{
        delay: 0.1,
      }}
    >
      <button
        onClick={() => setIsExpanded((expanded) => !expanded)}
        className="px-2 py-2 rounded-md"
      >
        <Search size={12} />
      </button>
      <motion.input
        animate={{
          display: isExpanded ? 'block' : 'none',
          width: isExpanded ? '100%' : '0%',
        }}
        transition={{ duration: 0.2 }}
        className="bg-transparent text-md outline-none px-2 py-[0.5px] rounded-full"
        placeholder="Find A Comic"
      />
    </motion.div>
  );
}
