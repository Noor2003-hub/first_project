import React from 'react';
import config from '@payload-config';
import { getPayload } from 'payload';
import Image from 'next/image';
import Link from 'next/link';
import CustomInput from '@/app/(frontend)/components/CustomInput';
import LanguageSwitcher from '@/app/(frontend)/components/LanguageSwitcher';

export default async function HeaderServer({ lang }: { lang: string }) {
  const payload = await getPayload({ config });
  const header = await payload.findGlobal({
    slug: 'header',
    locale: lang, // <-- important
  });

  return (
    <>
<div className="navbar shadow-sm  mx-auto flex items-center justify-between !px-10 !py-10">
  <div className="navbar-start w-full flex space-x-10 ">
    {/* Mobile Dropdown */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
        </svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Link</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </li>
      </ul>
    </div>

    {/* Logo */}
    {header.logo?.url && (
            <div className="relative w-50 h-10 ">
              <Image
                src={header.logo.url}
                alt={header.logo.alt || 'Logo'}
                fill
                className="object-contain"
              />
            </div>
          )}

    {/* Horizontal Menu – hide on small screens */}
    <div className="hidden lg:flex ">
      <ul className="menu menu-horizontal space-x-6 px-1">
      {header.nav?.map((item, index) => (
        <Link
        key={index}
        href={item.link}
        className="text-lg hover:underline"
      >
        {item.label}
      </Link>
      ))}
        {/* <li><a>Link</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li> */}
      </ul>
    </div>

    {/* Search – hide on mobile */}
    <div className="hidden lg:flex">
    <CustomInput type="search" placeholder="Search for products..." style="input w-full md:w-auto" icon="/v.png" />
    </div>
  </div>
  <button className="btn btn-ghost btn-circle lg:hidden">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
</button>
<LanguageSwitcher/>
  {header.icons?.map((icon, index) => {
  
  if (index === 0) {
    return (
      <div key={index} className="dropdown dropdown-end">
          
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full relative">
            {icon.icon?.url ? (
              <Image
                src={icon.icon.url}
                alt={icon.icon.alt || 'Profile Icon'}
                width={100}
                height={100}
                className="object-cover rounded-full"
              />
            ) : (
              <span>No Icon</span>
            )}
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a className="justify-between">Profile <span className="badge">New</span></a></li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div key={index} className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator w-6 h-6 relative">
            {icon.icon?.url && (
              <Image
                src={icon.icon.url}
                alt={icon.icon.alt || 'Cart Icon'}
                fill
                className="object-contain"
              />
            )}
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
          <div className="card-body">
            <span className="text-lg font-bold">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
})}

</div>

    </>
  );
}
