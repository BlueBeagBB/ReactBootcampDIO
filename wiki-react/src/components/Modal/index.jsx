import React from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter
} from './style';
import { FaTimes } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';


const Modal = ({ isOpen, onClose, title, content, lastUpdated, githubUrl }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: (props) => <h1 className="text-2xl font-bold mb-4" {...props} />,
              h2: (props) => <h2 className="text-xl font-semibold mb-3" {...props} />,
              p: (props) => <p className="mb-2" {...props} />,
              ul: (props) => <ul className="list-disc list-inside mb-2" {...props} />,
              ol: (props) => <ol className="list-decimal list-inside mb-2" {...props} />,
              li: (props) => <li className="ml-4" {...props} />,
              code: ({ className, children, ...props }) => (
                <code
                  className={`bg-gray-100 px-1 py-0.5 rounded font-mono text-sm ${className || ''}`}
                  {...props}
                >
                  {children}
                </code>
              ),
              a: (props) => (
                <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </ModalBody>

        <ModalFooter>
          <div className="text-sm text-gray-500">{lastUpdated}</div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <i className="fab fa-github mr-1"></i> View on GitHub
          </a>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
