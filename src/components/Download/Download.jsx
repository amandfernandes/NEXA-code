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
      const images = JSON.parse(localStorage.getItem(type));

      // Se for compactado, criar zip
      if (type === 'compressed') {
        const zip = new JSZip();

        for (const image of images) {
          const blob = new Blob([image.data], { type: image.type });
          zip.file(image.name, blob);
        }

        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, `${type}.zip`);
      } else {
        // Senão, baixar cada imagem individualmente
        for (const image of images) {
          const blob = new Blob([image.data], { type: image.type });
          saveAs(blob, image.name);
        }
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