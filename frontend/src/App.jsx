import React, { useState } from 'react';


import Upload from './Upload.jsx';
import TableDisplay from './TableDisplay.jsx';
import './App.css'


function App() {
  const [data, setData] = useState(null);

  // Function to clear the result
  const clearData = () => setData(null);

  return (
    <div className="app-bg">
      <header className="app-header">
        <div className="logo-title">
          <img src="https://cdn-icons-png.flaticon.com/512/2966/2966484.png" alt="Clinic Logo" className="clinic-logo" />
          <div>
            <h1>Online Medical Clinic</h1>
            <p className="subtitle">Prescription Price Estimator</p>
          </div>
        </div>
        <div className="clinic-info">
          <span>An AI medicine Prescription reader which gives you an estimated cost for your medicine</span>
          <span>Just Upload Your image and see the result</span>
        </div>
      </header>
      <main className="main-card">
        <Upload setData={setData} clearData={clearData} />
        {data && <TableDisplay items={data.items} total={data.total} />}
      </main>
      <footer className="footer">
        <span>This is a computer generated document</span>
      </footer>
    </div>
  );
}

export default App; 