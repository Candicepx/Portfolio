import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <h1 className="text-center mt-10 text-4xl font-bold">
                     Contact
                </h1>
            </div>

            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=marseille&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                    </iframe>
                </div>
                    <div className="bg-gray-800 relative flex justify-end items py-6 rounded shadow-md ">
                        <ul>
                            <li>
                                <div className="lg:w-1/2 px-6">
                                    <p className="mt-1">
                                        <a target="_blank"
                                           href="https://github.com/Candicepx" className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">Github</span>
                                            <svg className="w-5 h-5 iconify iconify--mdi" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                                            </svg>
                                        </a>
                                    </p>
                                </div></li>

                            <br/>
                            <li>
                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                        <a target="_blank"
                                           href="mailto:candice.poux-pichery@epitech.eu" className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">Mail</span>
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">

                                                </path>
                                                <path
                                                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">
                                                </path>
                                            </svg>
                                        </a>
                                    </h2>
                                </div>
                            </li>

                            <br/>

                            <li>
                                <div className="lg:w-1/2 px-6">
                                    <p className="leading-relaxed">
                                        <a target="_blank"
                                           href="https://www.linkedin.com/in/candice-poux-pichery-81624420a/" className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*<div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ">*/}
                    {/*    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">*/}
                    {/*        Contacts*/}
                    {/*    </h2>*/}

                    {/*</div>*/}
                {/*<form*/}
                {/*    netlify*/}
                {/*    name="contact"*/}
                {/*    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ">*/}
                {/*    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">*/}
                {/*        Contacts*/}
                {/*    </h2>*/}
                {/*    <div className="relative mb-4">*/}
                {/*        <label htmlFor="name" className="leading-7 text-sm text-gray-400">*/}
                {/*            Nom*/}
                {/*        </label>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            id="name"*/}
                {/*            name="name"*/}
                {/*            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="relative mb-4">*/}
                {/*        <label htmlFor="email" className="leading-7 text-sm text-gray-400">*/}
                {/*            Email*/}
                {/*        </label>*/}
                {/*        <input*/}
                {/*            type="email"*/}
                {/*            id="email"*/}
                {/*            name="email"*/}
                {/*            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="relative mb-4">*/}
                {/*        <label*/}
                {/*            htmlFor="message"*/}
                {/*            className="leading-7 text-sm text-gray-400">*/}
                {/*            Message*/}
                {/*        </label>*/}
                {/*        <textarea*/}
                {/*            id="message"*/}
                {/*            name="message"*/}
                {/*            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <button*/}
                {/*        type="submit"*/}
                {/*        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">*/}
                {/*        Envoyer*/}
                {/*    </button>*/}
                {/*</form>*/}
            </div>
        
    </section>
    );
}