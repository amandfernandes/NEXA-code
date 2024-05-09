import React from 'react';
import styles from './Style';

const FileUploader = ({ onUpload }) => {
  const [file, setFile] = React.useState(null);
  const [uploadError, setUploadError] = React.useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadError("No file selected.");
      return;
    }

    try {
      await onUpload(file);
      setFile(null);
      setUploadError(null);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadError(error.message);
    }
  };

  return (
    <div className={styles.fileUploader}>
      <input type="file" onChange={handleFileChange} style={styles.inputFile} />
      {file && (
        <div>
          <p>Selected file: {file.name}</p>
          <button onClick={handleUpload} style={styles.uploadButton}>
            Upload file
          </button>
        </div>
      )}
      {uploadError && <p style={styles.errorText}>{uploadError}</p>}
    </div>
  );
};

export default FileUploader;