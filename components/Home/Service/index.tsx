'use client';
import { log } from "console";
import Image from "next/image";
import Sercvice from "../../../data/Home/Service";
import Link from "next/link";

const OurClient = () =>{
    return (
        <>
            <div className="service-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Some of our clients</h2>
                            <div className="service-cont">
                                {
                                    Sercvice.map( (serviceSec, index) => (
                                        <div key={serviceSec.id} className={` inner-service-sec ${ serviceSec.class } `}>
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
                                        </div>
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

export default OurClient;