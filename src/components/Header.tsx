'use client';

// -> Imports -> Libraries
import React from 'react';

// -> Imports -> Components
import Typewriter from 'typewriter-effect';

// -> Imports -> Constants
import { websiteDescription, websiteName } from '@/constants';

const Header: React.FC = ( ) => {

    return (

        <>

            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-purple-400 to-black rounded-md filter blur-3xl opacity-20" />

            <header className="px-2 md:px-0 max-w-3xl my-10 mx-auto">

                <h1 className="text-5xl md:text-7xl font-semibold bg-gradient-to-b from-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-sm">{ websiteName }.</h1>

                <h3 className="text-3xl md:text-4xl text-white">
                    
                <Typewriter options={ {

                    strings: [ 
                        
                        'Freelance dev.',
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
                    
                </h3>

            </header>
        
        </>

    )

}

export default Header;