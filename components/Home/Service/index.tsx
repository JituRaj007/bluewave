'use client';
import { log } from "console";
import Image from "next/image";
import Sercvice from "../../../data/Home/Service";
import Link from "next/link";

const Service = () =>{
    return (
        <>
            <div className="service-section def-sty">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Our Services</h3>
                            <div className="service-cont">
                                {
                                    Sercvice.map( (serviceSec, index) => (
                                        <>
                                            {
                                                serviceSec.section ? 
                                                serviceSec.section.map( (serviceInfo, imageIndex ) => (
                                                        <div className="service-block-con" key={serviceInfo.id}>
                                                            <h4>{serviceInfo.title}</h4>
                                                            <p>{serviceInfo.content}</p>
                                                            <Link href={serviceInfo.link?serviceInfo.link:''} className="service-btn" >Learn More</Link>
                                                        </div>
                                                    ) 
                                                    )
                                                : ''
                                            }
                                        </>
                                        ) 
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Service;