import { Outlet } from "react-router-dom"
import Header from "./components/Header"    


function Layout()
{
    return(
        <>
        <div>
            <Header/>
            <div>
                <Outlet/>
            </div>
        </div>
        </>
    )
}

export default Layout