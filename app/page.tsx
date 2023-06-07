
import Image from 'next/image';
import Slider from '@/components/Home/Slider';
import Banner from '@/components/Home/Banner';
import Digitalmarketing from '@/components/Home/Digitalmarketing';
import OurClient from '@/components/Home/Client';
import Service from '@/components/Home/Service';
import Quickstats from '@/components/Home/Quickstats';
import Testimonial from '@/components/Home/Testimonial';
import Casestudy from '@/components/Home/Casestudy';
import Blog from '@/components/Home/Blog';
import Bottom from '@/components/Home/Bottom';
export default function Home() {
  return (
	    <>
            <main className="main home">
                <Banner />
                <Digitalmarketing />
                <OurClient />
                <Service />
                <Quickstats />
                <Testimonial />
                <Casestudy />
                <Blog />
                <Bottom />
            </main>
        </>
    )
}
