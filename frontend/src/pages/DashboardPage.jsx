import React, { useState } from 'react';
import toast from 'react-hot-toast';

import Navbar from '../components/Navbar';
import ProductCard from '../components/layout/ProductCard';
import AddProductModal from '../components/layout/AddProductModal';
import LoaderSkeleton from '../components/LoaderSkeleton';

import productService from '../service/productService';

const DashboardPage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  // useState(() => {
  //   const fetchProducts = async () => {
  //       try {
  //         setLoading(true);
  //         const response = await productService.productList();
  //         console.log(response)
  //         setProduct(response);
  //       } catch (error) {
  //         console.log(`Error: ${error}`)
  //         toast.error('Failed to fetch products');
  //       } finally {
  //         setLoading(false)
  //       }
  //   }
  //   fetchProducts();
  // }, [product]);

  const renderContent = () => {
    if (loading) {
      return <LoaderSkeleton />;
    }

    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between px-10 lg:flex-row">
          <div>
            <div className="text-3xl font-semibold tracking-wide">
              Product List
            </div>
            <span className="line-clamp-1 text-sm tracking-normal">
              Check back later for availability of new models
            </span>
          </div>

          <div className="mt-10 flex w-full items-center gap-2 lg:mt-0 lg:max-w-xl">
            <label className="input flex flex-1 items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>

              <input
                type="search"
                required
                placeholder="Search"
                className="w-full"
              />
            </label>

            <AddProductModal product={product} setProduct={setProduct} />
          </div>
        </div>
        <ProductCard />
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {renderContent()}
    </div>
  );
};

export default DashboardPage;
