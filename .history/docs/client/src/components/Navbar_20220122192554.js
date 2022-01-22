const Navbar = () => {

    return (
        <header class="shadow-sm bg-white sticky top-0 z-50 py-2">
            <div class="container">
                <nav class="flex flex-row justify-between items-center">
                    <a class="block w-4/6 md:w-2/6" href="member.html">
                        <img src="../../../assets/logo/logo.png"  alt="" class="w-80 md:w-80">
                    </a>
                    <a  href="../index.html" 
                    class="text-sm font-light py-2 px-3 shadow-sm flex items-center no-underline rounded bg-gray-100 bg-opacity-50 hover:bg-opacity-100 hover:bg-green-500 text-sm text-black hover:text-white flex items-center">
                        <span><i class="fas fa-sign-out-alt"></i></span>
                        <span class="pr-2 hidden md:inline ml-1">Log Out</span> 
                </a>
                </nav>
            </div>
    </header>
    )
}

export default Navbar;