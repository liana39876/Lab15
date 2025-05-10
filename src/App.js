import React from 'react';
import Head from './elements/Head';
import Main from './elements/Main';
import Footer from './elements/Footer';

const App = () => {
  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', height: '100vh' }}>
      <Head />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
