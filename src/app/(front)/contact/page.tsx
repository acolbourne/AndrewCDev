// -> Imports -> Libraries
import React from 'react';
import type { NextPage } from 'next';

// -> Imports -> Components
import { Header, Footer } from '@/components';

// -> Imports -> Constants
import { websiteName } from '@/constants';

export const metadata = {
    title: websiteName + ' - Get in touch',
}

const ContactPage: NextPage = ( ) => {

    return (

        <>

            <Header />

            <Footer />

        </>

    )

}

export default ContactPage;