import Button from '@components//UI/Button/Button'
import SectionHeader from '@components//UI/SectionHeader/SectionHeader'
import interactiveWebsite from '@assets/dummy/interactive.png'

export default function InteractiveWebsite() {
    return (
        <section className='bg-white'>
            <div className='container mx-auto'>
                <div className='page-vertical-padding'>
                    <div className=' flex flex-col gap-14'>
                        <SectionHeader
                            title='Etkileşimli Web Sitesi'
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

                        <div className='flex justify-center'>
                            <img className='w-full' src={interactiveWebsite} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
