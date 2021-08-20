import React from "react";
import cv from "../assets/CV Candice.pdf"

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Candice
                        <br className="hidden lg:inline-block" />Etudiante Développement Web
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Je souhaite continuer vers un contrat de professionnalisation dans le cadre d'une formation de Développeur Intégrateur Web en alternance, pour une durée de 12 mois. Secteur de la région PACA.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contacts
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Projets
                        </a>
                        <a
                            target="_blank"
                            href={cv}
                            className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            CV
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        src="https://avatars.githubusercontent.com/u/74196398?s=400&u=9cf90b42594f78a35635adb7c8f191a0b8bb0114&v=4" alt=""
                    />
                </div>
            </div>
            <br/>
            <br/>
        </section>
    );
}