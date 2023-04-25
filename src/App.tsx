import React from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import ShareRelatedTransactionContent from './features/share-related-transaction/ShareRelatedTransactionContent';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <ShareRelatedTransactionContent />
      </AppLayout>
    </div>
  );
}

export default App;
