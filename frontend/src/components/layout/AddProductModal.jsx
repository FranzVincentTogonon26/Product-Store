import React, { useState } from 'react';

const AddProductModal = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <button
        onClick={() => document.getElementById('my_modal_3').showModal()}
        className="btn transition-transform duration-200 hover:scale-105"
      >
        Add Product
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};

export default AddProductModal;
