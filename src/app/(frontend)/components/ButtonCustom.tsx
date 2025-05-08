import Button from '@mui/material/Button'
import Image from 'next/image';
import Link from 'next/link';

export default function ButtonCustom({ title,href,theme }) {
    const baseClasses = 'btn mt-4 px-12 py-6 w-full text-[16px] rounded-full shadow-none';
    const themeClasses =
      theme === 'dark'
        ? 'btn-neutral text-white'
        : theme === 'light'?
        'btn-outline bg-white text-black border-[1px] border-gray-400 ':
        'btn-soft'
  
    return (
      <Link href={href} className={`${baseClasses} ${themeClasses}`}>
        {title}
      </Link>
    );
}