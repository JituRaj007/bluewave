"use client";
import Image from "next/image";
import DigitalImg from "../../../public/images/Digitalmarketing/digital_marketing.png";
const Message = require("../../../data/Blogcontent/Content");
const BlogFullWidth = () => {
    return(
        <>
            <div className="full-width-sec" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2  className="wow fadeInUp">{Message.FULL_WIDTH_CONTENT_TITLE}</h2>
                            <Image src={DigitalImg}
                                alt="Full Img"
                                width={500}
                                height={500}  className="wow fadeInUp" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default BlogFullWidth;