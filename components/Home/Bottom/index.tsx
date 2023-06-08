'use client';
import Image from "next/image";
import Link from "next/link";
const  Message = require("../../../data/Home/Bottom");
import CaseStudyImage from "../../../public/images/Casestudy/case-study.png";
const Bottom = () =>{
    return(
        <>
            <div className="bottom-section def-sty">
                <div className="container">
                    <div className="row">
                        <div className="col-12 wow fadeInUp ">
                            <h3>{Message.TITLE}</h3>
                            <p>{Message.CONTENT_FIRST}</p>
                            <p>{Message.CONTENT_SECOND}</p>
                            <p>{Message.CONTENT_THIRD}</p>
                            <p>{Message.CONTENT_FOUR}</p>
                            <p>{Message.CONTENT_FIFTH}</p>
                            <p>{Message.CONTENT_SIX}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Bottom;