import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from './NavBar'
import Bounded from './Bounded'
import StarGrid from './StarGrid'
import heroImage from '../assets/video web-01.png'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

function Skill() {

    const containerforstar = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(
        () => {
            if (prefersReducedMotion) {
                gsap.set(
                    ".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow",
                    { opacity: 1 },
                );
                return;
            }

            const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

            tl.fromTo(
                ".hero__heading",
                { scale: 0.5 },
                { scale: 1, opacity: 1, duration: 1.4 },
            );

            tl.fromTo(
                ".hero__body",
                { y: 20 },
                { y: 0, opacity: 1, duration: 1.2 },
                "-=0.6",
            );

            tl.fromTo(
                ".hero__button",
                { scale: 1.5 },
                { scale: 1, opacity: 1, duration: 1.3 },
                "-=0.8",
            );
            tl.fromTo(
                ".hero__image",
                { y: 100 },
                { y: 0, opacity: 1, duration: 1.3 },
                "+=0.3",
            );
            tl.fromTo(
                ".hero__glow",
                { scale: 0.5 },
                { scale: 1, opacity: 1, duration: 1.8 },
                "-=1",
            );
        },
        { scope: containerforstar },
    );

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <Bounded className='text-center'>
                <div className='relative' ref={containerforstar}>
                    <StarGrid />
                    <h1 className='hero__heading text-balance text-5xl font-medium md:text-7xl'>
                        Transforming your digital visioon into reality
                    </h1>
                    <div className='hero__body mx-auto mt-6 max-w-md text-balance text-slate-300'>
                        "We specialize in crafting engaging videos and creating dynamic websites to enhance your digital presence."
                    </div>
                    <button className="hero__button mt-8 opacity-0 focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2">
                        Download
                    </button>
                    <div className='hero__image glass-container mt-16 w-fit opacity-0'>
                        <div className='hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter' />
                        <img className='rounded-lg' src={heroImage} alt="hero image" />
                    </div>
                </div>
            </Bounded>

            <Bounded>
                <div className='w-full'>
                    {/* <h1 className='absolute text-balance text-5xl font-medium md:text-7xl ml-5'>Web Development</h1> */}
                    {/* <div style={{ background: 'linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)' }} className=" max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"></div> */}
                    <div className='flex'>
                        <div className='flex flex-col relative w-1/12 pointer-events-none'>
                            <div className='mx-auto'>
                                <div className='inline-block rounded-full p-1' style={{ border: '2px solid rgba(255, 255, 255, 0.3)' }}></div>
                            </div>
                            <div className='w-[3px] mx-auto rounded' style={{ background: 'linear-gradient(transparent, #7C72FF 30%)', height: "72%" }}></div>
                            <div className='mx-auto my-3 '>
                                <span className='relative z-[11]'>
                                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className=" text-white">
                                        <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
                                    </svg>
                                    <span className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow " style={{ backgroundColor: 'var(--mktg-accent-primary)', filter: 'blur(17px)' }}></span>
                                </span>
                            </div>
                            <div style={{ background: 'linear-gradient(#7C72FF, #2DA44E 80%, #3FB950)' }} className='h-full w-[3px] rounded-full mx-auto'></div>
                        </div>
                        <div className='text-left w-11/12'>
                            <div className='relative z-1 mb-10'></div>
                            <h1 className='relative z-2 mb-2 font-[600] tracking-tight text-7xl leading-[76px]'>Web Development</h1>
                        </div>
                    </div>
                </div>
            </Bounded>
        </div>
    )
}

export default Skill