import { useEffect, useState } from 'react';

const Lobby = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/lobby.html')
      .then(response => response.text())
      .then(data => setContent(data));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Lobby;
