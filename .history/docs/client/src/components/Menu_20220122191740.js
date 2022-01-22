const Menu = () => {
    return (
        <div className="w-full md:w-5/6 md:mx-auto">
        <div className="container ">
            <div className="shadow-sm">
                <ul className="flex justify-evenly text-center py-2">
                    <li className="mx-2">
                        <a href="dashboard.html" className="text-green-500 text-semibold no-underline hover:no-underline  p-2 hover:text-green-500">
                            <span><i className="fas fa-th-list"></i></span> 
                            <span className="hidden md:inline-block">Dashboard</span>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="attendance.html" className="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            <span><i className="far fa-clipboard"></i></span> 
                            <span className="hidden md:inline-block">Attendance</span>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="meeting-minutes.html" className="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            <span><i className="far fa-edit"></i></span> 
                            <span className="hidden md:inline-block">Notes</span>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="reports.html" className="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            <span><i className="far fa-file-alt"></i></span> 
                            <span className="hidden md:inline-block">Reports</span>
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="events.html" className="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            <span><i className="far fa-calendar-alt"></i></span> 
                            <span className="hidden md:inline-block">Events</span>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>

    )
}

export default Menu;