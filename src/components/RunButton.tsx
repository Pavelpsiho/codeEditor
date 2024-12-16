import React from 'react';
import './RunButton.scss';


interface RunButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const RunButton: React.FC<RunButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button onClick={onClick} disabled={isLoading} className={`button ${isLoading ? 'loading' : ''}`}>
      {isLoading ? 'Running...' : 'Run'}
    </button>
  );
};

export default RunButton;
