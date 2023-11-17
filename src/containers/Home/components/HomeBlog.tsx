import BlogPost from '@components//UI/BlogPost'
import Button from '@components//UI/Button/Button'
import SectionHeader from '@components//UI/SectionHeader/SectionHeader'
import React from 'react'

export default function HomeBlog() {

    const posts = [
        {
            category: 'Teknik',
            img: 'https://picsum.photos/500/600',
            title: 'Kalibrasyon Nedir?',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa saepe distinctio molestiae, vero repudiandae quibusdam corporis laborum voluptatem alias quae!'
        },
        {
            category: 'Teknik',
            img: 'https://picsum.photos/500/600',
            title: 'Kalibrasyon Nedir?',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa saepe distinctio molestiae, vero repudiandae quibusdam corporis laborum voluptatem alias quae!'
        },
        {
            category: 'Teknik',
            img: 'https://picsum.photos/500/600',
            title: 'Kalibrasyon Nedir?',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa saepe distinctio molestiae, vero repudiandae quibusdam corporis laborum voluptatem alias quae!'
        }
    ]
    
    return (
        <section className='container mx-auto'>
            <div className="page-vertical-padding">
                <div className='py-24 flex flex-col gap-14'>

                    <SectionHeader
                        title='EAE Blog'
                        subheading='Blog'
                        supportingText='BIM, varlıkların tasarlanması, yaratılması ve 
                        sürdürülmesi için daha verimli yöntemlerin kilidini açan dijital 
                        teknolojilerin desteklediği erken tedarik zinciri katılımını kolaylaştıran 
                        işbirlikçi bir çalışma şeklidir.'>
                        <div className='flex gap-4 items-center'>
                            <Button class='custom-btn-md btn-standard-link-colored' iconRight='narrow-right'>Tüm Çözümleri Görüntüle</Button>
                            <Button class='custom-btn-md btn-standard-secondary'>3D Tesis Tasarımı</Button>
                        </div>
                    </SectionHeader>


                    <div className='grid grid-cols-3 gap-8'>
                        {posts.map((item, index) => {

                            return (
                                <div key={index} className='grid-rows-1'>
                                    <BlogPost {...item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
