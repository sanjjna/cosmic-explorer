// src/components/ZoomModal.jsx
import { useEffect } from "react";

const ZoomModal = ({ imageSrc, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full mx-auto px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt="Zoomed"
          className="rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
        />
        <button
          className="absolute top-2 right-2 bg-white text-black p-1 rounded-full shadow-md hover:bg-red-600 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ZoomModal;
