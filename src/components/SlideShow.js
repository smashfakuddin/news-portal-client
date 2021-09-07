import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerOne from '../img/banner_one.jpg';
import bannerThree from '../img/bannere_three.jpg'
import bannerTwo from '../img/banner_two.jpg';

const slideData = [
    {
        title: 'PEC exam on short syllabus likely in Nov or Dec: State minister',
        img: bannerOne
    },
    {
        title: 'Covid-19 Countrywide mass vaccination drive for 2nd dose begins',
        img: bannerTwo
    },
    {
        title: 'Simply reopening schools is not enough',
        img: bannerThree
    },
]

const SlideShow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} className='w-2/3 mx-24 my-6'>

            {slideData.map(slide =>
                <div className='mt-7 cursor-pointer'>
                    <img src={slide.img} alt="" className='mx-auto' />
                    <h3 className='text-center font-semibold text-xl mt-3 text-gray-600'>{slide.title}</h3>
                </div>
            )}

        </Slider>
    );
};

export default SlideShow;