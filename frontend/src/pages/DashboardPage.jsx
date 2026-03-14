import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import Navbar from '../components/Navbar';
import ProductCard from '../components/layout/ProductCard';
import AddProductModal from '../components/layout/AddProductModal';
import LoaderSkeleton from '../components/LoaderSkeleton';
import Footer from '../components/Footer';

import useAxiosAuth from '../hooks/useAxiosAuth';
import productService from '../service/productService';

const DashboardPage = () => {
  const axiosAuth = useAxiosAuth();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productService.productList(axiosAuth);
        setProducts(response);
      } catch (error) {
        console.log(`Error: ${error}`);
        toast.error('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    filterItems();
  }, [products, searchQuery]);

  const filterItems = () => {
    let filtered = products;
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  };

  const handleDeleteProducts = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const renderContent = () => {
    if (loading) {
      return <LoaderSkeleton />;
    }

    return (
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between px-10 lg:flex-row">
            <div>
              <div className="text-2xl font-semibold tracking-wide">
                Trending <span className="font-black">Products</span>
              </div>
              <span className="line-clamp-1 text-sm tracking-normal">
                Products with a guarantee of authenticity.
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </label>

              <AddProductModal
                onSuccess={(newProduct) => {
                  setProducts([...products, newProduct]);
                }}
              />
            </div>
          </div>
          <ProductCard
            filteredProducts={filteredProducts}
            onDeleteProducts={handleDeleteProducts}
          />
        </div>
      </main>
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default DashboardPage;
