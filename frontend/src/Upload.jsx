import React, { useState } from 'react';

function Upload({ setData, clearData }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get API URL from environment variable or use localhost for development
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setError(null);
    if (clearData) clearData(); // Clear previous result
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file first');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Use environment variable for API URL
      const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || 'Failed to upload file. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <div className="file-input-wrapper">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileSelect}
          id="file-input"
          className="file-input"
        />
        <label htmlFor="file-input" className="file-input-label">
          {selectedFile ? selectedFile.name : 'Choose an image file'}
        </label>
      </div>
      
      <button 
        onClick={handleUpload}
        disabled={!selectedFile || isLoading}
        className="upload-button"
      >
        {isLoading ? 'Processing...' : 'Upload & Process'}
      </button>

      {error && <div className="error-message">{error}</div>}
      
      {selectedFile && (
        <div className="file-info">
          <p>Selected file: {selectedFile.name}</p>
          <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
      
      
    </div>
  );
}

export default Upload; 