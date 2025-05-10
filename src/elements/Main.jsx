import React from 'react';
import { Routes, Route } from 'react-router-dom';
import News from '../pages/News';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';

const Main = () => {
  return (
    <main style={{
      display: 'grid',
      gridTemplateColumns: '1fr 3fr 1fr',
      borderTop: '1px solid #ccc',
      borderBottom: '1px solid #ccc',
      height: '100%'
    }}>
      <section style={{ borderRight: '1px solid #ccc', padding: '1rem' }}>
        <img src="/logo.png" alt="logo" width="100px"/>
      </section>
      <article style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </article>
      <aside style={{ borderLeft: '1px solid #ccc', padding: '1rem' }}>
        Иванов Иван Иванович
      </aside>
    </main>
  );
};

export default Main;
