"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../public/images/Logo/logo.svg";
import MenuData from "../../data/Menu/footer";
const  Message = require("../../data/Footer");
import LeftSideImage from "../../public/images/Footer/footer-left.png";
import RightSideImage from "../../public/images/Footer/footer-right.png";

const Footer = () =>{
    
return (
    <>
        <footer className="footer-sec position-relative def-sty">
            <Image src={LeftSideImage} alt="Left Img" className="footer-left-img" />
            <div className="container footer-top d-flex flex-wrap">
                <div className="footer-left d-flex flex-wrap">
                    {
                        MenuData.map( (menuItem,menuIndex) =>(
                            <div className={`content ${ menuItem.class } `} key={menuItem.id}>
                                <h3>{menuItem.title}</h3>
                                <ul className={`sub-menu `}>
                                {
                                    menuItem.submenu ?
                                        menuItem.submenu.map( (subMenuItem,menuIndex) =>(
                                            <li><Link href={subMenuItem.path?subMenuItem.path:"/"} key={subMenuItem.id}>{subMenuItem.title}</Link></li>
                                        )
                                    ): ""
                                }
                                </ul>
                            </div>
                        )
                    )}
                </div>
                <div className="footer-right text-center d-flex align-items-center">
                    <div>
                        <Link href="/" className="f_logo">
                            <Image src={Logo} alt="Logo" className="w-full" width={150} height={150} />
                        </Link>
                        <Link href="/" className="links">
                            {Message.FOOTER_READY_TO_GROW}
                        </Link>
                        <h4>{Message.FOOTER_CONTACT_US_TODAY}</h4>
                        <button  className="flex cursor-pointer items-center justify-center rounded-full btn">{Message.FOOTER_GET_STARTED}
                        </button>
                    </div>
                </div>
            </div>

           <div className="container btm-footer">
            <div className="d-flex align-items-center justify-content-between">
                    <p>© 2023 Blue Wave </p>
                    <p><Link href="/">Privacy</Link></p>
                </div>
           </div>

            <Image src={RightSideImage} alt="Right Img" className="footer-right-img" />
        </footer>
    </>
)

};

export default Footer;