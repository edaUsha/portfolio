"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4 mb-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-glass-lg">
              <span className="text-white font-bold text-3xl font-display">U</span>
            </div>
            <p className="font-script text-2xl text-navy-900">Usha Rao Patteti</p>
          </motion.div>

          {/* Loading bar */}
          <div className="w-48 h-1 bg-sky-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"
            />
          </div>
          <p className="text-gray-400 text-xs mt-3">Loading portfolio...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
