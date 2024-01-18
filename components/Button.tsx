// JibButton.tsx
import React, { FC } from 'react';

interface JibButtonProps {
  text: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const JibButton: FC<JibButtonProps> = ({ text, size = 'md' }) => {
  // Define button sizes
  const buttonSizes: Record<string, string> = {
    'xs': 'px-2.5 py-1 text-xs',
    'sm': 'px-2.5 py-1 text-sm',
    'md': 'px-3 py-1.5 text-sm',
    'lg': 'px-3.5 py-2 text-sm',
    'xl': 'px-4 py-2.5 text-sm',
  };

  // Get the specified size or default to 'md'
  const buttonSize = buttonSizes[size] || buttonSizes['md'];

  return (
    <button
      type="button"
      className={`rounded-full bg-primary-300 ${buttonSize} font-semibold text-white shadow-sm hover:bg-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300`}
    >
      {text}
    </button>
  );
};

export default JibButton;
