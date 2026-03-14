import React, { useEffect, useState } from 'react';
import { ShoppingCart, StoreIcon } from 'lucide-react';
import ThemeSelector from '../components/ThemeSelector';

import { UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="top-0 right-0 left-0 z-1000 w-full">
      <div className={`${isScrolled ? 'backdrop-blur' : 'bg-transparent'}`}>
        <div className="navbar top-0 mx-auto flex max-w-7xl items-center justify-between">
          <Link className="flex items-center gap-3 transition-transform duration-200 hover:scale-105">
            <img src="../public/logo.png" className="w-8" />
            <span className="font-bold tracking-wide">Boozy</span>
          </Link>
          <div className="flex gap-2.5">
            <ThemeSelector />
            <div className="dropdown dropdown-end">
              <div className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <ShoppingCart className="size-5" />
                  <span className="badge badge-sm indicator-item badge-soft badge-error">
                    8
                  </span>
                </div>
              </div>
              <div className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
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
      </div>
    </nav>
  );
};

export default Navbar;
