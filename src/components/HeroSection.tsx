'use client';

// -> Imports -> Libraries
import React from 'react';
import Link from 'next/link';

// -> Imports -> Components
import Typewriter from 'typewriter-effect';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

// -> Imports -> Constants
import { pageContact } from '@/constants';

// -> Imports -> Icons
import { Pencil } from 'lucide-react';

const HeroSection = ( ) => {

    return (

        <>
        
            <section id="Hero" className="max-w-7xl mx-auto px-2">

                <div className="flex flex-col text-center mt-8 sm:mt-20 space-y-4">

                    <h1 className="font-semibold text-6xl">Andrew Colbourne.</h1>

                    <h2 className="font-light text-4xl">
                        
                        <Typewriter options={ {

                        strings: [ 
                            
                            'Dev.',
                            'Builder of useful apps.',
                            'User of overused visual effects.',
                            'Generator of (mainly average) ideas.',
                            'Drinker of coffee.',
                            'Cracker of bad jokes.',
                            'Man of limited taste.',
                            'Connoisseur of lofty titles.'

                        ],
                        autoStart: true,
                        loop: true,

                        } }
                        />

                    </h2>
                    
                    <div className="flex justify-center items-center space-x-4 pt-5">

                        <Link href="#Projects">
                            
                            <Button variant="holo">My Projects</Button>
                        
                        </Link>
                        
                        <Link href={ pageContact } target="_blank">

                            <Button variant="orange"><span>Work with me</span> <Pencil className="w-5 h-5" /></Button>

                        </Link>

                    </div>

                </div>

                <Separator className="mt-10 max-w-md sm:max-w-xl mx-auto" />

            </section>
            
        
        </>

    );

}

export default HeroSection;