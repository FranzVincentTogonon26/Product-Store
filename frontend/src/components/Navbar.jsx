import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ThemeSelector from '../components/ThemeSelector';

import { UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-semibold tracking-tight">
          Shoppee
        </a>
      </div>
      <div className="flex gap-2.5">
        <ThemeSelector />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCart className="size-5" />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div className="btn btn-circle avatar">
            <div className="rounded-full">
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
