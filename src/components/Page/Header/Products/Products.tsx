import Icon from '@components//UI/Icon/Icon'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import BusbarSystems from './BusbarSystems'

export default function Products() {

    const productItems = [
        {
            name: 'Busbar Sistemleri',
            icon: 'icon-busbar',
            supportingText: 'The latest industry news, updates and info.',
            generalInfo: 'dfsafd',
            categories: [
                { categriesImg: '', name: '', supportingText: '' }
            ]
        },
        { name: 'Kablo Kanalları', icon: 'icon-kablo-kanali', supportingText: 'The latest industry news, updates and info.' },
        { name: 'Trolley Busbar Sistemleri', icon: 'icon-aydinlatma', supportingText: 'The latest industry news, updates and info.' },
        { name: 'Askı Sistemleri', icon: 'icon-aski-sistemleri', supportingText: 'The latest industry news, updates and info.' },
        { name: 'İç Tesisat Çözümleri', icon: 'icon-kablo-kanali', supportingText: 'The latest industry news, updates and info.' },
    ]

    return (
        <div className="flex bg-gray-50  shadow-lg ring-1 ring-gray-900/5">
            <Tab.Group>
                <Tab.List className="space-x-1 rounded-md p-1 border-r-2 p-6">
                    <h5 className='text-md font-medium text-primary-600 pb-3'>Ürünlerimiz</h5>

                    {productItems.map((productItem, index) => (
                        <Tab
                            key={index}

                            className={({ selected }) =>
                                classNames(
                                    ' w-auto rounded-md p-3 flex flex-col', {
                                    'bg-primary-600 transition-colors': selected
                                })
                            }>

                            {({ selected }) => (


                                <div className='flex gap-4 items-center border-none'>
                                    <Icon class={selected ? 'stroke-white' : 'stroke-primary-600'} id={productItem.icon} width={64} height={40} />

                                    <div className='text-left flex flex-col gap-1'>
                                        <h5 className={classNames(
                                            'text-gray-700 text-md font-medium', {
                                            ' text-white': selected
                                        })}>
                                            {productItem.name}
                                        </h5>
                                        <p
                                            className={classNames(
                                                'text-gray-500 text-sm  ', {
                                                ' text-white': selected
                                            })}
                                        >{productItem.supportingText}</p>
                                    </div>
                                </div>
                            )}


                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className=" flex-1 bg-white">
                    <Tab.Panel>
                        <BusbarSystems />
                    </Tab.Panel>

                    <Tab.Panel>
                        <BusbarSystems />
                    </Tab.Panel>

                    <Tab.Panel>
                        <BusbarSystems />
                    </Tab.Panel>

                    <Tab.Panel>
                        <BusbarSystems />
                    </Tab.Panel>

                    <Tab.Panel>
                        <BusbarSystems />
                    </Tab.Panel>
                </Tab.Panels>


            </Tab.Group>
        </div >
    )
}

