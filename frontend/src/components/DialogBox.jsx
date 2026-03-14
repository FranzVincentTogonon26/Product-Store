import React from 'react';
import PropTypes from 'prop-types';

const DialogBox = ({ loading, deleteId, modalRef, handleConfirmDelete }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    handleConfirmDelete(deleteId);
  };

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <button
          onClick={() => modalRef.current?.close()}
          className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
        >
          ✕
        </button>
        <h3 className="text-lg font-bold">Confirm Deletion</h3>
        <p className="py-4">
          Are you sure you want to delete? This action cannot be undone.
        </p>
        <div className="modal-action">
          <button
            className="btn btn-soft"
            disabled={loading}
            onClick={handleDelete}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm" />
                Deleting..
              </>
            ) : (
              'Delete'
            )}
          </button>
        </div>
      </div>
    </dialog>
  );
};

DialogBox.propTypes = {
  loading: PropTypes.bool.isRequired,
  deleteId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  modalRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  handleConfirmDelete: PropTypes.func.isRequired,
};

export default DialogBox;
