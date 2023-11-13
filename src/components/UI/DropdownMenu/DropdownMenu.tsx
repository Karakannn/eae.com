import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Icon from '../Icon/Icon'


type ListBoxProps = {

    options: { name: string, value: any }[]
}

export default function ListBox(props: ListBoxProps) {

    const [selected, setSelected] = useState(props.options[0])

    return (
        <div >
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative">
                    <Listbox.Button className="relative flex items-center gap-1  rounded-lg bg-white p-2 px-[10px] border border-primary-600 text-left sm:text-sm">
                        <span className="text-primary-600 text-md font-semibold">{selected.name}</span>
                        <Icon width={24} height={24} class='stroke-primary-600' id='chevron-down' />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {props.options.map((option, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
                                        `relative cursor-default select-none p-2 px-3 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={option}
                                >
                                    {({ selected }) => (
                                        <div className='flex items-center justify-between'>
                                            <span
                                                className={`block truncate text-md text-gray-600 ${selected ? 'font-semibold' : 'font-normal'
                                                    }`}
                                            >
                                                {option.name}
                                            </span>
                                            {selected ? (
                                                <span className="  flex items-center pl-3 text-amber-600">
                                                    <Icon width={16} height={16} class='stroke-gray-600' id='search' />
                                                </span>
                                            ) : null}
                                        </div>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>

    )
}


