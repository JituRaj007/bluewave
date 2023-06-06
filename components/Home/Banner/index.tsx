"use client";
import Image from "next/image";
import Link from "next/link";
import LeftSideImage from "../../../public/images/Banner/banner-left.png";
import RightSideImage from "../../../public/images/Banner/banner-right.png";
import ArrowImg from "../../../public/images/Banner/banner-arrow.png";
const Message = require("../../../data/Home/Banner");
const Banner = () => {
    return(
        <>
            <div className="banner-section d-flex align-items-center justify-content-center text-center pb-5">
            <Image src={LeftSideImage} alt="Left Img" className="banner-left-img" />
            <Image src={RightSideImage} alt="Right Img" className="banner-right-img" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">                            
                            <div className={"wow fadeInUp banner-text"} >
                                <h1 className="">{Message.TITLE}</h1>
                                <p>{Message.FIRST_CONTENT}<br />{Message.SECOND_CONTENT}</p>
                                <Link href="/" className="btn" >{Message.BTN}</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="scroll-down-arrow">
			        <Link href="#digital-marketing" ><Image src={ArrowImg} alt="Right Img" className="Arrow Img" /></Link> 
                </div>
            </div>
        </>
    )
}; 
export default Banner;