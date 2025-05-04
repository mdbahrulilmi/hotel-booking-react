import ImageCard from "../components/ImageCard";

function HomePage()
{
    const imageUrl = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484723796.jpg?k=02fb9464da52b3628767c269df6934c2e939bd3e88b8003adc7d887ea2277a55&o=&hp=1";
    return(
        <>
        <div className="flex flex-col gap-1 w-1/2"> 
            <h1 className="text-xl font-semibold my-3">Find Hotel to Stay</h1>
            <div className="bg-white p-5 rounded-2xl mt-2 w-full shadow-md">
            <div className="grid grid-cols-[1fr_1fr_auto] mb-3">
                <label className="font-semibold" htmlFor="date">Date</label>
                <label className="font-semibold" htmlFor="location">Where To</label>
                <span className="invisible">Search</span>
            </div>
                <form className="grid grid-cols-[1fr_1fr_auto] gap-5 items-center">
                    <input type="text" className="rounded-full bg-gray-100 px-4 py-2 h-12" placeholder="Jul 12 - Jul 14" />
                    <input type="text" className="rounded-full bg-gray-100 px-4 py-2 h-12" placeholder="Yogyakarta, Indonesia" />
                    <button className="bg-green-700 text-white px-6 py-2 rounded-full font-semibold">Search</button>
                </form>
            </div>
            <h1 className="text-xl font-semibold my-3">Lodging Available</h1>
            <div className="flex gap-4 overflow-x-auto flex-no-wrap mb-3">
                <div className="flex-col bg-white p-2 rounded-2xl mt-2 shadow-md">
                    <ImageCard url={imageUrl} size='md' />
                    <h3>Shikara Hotel</h3>
                    <small>Shikara Hotel</small>
                    <h2>$42.73</h2>
                </div>
                <div className="flex-col bg-white p-2 rounded-2xl mt-2 shadow-md">
                    <ImageCard url={imageUrl} size='md' />
                    <h3>Shikara Hotel</h3>
                    <small>Shikara Hotel</small>
                    <h2>$42.73</h2>
                </div>
                <div className="flex-col bg-white p-2 rounded-2xl mt-2 shadow-md">
                    <ImageCard url={imageUrl} size='md' />
                    <h3>Shikara Hotel</h3>
                    <small>Shikara Hotel</small>
                    <h2>$42.73</h2>
                </div>
                <div className="flex-col bg-white p-2 rounded-2xl mt-2 shadow-md">
                    <ImageCard url={imageUrl} size='md' />
                    <h3>Shikara Hotel</h3>
                    <small>Shikara Hotel</small>
                    <h2>$42.73</h2>
                </div>
            </div>
            <div className="bg-white p-5 rounded-2xl mt-2 w-full shadow-md">
                <div className="flex justify-between mb-4">
                    <div className="flex gap-10">
                        <h1 className="text-lg font-semibold">Most Popular</h1>
                        <h1 className="text-lg font-semibold">Special Offers</h1>
                        <h1 className="text-lg font-semibold">Near Me</h1>
                    </div>
                    <p className="text-orange-600">View all</p>
                </div>
                <div className="grid grid-cols-2 gap-4 p-2">
                    <div className="flex justify-between items-center shadow-md p-2 rounded-sm">
                    <ImageCard url={imageUrl} size='sm'/>
                    <div>
                        <h6>Shikara Hotel</h6>
                        <small>Indonesia</small>
                    </div>
                        <h5>$42<span className="text-gray-500">/night</span></h5>
                    </div>
                    <div className="flex justify-between items-center">
                    <ImageCard url={imageUrl} size='sm'/>
                    <div>
                        <h6>Shikara Hotel</h6>
                        <small>Indonesia</small>
                    </div>
                        <h5>$42<span className="text-gray-500">/night</span></h5>
                    </div>
                    <div className="flex justify-between items-center">
                    <ImageCard url={imageUrl} size='sm'/>
                    <div>
                        <h6>Shikara Hotel</h6>
                        <small>Indonesia</small>
                    </div>
                        <h5>$42<span className="text-gray-500">/night</span></h5>
                    </div>
                    <div className="flex justify-between items-center">
                    <ImageCard url={imageUrl} size='sm'/>
                    <div>
                        <h6>Shikara Hotel</h6>
                        <small>Indonesia</small>
                    </div>
                        <h5>$42<span className="text-gray-500">/night</span></h5>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default HomePage;