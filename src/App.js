import React from 'react';
import './App.css';
// import JSONcomments from './resources/comments.json';
// import JSONposts from './resources/posts.json';

import MainPage from './pages/MainPage';
import Layout from './layout/Layout'



function App() {
  return (
    <Layout>
      <MainPage></MainPage>
    </Layout>
  );
}

export default App;
