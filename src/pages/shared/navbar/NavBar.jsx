import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/colleges'>Colleges</Link>
            </li>
            <li>
            <Link to='/admission'>Admission</Link>
            </li>
            <li>
            <Link to='/myCollege'>My College</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end hidden md:block">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-person-user-19.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='/profile' className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
            <li>
            <button>log out</button>
            </li>
          </ul>
        </div>
        <div className="text-3xl ml-10 md:hidden">
        {show ? <span onClick={()=>setShow(!show)} className="">x</span> : <span onClick={()=>setShow(!show)} className="">=</span>}
        </div>
      </div>
      {show && <div className="bg-gray-500 text-white absolute top-0 right-0 bottom-0 left-16">
        <div className="w-1/2 mx-auto">
          <div className="absolute top-6 right-6">
          {show && <span onClick={()=>setShow(!show)} className="">x</span>}
          </div>
          <ul className="menu  px-1 absolute top-16">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-person-user-19.png" />
            </div>
          </label>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/colleges'>Colleges</Link>
            </li>
            <li>
            <Link to='/admission'>Admission</Link>
            </li>
            <li>
            <Link to='/myCollege'>My College</Link>
            </li>
<br /> <br />
            <li>
              <Link to='/profile' className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
            <li>
            <button>log out</button>
            </li>
          </ul>
        </div>
      </div>}
    </div>
  );
};

export default NavBar;
