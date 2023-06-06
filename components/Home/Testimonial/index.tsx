"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountUp from 'react-countup';
import React, { Component } from "react";
import Image from "next/image";
import testimonial from "../../../data/Home/Testimonial";

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
    dots: true,
    infinite: true,
    slidesToShow: 1,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
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
                arrows: false,
                dots: false
            }
        }
    ]
    
};

const Testimonial = () =>{
    
    return (
        <div className="testimonial-section def-sty">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className=" slider-sec ">
                            <Slider {...settings}>
                                {testimonial.map((items, i) => (
                                    <div className="content" key={i}>
                                        <p>{items.content}</p>
                                        <em>{items.authtitle}</em>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Testimonial;