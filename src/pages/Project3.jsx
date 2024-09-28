import { Button, Container } from 'react-bootstrap';
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import NextArrow from '../assets/images/Next-arrow.png';
import PrevArrow from '../assets/images/Previous-arrow.png';
import Layout from '../component/Layout';
import { useColor } from '../store';
import { Slide1, Slide2, Slide3 } from './project3/Slides';
import './Slides.css';
import { useEffect } from 'react';
const Project3 = () => {
    const { bgColor, setBGColor, } = useColor();
    useEffect(() => {
        setBGColor("#E6E4D8")
    }, [])

    const SlideChange = (swiper) => {
        const slideIndex = swiper.activeIndex;
        if (slideIndex === 0) {
            setBGColor("#E6E4D8")
        }
        if (slideIndex === 1) {
            setBGColor('#F5F4F0 ')
        }
        if (slideIndex === 2) { setBGColor('#DFE2DB ') }

    };

    return (
        <div style={{ backgroundColor: bgColor, transition: "ease-in" }} className={`project13`}>
            <Layout>
                <Container className=' d-flex justify-content-center'>
                    <Button className='bg-transparent PrevArrow pagination-arrow border-0'>
                        <img
                            src={PrevArrow}
                            className=' d-none d-md-block'
                            alt="PrevArrow"
                        />
                        <i className="fa-solid fa-arrow-left text-black d-block d-md-none"></i>
                    </Button>

                    <Swiper
                        modules={[Navigation, EffectFade]}
                        spaceBetween={50}
                        slidesPerView={1}
                        effect="fade"
                        speed={300}

                        navigation={{ nextEl: ".NextArrow", prevEl: ".PrevArrow" }}

                        onSlideChange={SlideChange}
                    >
                        <SwiperSlide>
                            <div className="custom">
                                <Slide1 />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="custom">
                                <Slide2 />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="custom">
                                <Slide3 />
                            </div>
                        </SwiperSlide>



                    </Swiper>

                    <Button className='bg-transparent NextArrow pagination-arrow border-0' >
                        <img
                            src={NextArrow}
                            className=" d-md-block d-none "
                            alt="NextArrow"
                        />
                        <i className="fa-solid fa-arrow-right text-black d-md-none d-block"></i>
                    </Button>

                </Container>
            </Layout>
        </div >
    );
}

export default Project3;