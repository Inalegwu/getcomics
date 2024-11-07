'use client';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useState } from 'react';
import globalState$ from '../state';

export default function SearchButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const colorMode = globalState$.colorMode.get();

  return (
    <motion.div
      initial={{ width: 'fit-content' }}
      className="bg-zinc-100 border-[1px] border-solid border-zinc-200 rounded-md flex flex-row items-center justify-center"
      animate={{ width: isExpanded ? '500px' : 'fit-content' }}
    >
      <button
        onClick={() => setIsExpanded((expanded) => !expanded)}
        className="px-2.5 py-2.5 rounded-md"
      >
        <Search size={12} />
      </button>
      <motion.input
        initial={{ display: 'nonw', width: '0%' }}
        animate={{
          display: isExpanded ? 'block' : 'none',
          width: isExpanded ? '100%' : '0%',
        }}
        className="bg-transparent text-[0.8rem] outline-none px-2.5 py-[1px] rounded-full"
        placeholder="Find Comics, Collections, Writers, Artists and More"
      />
      <motion.button
        initial={{ display: 'nonw', width: '0%' }}
        className="px-2.5 py-2.5 rounded-md flex items-center justify-center"
        onClick={() => setIsExpanded(false)}
        animate={{
          display: isExpanded ? 'block' : 'none',
          width: isExpanded ? 'fit-content' : '0%',
        }}
      >
        <X size={12} />
      </motion.button>
    </motion.div>
  );
}
