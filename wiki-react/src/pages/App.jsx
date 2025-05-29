import React, { useState } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import WikiItem from '../components/WikiItem';
import { checkWikiStatus } from '../utils/github';
import Modal from '../components/Modal';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import ResultHeader from '../components/ResultHeader';
import { format } from 'date-fns';
import { Container, FormContainer, ResultsSection } from './style';

function App() {
  const [repoOwner, setRepoOwner] = useState('');
  const [repoName, setRepoName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [wikiUrl, setWikiUrl] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFormValid = repoOwner.trim() !== '' && repoName.trim() !== '';

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setError('Please enter both repository owner and name');
      return;
    }

    setError(null);
    setWikiUrl('');
    setLoading(true);

    try {
      const { exists, hasWiki, html_url } = await checkWikiStatus(
        repoOwner.trim(),
        repoName.trim()
      );

      if (!exists) {
        setError('Repository not found');
        return;
      }

      if (!hasWiki) {
        setError('This repository exists but has no wiki enabled');
        return;
      }

      setWikiUrl(`${html_url}/wiki`);
    } catch (err) {
      console.error('Error:', err);
      if (err.response?.status === 403) {
        setError('API rate limit exceeded. Try again later or add a GitHub token.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (page) => {
    setSelectedPage({
      ...page,
      content: 'GitHub does not expose wiki content via the API. Open the wiki in your browser.',
      last_edited_at: format(new Date(), 'MMM dd, yyyy HH:mm'),
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPage(null);
  };

  return (
    <Container>
      <Header />

      <FormContainer>
        <form onSubmit={handleSearch} className="space-y-4">
          <Input
            id="repoOwner"
            label="Repository Owner"
            placeholder="e.g. facebook"
            value={repoOwner}
            onChange={setRepoOwner}
          />

          <Input
            id="repoName"
            label="Repository Name"
            placeholder="e.g. react"
            value={repoName}
            onChange={setRepoName}
          />

          <Input
            id="searchTerm"
            label="Search Term (optional)"
            placeholder="e.g. hooks, components"
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <Button type="submit" disabled={!isFormValid || loading}>
            {loading ? 'Searching...' : 'Search Wiki'}
          </Button>
        </form>
      </FormContainer>

      {wikiUrl && (
        <ResultsSection>
          <ResultHeader count={1} />
          <WikiItem
            page={{
              title: `${repoOwner}/${repoName} Wiki`,
              summary: 'Click to open the wiki in your browser.',
              slug: 'Home',
              sha: `${repoOwner}-${repoName}`,
            }}
            onClick={() =>
              handleOpenModal({
                title: `${repoOwner}/${repoName} Wiki`,
                slug: 'Home',
              })
            }
          />
        </ResultsSection>
      )}

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedPage?.title || ''}
        content={selectedPage?.content || ''}
        lastUpdated={selectedPage?.last_edited_at || ''}
        githubUrl={
          selectedPage
            ? `https://github.com/${repoOwner.trim()}/${repoName.trim()}/wiki/${selectedPage.slug}`
            : ''
        }
      />
    </Container>
  );
}

export default App;
