import { useState, useEffect } from 'react';

const useGetMarkdown = (filename?: string) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import(`../../posts/${filename}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setMarkdown(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [filename]);

  return {
    markdown,
  };
};

export default useGetMarkdown;
