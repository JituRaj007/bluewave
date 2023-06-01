import { getSinglePage } from "@/lib/contentParser";
//import similerItems from "@/lib/utils/similarItems";
import { notFound } from "next/navigation";
import { Post } from "../../../types/posts";
import Image from "next/image";
import BackgroundImg from "../../../public/images/BlogDetail/palmtree.png"; 
import Casestudy from '@/components/Home/Casestudy';
import BlogIcon from '@/components/BlogDetail/Icon';
import BlogForm from '@/components/BlogDetail/Form';
import BlogLink from '@/components/BlogDetail/Link';
import BlogFullWidth from '@/components/BlogDetail/FullWidth';
const Message = require("../../../data/Blogcontent/Content");

export const generateStaticParams: () => { single: string }[] = () => {
  const posts: Post[] = getSinglePage('blog');

  const paths = posts.map((post) => ({
    single: post.slug!,
  }));

  return paths;
};

const PostSingle = ({ params }: { params: { single: string } }) => {
    const posts: Post[] = getSinglePage('blog');
    posts[0].notFound && notFound();
    const post = posts.filter((page) => page.slug === params.single)[0];
    !post && notFound();

    const { frontmatter, content } = post;
    const {
        title,
        sub_title,
        description,
        image,
    } = frontmatter;
    //const similarPosts = similerItems(post, posts, post.slug!);

    return (
        <>
            <main className="main inner" >
                <div className="banner-sec" style={{ backgroundImage: `url(${BackgroundImg.src})`, width: '100%', height: '100%' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>{title}</h1>
                                <p>{Message.BANNER_TITLE}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-sec def-sty">
                    <div className="container container-sm"> 
                        <div className="row">
                            <div className="col-12">
                                <h2>{sub_title}</h2>
                                <Image src={image?image:""} alt="Blog Detail Img" width={500} height={500} />
                                <p>{Message.BANNER_CONTENT}{Message.BANNER_CONTENT}</p> 
                                <p>{Message.BANNER_CONTENT}</p>
                                <p>{Message.BANNER_CONTENT}</p>
                                <p>{Message.BANNER_CONTENT}</p>  
                            </div>
                        </div>
                    </div>
                </div>
                <Casestudy />
                <BlogIcon />
                <BlogForm />
                <BlogLink />
                <BlogFullWidth />
            </main>
        </>
    );
};

export default PostSingle;
