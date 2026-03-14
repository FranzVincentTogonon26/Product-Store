import React, { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import Footer from '../components/Footer';
import { CheckIcon, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useParams } from 'react-router-dom';

import useAxiosAuth from '../hooks/useAxiosAuth';
import productService from '../service/productService';
import toast from 'react-hot-toast';

const ProductPage = () => {
  const { id } = useParams();
  const axiosAuth = useAxiosAuth();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productService.productItem(axiosAuth, id);
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

  const renderContent = () => {
    if (loading) {
      return <Spinner />;
    }
    return (
      <main className="grow">
        <div className="hero mt-10">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={products?.[0]?.image}
              className="glass mask mask-hexagon-2 max-w-2xl p-8 shadow-lg"
            />
            <div className="ml-12 space-y-8">
              <h1 className="text-4xl font-bold">{products?.[0]?.name}</h1>
              <div className="">
                <span className="text-2xl font-semibold">
                  ₱ {products?.[0]?.price}
                </span>
              </div>
              <div className="">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="1 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="2 star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="3 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="4 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="5 star"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button
                  className="btn btn-soft"
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                >
                  <Minus />
                </button>

                <span className="text-lg font-bold">{qty}</span>

                <button
                  className="btn btn-soft"
                  onClick={() => setQty(qty + 1)}
                >
                  <Plus />
                </button>

                <button className="btn btn-accent ml-6 text-lg">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-20 max-w-7xl items-center justify-center p-10">
          <div className="space-y-6">
            <div className="flex items-center justify-baseline gap-3">
              <ShoppingBag />
              <span className="text-xl font-semibold tracking-wide">
                Products Details
              </span>
            </div>
            <h1 className="text-2xl font-semibold">{products?.[0]?.name}</h1>
            <p className="text-sm">
              Indulge in the luxury of Woomera Wines{"'"} Pink Moscato - a
              delightful, sweet and fizzy beverage that tantalizes the senses.
              With its soft pink hue and effervescent bubbles, this wine exudes
              elegance and charm, making it a perfect choice for anyone with a
              taste for the finer things in life.
            </p>
            <p className="text-sm">
              Its alluring floral aroma draws you in, while the burst of
              tropical fruit flavors like mango, lychee, and pineapple awaken
              the palate. Despite its sweet profile, this wine packs a light
              punch of alcohol, making it an excellent choice for those who
              prefer a lighter, easy-drinking option.
            </p>
            <p className="text-sm">
              Enjoy it as an aperitif or pair it with seafood dishes and mild
              cheeses for a delectable combination. Don{"'"}t be afraid to try
              it with sweet desserts as well, as its versatility will surprise
              and delight you. Woomera Pink Moscato is truly a standout amongst
              premium wines.
            </p>
            <p className="font-semibold tracking-wide">Product Features:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckIcon strokeWidth={2.5} className="mr-2 h-5 w-5" />
                <span className="mr-2 font-semibold">Type:</span> Wine
              </li>
              <li className="flex items-center">
                <CheckIcon strokeWidth={2.5} className="mr-2 h-5 w-5" />
                <span className="mr-2 font-semibold">Body:</span> Light-bodied
              </li>
              <li className="flex items-center">
                <CheckIcon strokeWidth={2.5} className="mr-2 h-5 w-5" />
                <span className="mr-2 font-semibold">Sweetness:</span> Sweet
              </li>
              <li className="flex items-center">
                <CheckIcon strokeWidth={2.5} className="mr-2 h-5 w-5" />
                <span className="mr-2 font-semibold">Style:</span> Lightly
                sparkling
              </li>
              <li className="flex items-center">
                <CheckIcon strokeWidth={2.5} className="mr-2 h-5 w-5" />
                <span className="mr-2 font-semibold">Volume:</span> 750ml
              </li>
            </ul>
            <p className="font-semibold tracking-wide">Taste Profile:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckIcon strokeWidth={2.5} className="mr-2 h-5 w-5" />
                <span className="mr-2 font-semibold">Nose:</span> Delicate
                floral aromas
              </li>
              <li className="flex items-center">
                <CheckIcon strokeWidth={2.5} className="mr-2 h-5 w-5" />
                <span className="mr-2 font-semibold">Palate:</span> Sweet and
                refreshing with tropical fruit notes of mango, lychee, and
                pineapple
              </li>
              <li className="flex items-center">
                <CheckIcon strokeWidth={2.5} className="mr-2 h-5 w-5" />
                <span className="mr-2 font-semibold">Volume:</span> Light,
                fizzy, and pleasantly smooth
              </li>
            </ul>
            <div className="">
              <p className="font-semibold tracking-wide">
                Serving Recommendation:
              </p>
              <p className="text-sm">
                Best served well-chilled. Enjoy as an aperitif or pair with
                seafood dishes, mild cheeses, or sweet desserts for a versatile
                and delightful drinking experience.
              </p>
            </div>
          </div>
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

export default ProductPage;
