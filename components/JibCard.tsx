import React, { ReactNode } from 'react';

interface JibCardProps {
  children: ReactNode;
}

const JibCard: React.FC<JibCardProps> = ({ children }) => {
  return (
    <div className="jib-card">
      <div className="px-4 py-5 sm:p-6">
        {children /* Content goes here */}
      </div>
    </div>
  );
};

export default JibCard;
