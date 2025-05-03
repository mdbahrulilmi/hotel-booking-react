import React from "react";
import { ImageCard } from "./ImageCard";
import Button from "./Button";
function CurrentBooking()
{
    const imageUrl = "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/03/Cabana-room-sumber-gambar-hillfresco.jpg";
    const currentItems = [  
        {label:'Check in', value:'Tue, 21 Mar 2023'},
        {label:'Check out', value:'Tue, 23 Mar 2023'},
        {label:'Guest', value:'2 Adults'},
        {label:'Room Type', value:'Deluxe Suites'},
        {label:'Room Plan', value:'Extra Blanket'},
        {label:'Room Number', value:'Room 132'},
        {label:'Guest Comment', value:'No Request'},
    ];


    return(
        <div className="bg-white w-2/3 p-5 pb-15 rounded-2xl shadow-md">
                <div className="flex">
                    <div className="flex-col flex-2/3">
                    <h3 className="text-lg font-bold mb-3">Current Booking</h3>
                    <div className="flex"> 
                        <div className="flex-col items-center mt-2 mr-8">
                            <ImageCard image={imageUrl}/>
                            <Button label={"Show rooms details"} className={'w-xs mt-3 outline outline-gray-300 justify-center bg-white hover:bg-neutral-100'}/>
                        </div>
                        <div>
                            <small className="text-orange-600 font-semibold">Due out - 08:59</small>
                            <h2 className="text-3xl font-semibold">Gleen Zimmerman</h2>
                            <h4 className="mb-4 text-neutral-700">Order ID. #5550114</h4>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                {currentItems.map((item, index) =>
                                <div key={index}>
                                    <h6 className="font-normal text-neutral-700">{item.label}</h6>
                                    <p className="font-semibold">{item.value}</p>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default CurrentBooking;
