import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 w-full">
      <Popover className="sticky bg-white">
        <div className="px-6 mx-auto shadow max-w-screen lg:px-16">
          <div className="flex items-center justify-between py-4">
            <div className="lg:hidden">
              <Popover.Button>
                <span href="#" onClick={() => setOpen(true)} className="text-primary hover:underline">
                  Menu
                </span>
              </Popover.Button>
            </div>

            <div className="flex items-center justify-start gap-10 lg:flex-1 lg:w-0">
              <Link href="/" className="uppercase">
                kim chon
              </Link>
              <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
                <Link href="/our-services" className="text-primary hover:underline">
                  Our services
                </Link>
                <Link href="/about" className="text-primary hover:underline">
                  About us
                </Link>
                <Link href="/our-product" className="text-primary hover:underline">
                  Our Product
                </Link>
              </Popover.Group>
            </div>
          </div>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-50 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="fixed inset-y-0 left-0 flex max-w-full pointer-events-none">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="relative z-50 w-screen max-w-md pointer-events-auto">
                      <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                        <div className="flex items-center justify-between px-4 sm:px-6">
                          <Dialog.Title className="text-lg text-gray-600">Menu</Dialog.Title>
                          <button type="button" className="text-gray-600 rounded-md" onClick={() => setOpen(false)}>
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="relative flex-1 px-4 mt-10 sm:px-6">
                          <div className="flex flex-col gap-10">
                            <Link
                              href="/"
                              className="font-serif text-2xl text-primary hover:underline"
                              onClick={() => setOpen(false)}
                            >
                              Home
                            </Link>
                            <Link
                              href="/our-services"
                              className="font-serif text-2xl text-primary hover:underline"
                              onClick={() => setOpen(false)}
                            >
                              Our services
                            </Link>
                            <Link
                              href="/about"
                              className="font-serif text-2xl text-primary hover:underline"
                              onClick={() => setOpen(false)}
                            >
                              About us
                            </Link>
                            <Link
                              href="/our-product"
                              className="font-serif text-2xl text-primary hover:underline"
                              onClick={() => setOpen(false)}
                            >
                              Our product
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </Popover>
    </header>
  );
}
