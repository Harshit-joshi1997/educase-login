import React from 'react';

const MobileContainer = ({ children }) => {
  return (
    <div className="flex items-center w-[800px] justify-center min-h-screen h-screen bg-white">
      <div className="w-full h-full max-w-[430px] bg-white overflow-hidden relative flex flex-col font-sans">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;
