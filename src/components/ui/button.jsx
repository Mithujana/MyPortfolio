import React from 'react';

export const Button = React.forwardRef(({ className = "", variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
    ghost: "bg-transparent hover:bg-transparent text-slate-800 dark:text-slate-100",
  };
  
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 ${variants[variant]} ${className}`}
      {...props}
    />
  );
});
Button.displayName = "Button";
