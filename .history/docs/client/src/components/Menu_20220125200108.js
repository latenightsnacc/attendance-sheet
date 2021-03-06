import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        
        <div className="container ">
            <div className="shadow-sm">
                <ul className="flex justify-evenly text-center py-2">
                    <li className="mx-2">
                        <Link to={"../dashboard/secretarygeneral"}>
                            <div className="text-green-500 text-semibold no-underline hover: hover:no-underline  p-2 hover:text-green-500">
                                <span><i className="fas fa-th-list"></i></span> 
                                <span className="hidden ml-1 md:inline-block">Dashboard</span>
                            </div>
                        </Link>
                        
                    </li>
                    <li className="mx-2">
                    <Link to={"../dashboard/secretarygeneral"}>
                            <div className="text-green-500 text-semibold no-underline hover: hover:no-underline  p-2 hover:text-green-500">
                                <span><i className="fas fa-th-list"></i></span> 
                                <span className="hidden ml-1 md:inline-block">Dashboard</span>
                            </div>
                        </Link>
                        <a href="attendance.html" className="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            <span><i className="far fa-clipboard"></i></span> 
                            <span className="hidden md:inline-block">Attendance</span>
                        </a>
                    </li>
                    <li className="mx-2">
                    <Link to={"../dashboard/secretarygeneral"}>
                            <div className="text-green-500 text-semibold no-underline hover: hover:no-underline  p-2 hover:text-green-500">
                                <span><i className="fas fa-th-list"></i></span> 
                                <span className="hidden ml-1 md:inline-block">Dashboard</span>
                            </div>
                        </Link>
                        <a href="meeting-minutes.html" className="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            
                        </a>
                    </li>
                    <li className="mx-2">
                    <Link to={"../dashboard/secretarygeneral"}>
                            <div className="text-green-500 text-semibold no-underline hover: hover:no-underline  p-2 hover:text-green-500">
                                <span><i className="far fa-file-alt"></i></span> 
                                <span className="hidden ml-1 md:inline-block">Reports</span>
                            </div>
                        </Link>
                        <a href="reports.html" className="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            
                        </a>
                    </li>
                    <li className="mx-2">
                        <Link to={"../dashboard/secretarygeneral"}>
                            <div className="text-green-500 text-semibold no-underline hover: hover:no-underline  p-2 hover:text-green-500">
                            <span><i className="far fa-calendar-alt"></i></span> 
                            <span className="hidden ml-1 md:inline-block">Events</span>
                            </div>
                        </Link>
                        <a href="events.html" className="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
   

    )
}

export default Menu;