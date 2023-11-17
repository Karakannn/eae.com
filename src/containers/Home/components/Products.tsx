import product1 from '@assets/dummy/product1.png';
import product2 from '@assets/dummy/product2.png';
import product3 from '@assets/dummy/product3.png';
import product4 from '@assets/dummy/product4.png';
import product5 from '@assets/dummy/product5.png';
import Button from '@components//UI/Button/Button';

export default function Products() {

    const cards = [
        {
            title: 'Busbar Sistemleri',
            supportingText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus enim est aspernatur, rerum a sequi necessitatibus sed possimus officia blanditiis?',
            width: 'full',
            img: product1,
            actions: [
                { type: 'btn-standard-link', name: 'Daha Fazlası', href: '' },
                { type: 'btn-standard-link', name: 'Ürünleri Görüntüle', href: '' },
            ]
        },
        {
            title: 'İç Tesisat Çözümleri',
            supportingText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus enim est aspernatur, rerum a sequi necessitatibus sed possimus officia blanditiis?',
            width: 'half',
            img: product2,
            actions: [
                { type: 'btn-standard-link', name: 'Daha Fazlası', href: '' },
                { type: 'btn-standard-link', name: 'Ürünleri Görüntüle', href: '' },
            ]
        },
        {
            title: 'Kablo Kanalları',
            supportingText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus enim est aspernatur, rerum a sequi necessitatibus sed possimus officia blanditiis?',
            width: 'half',
            img: product3,
            actions: [
                { type: 'btn-standard-link', name: 'Daha Fazlası', href: '' },
                { type: 'btn-standard-link', name: 'Ürünleri Görüntüle', href: '' },
            ]
        },

        {
            title: 'Kablo Kanalları',
            supportingText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus enim est aspernatur, rerum a sequi necessitatibus sed possimus officia blanditiis?',
            width: 'half',
            img: product4,
            actions: [
                { type: 'btn-standard-link', name: 'Daha Fazlası', href: '' },
                { type: 'btn-standard-link', name: 'Ürünleri Görüntüle', href: '' },
            ]
        },

        {
            title: 'Trolley Busbar Sistemleri',
            supportingText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus enim est aspernatur, rerum a sequi necessitatibus sed possimus officia blanditiis?',
            width: 'half',
            img: product5,
            actions: [
                { type: 'btn-standard-link', name: 'Daha Fazlası', href: '' },
                { type: 'btn-standard-link', name: 'Ürünleri Görüntüle', href: '' },
            ]
        }
    ]

    return (
        <section className='mx-auto  container'>
            <div className='page-vertical-padding pb-0'>
                <div className='flex flex-col gap-4'>
                    {/* Busbar */}
                    <div className=' bg-white rounded-md shadow-md hover:shadow-lg transition-all'>
                        <div className='grid grid-cols-2 justify-between'>
                            <div className='flex flex-col justify-center items-start gap-2 p-8 grid-rows-1'>
                                <h5 className='text-2xl font-semibold text-gray-700'>Busbar Sistemleri</h5>
                                <p className='text-md text-gray-600'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quod, praesentium dolorum quo animi inventore aperiam,
                                    nam, ea libero facilis sequi. Quibusdam necessitatibus blanditiis repellendus nihil libero iste temporibus doloremque.
                                    <br />
                                </p>

                                <div className='flex justify-center gap-4 pt-3 '>
                                    <Button class='custom-btn-md btn-standard-link' iconRight='chevron-right'>Daha Fazlası</Button>
                                    <Button class='custom-btn-md btn-standard-link-colored' iconRight='chevron-right'>Ürünleri Görüntüle</Button>
                                </div>

                            </div>

                            <div className='w-full grid-rows-1  '>
                                <img src={product1} className='float-right w-auto h-full max-h-[220px] object-cover' alt="" />

                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>

                        {/* İç Tesisat Çözümleri */}
                        <div className='bg-white rounded-md shadow-md hover:shadow-lg transition-all'>
                            <div className='flex flex-col gap-6 justify-between p-8 pb-0'>
                                <div className=' flex flex-col gap-2  items-center '>
                                    <h5 className='text-2xl font-semibold text-gray-700'>İç Tesisat Çözümleri</h5>
                                    <p className='text-md text-center text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quod, praesentium dolorum quo animi inventore aperiam, nam, ea libero facilis sequi</p>
                                </div>
                                <div className='flex justify-center gap-4'>
                                    <Button class='custom-btn-md btn-standard-link' iconRight='chevron-right'>Daha Fazlası</Button>
                                    <Button class='custom-btn-md btn-standard-link-colored' iconRight='chevron-right'>Ürünleri Görüntüle</Button>
                                </div>
                            </div>
                            <img className='mx-auto object-cover pt-3' src={product2} alt="" />
                        </div>

                        {/* Kablo Kanalları */}
                        <div className='bg-white rounded-md shadow-md hover:shadow-lg transition-all'>
                            <div className='flex flex-col gap-6 justify-between p-8 pb-0'>
                                <div className=' flex flex-col gap-2  items-center '>
                                    <h5 className='text-2xl font-semibold text-gray-700'>Kablo Kanalları</h5>
                                    <p className='text-md text-center text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quod, praesentium dolorum quo animi inventore aperiam, nam, ea libero facilis sequi</p>
                                </div>
                                <div className='flex justify-center gap-4'>
                                    <Button class='custom-btn-md btn-standard-link' iconRight='chevron-right'>Daha Fazlası</Button>
                                    <Button class='custom-btn-md btn-standard-link-colored' iconRight='chevron-right'>Ürünleri Görüntüle</Button>
                                </div>
                            </div>
                            <img className='mx-auto object-cover h-auto pt-3' src={product3} alt="" />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>

                        {/* Kablo Kanalları */}
                        <div className='bg-white rounded-md shadow-md hover:shadow-lg transition-all'>
                            <div className='flex flex-col gap-6 justify-between p-8 pb-0'>
                                <div className=' flex flex-col gap-2  items-center '>
                                    <h5 className='text-2xl font-semibold text-gray-700'>İç Tesisat Çözümleri</h5>
                                    <p className='text-md text-center text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quod, praesentium dolorum quo animi inventore aperiam, nam, ea libero facilis sequi</p>
                                </div>
                                <div className='flex justify-center gap-4'>
                                    <Button class='custom-btn-md btn-standard-link' iconRight='chevron-right'>Daha Fazlası</Button>
                                    <Button class='custom-btn-md btn-standard-link-colored' iconRight='chevron-right'>Ürünleri Görüntüle</Button>
                                </div>
                            </div>
                            <img className='mx-auto object-cover pt-3' src={product4} alt="" />
                        </div>

                        {/* Trolley Busbar Sistemleri */}
                        <div className='bg-white rounded-md shadow-md hover:shadow-lg transition-all'>
                            <div className='flex flex-col gap-6 justify-between p-8 pb-0'>
                                <div className=' flex flex-col gap-2  items-center '>
                                    <h5 className='text-2xl font-semibold text-gray-700'>Kablo Kanalları</h5>
                                    <p className='text-md text-center text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quod, praesentium dolorum quo animi inventore aperiam, nam, ea libero facilis sequi</p>
                                </div>
                                <div className='flex justify-center gap-4'>
                                    <Button class='custom-btn-md btn-standard-link' iconRight='chevron-right'>Daha Fazlası</Button>
                                    <Button class='custom-btn-md btn-standard-link-colored' iconRight='chevron-right'>Ürünleri Görüntüle</Button>
                                </div>
                            </div>
                            <img className='mx-auto object-cover h-auto pt-3' src={product5} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
