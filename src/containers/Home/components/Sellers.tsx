import Button from '@components//UI/Button/Button'
import SectionHeader from '@components//UI/SectionHeader/SectionHeader'
import { useState } from 'react';
import { Tooltip } from 'react-tooltip'

import MapChart from './MapChart';
import Icon from '@components//UI/Icon/Icon';

export default function Sellers() {

    const [country, setCountry]: any = useState("");

    return (
        <section className=' container mx-auto'>
            <div className='pt-24'>
                <SectionHeader
                    title='Bayi ve Yetkili Satıcılar'
                    subheading='Yapı Bilgi Modelleme'
                    supportingText='BIM, varlıkların tasarlanması, yaratılması ve 
                        sürdürülmesi için daha verimli yöntemlerin kilidini açan dijital 
                        teknolojilerin desteklediği erken tedarik zinciri katılımını kolaylaştıran 
                        işbirlikçi bir çalışma şeklidir.'>
                    <div className='flex gap-4 items-center'>
                        <Button class='custom-btn-lg btn-standard-link-colored' iconRight='narrow-right'>Tüm Çözümleri Görüntüle</Button>
                        <Button class='custom-btn-lg btn-standard-secondary' iconLeft='package'>3D Tesis Tasarımı</Button>
                    </div>
                </SectionHeader>
                <MapChart setContent={setCountry} />
                <Tooltip id='map-tooltip' isOpen={true} className='!bg-white !opacity-100 !rounded-xl shadow-xl !transition-all'>
                    {country &&

                        <div className='px-1 py-2'>

                            <h5 className='text-xl font-semibold text-primary-700 pb-1'>{country.name}</h5>

                            {country.sellers.map((seller: any, index: any, arr: any) => {
                                const checkLength = arr.length > 1 && index !== arr.length - 1;
                                console.log(checkLength);

                                return (
                                    <div key={index}>
                                        <h5 className='text-sm font-semibold text-gray-700'>{seller.name}</h5>
                                        <span className='text-sm text-gray-600'>{seller.address}</span>

                                        <div className='pt-2'>
                                            {seller.phone && <div className='flex gap-1 items-center'>
                                                <Icon class='w-4 h-4 stroke-gray-600' id={'phone'} />
                                                <span className='text-sm  text-gray-600'>: {seller.phone}</span>
                                            </div>}
                                            {seller.mail && <div className='flex gap-1 items-center'>
                                                <Icon class='w-4 h-4 stroke-gray-600' id={'mail'} />
                                                <span className='text-sm  text-gray-600'>: {seller.mail}</span>
                                            </div>}
                                            {seller.fax && <div className='flex gap-1 items-center'>
                                                <Icon class='w-4 h-4 stroke-gray-600' id={'printer'} />
                                                <span className='text-sm  text-gray-600'>: {seller.fax}</span>
                                            </div>}
                                        </div>

                                        {checkLength && <hr className="h-px my-2 bg-gray-400 border-0 " />}


                                    </div>
                                )
                            })}
                        </div>
                    }

                </Tooltip>
            </div>
        </section >
    )
}
