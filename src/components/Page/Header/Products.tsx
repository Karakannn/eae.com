import Icon from '@components//UI/Icon/Icon'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'



export default function Products() {

    const productMenus = [
        { name: 'Busbar Sistemleri', icon: 'search', supportingText: 'The latest industry news, updates and info.' },
        { name: 'Kablo Kanalları', icon: 'search', supportingText: 'The latest industry news, updates and info.' },
        { name: 'Trolley Busbar Sistemleri', icon: 'search', supportingText: 'The latest industry news, updates and info.' },
        { name: 'Askı Sistemleri', icon: 'search', supportingText: 'The latest industry news, updates and info.' },
        { name: 'İç Tesisat Çözümleri', icon: 'search', supportingText: 'The latest industry news, updates and info.' },
    ]

    return (
        <div className="flex bg-white shadow-lg ring-1 ring-gray-900/5">
            <Tab.Group>
                <Tab.List className="space-x-1 rounded-md p-1">
                    {productMenus.map((productMenu, index) => (
                        <Tab
                            key={index}

                            className={({ selected }) =>
                                classNames(
                                    ' w-full rounded-md py-2.5', {
                                    'bg-primary-600 transition-colors': selected
                                })
                            }>

                            {({ selected }) => (


                                <div className='flex gap-4 items-center border-none'>
                                    <Icon class={selected ? 'stroke-white' : 'stroke-primary-600'} id='icon-busbar' width={72} height={40}/>

                                    <div className='text-left flex flex-col gap-1'>
                                        <h5 className={classNames(
                                            'text-gray-700 text-md font-medium', {
                                            ' text-white': selected
                                        })}>
                                            {productMenu.name}
                                        </h5>
                                        <p
                                            className={classNames(
                                                'text-gray-500 text-sm', {
                                                ' text-white': selected
                                            })}
                                        >{productMenu.supportingText}</p>
                                    </div>
                                </div>
                            )}


                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2 flex-1">
                    sa
                </Tab.Panels>
            </Tab.Group>
        </div >
    )
}

