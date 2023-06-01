"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuData from "../../data/Menu/header";
import Logo from "../../public/images/Logo/logo.svg";
const Header = () =>{

    // Sticky Navbar
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
        setSticky(true);
        } else {
        setSticky(false);
        }
    };

    // Navigation
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen);
    };
    
    const [openIndex, setOpenIndex] = useState(-1);
    const handleSubmenu = (index : any) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };

return (
    <>
    
        <header className={`header ${ sticky ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20" : "" }`}>
            <div className="container-fluid">
                <div className="relative d-flex justify-content-between align-items-center">
                    <div className="w-60 max-w-full logo-sec">
                        <Link href="/" className={`header-logo block w-full ${  sticky ? "" : "" } `} >
                            <Image src={Logo} width={150} height={150} alt="Logo" className="logo-img" />
                        </Link>
                    </div>
                    <div className="d-flex align-items-center relative">
                        <div>
                            <button onClick={navbarToggleHandler} id="navbarToggler" aria-label="Mobile Menu" className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden mobile-nav-menu" ></button>
                            <nav id="navbarCollapse" className={`navbar p-0 ${ navbarOpen ? "hover-open" : "hover-close" }`} >
                                <ul className="block lg:flex m-0 p-0">
                                    { MenuData.map( (navigationItem, index) =>  
                                        (
                                            <li key={navigationItem.id} className="group">
                                                {navigationItem.path ?
                                                    ( <Link href={navigationItem.path} key={navigationItem.id} className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 nav-link`} >{navigationItem.title}</Link> )
                                                    :
                                                    ( 
                                                        <>
                                                        <a onClick = {() => handleSubmenu(index) }  key={navigationItem.id} className="sub-menu flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0">
                                                            {navigationItem.title} 
                                                            <span className="pl-3">
                                                                <svg width="15" height="14" viewBox="0 0 15 14">
                                                                <path
                                                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                                                    fill="currentColor"
                                                                />
                                                                </svg>
                                                            </span>
                                                        </a>    
                                                        <div className={`child-nav-menu-sec submenu relative top-full  transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[750px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${ openIndex === index ? "block" : "hidden" }`}>
                                                        {
                                                            navigationItem.submenu? 
                                                                navigationItem.submenu.map( (submenuItem, index1) =>  
                                                                (
                                                                    <div className="sub-child-content" key={submenuItem.id} >
                                                                        <label className="sub-label">{ submenuItem.title }</label>
                                                                        {  
                                                                        submenuItem.childmenu
                                                                            ? submenuItem.childmenu.map( (childmenuItem, index2) =>  
                                                                            (
                                                                                
                                                                                    <Link href={childmenuItem.path?childmenuItem.path:''} className="nav-link block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3" key={childmenuItem.id} >{childmenuItem.title}</Link>
                                                                                
                                                                            )) 
                                                                            : 
                                                                            ''
                                                                        }
                                                                    </div>
                                                                ) )   
                                                            : ''
                                                        }
                                                                
                                                        </div>
                                                        </>
                                                    )
                                                }
                                            </li>
                                        ) ) 
                                    }
                                </ul>
                            </nav>
                        </div>
                        <div className="flex items-center justify-end pr-16 lg:pr-0">
                            <Link href="/" className="conatact-btn" >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
)

};

export default Header;