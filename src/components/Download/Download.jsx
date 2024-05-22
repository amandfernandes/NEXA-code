/* Esse componente vai tratar do download de dados */
import React from "react";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const DownloadButton = (props) => {
   
    const { links, prefix } = props;  //lista de imagens (url)
    
    const handleDownload = async () => {
        
    const zip = new JSZip();
      // Função para carregar imagens e adicionar ao zip
      const loadImage = async (url, filename) => {
        const response = await fetch(url);
        const blob = await response.blob();
        zip.file(filename, blob);
      };
  
      // Adiciona cada imagem ao zip
      await Promise.all(
        links.map(async (link, index) => {
          await loadImage(link, ${prefix}_${index}.jpg);
        })
      );
  
      // Gera o arquivo zip e faz o download
      zip.generateAsync({ type: 'blob' }).then((content) => {
        saveAs(content, ${prefix}.zip);
      });
    }
  
    
      return (
        <button onClick={handleDownload}>
          {props.children && "Download"}
        </button>
      );
    }

  
  export default DownloadButton;
