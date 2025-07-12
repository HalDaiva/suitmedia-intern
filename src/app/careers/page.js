"use client"

import Banner from "@/ui/banner";

export default function CareersPage() {

    const imageUrl = 'https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_1280.jpg';
    const title = 'Careers';
    const subtitle = 'Join our team and make a difference.';

    return(
        <div>
            <Banner title={title} subtitle={subtitle} image={imageUrl}/>
        </div>
    )
}