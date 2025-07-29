import HomePageCard from "../components/HomePageCard";
import React, { useState } from "react";
const HomePage = () => {
    const [showCard, setShowCard] = useState(false);
    return (
        <>
            <div className="flex items-center gap-4  bg-black text-white" >
                <div className="items-center  px-40 py-30 bg-black text-white">
                    <h1 className="font-inter font-bold text-[60px] leading-[72px] tracking-[-0.04em] ">
                        Your Gateway to Tech <br></br>Events, Workshops &<br></br> Hackathons            </h1>
                    <br />
                    <p className="font-inter text-[24px]">
                        Explore, Apply, and Innovate with the best tech events<br />
                        around the world.
                    </p>
                    <br />
                    <button className="space-between px-3 py-3 bg-[#EB5B00] px-3 py-1 rounded-md font-bold text-16px">Start Exploring</button>
                </div>

                <div className="">
                    <img src="OBJECT.png" alt="" srcset="" />
                </div>
            </div>
            <div>
                <div className="flex item-center gap-40">

                    <h1 className="mx-auto w-fit text-center flex item-center text-[60px] font-inter font-bold leading-[72px] tracking-[-0.04em]"><br />
                        List Of Events
                        <br /></h1>
                </div>
                <div className="px-auto py-[20px] text-center">
                    <div className="flex items-center justify-center gap-4 mx-auto my-auto text-center">
                        <button className="bg-[#FDF0C8] text-black px-4 py-2 rounded-md flex item-center text-[16px]"><img src="Icons Library (3).png" />Hackathon</button>

                        <button className="bg-[#E8EDFB] text-black px-4 py-2 rounded-md flex item-center"><img src="Icons Library (2).png"></img>Webinar</button>

                        <button className="bg-[#FDF0C8] text-black px-4 py-2 rounded-md flex item-center"><img src="Icons Library (1).png"></img>Workshop</button>

                        <button className="bg-[#E8EDFB] text-black px-4 py-2 rounded-md flex item-center gap-4"><img src="Icons Library.png"></img>Conference</button>

                    </div>

                </div>
                <HomePageCard></HomePageCard>
                {/* <div className=""> */}
                {/* <button className="flex items-center justify-center bg-black text-white px-8 py-2 rounded-[6px] font-bold" onClick={() => setShowCard(true)}>View All</button>
                {showCard && <HomePageCard />} */}
                <div className="flex flex-col items-center">
                    {!showCard && (
                        <button
                            className="flex items-center justify-center bg-black text-white px-8 py-2 rounded-[6px] font-bold"
                            onClick={() => setShowCard(true)}
                        >
                            View All
                        </button>
                    )}

                    {showCard && <HomePageCard />}
                </div>
                {/* </div> */}
                {/* {How IT Works} */}
                <div>
                    <div className="flex items-center px-4 py-4 w-fit mx-auto ">
                        <h1 className="font-bold text-[60px] w-full font-inter">
                            How it Works?
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-fit mx-auto px-4 py-4">

                        <div className="w-[357px] h-[332px] text-[23px] gap-3 rounded-[20px] p-3 shadow-[12px_8px_0px_0px_#000000] flex flex-col items-center text-center">
                            <img src="20286066_6207965 1.png" alt="step-1" className="w-[240px] h-[240px] object-cover" />
                            <p className="font-bold">Search for your desired event.</p>
                        </div>

                        <div className="w-[357px] h-[332px] text-[23px] gap-3 rounded-[20px] p-3 shadow-[12px_8px_0px_0px_#000000] flex flex-col items-center text-center">
                            <img src="Frame 26.png" alt="step-2" className="w-[240px] h-[240px] object-cover" />
                            <p className="font-bold">Explore details and check requirements.</p>
                        </div>

                        <div className="w-[357px] h-[332px] text-[23px] gap-3 rounded-[20px] p-3 shadow-[12px_8px_0px_0px_#000000] flex flex-col items-center text-center">
                            <img src="13717657_5326271 1.png" alt="step-3" className="w-[240px] h-[240px] object-cover" />
                            <p className="font-bold">Register with ease.</p>
                        </div>

                    </div>

                </div>
                <br /><br />
                {/* Testimonials Section */}
                <div className="bg-black text-white py-16 px-10">
                    <h2 className="text-[48px] font-bold mb-8">Testimonials</h2>

                    <div className="flex flex-wrap justify-center gap-5">
                        <div className="w-[365px] h-[216px] rounded-[20px] border border-white p-5">
                            Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!
                            <div className="w-[325px] h-[60px] flex items-center gap-3">

                                <img src="Ellipse 9.png" alt="user" className="w-[40px] h-[40px] rounded-full" />

                                <p className="text-white text-[20px] font-semibold">Arjun Mehta</p>
                                <br />
                                {/* <p className="text-white text-[14px] font-semibold">Product Manager</p> */}
                            </div>
                        </div>
                        <div className="w-[365px] h-[216px] rounded-[20px] border border-white p-5">
                            TechSphere gave me the perfect platform to showcase my skills and connect with like-minded innovators. The experience was both challenging and rewarding!
                            <div className="w-[325px] h-[60px] flex items-center gap-3">

                                <img src="Ellipse 9.png" alt="user" className="w-[40px] h-[40px] rounded-full" />

                                <p className="text-white text-[20px] font-semibold">Priya Sharma</p>
                                <br />
                                {/* <p className="text-white text-[14px] font-semibold">Product Manager</p> */}
                            </div>
                        </div>
                        <div className="w-[365px] h-[216px] rounded-[20px] border border-white p-5">
                            Winning at TechSphere was a turning <br /> point for me. The cash prize and exposure <br />opened doors to new career <br />opportunities!
                            <div className="w-[325px] h-[60px] flex items-center gap-3">

                                <img src="Ellipse 9.png" alt="user" className="w-[40px] h-[40px] rounded-full" />

                                <p className="text-white text-[20px] font-semibold">Ahmed Khan <br /></p>
                                <br />
                                {/* <p className="text-white text-[14px] font-semibold">Product Manager</p> */}
                            </div>

                        </div>
                    </div>
                </div>
                {/* {Milestones} */}
                <div className=" py-16 px-10">
                    <h2 className="text-center text-[48px] font-bold ">Milestones</h2>

                    <div className="flex flex-wrap justify-center gap-5">
                        <div className="w-[365px] h-[216px] rounded-[20px] border border-gray-300 p-5 flex flex-col items-center justify-center gap-3 text-center">

                            <h2 className="font-inter text-[#FF7C0A] font-bold text-[48px] leading-[56px] tracking-[-0.04em]">
                                10,00+
                            </h2>

                            <div className="flex items-center justify-center gap-3">
                                <p className="text-black text-[23px] font-bold">Participants</p>
                            </div>

                        </div>

                        <div className="w-[365px] h-[216px] rounded-[20px] border border-gray-300 p-5 flex flex-col items-center justify-center gap-3 text-center">

                            <h2 className="font-inter text-[#FF7C0A] font-bold text-[48px] leading-[56px] tracking-[-0.04em]">
                                500+
                            </h2>

                            <div className="flex items-center justify-center gap-3">
                                <p className="text-black text-[23px] font-bold">Hackathons Listed</p>
                            </div>

                        </div>

                        <div className="w-[365px] h-[216px] rounded-[20px] border border-gray-300 p-5 flex flex-col items-center justify-center gap-3 text-center">

                            <h2 className="font-inter text-[#FF7C0A] font-bold text-[48px] leading-[56px] tracking-[-0.04em]">
                                2,000+
                            </h2>

                            <div className="flex items-center justify-center gap-3">
                                <p className="text-black text-[23px] font-bold">Projects Submitted</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;