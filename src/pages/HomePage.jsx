import Button from "../components/Button";
import { ImageCard } from "../components/card/ImageCard";

function HomePage()
{
    return(
        <>
        <div className="min-h-screen flex flex-col">
       
        {/* Navbar */}
        <div className="w-full py-4 px-6 shadow-sm bg-white">
            <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Hotel Booking</h3>
            <div className="flex gap-4 list-none">
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </div>
            </div>

        </div>
        <div className="flex flex-grow">
       
        {/* Sidebar */}
        <div className="w-1/6 list-none font-medium flex flex-col gap-4 px-6 py-10">
            <li className="hover:bg-green-600 hover:text-white hover:shadow-sm hover:cursor-pointer flex pl-8 py-3 rounded-sm ">Home</li>
            <li className="hover:bg-green-600 hover:text-white hover:shadow-sm hover:cursor-pointer flex pl-8 py-3 rounded-sm ">Room</li>
            <li className="hover:bg-green-600 hover:text-white hover:shadow-sm hover:cursor-pointer flex pl-8 py-3 rounded-sm bg-green-600 text-white shadow-lg shadow-green-600/50">Guest</li>
            <li className="hover:bg-green-600 hover:text-white hover:shadow-sm hover:cursor-pointer flex pl-8 py-3 rounded-sm ">Message</li>
            <li className="hover:bg-green-600 hover:text-white hover:shadow-sm hover:cursor-pointer flex pl-8 py-3 rounded-sm ">Concierge</li>
            <li className="hover:bg-green-600 hover:text-white hover:shadow-sm hover:cursor-pointer flex pl-8 py-3 rounded-sm ">Settings</li>
        </div>
        {/* Content */}
        <div className="w-5/6 flex flex-col align-center justify-center p-4 min-h-full">
        
        <div className="h-3/20 flex justify-between items-center">
        <div>
            <small className="text-lg font-normal text-neutral-500">Guest</small>
            <h1 className="text-2xl font-semibold">Gleen Zimmerman</h1>
        </div>
            <Button label={"Create new Booking"} className={"ml-auto bg-green-600 hover:bg-green-700"}/>
        </div>
            <div className="bg-white w-full p-5 h-17/20 rounded-sm">
            <div className="flex">
                <div className="flex-col flex-2/3">
                <h3 className="text-lg font-bold mb-3">Current Booking</h3>
                <div className="flex"> 
                    <div className="flex-col items-center mt-2 mr-7">
                        <ImageCard image={"https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=640"}/>
                        <Button label={"Show rooms details"} className={'w-xs mt-3 outline justify-center bg-white hover:bg-neutral-100'}/>
                    </div>
                    <div>
                        <small>Due out - 08:59</small>
                        <h2 className="text-2xl font-normal">Gleen Zimmerman</h2>
                        <h4 className="mb-4">Order ID. #5550114</h4>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                            <div>
                                <h6 className="font-semibold">Check in</h6>
                                <p>Tue, 21 Mar 2023</p>
                            </div>
                            <div>
                                <h6 className="font-semibold">Check out</h6>
                                <p>Tue, 23 Mar 2023</p>
                            </div>
                            <div>
                                <h6 className="font-semibold">Guest</h6>
                                <p>2 Adults</p>
                            </div>
                            <div>
                                <h6 className="font-semibold">Room Type</h6>
                                <p>Deluxe Suites</p>
                            </div>
                            <div>
                                <h6 className="font-semibold">Room Plan</h6>
                                <p>Extra Blanket</p>
                            </div>
                            <div>
                                <h6 className="font-semibold">Room Number</h6>
                                <p>Room 132</p>
                            </div>
                            <div>
                                <h6 className="font-semibold">Guest Comment/Request</h6>
                                <p>No request</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            <div className="flex-1/3">
            <h2 className="text-xl font-medium mb-3 ">Booking Summary</h2>
            <div className="grid grid-cols-2 gap-5 mt-5 text-sm text-neutral-700 items-center">
                
                <p className="font-medium">Room Total(1 night)</p>
                <p className="w-20 text-right">300.00</p>
                
                
                <p className="font-medium">Extra Person</p>
                <p className="w-20 text-right">0.00</p>
                
                
                <p className="font-medium">Extras</p>
                <p className="w-20 text-right">30.00</p>
                
                <hr className="col-span-2 w-70"/>

                <p className="font-medium">SubTotal</p>
                <p className="w-20 text-right">330.00</p>
                
                
                <p className="font-medium">Discount</p>
                <p className="w-20 text-right">-33.00(10%)</p>
                
                
                <p className="font-medium">Fixed Amount Taxes</p>
                <p className="w-20 text-right">13.00</p>
                
                
                <p className="font-medium text-orange-600">Total</p>
                <p className="w-20 text-right text-orange-600 font-bold text-2xl">320.00</p>
            </div>

            </div>
            </div>
            <div className="justify-end flex gap-5 mr-5">
                <Button label={"Close"} className={"bg-white"}/>
                <Button label={"CheckedOut"} className={"bg-orange-600 hover:bg-orange-700"}/>
            </div>
        </div>
            
        </div>
        </div>
             
        </div>
            
        </>
    )
}

export default HomePage;