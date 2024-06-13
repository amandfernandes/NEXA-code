import React, { useState } from 'react';
import { FiDownloadCloud, FiUploadCloud } from 'react-icons/fi';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { Button, Loading } from './Style';

const DownloadUpload = ({ type, onUpload, handleCancel, setShowRelatorio }) => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadImages = async () => {
    setIsLoading(true);

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

      setIsLoading(false);
    } catch (error) {
      console.error('Erro ao baixar imagens:', error);
      setIsLoading(false);
    }
  };

  const handleUpload = async () => {
    setIsLoading(true);
    try {
      // Lógica para lidar com o upload do arquivo (ex: enviar para um servidor)
      // Substitua este console.log com a lógica real de upload
      console.log("Arquivo enviado:", type); 
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);
      setIsLoading(false);
    }
  };

  // Função handleFileChange não é necessária para botões de download

  return (
    <Button 
      onClick={() => (type === 'relatorio' ? handleUpload() : downloadImages())} 
      disabled={isLoading}
    >
      {/* Renderiza o ícone apropriado para cada tipo */}
      {type === 'relatorio' ? (
        <FiUploadCloud size={20} /> 
      ) : (
        <FiDownloadCloud size={20} />
      )}
      {isLoading && <Loading>...</Loading>}
    </Button>
  );
};

export default DownloadUpload;