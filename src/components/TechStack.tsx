// -> Imports -> Libraries
import React from 'react';
import Image from 'next/image';

const TechStack: React.FC = ( ) => {

    return (

        <>

            <section id="Tech-Stack">

                <h4 className="text-3xl font-normal">My tech stack:</h4>

                <p className="text-sm font-thin text-justify pb-4">A selection of the tools and technologies I've worked with in the past and in the present.</p>

                <div className="relative h-[40px]">

                    <Image 
                        alt="My tech stack" 
                        src="/images/skills.svg"
                        layout="fill"
                        objectFit="contain"
                    />

                </div>

            </section>
        
        </>

    );

}

export default TechStack;