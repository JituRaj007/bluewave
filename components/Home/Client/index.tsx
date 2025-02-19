'use client';
import { log } from "console";
import Image from "next/image";
import ClientLogo from "../../../data/Home/Client";

const OurClient = () =>{
    return (
        <>
            <div className="our-client-section text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="digital-marketing-con">
                                <h2 className="wow fadeInUp">Some of our clients</h2>
                                <div className="client-img-sec">
                                    {
                                        ClientLogo.map( (logoInfo, index) => (
                                                <div key={logoInfo.id} className={` inner-client-img-sec wow fadeInLeft`}> 
                                                    {
                                                        logoInfo.section ? 
                                                            logoInfo.section.map( (imageUrl, imageIndex ) => (
                                                                   <div className="imgs-ico" key ={imageUrl.id}> <Image 
                                                                   src={imageUrl.image ? imageUrl.image : ''} 
                                                                   alt={imageUrl.title } 
                                                                   width={200}
                                                                   height={100}
                                                                   className={"wow fadeInUp client-img"}
                                                                   /></div>
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
            </div>
        </>
    )
};

export default OurClient;