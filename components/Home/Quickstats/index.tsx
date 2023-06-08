'use client';
import Image from "next/image";
import CountUp from 'react-countup';
import Link from "next/link";
import RightImage from "../../../public/images/Quickstats/number.png";
const  Message = require("../../../data/Home/Quickstats");

const Quickstats = () =>{
    return (
        <>
            <div className="quick-stats-section def-sty">
                <div className="container">
                    <div className="row">
                        <div className="number-count-sec d-flex flex-wrap justify-content-between wow fadeInUp">
                            <div className="tweenty-number">
                                <CountUp 
                                    className="custom-count"
                                    start={0}
                                    end={Message.YEAR_BUSINESS_NUMBER}    
                                    useEasing={true}
                                    prefix=""
                                    suffix={Message.YEAR_BUSINESS_AFTER}
                                />
                                <h5>{Message.YEAR_BUSINESS_TITLE}</h5>
                            </div>
                            <div className="seventy-number">
                                <CountUp 
                                    className="custom-count"
                                    start={0}
                                    end={Message.IMPRESSIONS_NUMBER}     
                                    useEasing={true}
                                    prefix=""
                                    suffix={Message.IMPRESSIONS_AFTER}
                                />
                                <h5>{Message.IMPRESSIONS_TITLE}</h5>
                            </div>
                            <div className="two-thousand-number">
                                <CountUp 
                                    className="custom-count"
                                    start={0}
                                    end={Message.TWOTHOUSAND_NUMBER}  
                                    useEasing={true}
                                    prefix=""
                                    suffix={Message.TWOTHOUSAND_AFTER}
                                />
                                <h5>{Message.PROJECT_TITLE}</h5>
                            </div>
                            <div className="two-thousand-number">
                                <CountUp 
                                    className="custom-count"
                                    start={0}
                                    end={Message.PROJECT_NUMBER}   
                                    useEasing={true}
                                    prefix=""
                                    suffix=""
                                />
                                <h5>{Message.SPECIAL_TITLE}</h5>
                            </div>
                        </div>
                        <div className="quick-img-sec row">
                            <div className="col-lg-6 graph-txt wow fadeInLeft">
                                <h6>{Message.QUICK_TITLE}</h6>
                                <h3>{Message.QUICK_SUB_TITLE}</h3>
                                <p>{Message.QUICK_CONTENT}</p>
                                <Link href="/" className="btn btn-line">{Message.QUICK_BTN}</Link>
                            </div>
                            <div className="col-lg-6 graph-img">
                                <Image src={RightImage} 
                                    alt="Graph Img" 
                                    className="client-img" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Quickstats;