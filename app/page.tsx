import Hero from '../components/main/Hero';
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Testimonial from "@/components/main/Testimonial";
import DetailsComponents from '@/components/main/DetailsComponents';
import Achievements from '@/components/main/Achievements';

export default function Home() {
  return (
    <main className='h-full w-full'>
     <div className="flex flex-col gap-6"> {/*gap-20 */}
       <Hero/>
       <hr className='text-center mt-16 mx-28 border border-[purple]' />
       <DetailsComponents/>
       <hr className='text-center mt-2 mx-28 border border-[white]' />
       <Skills />
       <hr className='text-center mt-2 mx-28 border border-[purple]' />
       <Projects/>
       <hr className='text-center mt-2 mx-28 border border-[white]' />
       <Achievements />
       <hr className='text-center mt-2 mx-28 border border-[purple]' />
       <Testimonial/>
     </div>
    </main>
  );
}
