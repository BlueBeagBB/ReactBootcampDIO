import React from 'react';
import { WikiItemContainer } from './style';
import { formatBytes } from '../../utils/formatBytes';

const WikiItem = ({ page, onClick }) => {
  return (
    <WikiItemContainer onClick={onClick}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg text-gray-800 mb-1">{page.title}</h3>
          {page.summary && <p className="text-gray-600 text-sm">{page.summary}</p>}
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
          {formatBytes(page.size)}
        </span>
      </div>
    </WikiItemContainer>
  );
};

export default WikiItem;