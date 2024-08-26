import React, { useState, useRef } from 'react'
import Bounded from './Bounded'
import HoverVideoPlayer from "react-hover-video-player";

const Testing = () => {
    const [play, setPlay] = useState(false);

    const vidRef = useRef()

    console.log(vidRef.current, play)

    const handleMouseEnter = () => {
        // setPlay(true)
        // if (play) {
            vidRef.current.play()
        // } else {
        //     vidRef.current.pause()
        // }
    };
    const handleMouseLeave = () => {
        // setPlay(false)
        // if (play) {
        //     vidRef.current.play()
        // } else {
            vidRef.current.pause()
        // }
    };



    return (
        <Bounded>
            <div className='w-full'>
                <div className='flex min-h-[30rem] flex-row gap-2 items-stretch justify-center w-full'>
                    <div className='opacity-100 w-full transform-none h-auto flex-shrink'>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='h-auto relative flex flex-col rounded-xl overflow-hidden'>
                            <div className='opacity-0'></div>
                            <div >
                                <video ref={vidRef} loop muted playsInline preload='metadata' className='object-cover w-auto h-[480px] bg-center'>
                                    <source src="https://storage.googleapis.com/production-assets/customer-stories/web/optimized/pave.mp4" type='video/mp4' />
                                </video>
                            </div>
                            {/* <HoverVideoPlayer videoSrc="https://storage.googleapis.com/production-assets/customer-stories/web/optimized/pave.mp4" /> */}
                            <div className='opacity-100'>
                                <div className='flex flex-col justify-between p-4 absolute bottom-0 left-0 h-full w-full'>
                                    <div></div>
                                    <div className='transform-none'>
                                        <p className='text-2xl font-[450] leading-[130%] tracking-[0.00625rem] indent-[-0.85rem] ml-4'>"As founder, you don't want to spend time fundraising"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='opacity-100 blur-0 mt-4'>
                            <p className=''>Sho Sugihara</p>
                            <p className='text-[#999999]'>Pave</p>
                        </div>
                    </div>
                    <div className='opacity-100 w-1/5 h-auto flex-shrink'>
                        <div className='h-auto relative flex flex-col rounded-xl overflow-hidden'>
                            <div className='opacity-100 absolute h-full w-full top-0 left-0 blur-sm' style={{ backgroundImage: "linear-gradient(0deg, rgba(244, 244, 246, 0.3) 0%, rgba(244, 244, 246, 0.3) 100%)" }}></div>
                            <video loop muted playsInline autoPlay preload='metadata' src="https://storage.googleapis.com/production-assets/customer-stories/web/optimized/verma.mp4" className='object-cover w-auto h-[480px] bg-center'></video>
                            <div className='opacity-0'>
                                <div className='flex flex-col justify-between p-4 absolute bottom-0 left-0 h-full w-full'>
                                    <div></div>
                                    <div className='translate-y-[200px] translate-z-0'>
                                        <p className='text-2xl font-[450] leading-[130%] tracking-[0.00625rem] indent-[-0.85rem] ml-4'>"I think what separates Pipe is the speed at which they can provide funding"</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='opacity-100 blur-0 mt-4'>
                            <p>AJ Agrawal</p>
                            <p className='text-[#999999]'>Vermafarms</p>
                        </div>
                    </div>

                    <div className='opacity-100 w-1/5 h-auto flex-shrink'>
                        <div className='h-auto relative flex flex-col rounded-xl overflow-hidden'>
                            <div className='opacity-100 absolute h-full w-full top-0 left-0 blur-sm' style={{ backgroundImage: "linear-gradient(0deg, rgba(244, 244, 246, 0.3) 0%, rgba(244, 244, 246, 0.3) 100%)" }}></div>
                            <video loop muted playsInline autoPlay preload='metadata' src="https://storage.googleapis.com/production-assets/customer-stories/web/optimized/love-circular.mp4" className='object-cover w-auto h-[480px] bg-center'></video>
                            <div className='opacity-0'>
                                <div className='flex flex-col justify-between p-4 absolute bottom-0 left-0 h-full w-full'>
                                    <div></div>
                                    <div className='translate-y-[200px] translate-z-0'>
                                        <p className='text-2xl font-[450] leading-[130%] tracking-[0.00625rem] indent-[-0.85rem] ml-4'>"I think what separates Pipe is the speed at which they can provide funding"</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='opacity-100 blur-0 mt-4'>
                            <p>Zaire Allen</p>
                            <p className='text-[#999999]'>Love Circular</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <video loop playsInline autoPlay preload='metadata' src="https://storage.googleapis.com/production-assets/customer-stories/web/optimized/pave.mp4" className='object-cover w-auto h-[480px] bg-center'></video> */}
        </Bounded>
    )
}

export default Testing