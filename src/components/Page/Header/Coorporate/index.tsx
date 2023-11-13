import NavItem from "@components//UI/NavItem"
import panorama from '@assets/dummy/panorama.png'
import video from '@assets/dummy/video.png'
import overlay from '@assets/dummy/overlay.png'
import Button from "@components//UI/Button/Button"


export default function CoorporateHeader() {

    const aboutUs = [
        { name: 'EAE Hakkında', href: '#' },
        { name: 'Grup Şirketler', href: '#' },
        { name: 'Referanslar', href: '#' },
        { name: 'Sertifikalarımız', href: '#' },
        { name: 'Yönetim Sistemleri Politikası', href: '#' },
        { name: 'İş Sürekliliği Politikası', href: '#' },
        { name: 'Sosyal Sorumluluk', href: '#' },
        { name: 'Bilgi Toplumu Hizmetleri', href: '#' },
    ]

    const mediaCenter = [
        { name: 'Kurumsal Kimlik', href: '#' },
        { name: 'Müşteri Memnuniyet Anketi', href: '#' },
    ]

    const personalInfo = [
        { name: 'Kişisel Verilen Korunması, İşlenmesi ve Gizlilik Politikası', href: '#' },
        { name: 'Kişisel Verilere İlişkin Aydınlatma Metni', href: '#' },
        { name: 'KVKK Başvuru Formu', href: '#' },
    ]

    const rightItems = [
        { title: 'EAE Blog', supportingText: 'Jump right in — get an overview of the basics and get started on building.', actions: '', img: panorama },
        { title: 'EAE Yayınları', supportingText: 'Once you’re ready, learn more about advanced analytics, features and shortcuts.', actions: '', img: video },
        { title: '#sürdürülebilirgelecek', supportingText: 'Once you’re ready, learn more about advanced analytics, features and shortcuts.', actions: '', img: overlay },
    ]


    const RightItem = (data: { title: string, supportingText: string, img: string, actions: string }) => {
        return (
            <div className='flex gap-5 py-1' >
                <img className="max-w-[176px] h-auto" src={data.img} alt="" />
                <div className='flex flex-col items-start gap-3'>

                    <div className='flex flex-col gap-1'>
                        <h5 className='text-md text-gray-700 font-semibold'>{data.title}</h5>
                        <p className='text-sm text-gray-600 font-regular'>{data.supportingText}</p>
                    </div>
                    <Button class={'md primary'} >Hakkında daha fazlası</Button>
                </div>
            </div >
        )
    }

    return (
        <div className="flex  bg-gray-50 shadow-lg ring-1 ring-gray-900/5">
            <div className="flex p-6   gap-4 bg-white">

                <div className="flex flex-col flex-1">
                    <h5 className="pl-3 pb-3 text-md font-medium text-primary-600">Hakkımızda</h5>
                    {aboutUs.map((item) => <NavItem title={item.name} />)}

                </div>

                <div className="flex flex-col gap-4 flex-1">

                    <div className="flex  flex-col">
                        <h5 className="pl-3 pb-3 text-md font-medium text-primary-600">Medya Merkezleri</h5>
                        {mediaCenter.map((item) => <NavItem title={item.name} />)}
                    </div>

                    <div className="flex flex-col">
                        <h5 className="pl-3 pb-3 text-md font-medium text-primary-600">Kişisel Verilerin Korunması</h5>
                        {personalInfo.map((item) => <NavItem title={item.name} />)}
                    </div>

                </div>
            </div>

            <div className=" max-w-[560px] flex flex-col gap-4 p-6">
                {rightItems.map((item) => <RightItem {...item} />)}
            </div>
        </div >
    )
}
