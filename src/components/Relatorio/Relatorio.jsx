import React from 'react';
import {
  FileUploader as FileUploaderStyled,
  InputFile,
  UploadButton,
  ErrorText,
} from './Style';

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
    <FileUploaderStyled>
      <InputFile type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <p>Selected file: {file.name}</p>
          <UploadButton onClick={handleUpload}>Upload file</UploadButton>
        </div>
      )}
      {uploadError && <ErrorText>{uploadError}</ErrorText>}
    </FileUploaderStyled>
  );
};

export default FileUploader;