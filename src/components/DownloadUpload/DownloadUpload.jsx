import React, { useState } from 'react';
import { FiDownloadCloud, FiUploadCloud } from 'react-icons/fi';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { Button, Loading } from './Style';

// Função para download de imagens
const downloadImages = async (type) => {
  try {
    // Obter dados do localStorage (substituir por sua lógica real)
    const data = JSON.parse(localStorage.getItem(type));

    // Se for um arquivo, baixar diretamente
    if (typeof data === 'string') {
      const blob = new Blob([data], { type: 'application/octet-stream' });
      saveAs(blob, `${type}.zip`);
    } else if (Array.isArray(data)) {
      // Se for um array de imagens, baixar cada uma individualmente
      for (const image of data) {
        const blob = new Blob([image.data], { type: image.type });
        saveAs(blob, image.name);
      }
    } else {
      // Se for um objeto, compactar em zip
      const zip = new JSZip();
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const blob = new Blob([data[key].data], { type: data[key].type });
          zip.file(key, blob);
        }
      }

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, `${type}.zip`);
    }
  } catch (error) {
    console.error('Erro ao baixar imagens:', error);
  }
};

// Função para upload do relatório
const uploadRelatorio = async (file) => {
  try {
    const formData = new FormData();
    formData.append('relatorio', file);

    // Substitua 'your-server-endpoint' pelo endpoint real do seu servidor
    const response = await fetch('your-server-endpoint', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Erro no upload do relatório');
    }

    const data = await response.json();
    // Lidar com a resposta do servidor (ex: exibir uma mensagem de sucesso)
    console.log('Relatório enviado com sucesso:', data);
  } catch (error) {
    console.error('Erro no upload do relatório:', error);
    // Lidar com o erro (ex: exibir uma mensagem de erro)
  }
};

const DownloadUpload = ({ type, onUpload, setShowRelatorio, handleCancel }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  // Função para lidar com o clique nos botões
  const handleClick = async () => {
    setIsLoading(true);
    try {
      if (type === 'relatorio' && selectedFile) {
        await onUpload(selectedFile);
        setSelectedFile(null);
        setUploadError(null);
        setIsLoading(false);
        setShowRelatorio(false);
      } else if (type !== 'relatorio') {
        await downloadImages(type);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Erro na operação:', error);
      setIsLoading(false);
    } 
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadError(null);
  };

  return (
    <div>
      {/* Renderiza o botão de upload se o type for 'relatorio' */}
      {type === 'relatorio' && (
        <>
          {/* Elemento input type="file" oculto */}
          <input 
            type="file" 
            accept=".pdf" 
            onChange={handleFileChange} 
            id="fileInput" 
            hidden 
          />
          {/* Botão principal para acionar o diálogo */}
          <Button onClick={() => document.getElementById('fileInput').click()} disabled={isLoading}>
            <FiUploadCloud size={20} />
            {isLoading && <Loading>...</Loading>}
          </Button>
        </>
      )}
      {/* Renderiza o botão de download se o type não for 'relatorio' */}
      {type !== 'relatorio' && (
        <Button onClick={handleClick} disabled={isLoading}>
          <FiDownloadCloud size={20} />
          {isLoading && <Loading>...</Loading>}
        </Button>
      )}
      {uploadError && <div style={{ color: 'red' }}>{uploadError}</div>}
    </div>
  );
};

export default DownloadUpload;