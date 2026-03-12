import React from 'react';
import { SignInButton } from '@clerk/clerk-react';

import ThemeSelector from '../components/ThemeSelector';

function HomePage() {
  return (
    <div className="h-full w-full">
      {/* Navbar */}
      <div className="navbar bg-base-100 top-0 mx-auto mt-2 flex max-w-7xl justify-center text-center shadow-sm backdrop-blur-md">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl font-semibold tracking-tight">
            daisyUI
          </a>
        </div>
        <div className="navbar-end gap-2.5">
          <ThemeSelector />
          <SignInButton mode="modal">
            <a className="btn">Sign In</a>
          </SignInButton>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
