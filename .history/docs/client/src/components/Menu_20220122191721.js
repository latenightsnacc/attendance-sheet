const Menu = () => {
    return (
        <div class="w-full md:w-5/6 md:mx-auto">
        <div class="container ">
            <div class="shadow-sm">
                <ul class="flex justify-evenly text-center py-2">
                    <li class="mx-2">
                        <a href="dashboard.html" class="text-green-500 text-semibold no-underline hover:no-underline  p-2 hover:text-green-500">
                            <span><i class="fas fa-th-list"></i></span> 
                            <span class="hidden md:inline-block">Dashboard</span>
                        </a>
                    </li>
                    <li class="mx-2">
                        <a href="attendance.html" class="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            <span><i class="far fa-clipboard"></i></span> 
                            <span class="hidden md:inline-block">Attendance</span>
                        </a>
                    </li>
                    <li class="mx-2">
                        <a href="meeting-minutes.html" class="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            <span><i class="far fa-edit"></i></span> 
                            <span class="hidden md:inline-block">Notes</span>
                        </a>
                    </li>
                    <li class="mx-2">
                        <a href="reports.html" class="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            <span><i class="far fa-file-alt"></i></span> 
                            <span class="hidden md:inline-block">Reports</span>
                        </a>
                    </li>
                    <li class="mx-2">
                        <a href="events.html" class="text-gray-500 no-underline hover:no-underline  p-2 hover:text-green-500">
                            <span><i class="far fa-calendar-alt"></i></span> 
                            <span class="hidden md:inline-block">Events</span>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>

    )
}

export default Menu;