import Actions from './Actions';
import Logo from './Logo';
import Search from './Search';

function Navbar() {
    return (
        <div className="fixed top-0 w-full h-20 z-[49] bg-[#151514] text-white px-2 lg:px-4 flex justify-between items-center shadow-sm ">
            <Logo />
            <Search />
            <Actions />
        </div>
    );
}

export default Navbar;
