import { hamburger } from "@public/icons";
import  headerlogo  from "@public/images/headerlogo.png";
import { navLinks } from "@constants";
import Image from "next/image";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <Link href='/'>
          <Image
            src={headerlogo}
            alt='logo'
            width={129}
            height={100}
            className='-m-9 w-[197px] h-[100px] -mt-10'
          />
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <Image src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
