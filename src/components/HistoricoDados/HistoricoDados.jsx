import React, { useState, useEffect } from "react";
import fs from 'fs';

const HistoricoDados  = (props) => {
    /**
     * Estado que armazena o histórico de ações do usuário.
     */
    const [history, setHistory] = useState([]);
  
    /**
     * Estado que armazena o conteúdo do arquivo JSON que representa o histórico.
     */
    const [jsonFile, setJsonFile] = useState({});
  
    /**
     * Efeito que carrega o arquivo JSON existente quando o componente é montado.
     */
    useEffect(() => {
      // Carrega o arquivo JSON existente
      fs.readFile('Historico.json', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          /**
           * Atualiza o estado do arquivo JSON com o conteúdo lido.
           */
          setJsonFile(JSON.parse(data));
          /**
           * Atualiza o estado do histórico com as ações armazenadas no arquivo JSON.
           */
          setHistory(jsonFile.history);
        }
      });
    }, []);
  
    /**
     * Efeito que atualiza automaticamente o arquivo JSON sempre que o histórico muda.
     */
    useEffect(() => {
      /**
       * Função que atualiza o arquivo JSON com o novo histórico.
       */
      const updateJsonFile = () => {
        const newJsonFile = {...jsonFile, history };
        fs.writeFile('Historico.json', JSON.stringify(newJsonFile, null, 2), (err) => {
          if (err) {
            console.error(err);
          }
        });
      };
      updateJsonFile();
    }, [history]);
  
    /**
     * Efeito que adiciona ações ao histórico quando certos eventos ocorrem.
     */
    useEffect(() => {
      /**
       * Função que é chamada quando o download é concluído.
       */
      const downloadCompleted = () => {
        /**
         * Adiciona uma ação ao histórico com o ID do usuário e a ação "Download completed".
         */
        setHistory((prevHistory) => [...prevHistory, { id: props.id, action: 'Download completed' }]);
      };
      /**
       * Função que é chamada quando o relatório é enviado.
       */
      const reportSent = () => {
        /**
         * Adiciona uma ação ao histórico com o ID do usuário e a ação "Report sent".
         */
        setHistory((prevHistory) => [...prevHistory, { id: props.id, action: 'Report sent' }]);
      };
      // Adiciona listeners de eventos para os eventos que você deseja rastrear
      document.addEventListener('downloadCompleted', downloadCompleted);
      document.addEventListener('reportSent', reportSent);
      return () => {
        // Remove listeners de eventos quando o componente é desmontado
        document.removeEventListener('downloadCompleted', downloadCompleted);
        document.removeEventListener('reportSent', reportSent);
      };
    }, []);
  
    return (
      <div>
        <h1>Histórico</h1>
        <ul>
          {history.map(({ id, action }, index) => (
            <li key={index}>{id} - {action}</li>
          ))}
        </ul>
      </div>
    );
  };

export default HistoricoDados;