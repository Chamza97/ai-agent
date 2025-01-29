'use client';
import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogPanel } from '@headlessui/react';
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import {XMarkIcon} from "@heroicons/react/24/outline";
import Toaster from "react-hot-toast";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}
const navigation_menu : any[] = [
]
const navigation = {

  social: [
    {
      name: 'X',
      href: '#',
      icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
            />
          </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                clipRule="evenodd"
            />
          </svg>
      ),
    },
  ],
}

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const wrapperStyles = cn('flex flex-col min-h-screen', className);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className={wrapperStyles}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 text-white">
              <Image width={60}  height={60} src="/Trianglelogo3.jpg" alt="logo"/>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <MdOutlineMenu color="white" size={30} />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation_menu.map((item) => (
                <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                  {item.name}
                </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/*<Link*/}
            {/*  href="browse-agents"*/}
            {/*  className="-mx-3 block rounded-lg px-3 py-2 text-base/100 mr-1 text-white"*/}
            {/*>*/}
            {/*  browse Agents*/}
            {/*</Link>*/}
            <a
              href="create-agent"
              type="button"
              className="rounded-sm bg-white px-2 py-2 text-sm font-semibold text-black shadow-xs"
            >
              Create your Agent
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image width={50}  height={50} src="/Trianglelogo3.jpg" alt="logo"/>
              </a>
              <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="py-5">
                  <div className="py-5">
                    <a
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                    >
                      home
                    </a>
                  </div>
                  <a
                    href="/create-agent"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                  >
                    Create your agent
                  </a>
                </div>
                <div className="py-5">
                  <a
                      href="/browse-agents"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                  >
                    Browse agents
                  </a>
                </div>
                <div className="mx-auto flex gap-x-4 content-center ">
                  <div className="py-5 mx-auto flex gap-x-4 ">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                          <span className="sr-only">{item.name}</span>
                          <item.icon aria-hidden="true" className="size-6" />
                        </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-black">
        <Toaster/>

        <div className="flex content-center max-w-7xl px-6 pt-1 pb-5 mt-2 sm:pt-1 lg:px-8 lg:pt-1">
          <div className="mx-auto  md:flex flex items-center md:items-center md:justify-between ">
            <div className="flex gap-x-4 ">
              {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-6" />
                  </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
