'use client';

// -> Imports -> Libraries
import React from 'react';

// -> Imports -> Components
import Typewriter from 'typewriter-effect';

// -> Imports -> Constants
import { websiteName } from '@/constants';

const Header: React.FC = ( ) => {

    return (

        <>

            <header className="px-2 md:px-0 max-w-3xl my-10 mx-auto">

                <h1 className="text-5xl md:text-7xl font-semibold bg-gradient-to-b from-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-sm">{ websiteName }.</h1>

                <h3 className="text-3xl md:text-4xl text-white z-50">
                    
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