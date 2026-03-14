import React, { useEffect, useState } from 'react';
import { SignInButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

import ThemeSelector from '../components/ThemeSelector';

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="top-0 right-0 left-0 z-1000 w-full">
        <div className={`${isScrolled ? 'backdrop-blur' : 'bg-transparent'}`}>
          <div className="navbar top-0 mx-auto flex max-w-7xl items-center justify-between">
            <Link className="flex items-center gap-3 transition-transform duration-200 hover:scale-105">
              <img src="../public/logo.png" className="w-8" />
              <span className="font-bold tracking-wide">Boozy</span>
            </Link>
            <div className="navbar-end gap-2.5">
              <ThemeSelector />
              <SignInButton mode="modal">
                <a className="btn">Sign In</a>
              </SignInButton>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex min-h-screen flex-col">
        <div
          style={{
            height: '300px',
            backgroundImage:
              'url(https://boozy.ph/cdn/shop/files/02.03.26_2000x451px_Chinese_New_Year_Dalmore_EF_1920x.png?v=1770608815)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <main className="mt-10 grow">
          <div className="hero py-10">
            <div className="hero-content flex-col justify-between lg:flex-row-reverse">
              <img
                src="https://boozy.ph/cdn/shop/products/Hibiki_21yo_Limited_Edition_1680x.png?v=1723964491"
                className="max-w-sm"
              />
              <div>
                <h1 className="text-3xl font-bold">
                  Wide Selection in Products
                </h1>
                <p className="py-6">
                  Widest selection of 2,500+ bottles of Whisky, Wine, Gin,
                  Vodka, Beer, and many more.
                </p>
              </div>
            </div>
          </div>
          <div className="hero bg-base-200 p-10">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://boozy.ph/cdn/shop/products/hennessyXO_1680x.png?v=1746426843"
                className="max-w-sm"
              />
              <div>
                <h1 className="text-3xl font-bold">
                  Unparalleled Authenticity
                </h1>
                <p className="py-6">
                  Hailing from the heart of Cognac, France, this exceptional{' '}
                  {"'"}Extra Old{"'"} cognac signifies the timeless tradition
                  and craftsmanship that Hennessy has upheld for over 250 years.
                </p>
              </div>
            </div>
          </div>
          <div className="hero p-10">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </main>
        <div className="bg-base-300 mt-auto p-10">
          <footer className="footer sm:footer-horizontal text-base-content mx-auto max-w-7xl justify-between">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Social</h6>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
