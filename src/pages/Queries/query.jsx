import Logo from "@/assets/logo.png";
import bg from "@/assets/bg/bg_t.jpg";
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";
import React, { useEffect } from "react";
const query = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const isFormSubmitTrue = urlParams.get("querysubmit") === "true";
        if (isFormSubmitTrue) {
            toast.success("Query has been Submitted. We'll get back to you soon.")
        }
    }, []);

    return (
        <div>
            <img
                src={bg}
                alt="bg_img"
                className="fixed h-screen object-cover w-full -z-10 opacity-80"
            />
            <div className="font-title text-gray-700 flex items-center mb-10">
                <div className="container mx-auto flex items-center">
                    <div className="max-w-md w-full mx-auto">
                        <div>
                            <img className="" src={Logo} alt="Riddle of The Sphinx" />
                        </div>
                        <h2 className="mt-10 mb-5 font-title font-bold text-white text-2xl sm:4xl lg:text-5xl text-center block">
                            QUERY
                        </h2>
                        <div className="rounded-lg overflow-hidden shadow-2xl bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100">

                            <div className="p-8">
                                <form action="https://formsubmit.co/meetspvdeepak@gmail.com" method="POST">
                                    <label className="font-title text-white">Full Name</label>
                                    <input type="text" required name="Name"
                                        placeholder="John Doe"
                                        className="block w-full p-3 rounded bg-white text-black border border-gray-100 focus:outline-none focus:bg-gray-100 focus:text-black"
                                    />
                                    <label className="font-title text-white mt-4 block">Kurukshetra Email</label>
                                    <input type="email" required name="Email"
                                        placeholder="johndoe@email.com"
                                        className="block w-full p-3 rounded bg-white text-black border border-gray-100 focus:outline-none focus:bg-gray-100 focus:text-black"
                                    />
                                    <label className="font-title text-white mt-4 block">K-ID</label>
                                    <input type="text" name="KID" required
                                        placeholder="K24xxxxx"
                                        className="block w-full p-3 rounded bg-white text-black border border-gray-100 focus:outline-none focus:bg-gray-100 focus:text-black"
                                    />
                                    <label className="font-title text-white mt-4 block">Phone Number</label>
                                    <input type="text" name="mobile" required
                                        placeholder="9100000000"
                                        className="block w-full p-3 rounded bg-white text-black border border-gray-100 focus:outline-none focus:bg-gray-100 focus:text-black"
                                    />
                                    <label className="font-title text-white mt-4 block">Query</label>
                                    <textarea
                                        placeholder="Describe Your Problem" name="Query" required
                                        className="block w-full p-3 rounded bg-white text-black border border-gray-100 focus:outline-none focus:bg-gray-100 focus:text-black"
                                    />
                                    <input type="hidden" name="_next" value="https://ros.kurukshetraceg.org.in/query?querysubmit=true" />
                                    <input type="hidden" name="_subject" value="ros query" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                    <button className="w-full p-3 mt-6 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out delay-150 text-white rounded shadow">
                                        SUBMIT
                                    </button>
                                </form>
                            </div>
                            <div className="block text-center p-5 text-sm border-t border-gray-300 bg-gray-100">
                                <Link to="/login" className="font-medium text-indigo-500">
                                    Go back to Login
                                </Link>
                                {/* <a href="#" className="text-gray-600">Forgot password?</a> */}
                            </div>
                        </div>
                    </div >
                </div >
                <a href="https://kurukshetraceg.org.in" target="_blank">
                    <div className="sm:block hidden absolute top-0 left-4 p-4 rounded-full sm:visible">
                        <img src="https://kurukshetraceg.org.in/assets/KLogoWhite-DDArUp1X.webp" className="h-14" alt="Kurukshetra'24" />
                    </div>
                </a>
                <div className="fixed bottom-5 left-5">
                    <Link to="/login">
                        <button className="w-full p-4 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">
                            Go to Login
                        </button>
                    </Link>
                </div>
            </div >
        </div>
    )
}
export default query;