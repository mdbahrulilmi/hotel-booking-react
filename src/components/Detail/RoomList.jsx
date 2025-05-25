import RoomCard from "../Card/RoomCard";

function RoomList({id})
{
    return(
        <div>
            <div className="text-[18px] font-semibold py-5">
                Tipe Kamar yang Tersedia di MG Suites Hotel Semarang
            </div>
            <RoomCard />
            <RoomCard />
            <RoomCard />
        </div>
    );
}

export default RoomList;