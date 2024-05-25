import React from 'react';

const ReactComponentEmbed = () => {
  // Set a trusted URL or an empty page (about:blank)
  const iframeSrc = 'https://zye-portfolio.netlify.app/'; // Replace with your desired URL

  return (
    <div>
      <iframe
        src={iframeSrc}
        title="React Component"
        sandbox="allow-scripts allow-same-origin"
        referrerPolicy="no-referrer"
        loading="lazy"
        allow="fullscreen"
        
      />
    </div>
  );
};

export default ReactComponentEmbed;
