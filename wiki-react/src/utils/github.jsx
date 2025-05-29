import { api } from '../services/api';

export const checkWikiStatus = async (owner, repo) => {
  try {
    const res = await api.get(`/repos/${owner}/${repo}`);
    return {
      exists: true,
      hasWiki: res.data.has_wiki,
      html_url: res.data.html_url,
    };
  } catch (error) {
    if (error.response?.status === 404) {
      return { exists: false };
    }
    throw error;
  }
};
