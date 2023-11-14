import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slide1 from '@assets/dummy/slide1.mp4';
import slide2 from '@assets/dummy/slide2.mp4';
import slide3 from '@assets/dummy/slide3.mp4';
import slide4 from '@assets/dummy/slide4.jpg';
import slide5 from '@assets/dummy/slide5.mp4';

export default function HomeSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider className="max-w-7xl pt-4 mx-auto rounded-md overflow-hidden" {...settings}>
            <section className="relative h-[560px]">
                <video className="min-w-full min-h-full absolute object-cover" src={slide1} autoPlay muted loop></video>
                <div className="z-50">
                    <h1 className="text-lg text-white">Etkileşimli Web Sitemiz Yayında</h1>
                    <h3 className="text-lg text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ut, eius alias earum eum possimus quam hic. Officiis, iusto animi.</h3>

                    <div className="flex gap-4">
                        
                    </div>
                </div>
            </section>
          

            <section className="relative h-[560px]">
                <video className="min-w-full min-h-full absolute object-cover" src={slide2} autoPlay muted loop></video>
                <div className="z-50">
                    <h1 className="text-lg text-white">full Hero Video</h1>
                    <h3 className="text-lg text-white">with TailwindCSS</h3>
                </div>
            </section>


            <section className="relative h-[560px]">
                <video className="min-w-full min-h-full absolute object-cover" src={slide3} autoPlay muted loop></video>
                <div className="z-50">
                    <h1 className="text-lg text-white">full Hero Video</h1>
                    <h3 className="text-lg text-white">with TailwindCSS</h3>
                </div>
            </section>

            <section className="relative h-[560px]">

                <img src={slide4} className="min-w-full min-h-full absolute object-cover" alt="" />

                <div className="z-50">
                    <h1 className="text-lg text-white">full Hero Video</h1>
                    <h3 className="text-lg text-white">with TailwindCSS</h3>
                </div>
            </section>

            <section className="relative h-[560px]">
                <video className="min-w-full min-h-full absolute object-cover" src={slide5} autoPlay muted loop></video>
                <div className="z-50">
                    <h1 className="text-lg text-white">full Hero Video</h1>
                    <h3 className="text-lg text-white">with TailwindCSS</h3>
                </div>
            </section>

          
        </Slider>
    )
}
