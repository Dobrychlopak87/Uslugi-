'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  details?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick, icon, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (details) {
      setIsExpanded(!isExpanded);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white p-4 rounded-2xl shadow-sm border border-slate-100 backdrop-blur-sm bg-opacity-90 ${details || onClick ? 'cursor-pointer hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''} ${isExpanded ? 'border-blue-500 ring-4 ring-blue-50' : ''} ${className}`}
    >
      <div className="flex items-start gap-3">
        {icon && <div className="mt-1 p-1.5 bg-slate-50 rounded-xl text-blue-600">{icon}</div>}
        <div className="flex-grow">{children}</div>
        {details && (
          <div className="mt-1">
            <button 
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${isExpanded ? 'bg-slate-800 text-white shadow-md' : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm hover:shadow-lg hover:scale-105'}`}
            >
              {isExpanded ? 'Zwiń' : 'Sprawdź'}
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        )}
      </div>
      {details && isExpanded && (
        <div className="mt-4 pt-4 border-t border-slate-100 text-slate-600 animate-in fade-in slide-in-from-top-4 duration-300">
          {details}
        </div>
      )}
    </div>
  );
};
