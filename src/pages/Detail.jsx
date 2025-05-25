import { useParams } from 'react-router-dom';
import HotelDescription from '../components/Detail/HotelDescription';
import RoomList from '../components/Detail/RoomList';
import SearchOptionFlex from '../components/SearchOptionFlex';
function Detail()
{
    const { id } = useParams();
    return(
        <>
            <div className='sticky top-0 z-10'>
            <div className="flex justify-center bg-white">
                <SearchOptionFlex/>
            </div>   
            <div className="flex justify-center bg-white">

                <div className="flex justify-between w-4/5">
                    <div className='flex list-none gap-10 font-semibold'>
                        <li>Overview</li>
                        <li>Rooms</li>
                        <li>Location</li>
                        <li>Facilities</li>
                        <li>Policy</li>
                        <li>Reviews</li>
                    </div>
                    <div className='flex list-none gap-4'>
                        <li>Copy link</li>
                        <li>Save Accomodation</li>
                    </div>
                </div>
            </div>   
                </div>
            <div className='flex justify-center bg-white'>
                <HotelDescription id={id}/>
            </div>
            <div className='flex justify-center bg-white'>
                <RoomList id={id}/>
            </div>
        
        </>
        
    )
}

export default Detail;