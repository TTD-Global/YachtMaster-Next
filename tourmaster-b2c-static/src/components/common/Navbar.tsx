"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Button, Dropdown } from "@/components/ui";
import { 
    IconBooking, 
    IconExpand, 
    IconLogout, 
    IconMessage, 
    IconSetting, 
    IconUser, 
    IconWishlists
} from '@/components/icons';
import { ChinaFlag, ThaiFlag, UsaFlag } from "@/components/icons/flag";

const Navbar = () => {
    const isLoading = false;
    const [ isLogin, setIsLogin ] = useState(false);
    const [locale, setLocale] = useState<string | null>('th');
    const [currency, setCurrency] = useState<string | null>('thb');

    const handleLanguageChange = (language: string) => {
        // const locale = language as Locale;
        // setUserLocale(locale);
        setLocale(language);
      };
    
      const handleCurrencyChange = (currency: string) => {
        // setUserCurrency(currency);
        setCurrency(currency);
      };

    
    const language = [
        {
        key: "en",
        label: (
            <div className="text-[14px] font-[500] h-10 p-2 select-none px-[10px] flex gap-2">
            <UsaFlag /> English
            </div>
        ),
        },
        {
        key: "th",
        label: (
            <div className="text-[14px] font-[500] h-10 p-2 select-none px-[10px] flex gap-2">
            <ThaiFlag /> ไทย
            </div>
        ),
        },
        {
        key: "zh",
        label: (
            <div className="text-[14px] font-[500] h-10 p-2 select-none px-[10px] flex gap-2">
            <ChinaFlag /> 中国人
            </div>
        ),
        },
    ];

    const currencyOptions = [
        {
        key: "usd",
        label: (
            <div className="text-[14px] font-[500] h-10 p-2 select-none px-[10px]">
            <p>USD U.S. Dollar</p>
            </div>
        ),
        },
        {
        key: "thb",
        label: (
            <div className="text-[14px] font-[500] h-10 p-2 select-none px-[10px]">
            <p>THB Thai Bath</p>
            </div>
        ),
        },
        {
        key: "cny",
        label: (
            <div className="text-[14px] font-[500] h-10 p-2 select-none px-[10px]">
            <p>CNY Chinese Yuan</p>
            </div>
        ),
        },
    ];

    const userPanel = [
        {
          key: "1",
          label: (
            <Link draggable="false" href="/profile">
              <div className="flex items-center text-[14px] text-[#344054] font-[500] h-10 p-2 select-none px-[10px] gap-x-2">
                <IconUser className="w-6 h-6" />
                <p>Profile</p>
              </div>
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link draggable="false" href="/profile/bookings">
              <div className="flex items-center text-[14px] text-[#344054] font-[500] h-10 p-2 select-none px-[10px] gap-x-2">
                <IconBooking className="w-6 h-6" />
                <p>Bookings</p>
              </div>
            </Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link draggable="false" href="/profile/reviews">
              <div className="flex items-center text-[14px] text-[#344054] font-[500] h-10 p-2 select-none px-[10px] gap-x-2">
                <IconMessage className="w-6 h-6" />
                <p>Reviews</p>
              </div>
            </Link>
          ),
        },
        {
          key: "4",
          label: (
            <Link draggable="false" href="/profile/wishlists">
              <div className="flex items-center  text-[14px] text-[#344054] font-[500] h-10 p-2 select-none px-[10px] gap-x-2">
                <IconWishlists className="w-6 h-6" />
                <p>Wishlists</p>
              </div>
            </Link>
          ),
        },
        {
          key: "5",
          label: (
            <Link draggable="false" href="/profile/settings">
              <div className="flex items-center  text-[14px] text-[#344054] font-[500] h-10 p-2 select-none px-[10px] gap-x-2">
                <IconSetting className="w-6 h-6" />
                <p>Settings</p>
              </div>
            </Link>
          ),
        },
        {
          key: "6",
          label: (
            <>
              <hr />
              <Link onClick={() => setIsLogin(false)} draggable="false" href="/">
                <div className="flex items-center  text-[14px] text-[#344054] font-[500] h-10 p-2 select-none px-[10px] gap-x-2">
                  <IconLogout className="w-6 h-6" />
                  <p>Log out</p>
                </div>
              </Link>
            </>
          ),
        },
    ];
       
    return isLoading? <NavbarSkeleton /> : (
        <div className="z-20 bg-white w-full h-20 flex-col justify-center items-center inline-flex border-b-1 border-solid border-[#667085] shadow-sm">
            <div className="w-full min1280:w-[1280px] px-8 justify-between items-center inline-flex">
            <div className="w-full min1280:w-[1216px] mx-auto px-0">
                <div className="w-full h-20 flex items-center justify-between gap-x-4">
                <div>
                    <Link href="/">
                    <Image
                        src="/logoTourMaster.webp"
                        alt="logo"
                        width={71}
                        height={41}
                        priority
                    />
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-x-8">
                    <div className="flex gap-x-1">
                        <Dropdown
                            menu={{
                            items: language,
                            onClick: ({ key }) => handleLanguageChange(key),
                            }}
                            overlayStyle={{ width: "200px" }}
                        >
                            <div>
                            {locale === "en" && (
                                <Button
                                type="button"
                                variant="tertiary-gray"
                                className="rounded-full text-[14px] text-[#344054] h-[36px] py-2 px-[14px] flex gap-2"
                                >
                                <UsaFlag /> <IconExpand className="text-gray-700" />
                                </Button>
                            )}
                            {locale === "th" && (
                                <Button
                                type="button"
                                variant="tertiary-gray"
                                className="rounded-full text-[14px] text-[#344054] h-[36px] py-2 px-[14px] flex gap-2"
                                >
                                <ThaiFlag /> <IconExpand className="text-gray-700" />
                                </Button>
                            )}
                            {locale === "zh" && (
                                <Button
                                type="button"
                                variant="tertiary-gray"
                                className="rounded-full text-[14px] text-[#344054] h-[36px] py-2 px-[14px] flex gap-2"
                                >
                                <ChinaFlag /> <IconExpand className="text-gray-700" />
                                </Button>
                            )}
                            </div>
                        </Dropdown>
                        <Dropdown
                            menu={{
                            items: currencyOptions,
                            onClick: ({ key }) => handleCurrencyChange(key),
                            }}
                            overlayStyle={{ width: "200px" }}
                        >
                            <div>
                            {currency === "usd" && (
                                <Button
                                type="button"
                                variant="tertiary-gray"
                                className="rounded-full text-[14px] text-[#344054] h-[36px] py-2 px-[14px] flex gap-2"
                                >
                                USD <IconExpand className="text-gray-700" />
                                </Button>
                            )}
                            {currency === "thb" && (
                                <Button
                                type="button"
                                variant="tertiary-gray"
                                className="rounded-full text-[14px] text-[#344054] h-[36px] py-2 px-[14px] flex gap-2"
                                >
                                THB <IconExpand className="text-gray-700" />
                                </Button>
                            )}
                            {currency === "cny" && (
                                <Button
                                type="button"
                                variant="tertiary-gray"
                                className="rounded-full text-[14px] text-[#344054] h-[36px] py-2 px-[14px] flex gap-2"
                                >
                                CNY <IconExpand className="text-gray-700" />
                                </Button>
                            )}
                            </div>
                        </Dropdown>
                        <Link href="/help">
                            <Button
                            variant="tertiary-gray"
                            className="rounded-full text-[14px] text-[#344054] h-[36px] py-2 px-[14px]"
                            >
                            Help
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                            variant="tertiary-gray"
                            className="rounded-full text-[14px] text-[#344054] h-[36px] py-2 px-[14px]"
                            >
                            Contact
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-x-3">
                    {isLogin ? (
                        <Dropdown
                        menu={{ items: userPanel }}
                        overlayStyle={{ width: "200px" }}
                        placement="bottomRight"
                        >
                        <Button
                            variant="tertiary-gray"
                            className="w-10 h-10 rounded-full text-[14px] text-[#292D32] bg-[#F2F4F7] p-0"
                        >
                            {/* {profile?.data?.image
                            ? <Image 
                                src={profile?.data?.image} 
                                alt="profile"
                                className="w-10 h-10 object-cover rounded-full"
                                width={40}
                                height={40}
                                />
                            : <IconUser className="w-6 h-6" />
                            } */}
                            <IconUser className="w-6 h-6" />
                        </Button>
                        </Dropdown>
                    ) : (
                        <>
                        <Button
                            onClick={() => setIsLogin(true)}
                            variant="tertiary-gray"
                            className="rounded-full text-[14px] text-[#344054] h-[36px] py-2 px-[14px]"
                        >
                            Log in
                        </Button>
                        <Button
                            onClick={() => setIsLogin(false)}
                            className="rounded-full py-2 px-[14px]"
                        >
                            Sign up
                        </Button>
                        </>
                    )}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

const NavbarSkeleton = () => {
    return (
      <div className="z-20 fixed top-0 bg-white min-w-[1280px] w-full h-20 flex-col justify-center items-center inline-flex border-b-1 border-solid border-[#667085] shadow-sm">
        <div className="w-[1280px] px-8 justify-between items-center inline-flex">
          <div className="w-full min1216:w-[1216px] mx-auto px-0">
            <div className="max-w-[1216px] h-20 flex items-center justify-between gap-x-4">
              <div className="w-[71px] h-[41px] bg-[#F2F4F7] rounded-[6px] animate-pulse"></div>
              <div className="flex items-center justify-center gap-x-8">
                <div className="flex gap-x-4">
                  <div className="bg-[#F2F4F7] rounded-full text-[14px] text-[#344054] h-[36px] w-[48px] py-2 px-[14px] animate-pulse"></div>
                  <div className="bg-[#F2F4F7] rounded-full text-[14px] text-[#344054] h-[36px] w-[48px] py-2 px-[14px] animate-pulse"></div>
                  <div className="bg-[#F2F4F7] rounded-full text-[14px] text-[#344054] h-[36px] w-[48px] py-2 px-[14px] animate-pulse"></div>
                  <div className="bg-[#F2F4F7] rounded-full text-[14px] text-[#344054] h-[36px] w-[48px] py-2 px-[14px] animate-pulse"></div>
                </div>
                <div className="flex items-center justify-center gap-x-3">
                  <div className="w-10 h-10 rounded-full text-[14px] text-[#292D32] bg-[#F2F4F7] p-0 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Navbar;
