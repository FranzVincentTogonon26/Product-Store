import React, { useState } from 'react';
import PropTypes from 'prop-types';

ProductCard.propTypes = {
  filteredProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  onDeleteProducts: PropTypes.func,
};

const ProductCard = ({ filteredProducts, onDeleteProducts }) => {
  const [deleteId, setDeletedId] = useState(null);

  return (
    <>
      {filteredProducts.length > 0 ? (
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="card bg-base-100 w-full shadow-sm transition-transform duration-200 hover:scale-105"
              >
                <figure>
                  <img src={product?.image} alt={product?.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {product?.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-4">
          <div className="">No record..</div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
