"use client"

import Banner from "@/ui/banner";

export default function ContactPage() {

    const imageUrl = 'https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg';
    const title = 'Contact';
    const subtitle = 'Get in touch with us.';

    return(
        <div>
            <Banner title={title} subtitle={subtitle} image={imageUrl}/>
        </div>
    )
}