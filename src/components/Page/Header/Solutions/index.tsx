import Button from "@components//UI/Button/Button"
import dataCenter from '@assets/dummy/dataCenter.webp'
import health from '@assets/dummy/health.webp'
import homeElectric from '@assets/dummy/homeElectric.webp'
import oilGas from '@assets/dummy/oilGas.webp'
import workShop from '@assets/dummy/workShop.webp'

export default function Solutions() {

    const solutionItems = [
        {
            name: 'Veri Merkezi',
            solutionImg: dataCenter,
            links: [
                { name: 'Veri Merkezi Çözümleri', link: '' },
                { name: 'Veri Merkezi Kabinetleri', link: '' }
            ]
        },
        {
            name: 'Küçük Atölye',
            solutionImg: workShop,
            links: [
                { name: 'Küçük Atölye Çözümleri', link: '' }
            ]
        },
        {
            name: 'Sağlık Kompleksleri',
            solutionImg: health,
            links: [
                { name: 'Sağlık Kompleksleri Çözümleri', link: '' }
            ]
        },
        {
            name: 'Petrol Gaz',
            solutionImg: oilGas,
            links: [
                { name: 'Petrol & Gaz Çözümleri', link: '' }
            ]
        },

        {
            name: 'Elektrikli Araç',
            solutionImg: homeElectric,
            links: [
                { name: 'Elektrikli Araç Şarj İstasyonu Çözümleri', link: '' }
            ]
        },

    ]

    return (
        <div className="flex shadow-lg ring-1 ring-gray-900/5">
            {solutionItems.map((item, index) => {

                return (
                    <div
                        style={{
                            backgroundImage: `url(${item.solutionImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center right 15%',
                        }}
                        className=" relative flex flex-1 flex-col justify-end items-start gap-4 h-[440px] p-6"
                        key={index}
                    >

                        <div className="absolute left-0 top-0 w-full h-full bg-gray-900 opacity-20" />
                        {item.links.map((item) => <Button class="md z-10 text-white text-left font-medium standard primary">{item.name}</Button>)}

                    </div>
                )
            })}
        </div >
    )
}
