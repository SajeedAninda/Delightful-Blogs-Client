import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Testimonial = () => {
    return (
        <section className="bg-[#1b1f20]">
            <div className="w-[90%] px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold text-[#fcf4e9]">What our readers say about Delightful Blogs</h2>
                            <p className="text-[#fcf4e9]">Readers describe Delightful Blogs as engaging, insightful, and inspiring. They praise its diverse content, user-friendly interface, and expert contributors.</p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md bg-[#fcf4e9]" data-aos="flip-up">
                                    <p>Delightful Blogs has transformed my online reading experience. With its engaging and well-researched content, I find myself returning daily for inspiration. It's like a trusted friend offering a delightful mix of advice and intriguing stories, making it an essential part of my routine</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold text-[#1b1f20]">Leroy Jenkins</p>
                                            <p className="text-sm text-[#1b1f20]">Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md bg-[#fcf4e9]" data-aos="flip-up">
                                    <p>Delightful Blogs has been my digital companion for years. Its diverse content and expert contributors have expanded my horizons. Whether I'm seeking life advice, travel tips, or just a captivating read, it never fails to deliver.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold text-[#1b1f20]">John P</p>
                                            <p className="text-sm text-[#1b1f20]">Teacher.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md bg-[#fcf4e9]" data-aos="flip-up">
                                    <p>My daily dose of intellectual stimulation, the sheer breadth of topics covered keeps me captivated. From food and culture to self-improvement and travel, I've unearthed new passions thanks to this exceptional platform. This platform has truly enriched my life, broadening my knowledge and igniting my curiosity. It's a constant source of enlightenment and inspiration.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold text-[#1b1f20]">Emile James</p>
                                            <p className="text-sm text-[#1b1f20]">Graphic Designer.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md bg-[#fcf4e9]" data-aos="flip-up">
                                    <p>My virtual haven, I've been an avid reader for years, and it never disappoints. The carefully curated content is a valuable source of insights, and it feels like a close friend sharing fascinating discoveries and ideas. It's an irreplaceable gem in my online reading repertoire. As I've journeyed through its pages, I've discovered a world of wisdom and creativity that consistently brightens my days. This online sanctuary has become an integral part of my quest for knowledge and inspiration.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold text-[#1b1f20]">David Matt</p>
                                            <p className="text-sm text-[#1b1f20]">Software Developer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;