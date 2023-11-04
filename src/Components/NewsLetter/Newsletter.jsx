import React from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Swal from 'sweetalert2';

let Newsletter = () => {
    let handleNewsletter = (e) => {
        e.preventDefault();
        let emailInput = e.target.email;
        let email = emailInput.value;
        if (email.length === 0 || !email.includes('@') || !email.includes('.')) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid email',
                text: 'Please enter a valid email address',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Good job!',
                text: 'Thank you for subscribing to our newsletter',
            });
        }
    }


    return (
        <div className="relative isolate overflow-hidden bg-[#fcf4e9] py-16 sm:py-24 lg:py-32">
            <div className="mx-auto w-[90%] px-6 lg:px-8 ">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-[#1b1f20] sm:text-4xl">Subscribe to our newsletter.</h2>
                        <p className="mt-4 text-lg leading-8 text-[#1b1f20]">
                            Be the first to receive our updates – subscribe now and stay connected!
                        </p>
                        <form onSubmit={handleNewsletter}>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <input type="email" name='email' className="min-w-0 flex-auto rounded-md border border-[#1b1f20] bg-[#fcf4e9] px-3.5 py-2 text-[#1b1f20] shadow-sm ring-1 ring-inset ring-[#1b1f20] focus:ring-2 focus:ring-inset focus:ring-[#1b1f20] sm:text-sm sm:leading-6 placeholder:text-[#1b1f20]"
                                    placeholder="Enter your email"/>
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-[#1b1f20] px-3.5 py-2.5 text-sm font-semibold text-[#fcf4e9] ] shadow-sm hover:bg-[#1b1f20ad] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b1f20]"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <CalendarDaysIcon className="h-6 w-6 text-[#1b1f20]" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-[#1b1f20]">Frequent Blogs</dt>
                            <dd className="mt-2 leading-7 text-[#1b1f20]">
                                We update frequent blogs daily, delivering fresh insights and ideas consistently. Stay connected for our regular, reliable updates on a variety of engaging topics. Explore the world with us!
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <HandRaisedIcon className="h-6 w-6 text-[#1b1f20]" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-[#1b1f20]">No spam</dt>
                            <dd className="mt-2 leading-7 text-[#1b1f20]">
                                Enjoy our frequent blog updates without spam. We promise to deliver valuable content regularly, free from unwanted emails or clutter. Dive into quality insights and ideas hassle-free!
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1b1f20] to-[#c0c3c4] opacity-90"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
};

export default Newsletter;