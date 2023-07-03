import React, { useState } from 'react';

type TabProps = {
  label: string;
};

const Tab: React.FC<TabProps> = ({ label }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`tab ${isActive ? 'active' : ''}`} onClick={handleClick}>
      {label}
    </div>
  );
};

export default Tab;