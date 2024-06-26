import { Dispatch, SetStateAction } from 'react';

interface AddBookModalProps {
    isFormOpen: boolean
    setIsFormOpen: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode
}

const AddBookModal = ({ isFormOpen, setIsFormOpen, children }: AddBookModalProps) => {
  return (
    <dialog className={`modal ${isFormOpen ? "modal-open" : ""}`}>
      <div className="modal-box w-11/12 max-w-3xl">
        {children}
        <div className="modal-action">
            <button className="btn" onClick={() => setIsFormOpen(false)}>Close</button>
        </div>
      </div>
    </dialog>
  );
};

export default AddBookModal;