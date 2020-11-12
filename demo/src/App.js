import { useEffect, useState } from 'react';

import generatePdfThumbnails from 'pdf-thumbnails-generator';

const ImageComp = ({ src, index }) => (<div style={{ margin: '1rem', display: 'inline-block' }}>
  <img src={src} alt={index} />
  <p>Page Index: {index}</p>
</div>);

const App = () =>  {
  const [thumbnails, setThumbnails] = useState(null);

  useEffect(() => {
    async function generateThumbnails() {
      try {
        
        const thumbnailsResult = await generatePdfThumbnails('./sample.pdf', 150);
        setThumbnails(thumbnailsResult);
      } catch (err) {
        console.error(err);
      }
    }
    generateThumbnails();
  }, []);

  return (
    <section>
      <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/pdf-thumbnails-generator">pdf-thumbnails-generator</a>
      <p>Library to generate thumbnails from given pdf</p>
        {
          thumbnails ? thumbnails.map(({ thumbnail, page }) => <ImageComp key={page} src={thumbnail} index={page} />) : <span>Loading</span>
        }
    </section>
  );
};

export default App;
