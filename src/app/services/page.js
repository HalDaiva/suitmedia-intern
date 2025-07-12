"use client"

import Banner from "@/ui/banner";

export default function ServicesPage() {

    const imageUrl = 'https://cdn.pixabay.com/photo/2018/01/28/10/59/internet-3113279_1280.jpg';
    const title = 'Services';
    const subtitle = 'We provide the best services.';

    return(
        <div>
            <Banner title={title} subtitle={subtitle} image={imageUrl}/>
        </div>
    )
}