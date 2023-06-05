"use client";
import Image from "next/image";
import IconContent from "../../../data/Blogcontent/Icon";
const BlogIcon = () => {
    return(
        <>
            <div className="icon-sec def-sty">
                <div className="container">
                <h2>H2 Title</h2>
                        
                    <div className="row text-center">
                        {
                            IconContent.map( (item,index) => (
                                <div className="col-lg-4 col-sm-6" key={item.id} >
                                    <Image 
                                        src={item.image}   
                                        width={150}
                                        height={150}
                                        alt="Icon Img" />
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>  
                            ))
                        }    
                    </div>
                </div>    
            </div>
        </>
    )
};
export default BlogIcon;