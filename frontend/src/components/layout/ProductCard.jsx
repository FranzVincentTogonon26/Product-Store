import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';

import useAxiosAuth from '../../hooks/useAxiosAuth';
import productService from '../../service/productService';
import DialogBox from '../DialogBox';

const ProductCard = ({ filteredProducts, onDeleteProducts }) => {
  const axiosAuth = useAxiosAuth();
  const modalRef = useRef(null);
  const [deleteId, setDeletedId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDeleteRequest = (id) => {
    setDeletedId(id);
    modalRef.current?.showModal();
  };

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);
      const response = await productService.productDelete(axiosAuth, deleteId);
      onDeleteProducts(deleteId);
      toast.success(response.message);
      modalRef.current?.close();
      setDeletedId(null);
    } catch (error) {
      toast.error('Failed to add product..', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {filteredProducts.length > 0 ? (
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="group card bg-base-100 w-full shadow-sm transition-transform duration-200 hover:scale-105"
              >
                <figure className="relative">
                  <img src={product?.image} alt={product?.name} />
                  <button
                    onClick={() => handleDeleteRequest(product?.id)}
                    className="text-neutral pointer-events-none absolute top-2 right-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 hover:text-red-500"
                  >
                    <X className="size-6" strokeWidth={2.5} />
                  </button>
                </figure>

                <div className="card-body">
                  <h2 className="card-title">
                    {product?.name}
                    <div className="badge badge-soft badge-primary">
                      {product?.price}
                    </div>
                  </h2>

                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>

                  <div className="card-actions justify-end">
                    <button className="btn btn-neutral">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-100 items-center justify-center">
            <span className="text-lg font-normal tracking-tight">
              No record found..
            </span>
          </div>
        </div>
      )}
      <DialogBox
        loading={loading}
        deleteId={deleteId}
        modalRef={modalRef}
        handleConfirmDelete={handleConfirmDelete}
      />
    </>
  );
};

ProductCard.propTypes = {
  filteredProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  onDeleteProducts: PropTypes.func.isRequired,
};

export default ProductCard;
