/* Esse componente vai tratar do download de dados */
import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { Container, Title, Description, Button, Loading, CancelButton } from './Style';

const DownloadImages = ({ handleCancel }) => { // Adicione a prop handleCancel
  const [isLoading, setIsLoading] = useState(false);

  const downloadImages = async (type) => {
    setIsLoading(true);

    try {
      // Obter dados do localStorage
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

  return (
    <Container>
      <div>
        <Title>Imagens dos Exames</Title>
        <Description>Arquivos enviados pelo cliente</Description>
        <Button onClick={() => downloadImages('exames')} disabled={isLoading}>
          Download {isLoading && <Loading>...</Loading>}
        </Button>
      </div>
      <div>
        <Title>Imagens Calibração</Title>
        <Description>Arquivos enviados pelo cliente</Description>
        <Button onClick={() => downloadImages('calibracao')} disabled={isLoading}>
          Download {isLoading && <Loading>...</Loading>}
        </Button>
      </div>
      <div>
        <CancelButton onClick={handleCancel}>cancelar</CancelButton>
      </div>
    </Container>
  );
};

export default DownloadImages;