import HeaderLinks from "@/components/header/HeaderLinks";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { ThemedButton } from "../ThemedButton";

const Header = () => {
  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex items-center justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" className="flex items-center space-x-3 font-bold">
              <Image
                alt={siteConfig.name}
                src="/logo.png"
                className="w-8 h-8"
                width={64}
                height={64}
              />
              <div className="text-gray-950 dark:text-gray-300">
                <h1 className="text-2xl leading-none">Peace</h1>
                <p className="text-sm font-normal leading-none">A Call for World Peace</p>
              </div>
            </Link>
            <div className="hidden md:flex md:gap-x-6"></div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <HeaderLinks />
            <ThemedButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
