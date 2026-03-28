'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { villages } from '@/data/data';
import { motion, AnimatePresence } from 'motion/react';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 p-4 shadow-lg overflow-hidden z-50"
          >
            <nav className="flex flex-col gap-2">
              {villages.map((v) => (
                <Link key={v.id} href={`/village/${v.id}`} onClick={() => setIsOpen(false)} className="p-2 text-lg font-medium text-slate-800 hover:bg-slate-100 rounded-lg">
                  {v.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
