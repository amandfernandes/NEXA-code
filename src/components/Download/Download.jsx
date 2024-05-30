/* Esse componente vai tratar do download de dados */
import React, { useState, useEffect } from 'react';
import { Container, Title, Button } from './Style';

// URLs das imagens da web
const imageLinks = [
  { type: 'calibration', url: 'https://i.pinimg.com/736x/4d/ec/78/4dec785e2a558fba9b18ac3cf11fe014.jpg' },
  { type: 'exam', url: 'https://i.pinimg.com/736x/53/f8/45/53f8453dd81050aea95f75a2cb31a4e6.jpg' },
  // ... adicione mais links de imagem aqui
];

const Download = () => {
  const [calibrationImages, setCalibrationImages] = useState([]);
  const [examImages, setExamImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const downloadAndStoreImages = async () => {
      try {
        const imagePromises = imageLinks.map(async (link) => {
          const response = await fetch(link.url);
          const blob = await response.blob();
          // Converte o blob em uma Data URL
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          return new Promise((resolve) => {
            reader.onloadend = () => {
              resolve({ type: link.type, url: reader.result });
            };
          });
        });

        const downloadedImages = await Promise.all(imagePromises);

        const calibrationImagesUrls = downloadedImages.filter(img => img.type === 'calibration').map(img => img.url);
        const examImagesUrls = downloadedImages.filter(img => img.type === 'exam').map(img => img.url);

        setCalibrationImages(calibrationImagesUrls);
        setExamImages(examImagesUrls);

        // Salva as Data URLs no LocalStorage
        localStorage.setItem('calibrationImages', JSON.stringify(calibrationImagesUrls));
        localStorage.setItem('examImages', JSON.stringify(examImagesUrls));

        setImagesLoaded(true);
      } catch (error) {
        console.error('Erro ao baixar imagens:', error);
      }
    };

    downloadAndStoreImages();
  }, []);

  const downloadImages = (imageType) => {
    // Obtém as Data URLs do LocalStorage
    const imagesToDownload = imageType === 'calibration'
      ? JSON.parse(localStorage.getItem('calibrationImages') || '[]')
      : JSON.parse(localStorage.getItem('examImages') || '[]');

    imagesToDownload.forEach((imageUrl, index) => {
      const link = document.createElement('a');
      link.href = imageUrl; // Usa a Data URL diretamente
      link.download = `${imageType}_${index + 1}.jpg`;
      link.click();
    });
  };

  return (
    <Container>
      <Title>Download de Imagens</Title>
      {imagesLoaded ? (
        <>
          <Button onClick={() => downloadImages('calibration')} disabled={!calibrationImages.length}>
            Baixar Imagens de Calibração
          </Button>
          <Button onClick={() => downloadImages('exam')} disabled={!examImages.length}>
            Baixar Imagens de Exame
          </Button>
        </>
      ) : (
        <p>Carregando imagens...</p>
      )}
    </Container>
  );
};

export default Download;