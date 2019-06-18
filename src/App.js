import React from 'react';
import Button from './components/Button';
import NewsItem from './components/NewItem';
import Loading from './components/Loading';

function App() {
  return (
    <div>
      <Button />
      <NewsItem />
      <Loading />
    </div>
  );
}

export default App;
