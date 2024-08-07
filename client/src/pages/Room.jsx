import { useEffect, useState } from 'react';

const Room = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/room.html')
      .then(response => response.text())
      .then(data => setContent(data));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Room;
