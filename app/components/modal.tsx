'use client';

import { useModal } from "../contexts/contactmodalprovider";

type ModalProps = {
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {

    const { isOpen, close } = useModal();
    
    return (
        isOpen && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50" onClick={close}>
            <div className="modal-content bg-white w-full h-full md:w-[484px] md:h-[739px] rounded-[8px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>)
    )

}

export default Modal;