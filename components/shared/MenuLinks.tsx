import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface menuLinksProps{
    start: number
    end?: number
}

const MenuLinks = (prpos:menuLinksProps) => {
    const pathname = usePathname();

  return (
    <>
       
              <ul className="header-nav_elements">
                {navLinks.slice(prpos.start,prpos.end).map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive && "scale-125 pl-4 transition-transform duration-500 gradient-text"
                      } p-18 flex whitespace-nowrap text-dark-700 hover:scale-125 hover:duration-200`}
                    >
                      <Link
                        href={link.route}
                        className="sidebar-link cursor-pointer"
                      >
                        <Image src={link.icon} alt="" width={24} height={24} />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
    </>
  )
}

export default MenuLinks