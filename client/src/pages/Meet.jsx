import { useEffect, useState } from 'react';

const Meet = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/videoHome.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => setContent(data))
      .catch(error => setError(error.toString()));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Meet;
