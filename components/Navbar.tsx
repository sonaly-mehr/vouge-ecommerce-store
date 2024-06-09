"use client";

import useCart from "@/lib/hooks/useCart";

import { UserButton, useUser } from "@clerk/nextjs";
import {
  Menu,
  Search,
  Zap,
  ChevronRight,
  ChevronDown,
  UserRound,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../app/styles/stlyes";
import { NAV_MENU, SOCIAL_ICONS } from "../constant/index";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import CartItems from "./CartItems";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="innerWidth">
      {/* Header-Top */}
      <div className="hidden lg:flex items-center justify-between py-2 border-b-[1px] border-solid border-[#DBDFE3]">
        <div className="flex items-center justify-between gap-3 ">
          <Zap className="text-primary" strokeWidth={1.5} size={19} />
          <span className="flex items-center gap-4 text-[#7F8495] text-sm">
            30% off on women’s latest tops{" "}
            <ChevronRight className="text-primary" strokeWidth={1.5} />
          </span>
          <Link
            href="/"
            className="uppercase text-xs text-dark font-medium font-jost hover:text-primary"
          >
            EXPLORE
          </Link>
        </div>
        <div className="flex items-center justify-between gap-2 text-[#1877F2]">
          {SOCIAL_ICONS.map((icon, i) => (
            <Link
              href="/"
              key={i}
              className="hover:text-primary transition-all delay-75 cursor-pointer"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-10 py-4 flex gap-2 justify-between items-center bg-white">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={130} height={100} className="w-[80px] h-auto lg:w-[130px]"/>
        </Link>

        <div className="flex gap-8 items-center max-lg:hidden relative">
          {NAV_MENU.map((menu, i) => (
            // <Link
            //   href={menu?.link}
            //   key={i}
            //   className="font-normal text-lg text-dark delay-75 transition-all hover:text-primary flex items-center gap-1"
            // >
            //   {menu?.text}
            //   {menu?.subMenu && <ChevronDown size={18} />}
            // </Link>
            <HoverCard>
              <HoverCardTrigger onClick={()=> router.push(menu?.link)} className="font-normal text-base text-dark delay-75 transition-all hover:text-primary flex items-center gap-1 cursor-pointer">
                {menu?.text} {menu?.subMenu && <ChevronDown size={18} />}{" "}
              </HoverCardTrigger>
              {menu?.subMenu && (
                <HoverCardContent
                  className={`${
                    menu?.hasShopMenu &&
                    "w-[90%] h-[450px] flex justify-center items-center rounded-xl m-auto"
                  }`}
                >
                  {menu?.hasShopMenu ? (
                    <div className="">
                      <div className="flex justify-between gap-8 items-center">
                        {menu?.subMenu?.map((submenu, i) => (
                          <div className="flex">
                            <div className="">
                              <h4 className="font-semibold text-dark uppercase mb-3">
                                {submenu?.item}
                              </h4>
                              <Image
                                src={submenu?.img}
                                alt=""
                                width={240}
                                height={200}
                                className="rounded-xl"
                              />
                              <p className="text-sm w-[300px] text-gray-600 leading-6 my-2">
                                {submenu?.descp}
                              </p>
                              <span className="font-bold text-dark text-lg">
                                {submenu?.price}
                              </span>
                            </div>
                          </div>
                        ))}
                        <div className="">
                          <Image
                            src="/menu_banner.png"
                            alt=""
                            width={200}
                            height={200}
                            className="w-auto h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ul className={`flex flex-col gap-4 pl-5 py-2 rounded-xl`}>
                      {menu?.subMenu?.map((subMenu, i) => (
                        <li key={i}>
                          <Link
                            href=""
                            className="text-base font-normal text-dark hover:border-b-[1px] border-solid border-primary transition-all delay-75 hover:text-primary"
                          >
                            {subMenu?.item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </HoverCardContent>
              )}
            </HoverCard>

            // Sub-menu
          ))}

          <div className="w-full h-[200px] bg-white rounded-lg absolute top-[61px] left-0 right-0 hidden hover:block shadow-[0px_0px_10px_-2px_#d9d9d9]"></div>
          {/* <Link
            href="/"
            className={`hover:text-red-1 ${pathname === "/" && "text-red-1"}`}
          >
            Home
          </Link> */}
          {/* <Link
            href={user ? "/wishlist" : "/sign-in"}
            className={`hover:text-red-1 ${
              pathname === "/wishlist" && "text-red-1"
            }`}
          >
            Wishlist
          </Link>
          <Link
            href={user ? "/orders" : "/sign-in"}
            className={`hover:text-red-1 ${
              pathname === "/orders" && "text-red-1"
            }`}
          >
            Orders
          </Link> */}
        </div>

        {/* <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
          <input
            className="outline-none max-sm:max-w-[120px]"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            disabled={query === ""}
            onClick={() => router.push(`/search/${query}`)}
          >
            <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
          </button>
        </div> */}

        <div className="relative flex gap-4 items-center">
          <Menu
            className="cursor-pointer lg:hidden"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          />

          {dropdownMenu && (
            <div className="absolute top-12 right-5 flex w-40 flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
              <Link href="/" className="hover:text-red-1">
                Home
              </Link>
              <Link
                href={user ? "/wishlist" : "/sign-in"}
                className="hover:text-red-1"
              >
                Wishlist
              </Link>
              <Link
                href={user ? "/orders" : "/sign-in"}
                className="hover:text-red-1"
              >
                Orders
              </Link>
              <Link
                href="/cart"
                className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
              >
                <ShoppingBag />
                <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
              </Link>
            </div>
          )}

          {/* <Search className="cursor-pointer" /> */}
          <div className="hidden lg:flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
            <input
              className="outline-none max-sm:max-w-[120px]"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              disabled={query === ""}
              onClick={() => router.push(`/search/${query}`)}
            >
              <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
            </button>
          </div>

          {user ? (
            <UserButton afterSignOutUrl="/sign-in" />
          ) : (
            <Link href="/sign-in">
              <UserRound />
            </Link>
          )}

          <CartItems cart={cart}/>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
