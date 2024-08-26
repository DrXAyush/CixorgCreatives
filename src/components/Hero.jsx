import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from './NavBar'
import Bounded from './Bounded'
import StarGrid from './StarGrid'
import StarBackground from "./StarBackground";
// import StylizedLogoMark from "./StylizedLogoMark"
import SvgComponent from "./WordMark1"
// import heroImage from '../assets/hero-image.png'
import heroImage from '../assets/video web-01.png'
import showcaseImage from '../assets/react.png'
import showcaseImage1 from '../assets/curve photu video-01.png'
import Nike from '../assets/skills pic-02.png'
import Prismic from '../assets/skills pic-01.png'
import background from '../assets/integration-background.jpg'
import smallscreenshot from '../assets/small-screenshot.png'
import largescreenshot from '../assets/long-screenshot.png'
import { IoSettingsOutline } from "react-icons/io5";
import {
  FaDigitalOcean,
  FaCloudflare,
  FaNpm,
  FaGithub,
  FaFigma,
  FaFly,
} from "react-icons/fa6";
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { Link } from 'react-router-dom';

function Header() {
  const container = useRef(null);
  const containerforstar = useRef(null);
  const containerforheading = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

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

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(containerforheading.current, { y: 0 });
        return;
      }

      gsap.fromTo(
        containerforheading.current,
        { y: 100 },
        {
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          scrollTrigger: {
            trigger: containerforheading.current,
            start: "top bottom-=40%",
            toggleActions: "play pause resume reverse",
          },
        },
      );
    },
    { scope: containerforheading },
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
            Transforming your digital vision into reality
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
        <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
          The new <br />
          <span className='bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent'>Gold Standard</span>.
        </h2>
        <div className="mx-auto mt-10 max-w-md text-3xl text-balance text-center text-slate-300">
          Video Editing
        </div>
        <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
          <div className={"glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4 md:col-span-1"}>
            <h3 className="text-2xl">
              Endless Ideation
            </h3>
            <div className="max-w-md text-balance text-slate-300">
              Come up with new ideas faster than you can open Photoshop
            </div>
            <img src={smallscreenshot} className='max-h-36 w-auto' alt="" />
          </div>
          <div className={"glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4 md:col-span-2"}>
            <h3 className="text-2xl">
              Benchmark with AI
            </h3>
            <div className="max-w-md text-balance text-slate-300">
              Never worry about pixel perfection again, thanks to our patented AI critic, telling you when something is misaligned.
            </div>
            <img src={largescreenshot} className='max-h-36 w-auto' alt="" />
          </div>
          <div className={"glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4 md:col-span-2"}>
            <h3 className="text-2xl">
              Aesthetic Excellence
            </h3>
            <div className="max-w-md text-balance text-slate-300">
              Never worry about pixel perfection again, thanks to our patented AI critic, telling you when something is misaligned.
            </div>
            <img src={largescreenshot} className='max-h-36 w-auto' alt="" />
          </div>
          <div className={"glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4 md:col-span-1"}>
            <h3 className="text-2xl">
              Pixels Perfected
            </h3>
            <div className="max-w-md text-balance text-slate-300">
              Our features power your next big design, whether it’s a website or an app.
            </div>
            <img src={smallscreenshot} className='max-h-36 w-auto' alt="" />
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-md text-3xl text-balance text-center text-slate-300">
          Web Development
        </div>
        <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
          <div className={"glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4 md:col-span-1"}>
            <h3 className="text-2xl">
              Endless Ideation
            </h3>
            <div className="max-w-md text-balance text-slate-300">
              Come up with new ideas faster than you can open Photoshop
            </div>
            <img src={smallscreenshot} className='max-h-36 w-auto' alt="" />
          </div>
          <div className={"glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4 md:col-span-2"}>
            <h3 className="text-2xl">
              Benchmark with AI
            </h3>
            <div className="max-w-md text-balance text-slate-300">
              Never worry about pixel perfection again, thanks to our patented AI critic, telling you when something is misaligned.
            </div>
            <img src={largescreenshot} className='max-h-36 w-auto' alt="" />
          </div>
          <div className={"glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4 md:col-span-2"}>
            <h3 className="text-2xl">
              Aesthetic Excellence
            </h3>
            <div className="max-w-md text-balance text-slate-300">
              Never worry about pixel perfection again, thanks to our patented AI critic, telling you when something is misaligned.
            </div>
            <img src={largescreenshot} className='max-h-36 w-auto' alt="" />
          </div>
          <div className={"glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4 md:col-span-1"}>
            <h3 className="text-2xl">
              Pixels Perfected
            </h3>
            <div className="max-w-md text-balance text-slate-300">
              Our features power your next big design, whether it’s a website or an app.
            </div>
            <img src={smallscreenshot} className='max-h-36 w-auto' alt="" />
          </div>
        </div>
      </Bounded>

      <Bounded className='relative'>
        <div className='glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter' />
        <div ref={containerforheading}>
          <h2 className='text-balance text-center text-5xl font-medium md:text-7xl'>Your Glisten. <br />
            Your workflow.</h2>
        </div>
        <div className="mt-16 grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
          <div>
            <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-3xl">
              <IoSettingsOutline />
            </div>
            <h3 className="mt-6 text-2xl font-normal">Design the next big thing.</h3>
            <p className="prose prose-invert mt-4 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-6 focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2">
              Get Started
            </button>
          </div>
          <img className='opacity-80 shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%]' src={showcaseImage1} alt="showcase-image" />
        </div>
        <div className="mt-16 grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
          <div>
            <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-3xl">
              <IoSettingsOutline />
            </div>
            <h3 className="mt-6 text-2xl font-normal">Design the next big thing.</h3>
            <p className="prose prose-invert mt-4 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-6 focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2">
              Get Started
            </button>
          </div>
          <img className='opacity-80 shadow-2xl lg:col-span-2 lg:pt-0 lg:order-1 lg:translate-x-[15%]' src={showcaseImage} alt="showcase-image" />
        </div>
      </Bounded>

      <Bounded>
        <h2 className='max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl'>Designers like you love Glisten</h2>
        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <p>Learn how thousands of designers have used Glisten’s mind-blowing AI features in these case studies.</p>
        </div>

        <div className='mt-20 grid gap-16'>
          <Link to={'/skill'}>
            <div className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <div className="col-span-1 flex flex-col justify-center gap-4">
                <h3 className='text-4xl'>Nike</h3>
                <div className="max-w-md">
                  <p>Designers at the legendary sports wear brand used Glisten to completely redesign their basketball sneakers.</p>
                </div>
                <div className='after:absolute after:inset-0 hover:underline'>
                  Read Nike case study
                </div>
              </div>
              <img className='rounded-xl lg:col-span-2' src={Nike} alt="Nike" />
            </div>
          </Link>

          <Link to={'/skill'}>
            <div className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <div className="col-span-1 flex flex-col justify-center gap-4">
                <h3 className='text-4xl'>Prismic</h3>
                <div className="max-w-md">
                  <p>The headless page builder used Glisten to change the way websites are made, unlocking potential for their users.</p>
                </div>
                <div className='after:absolute after:inset-0 hover:underline'>
                  Read Prismic case study
                </div>
              </div>
              <img className='rounded-xl lg:col-span-2 md:-order-1' src={Prismic} alt="Prismic" />
            </div>
          </Link>
        </div>
      </Bounded>


      <Bounded className="relative overflow-hidden bgBounded">
        {/* <img src={background} className="object-cover" alt="" /> */}
        <StarBackground />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
            Integrations galore.
          </h2>

          <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
            The integrations your team needs to be productive at scale with no impact on your burn rate.
          </div>

          <div className="mt-20 flex flex-col items-center md:flex-row" ref={container}>
            <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
              <FaDigitalOcean />
            </div>
            <div
              className={
                "signal-line rotate-0"
              }
            />
            <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
              <FaCloudflare />
            </div>
            <div
              className={
                "signal-line rotate-0"
              }
            />
            <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
              <FaNpm />
            </div>
            <div
              className={
                "signal-line rotate-0"
              }
            />
            <>
              <SvgComponent />
              <div className="signal-line rotate-180 bg-gradient-to-t" />
            </>
            <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
              <FaGithub />
            </div>
            <div
              className={
                "signal-line rotate-180"
              }
            />
            <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
              <FaFigma />
            </div>
            <div
              className={
                "signal-line rotate-180"
              }
            />
            <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
              <FaFly />
            </div>
            {/* {slice.items.map((item, index) => (
              <React.Fragment key={index}>
                {index === Math.floor(slice.items.length / 2) && (
                  <>
                    <StylizedLogoMark />
                    <div className="signal-line rotate-180 bg-gradient-to-t" />
                  </>
                )}
                <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
                  {item.icon && icons[item.icon]}
                </div>
                {index !== slice.items.length - 1 && (
                  <div
                    className={clsx(
                      "signal-line",
                      index >= Math.floor(slice.items.length / 2)
                        ? "rotate-180"
                        : "rotate-0",
                    )}
                  />
                )}
              </React.Fragment>
            ))} */}
          </div>

        </div>
      </Bounded>

    </div>
  )
}

export default Header