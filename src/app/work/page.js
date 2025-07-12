"use client"

import Banner from "@/ui/banner";

export default function WorkPage() {

    const imageUrl = 'https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg';
    const title = 'Work';
    const subtitle = 'We work hard to make your life easier.';

    return(
        <div>
            <Banner title={title} subtitle={subtitle} image={imageUrl}/>
        </div>
    )
}