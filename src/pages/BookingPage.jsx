    import Button from "../components/Button";
    import { FaArrowLeftLong } from "react-icons/fa6";
    import BookingSummary from "../components/BookingSummary";
    import CurrentBooking from "../components/CurrentBooking";

    function BookingPage()
    {
        return(
            <>
            <div className="w-full flex flex-col align-center justify-center p-4 min-h-full">
                <div className="flex flex-col gap-1">
                <small className="text-lg ml-10 font-normal text-neutral-500">Guest</small>
                <div className="h-3/20 gap-3 flex justify-between items-center">
                <FaArrowLeftLong className="text-2xl"/>
                <div>
                    <h1 className="text-2xl font-semibold">Gleen Zimmerman</h1>
                </div>
                    <Button label={"Create new Booking"} className={"ml-auto bg-green-600 hover:bg-green-700"}/>
                </div>
            </div>
            <div className="flex gap-5 w-full">
            <CurrentBooking/>
            <BookingSummary/>
                </div>
            </div>
                
            </>
        )
    }

    export default BookingPage;