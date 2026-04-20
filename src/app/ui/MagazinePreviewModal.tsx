"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function MagazinePreviewModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="h-screen w-full fixed top-0 left-0 z-50 bg-primary/50 backdrop-blur-xs flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 bg-black/60 p-2 rounded-md"
            >
              <X className="text-white" />
            </button>

            <iframe
              src="/magazine/local-content-magazine.pdf#toolbar=0"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}