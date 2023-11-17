import Button from '@components//UI/Button/Button'
import SectionHeader from '@components//UI/SectionHeader/SectionHeader'
import bimImg from '@assets/dummy/bim.png'

export default function BIMSolutions() {
    return (
        <section className='container mx-auto'>
            <div className="page-vertical-padding">
                <div className='py-24 flex flex-col gap-14'>
                    <SectionHeader
                        title='EAE BIM Çözümleri'
                        subheading='Yapı Bilgi Modelleme'
                        supportingText='BIM, varlıkların tasarlanması, yaratılması ve 
                        sürdürülmesi için daha verimli yöntemlerin kilidini açan dijital 
                        teknolojilerin desteklediği erken tedarik zinciri katılımını kolaylaştıran 
                        işbirlikçi bir çalışma şeklidir.'>
                        <div className='flex gap-4 items-center'>
                            <Button class='custom-btn-md btn-standard-link-colored' iconRight='narrow-right'>Tüm Çözümleri Görüntüle</Button>
                            <Button class='custom-btn-md btn-standard-secondary'>3D Tesis Tasarımı</Button>
                        </div>
                    </SectionHeader>

                    <div className='flex justify-center'>
                        <img src={bimImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
