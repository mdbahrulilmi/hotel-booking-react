function ImageGallery()
{   
    return(
        <div className="flex h-[350px] gap-2 items-center">
            <div className="w-1/3">
                <img src="/assets/images/hotel1.jpeg" alt="main-image" className="h-[350px] w-full rounded-lg"/>
            </div>
            <div className="w-2/3 grid grid-cols-3 gap-2 h-[350]">
                <img src="/assets/images/hotel2.jpeg" alt="gallery" className="h-[170px] w-full rounded-lg"/>
                <img src="/assets/images/hotel3.jpeg" alt="gallery" className="h-[170px] w-full rounded-lg"/>
                <img src="/assets/images/hotel4.jpeg" alt="gallery" className="h-[170px] w-full rounded-lg"/>
                <img src="/assets/images/hotel3.jpeg" alt="gallery" className="h-[170px] w-full rounded-lg"/>
                <img src="/assets/images/hotel2.jpeg" alt="gallery" className="h-[170px] w-full rounded-lg"/>
                <img src="/assets/images/hotel1.jpeg" alt="gallery" className="h-[170px] w-full rounded-lg"/>
            </div>
        </div>
    )

}
export default ImageGallery