"use client";
import Link from 'next/link';


import {ReactNode, useState} from 'react';


import { cn } from '@/lib/utils';
import {Dialog, DialogPanel} from "@headlessui/react";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const links = [{ slug: '/', label: 'Home' }];

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const wrapperStyles = cn('flex flex-col min-h-screen', className);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className={wrapperStyles}>
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 text-white">
                        <span className="sr-only">AI AGENT</span>
                        AI AGENT
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>

                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">

                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="browse-agents"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/100 mr-1 text-white"
                    >
                        browse Agents
                    </Link>
                    <a href="create-agent"
                        type="button"
                        className="rounded-sm bg-white px-2 py-2 text-sm font-semibold text-black shadow-xs"
                    >
                       Create your Agent
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
      <main className="flex-1">{children}</main>

    </div>
  );
};
