"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountUp from 'react-countup';
import React, { Component } from "react";
import Image from "next/image";

const postData = [
    {
        heading: 'Brand design for a computer brand.',
        imgSrc: '/images/other/Layer36.png',
    },
    {
        heading: 'Mobile app 3d wallpaper.',
        imgSrc: '/images/other/Layer6.png',
    },
    {
        heading: 'Brand design for a computer brand 1.',
        imgSrc: '/images/other/Layer37.png',
    },
    {
        heading: 'Mobile app 3d wallpaper 2.',
        imgSrc: '/images/other/Layer46.png',
    }
]


// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 500,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
    
};

const SliderData = () =>{
    
    return (
        
        <div className="bg-bgblue py-20 marginFeature bg-featured">
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                <div className="text-center pt-48 pb-10 md:pt-96">
                    <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">Featured works.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">Featured works.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-48 my-2">Featured works.</h3>
                </div>
                <div className=" slider-sec ">
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='bg-transparent m-3 pb-12 my-10 rounded-3xl'>
                                    <Image src={items.imgSrc} alt="gaby" width={636} height={620} className="rounded-2xl" />
                                    <div className="w-345">
                                        <h4 className='sm:text-5xl font-bold sm:pt-6 text-center sm:text-start mt-10 text-white'>{items.heading}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="counter">
                    <CountUp end={100} />
                    <CountUp 
                        className="custom-count"
                        start={0}
                        end={200}
                        
                        useEasing={true}
                        prefix=""
                        suffix="+"
                     />
                </div>
            </div>
        </div>
    )
};
export default SliderData;
