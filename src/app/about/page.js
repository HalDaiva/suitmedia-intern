"use client"

import Banner from "@/ui/banner";

export default function AboutPage() {

    const imageUrl = 'https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg';
    const title = 'About';
    const subtitle = 'Who we are and what we do.';

    return(
        <div>
            <Banner title={title} subtitle={subtitle} image={imageUrl}/>
        </div>
    )
}