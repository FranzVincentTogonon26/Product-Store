import React from 'react';

const LoaderSkeleton = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mt-25 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Set fixed 4 columns */}
          <div className="mt-10 grid grid-cols-4 gap-20">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="flex w-full flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderSkeleton;
