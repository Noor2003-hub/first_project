import Image from 'next/image';

export default function CustomInput({ type, placeholder, style,icon }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-2 ${style} bg-[#F0F0F0] rounded-full h-[48px] w-full `}>
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={18}
          height={18}
          className="opacity-50"
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-[16px] text-gray-700 placeholder:text-gray-400"
      />
    </div>
  );
}
