import React from 'react';
import { ResultHeaderContainer } from './style';

const ResultHeader = ({ count }) => {
  return (
    <ResultHeaderContainer>
      <h2 className="text-xl font-semibold text-gray-800">Wiki Pages</h2>
      <div className="text-sm text-gray-500">
        {count} {count === 1 ? 'page' : 'pages'} found
      </div>
    </ResultHeaderContainer>
  );
};

export default ResultHeader;