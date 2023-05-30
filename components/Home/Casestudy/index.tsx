'use client';
import Image from "next/image";
import Link from "next/link";
const  Message = require("../../../data/Home/Casestudy");
import CaseStudyImage from "../../../public/images/Casestudy/case-study.png";
const Casestudy = () =>{
    return(
        <>
            <div className="case-study-section def-sty">
                <div className="container">
                    <div className="row">
                        <div className="col-12"><h2>{Message.TITLE}</h2></div>
                        <div className="col-6">
                            <Image 
                                src={CaseStudyImage}
                                alt="Case Study Image" /> 
                        </div>
                        <div className="col-6">
                            <h6>{Message.RIGHT_TITLE}</h6>
                            <h3>{Message.RIGHT_SUB_TITLE}</h3>
                            <p>{Message.RIGHT_CONTENT}</p>
                            <Link href="/" className="btn btn-line">{Message.BTN}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Casestudy;