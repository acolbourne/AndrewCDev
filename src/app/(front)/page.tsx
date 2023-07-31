// -> Imports -> Libraries
import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// -> Imports -> Components
import { Header, Footer, HeroSection, AboutMe, TechStack, ProjectCard } from '@/components';

// -> Imports -> Constants
import { projectCards } from '@/constants';

const Homepage: NextPage = ( ) => {

    return (

        <>

            <Header />
            
            <HeroSection />

            <main className="max-w-2xl mx-auto px-6 mt-10 space-y-2 relative">

                <AboutMe />
                
                <TechStack />
                
                <section id="Projects">
                    
                    <h4 className="text-2xl font-semibold pb-10">My projects:</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 space-x-4 max-sm:space-y-8">

                        { projectCards.map ( ( item ) => ( 
                            
                            <ProjectCard
                                key={ item.title } 
                                image={ item.image } 
                                title={ item.title } 
                                description={ item.description }
                                technologies={ item.technologies }
                                buttonLink={ item.buttonLink }
                                buttonText={ item.buttonText} 
                            />


                        ) ) }

                    </div>

                </section>

            </main>

            <Footer />

        </>

    )

}

export default Homepage;