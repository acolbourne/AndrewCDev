// -> Imports -> Libraries
import React from 'react';
import Image from 'next/image';

const AboutMe: React.FC = ( ) => {

    return (

        <>

            <section id="About-Me">

                <h4 className="text-3xl font-normal pb-4">About Me:</h4>

                <p className="text-md font-thin text-justify leading-9">

                    My name is Andrew. My love of web and software development started when I was very young
                    and I played around with PHP and MySQL and put together a few projects. Ever since then,
                    I've been building things in my spare time. Today, my work is primarily in React as this 
                    technology allows me to explore many more possibilities, although I'm still interested in 
                    working with other things, too. 

                </p>

            </section>
        
        </>

    );

}

export default AboutMe;