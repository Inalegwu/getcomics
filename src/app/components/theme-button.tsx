import { Moon, Sun } from 'lucide-react';
import globalState$ from '../state';

export default function ThemeButton() {
  const colorMode = globalState$.colorMode.get();

  return (
    <button className="px-2.5 shadow-sm py-2.5 rounded-md bg-zinc-100 border-zinc-200 border-[1px] border-solid">
      {colorMode === 'light' ? <Sun size={12} /> : <Moon size={12} />}
    </button>
  );
}
