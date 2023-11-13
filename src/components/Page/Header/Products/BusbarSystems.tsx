import Button from '@components//UI/Button/Button'
import dummyImg from '@assets/dummy/dummy-megamenu.png'
import overlay from '@assets/dummy/Overlay.png'

export default function BusbarSystems() {


    const Product = (data: { imageSrc: string, title: string, supportingText: string }) => {

        return (
            <div className='flex gap-3'>
                <img className='w-[103px] h-[64px]' src={data.imageSrc} alt="" />
                <div className='flex flex-col gap-1'>
                    <h5 className='text-md text-gray-700 font-medium'>{data.title}</h5>
                    <p className='text-sm text-gray-600'>{data.supportingText}</p>
                </div>
            </div>
        )
    }


    return (
        <div className='p-6 bg-white gap-4 '>
            <div className='flex flex-col gap-8'>

                {/* General Info */}
                <div className='flex gap-5 py-1'>
                    <img src={overlay} alt="" />
                    <div className='flex flex-col items-start gap-3'>

                        <div className='flex flex-col gap-1'>
                            <h5 className='text-md text-gray-700 font-semibold'>Busbar Sistemleri Genel Bilgi</h5>
                            <p className='text-sm text-gray-600 font-regular'>Once you’re ready, learn more about advanced analytics, features and shortcuts.Once you’re ready, learn more about advanced analytics, features and shortcuts.Once you’re ready, learn more about </p>
                        </div>
                        <Button class={'md primary'} >Hakkında daha fazlası</Button>
                    </div>
                </div>


                {/* Categories */}


                <div className='flex gap-4 flex-col'>
                    <h5 className='text-sm font-medium text-primary-700'>Busbar Sistemleri Kategorileri</h5>

                    <div className='grid grid-cols-2 gap-6'>
                        {new Array(5).fill(0).map((item, index) => <Product imageSrc={dummyImg} title='Busbar Sistemleri Genel Bilgi' supportingText='The latest industry news, updates and info.The latest industry news.' />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
