// -> Imports -> Libraries
import React from 'react';
import Image from 'next/image';

const TechStack: React.FC = ( ) => {

    return (

        <>

            <section id="Tech-Stack">

                <h4 className="text-2xl font-semibold">My tech stack:</h4>

                <div className="relative h-[60px] pb-20">

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