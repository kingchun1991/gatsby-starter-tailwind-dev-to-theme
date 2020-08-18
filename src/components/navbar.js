import React from 'react';
import Bell from '../images/bell.svg';
import Message from '../images/message.svg';
import Menu from '../images/menu.svg'
// import navbar from './navbar.css';

const Navbar = () => {

    return (
        <div className="bg-white border">
            <div className="flex items-center justify-between container mx-auto p-1">
                <div className="flex items-center">
                    <div className="">
                        <a href="/">
                            <img id="logo" className="focus:outline-none" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="DEV"/>
                        </a>
                    </div>
                    <div className="pl-1">
                        <input type="text" id="search__input" className="border rounded border-gray-500 focus:outline-none" placeholder="Search..."/>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="hidden sm:hidden md:hidden lg:flex xl:flex">
                        <button id="post__button" className="focus:outline-none text-white font-semibold px-4 py-2 rounded">
                            Write a post
                        </button>
                    </div>
                    <div className="flex ml-3 hover:bg-gray-300 p-2 rounded-full">
                        <img src={Bell} className="h-6 w-6"/>
                    </div>
                    <div className="flex ml-3 hover:bg-gray-300 p-2 rounded-full">
                        <img src={Message} className="h-6 w-6"/>
                    </div>
                    <div className="flex ml-3 hover:bg-gray-300 p-2 rounded-full">
                        <img src={Menu} className="h-6 w-6"/>
                    </div>
                    {/* <div className="flex ml-3 ">
                      <img className="border-solid border-4 border-white hover:border-gray-300 rounded-full cursor-pointer" 
                        style={{ width: "40px", height: "40px"}} 
                        src={Menu} alt="profile pic"/>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;