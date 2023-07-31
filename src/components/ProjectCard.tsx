// -> Imports -> Libraries
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// -> Imports -> Components
import { Card, CardTitle, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectCard = ( { image, title, description, technologies, buttonLink, buttonText }: ProjectCardProps ) => {

    return (

        <>

            <Card className="bg-blue-200/20 shadow-md cursor-pointer hover:scale-105 hover:opacity-90 transform transition duration-300 ease-out">

                <CardHeader className="relative mb-7 h-80 sm:h-56">
                    
                    <Image
                            src={ image }
                            alt={ title }
                            layout="fill"
                            className="rounded-t-md"
                    />

                </CardHeader>

                <CardContent className="text-white space-y-4">

                    <CardTitle className="mb-4 font-medium">{ title }</CardTitle>

                    <p className="font-light text-sm text-justify">
                        
                        { description }

                    </p>

                    <p className="text-muted text-sm">

                        Technologies used: <span className="font-semibold">{ technologies }</span>
                    </p>

                </CardContent>

                <CardFooter className="justify-center">

                    <Link href={ buttonLink } target="_blank">

                        <Button variant="orange">{ buttonText }</Button>

                    </Link>

                </CardFooter>

            </Card>

        </>

    );

}

export default ProjectCard