// -> Constants -> Website
export const websiteName: string = "Andrew Colbourne";
export const websiteInitials: string = "AC.";
export const websiteDescription: string = "Freelance dev.";
export const websiteGithubLink: string = "https://github.com/acolbourne/AndrewCDev";
export const websiteIcon: string = "/images/favicon.ico";

// -> Constants -> Pages
export const pageContact: string = "/contact";

// -> Constants -> Projects
export const projectCards = [

    {
        image: "/images/myblog.png",
        title: "My Blog", 
        description: "My personal blog, where I talk about my work in the financial markets, my software and web projects and my personal life.", 
        technologies: "Next JS, Typescript", 
        buttonLink: "https://www.andrew-c.me", 
        buttonText: "Visit My Blog", 
    }

] as const;