import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const ApiDemo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch posts');
        setLoading(false);
      });
  }, [page]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">API Demo (JSONPlaceholder Posts)</h2>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-4 px-3 py-2 border rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {filteredPosts.map(post => (
          <li key={post.id} className="py-2">
            <span className="font-semibold">{post.title}</span>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-4 items-center">
        <Button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</Button>
        <span>Page {page}</span>
        <Button onClick={() => setPage(p => p + 1)}>Next</Button>
      </div>
    </Card>
  );
};

export default ApiDemo;
