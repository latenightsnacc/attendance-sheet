const Stats = () => {
    return (
        <div class="container">
            <div class="min-w-sm shadow-sm p-2 mt-3 text-sm text-gray-800">
                
                <div class="h-4"></div>
                <div class="flex flex-col items-center md:flex-row justify-evenly ">
                    <div class="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span class="text-xl font-medium">172</span>
                        <span class="text-xs text-gray-500 font-light">Total Members</span>
                    </div>
                    <div class="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span class="text-xl font-medium">76</span>
                        <span class="text-xs text-gray-500 font-light">Total Meetings</span>
                    </div>
                    <div class="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span class="text-xl font-medium">5</span>
                        <span class="text-xs text-gray-500 font-light">Total Events</span>
                    </div>
                    <div class="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span class="text-xl font-medium">₦18,600.00</span>
                        <span class="text-xs text-gray-500 font-light">Total Fees Collected</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Stats;