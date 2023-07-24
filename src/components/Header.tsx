// -> Imports -> Libraries
import React from 'react';

// -> Imports -> Constants
import { websiteDescription, websiteName } from '@/constants';

const Header: React.FC = ( ) => {

    return (

        <>

            <header className="px-2 md:px-0 max-w-3xl my-10 mx-auto">

                <h1 className="text-5xl md:text-7xl font-semibold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{ websiteName }</h1>

                <h3 className="text-3xl md:text-4xl font-light">{ websiteDescription }</h3>

            </header>
        
        </>

    )

}

export default Header;