"use client";
import Image from "next/image";
import Link from "next/link";
import IconContent from "../../../data/Blogcontent/Icon";
const Message = require("../../../data/Blogcontent/Content");
const BlogLink = () => {
    return(
        <>
            <div className="link-sec def-sty" >
                <div className="container">
                    <h2>{Message.Link_TITLE}</h2>
                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                        
                        <Link href="/" className="btn btn-line" >{Message.Link_MENU1}</Link>
                        <Link href="/" className="btn btn-line" >{Message.Link_MENU2}</Link>
                        <Link href="/" className="btn btn-line" >{Message.Link_MENU3}</Link>
                        <Link href="/" className="btn btn-line selected">{Message.Link_MENU4}</Link>
                        <Link href="/" className="btn btn-line" >{Message.Link_MENU5}</Link>
                        <Link href="/" className="btn btn-line" >{Message.Link_MENU6}</Link>
                    </div>
                </div>
            </div>
        </>
    )
};
export default BlogLink;