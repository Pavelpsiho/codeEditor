import React from 'react';

interface OutputProps {
  result: string;
}

const Output: React.FC<OutputProps> = ({ result }) => {
  return (
    <div className="output">
      <h3>Execution result:</h3>
      <pre>{result}</pre>
    </div>
  );
};

export default Output;
