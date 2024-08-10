// src/TidioChat.js

import React, { useEffect } from 'react';

const TidioChat = () => {
  useEffect(() => {
    // Load the Tidio script
    const tidioScript = document.createElement('script');
    tidioScript.src = '//code.tidio.co/tpwplqzyjbvq4eklbeycrthlrjuihb8p.js'; 
    tidioScript.async = true;
    document.body.appendChild(tidioScript);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(tidioScript);
    };
  }, []);

  return null; // This component does not render anything
};

export default TidioChat;
