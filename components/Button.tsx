import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'whatsapp' | 'outline' | 'accent';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-full transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm";
  
  const variants = {
    primary: "border border-transparent text-white bg-brand-700 hover:bg-brand-800 focus:ring-brand-500 shadow-brand-500/30",
    accent: "border border-transparent text-white bg-accent-500 hover:bg-accent-600 focus:ring-accent-500 shadow-accent-500/30",
    whatsapp: "border border-transparent text-white bg-whatsapp hover:bg-green-600 focus:ring-green-500 shadow-green-500/30",
    outline: "border-2 border-brand-600 text-brand-700 bg-transparent hover:bg-brand-50 focus:ring-brand-500"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};