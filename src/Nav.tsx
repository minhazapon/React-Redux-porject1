import { NavLink } from "react-router-dom";
import { ModeToggle } from "./components/ui/Drop";

const Nav = () => {
    const NavZ = (
        <>
            <li className="font-serif text-sm md:text-base hover:text-blue-500">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="font-serif text-sm md:text-base hover:text-blue-500">
                <NavLink to="/redux">Taskly</NavLink>
            </li>
        </>
    );

    return (
        <div className="w-full">
            <div className="navbar bg-base-100 p-5 shadow">
                <div className="navbar-start">
                    {/* Dropdown menu for mobile */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {NavZ}
                        </ul>
                    </div>

                    {/* Logo section */}
                    <div className="flex items-center gap-2 ml-4 lg:ml-10">
                        <img
                            className="h-[30px] w-[30px]"
                            src="https://cdn-icons-png.flaticon.com/128/10654/10654066.png"
                            alt="Taskly Logo"
                        />
                        <a className="text-lg md:text-xl font-serif">Taskly</a>
                    </div>
                </div>

                {/* Navigation links for desktop */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">{NavZ}</ul>
                </div>

                {/* Theme toggle button */}
                <div className="navbar-end ml-auto mr-4 lg:mr-10">
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};

export default Nav;
