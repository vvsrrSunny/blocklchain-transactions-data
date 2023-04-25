import React from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import ShareRelatedTransaction from './features/share-related-transaction/ShareRelatedTransaction';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <ShareRelatedTransaction></ShareRelatedTransaction>
      </AppLayout>
    </div>
  );
}

export default App;
