import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-colors w-full md:w-auto text-center";
  
  const variants = {
    primary: "bg-[#C8553D] text-white hover:bg-[#A84530]",
    secondary: "bg-[#2A5944] text-white hover:bg-[#1D4030]",
    ghost: "bg-transparent text-[#C8553D] border border-[#C8553D] hover:bg-[#C8553D]/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
