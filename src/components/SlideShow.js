import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



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
            <div className='mt-7'>
                <img src="https://image.shutterstock.com/image-vector/vector-illustration-circuit-board-hexagons-260nw-1186861738.jpg" alt="" />
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis ratione, blanditiis ipsam quo natus!z</h3>
            </div>
            <div>
                <img src="https://image.shutterstock.com/image-vector/vector-illustration-circuit-board-hexagons-260nw-1186861738.jpg" alt="" />
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ea assumenda alias, voluptas architecto</h3>
            </div>
            <div>
                <img src="https://image.shutterstock.com/image-vector/vector-illustration-circuit-board-hexagons-260nw-1186861738.jpg" alt="" />
                <h3> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aspernatur explicabo mollitia. Provident </h3>
            </div>
        </Slider>
    );
};

export default SlideShow;