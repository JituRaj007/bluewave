"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountUp from 'react-countup';
import React, { Component } from "react";
import Image from "next/image";
import blog from "../../../data/Home/Blog";
import Link from "next/link";
import ArrowLeftImg from "../../../public/images/Blog/arrow-left-slick.png";
import ArrowRightImg from "../../../public/images/Blog/arrow-right-slick.png";

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
    slidesToShow: 3,
    // centerMode: true,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    speed: 500,
    nextArrow: <div><Image src={ArrowRightImg} alt="Blog Img" width={100} height={200} /></div>,
    prevArrow: <div><Image src={ArrowLeftImg} alt="Blog Img" width={100} height={200} /></div>,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
    
};

const Blog = () =>{
    
    return (
        <div className="blog-section def-sty">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <h3>Blog</h3>
                        <div className="slider-sec ">
                            <Slider {...settings}>
                                {blog.map((items, i) => (
                                    <div className="content service-block-con" key={i}>
                                        
                                        <Image src={items.image} alt="Blog Img" width={100} height={200} />
                                        <h5>{items.title}</h5>
                                        <p>{items.content}</p>
                                        <Link href={items.link} className="service-btn" >Learn More</Link>
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
export default Blog;