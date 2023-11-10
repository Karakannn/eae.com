import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import logo from '@assets/images/eae-elektrik-logo.jpg';
import Icon from '@components//UI/Icon/Icon';
import DropdownMenu from '@components//UI/DropdownMenu/DropdownMenu';
import Products from './Products';

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: 'search' },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: 'search' },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: 'search' },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: 'search' },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: 'search' },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: 'search' },
    { name: 'Contact sales', href: '#', icon: 'search' },
]

const languages = [
    {
        name: 'TR',
        value: 'turkish',
    },
    {
        name: 'EN',
        value: 'english',
    },

    {
        name: 'FR',
        value: 'france',
    },

    {
        name: 'RU',
        value: 'russia',
    },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white border-2 border-b-gray-300">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8 relative" aria-label="Global">

                {/* Left Area */}
                <div className='flex gap-10 items-center'>
                    {/* Logo */}
                    <div className="flex lg:flex-1">
                        <a href="#" >
                            <img className="h-16 w-auto" src={logo} alt="" />
                        </a>
                    </div>
                    {/* <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                    </button>
                </div> */
                    }

                    <Popover.Group className="hidden lg:flex lg:gap-x-8">
                        <Popover>
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-medium leading-6 text-gray-900">
                                Ürünler
                                <Icon width={16} height={16} class='stroke-gray-600' id='chevron-down' />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute w-full left-0 top-full z-10 mt-3 rounded-md lg:px-8">
                                    <Products />
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <a href="#" className="flex gap-x-1 items-center text-sm font-medium leading-6 text-gray-900">
                            Çözümler
                            <Icon width={16} height={16} class='stroke-gray-600' id='chevron-down' />

                        </a>
                        <a href="#" className="flex gap-x-1 items-center text-sm font-medium leading-6 text-gray-900">
                            Tasarım Araçları
                            <Icon width={16} height={16} class='stroke-gray-600' id='chevron-down' />
                        </a>
                        <a href="#" className=" text-sm font-medium leading-6 text-gray-900">
                            SSS
                        </a>
                        <a href="#" className="flex gap-x-1 items-center text-sm font-medium leading-6 text-gray-900">
                            Kariyer
                            <Icon width={16} height={16} class='stroke-gray-600' id='chevron-down' />

                        </a>
                        <a href="#" className="flex gap-x-1 items-center text-sm font-medium leading-6 text-gray-900">
                            Kurumsal
                            <Icon width={16} height={16} class='stroke-gray-600' id='chevron-down' />

                        </a>
                        <a href="#" className="flex gap-x-1 items-center text-sm font-medium leading-6 text-gray-900">
                            İndirme Merkezi
                            <Icon width={16} height={16} class='stroke-gray-600' id='chevron-down' />

                        </a>
                        <a href="#" className="flex gap-x-1 items-center text-sm font-medium leading-6 text-gray-900">
                            İletişim
                            <Icon width={16} height={16} class='stroke-gray-600' id='chevron-down' />

                        </a>
                    </Popover.Group>
                </div>

                {/* Right Area */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">

                    {/* Sustanability */}
                    <Icon class='hover: fill-primary-600' width={44} height={40} id={'sustanability'} />

                    {/* Search */}
                    <div className='flex items-center stroke-primary-600 border border-primary-600 p-[10px] rounded-md hover:stroke-primary-900 hover:border-primary-900'>
                        <Icon width={20} height={20} id={'search'} />
                    </div>

                    {/* Language */}
                    <DropdownMenu options={languages} />

                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <Icon width={24} height={24} id={'search'} />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Product
                                                <Icon width={16} height={16} class='stroke-gray-600' id='chevron-down' />

                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
