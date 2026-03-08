import React from 'react';
import { NavLink } from 'react-router';
import QuickHire from '../QuickHire/QuickHire';

const Navbar = () => {

  const navItems = <>
    <li><NavLink to="/find-jobs">Find Jobs</NavLink></li>
    <li><NavLink to="/browse-companies">Browse Companies</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100 shadow-sm">

      {/* LEFT */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {navItems}
          </ul>
        </div>

        {/* Logo */}
        <div className='flex items-end gap-2'>
          <QuickHire />
          <h6 className="font-bold text-lg">QuickHire</h6>
        </div>

      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3">

        <NavLink
          to="/login"
          className="btn btn-ghost">
          Login
        </NavLink>

        <NavLink
          to="/signup"
          className="btn btn-primary">
          Sign Up
        </NavLink>

      </div>

    </div>
  );
};

export default Navbar;