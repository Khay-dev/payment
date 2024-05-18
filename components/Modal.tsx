import { IoIosClose } from "react-icons/io";
import { createPortal } from "react-dom";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" bg-white p-6 shadow-lg w-[90%] md:w-[400px] lg:w-[400px] h-fit flex flex-col gap-3 items-center justify-center rounded-lg">
                <button
                    type="submit"
                    onClick={onClose}
                    className=" text-[#18181B] ml-auto text-[27px]"
                >
                    <IoIosClose />
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};
