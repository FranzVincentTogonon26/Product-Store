import { DollarSignIcon, ImageIcon, Package2Icon } from 'lucide-react';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import useAxiosAuth from '../../hooks/useAxiosAuth';
import productService from '../../service/productService';

const AddProductModal = ({ onSuccess }) => {
  const modalRef = useRef(null);
  const axiosAuth = useAxiosAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await productService.productAdd(axiosAuth, formData);
      onSuccess(response);
      toast.success('Product added successfully..');
      modalRef.current?.close();
      setFormData({
        name: '',
        price: '',
        image: '',
      });
    } catch (error) {
      toast.error('Failed to add product..');
      console.log(`Error occour: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => modalRef.current?.showModal()}
        className="btn transition-transform duration-200 hover:scale-105"
      >
        Add Product
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box p-10">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
            onClick={() => modalRef.current?.close()}
          >
            ✕
          </button>
          <h3 className="mb-8 text-xl font-bold">Add New Product</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-6">
              {/* PRODUCT NAME INPUT */}
              <div className="form-control space-y-3">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Product Name
                  </span>
                </label>
                <div className="relative">
                  <div className="text-base-content/50 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Package2Icon className="size-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter product name"
                    className="input input-bordered focus:input-primary w-full py-3 pl-10 transition-colors duration-200"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* PRODUCT PRICE INPUT */}
              <div className="form-control space-y-3">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Price
                  </span>
                </label>
                <div className="relative">
                  <div className="text-base-content/50 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <DollarSignIcon className="size-5" />
                  </div>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className="input input-bordered focus:input-primary w-full py-3 pl-10 transition-colors duration-200"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* PRODUCT IMAGE */}
              <div className="form-control space-y-3">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Image URL
                  </span>
                </label>
                <div className="relative">
                  <div className="text-base-content/50 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <ImageIcon className="size-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className="input input-bordered focus:input-primary w-full py-3 pl-10 transition-colors duration-200"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="modal-action my-12">
              <button className="btn btn-soft" disabled={loading}>
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    Adding..
                  </>
                ) : (
                  'Add Product'
                )}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

AddProductModal.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default AddProductModal;
