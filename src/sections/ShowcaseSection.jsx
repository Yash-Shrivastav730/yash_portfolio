import React, {useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
   const sectionRef=useRef(null);
   const project1Ref=useRef(null);
   const  project2Ref=useRef(null);

   useGSAP(()=>{
       const projects=[project1Ref.current,project2Ref.current];
       projects.forEach((card,index)=>{
           gsap.fromTo(
               card,
               {
                   y:50,opacity:0
               },
               {
                   y:0,opacity:1,delay:0.3*(index+1),
                   scrollTrigger:{
                       trigger:card,
                       start: 'top bottom-=100'
                   }
               }
           )
       })
   gsap.fromTo(sectionRef.current, {opacity:0}, {opacity:1,
   duration:1.5})
   }, []);

   return (

        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaseLayout">
                    {/*LEFT */}
                    <div className="first-project-wrapper w-full md:w-1/2" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/Project01.png" alt="Android" />
                        </div>
                    </div>
                    <div className="text-content">
                        <h2>Check out my MIT app profile to view and try
                        android projects.</h2>
                        <p className="text-white-50md:text-xl">
                            https://ai2.appinventor.mit.edu/#5801729489502208
                        </p>
                    </div>
                    {/*RIGHT */}
                    <div className="project-list-wrapper w-full md:w-1/2 overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/Project02.png" alt="Blog" />
                            </div>
                            <h2>
                                Check out my cool tech related blogs!
                            </h2>
                            <p className="text-white-50md:text-xl">
                                https://www.blogger.com/u/3/blog/posts/4774895307968451608
                            </p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
