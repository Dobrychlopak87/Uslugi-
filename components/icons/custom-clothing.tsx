import React from 'react';

export const CustomClothingIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 3l8 4-1 13H5L4 7l8-4z" />
    <path d="M9 3v4" />
    <path d="M15 3v4" />
    <path d="M4 11h16" />
  </svg>
);
