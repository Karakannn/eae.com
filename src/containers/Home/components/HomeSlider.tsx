import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slide1 from '@assets/dummy/slide1.mp4';
import slide2 from '@assets/dummy/slide2.mp4';
import slide3 from '@assets/dummy/slide3.mp4';
import slide4 from '@assets/dummy/slide4.jpg';
import slide5 from '@assets/dummy/slide5.mp4';
import Button from "@components//UI/Button/Button";

export default function HomeSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="p-7 pt-2 mx-auto">

            <Slider className="rounded-md overflow-hidden"  {...settings}>

                <section className="relative h-[560px]">
                    <video className="min-w-full  min-h-full brightness-[0.7]  absolute object-cover" src={slide2} autoPlay muted loop></video>
                    <div className="relative max-w-lg h-full   pl-20  flex flex-col justify-center items-start">

                        <h1 className="text-4xl font-medium text-white">Etkileşimli Web Sitemiz Yayında</h1>
                        <h3 className="text-md font-light text-white pt-2">Yüksek akımların (trafo-pano bağlantılarında, kolon hatlarında, fabrikaların iç enerji dağıtımında) taşınması, dış ortamlarda, galeri geçişlerinde, kimyasal tesislerde, liman uygulamalarında, tünellerde kullanılması gibi birçok avantaj içermektedir.</h3>
                        <div className="flex gap-4 pt-6">
                            <Button class={"custom-btn-md btn-standard-secondary"}>Detay</Button>
                            <Button class={"custom-btn-md btn-standard-primary"}>Detay</Button>
                        </div>
                    </div>
                </section>


                <section className="relative h-[560px]">
                    <video className="min-w-full min-h-full brightness-[0.8] absolute object-cover" src={slide1} autoPlay muted loop></video>
                    <div className="relative max-w-lg h-full  pl-20  flex flex-col justify-center items-start">

                        <h1 className="text-4xl font-medium text-white">Etkileşimli Web Sitemiz Yayında</h1>
                        <h3 className="text-md font-light text-white pt-2">Yüksek akımların (trafo-pano bağlantılarında, kolon hatlarında, fabrikaların iç enerji dağıtımında) taşınması, dış ortamlarda, galeri geçişlerinde, kimyasal tesislerde, liman uygulamalarında, tünellerde kullanılması gibi birçok avantaj içermektedir.</h3>
                        <div className="flex gap-4 pt-6">
                            <Button class={"custom-btn-md btn-standard-secondary"}>Detay</Button>
                            <Button class={"custom-btn-md btn-standard-primary"}>Detay</Button>
                        </div>
                    </div>
                </section>


                <section className="relative h-[560px]">
                    <video className="min-w-full min-h-full brightness-[0.8] absolute object-cover" src={slide3} autoPlay muted loop></video>
                    <div className="relative max-w-lg h-full  pl-20  flex flex-col justify-center items-start">

                        <h1 className="text-4xl font-medium text-white">Etkileşimli Web Sitemiz Yayında</h1>
                        <h3 className="text-md font-light text-white pt-2">Yüksek akımların (trafo-pano bağlantılarında, kolon hatlarında, fabrikaların iç enerji dağıtımında) taşınması, dış ortamlarda, galeri geçişlerinde, kimyasal tesislerde, liman uygulamalarında, tünellerde kullanılması gibi birçok avantaj içermektedir.</h3>
                        <div className="flex gap-4 pt-6">
                            <Button class={"custom-btn-md btn-standard-secondary"}>Detay</Button>
                            <Button class={"custom-btn-md btn-standard-primary"}>Detay</Button>
                        </div>
                    </div>
                </section>

                <section className="relative h-[560px]">

                    <img src={slide4} className="min-w-full brightness-[0.8]  min-h-full absolute object-cover" alt="" />

                    <div className="relative max-w-lg h-full  pl-20  flex flex-col justify-center items-start">

                        <h1 className="text-4xl font-medium text-white">Etkileşimli Web Sitemiz Yayında</h1>
                        <h3 className="text-md font-light text-white pt-2">Yüksek akımların (trafo-pano bağlantılarında, kolon hatlarında, fabrikaların iç enerji dağıtımında) taşınması, dış ortamlarda, galeri geçişlerinde, kimyasal tesislerde, liman uygulamalarında, tünellerde kullanılması gibi birçok avantaj içermektedir.</h3>
                        <div className="flex gap-4 pt-6">
                            <Button class={"custom-btn-md btn-standard-secondary"}>Detay</Button>
                            <Button class={"custom-btn-md btn-standard-primary"}>Detay</Button>
                        </div>
                    </div>
                </section>

                <section className="relative h-[560px] rounded-md overflow-hidden">
                    <video className="min-w-full min-h-full brightness-[0.8] absolute object-cover" src={slide5} autoPlay muted loop></video>
                    <div className="relative max-w-lg h-full  pl-20  flex flex-col justify-center items-start">

                        <h1 className="text-4xl font-medium text-white">Etkileşimli Web Sitemiz Yayında</h1>
                        <h3 className="text-md font-light text-white pt-2">Yüksek akımların (trafo-pano bağlantılarında, kolon hatlarında, fabrikaların iç enerji dağıtımında) taşınması, dış ortamlarda, galeri geçişlerinde, kimyasal tesislerde, liman uygulamalarında, tünellerde kullanılması gibi birçok avantaj içermektedir.</h3>
                        <div className="flex gap-4 pt-6">
                            <Button class={"custom-btn-md btn-standard-secondary"}>Detay</Button>
                            <Button class={"custom-btn-md btn-standard-primary"}>Detay</Button>
                        </div>
                    </div>
                </section>


            </Slider>

        </div>

    )
}
