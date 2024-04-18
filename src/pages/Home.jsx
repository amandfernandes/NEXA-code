import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import React from 'react';
import Servicos from "../components/Servicos/Servicos";
import FiltroComponent from "../components/Filtro/Filtro";

const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */
    const requests = [
      { forms:'Dosimetria Clínica', id: '0001', title: 'Clinica', status: 'Pending', date: '12/04/2024' },
      { forms:'Dosimetria Pré-Clínica', id: '0002', title: 'Clinica', status: 'Pending', date: '12/04/2024' },
      { forms:'Modelagem Computacional', id: '0003', title: 'Clinica', status: 'Concluded', date: '12/04/2024' },
      { forms:'Segmentação e Quantificação', id: '0004', title: 'Clinica', status: 'Pending', date: '12/4/2024' },
      { forms:'Radiosinoviortese', id: '0005', title: 'Clinica', status: 'Pending', date: '12/04/2024' },
      { forms:'Dosimetria Clínica', id: '0006', title: 'Clinica', status: 'Concluded', date: '12/04/2024' },
      { forms:'Dosimetria Pré-Clínica', id: '0007', title: 'Clinica', status: 'Pending', date: '12/04/2024' },
      { forms:'Modelagem Computacional', id: '0008', title: 'Clinica', status: 'Pending', date: '12/04/2024' },
      { forms:'Segmentação e Quantificação', id: '0009', title: 'Clinica', status: 'Pending', date: '12/4/2024' },
      { forms:'Radiosinoviortese', id: '0010', title: 'Clinica', status: 'Concluded', date: '12/04/2024' },
      { forms:'Dosimetria Clínica', id: '0011', title: 'Clinica', status: 'Concluded', date: '12/04/2024' },
      { forms:'Dosimetria Pré-Clínica', id: '0012', title: 'Clinica', status: 'Pending', date: '12/04/2024' },
      { forms:'Modelagem Computacional', id: '0013', title: 'Clinica', status: 'Concluded', date: '12/04/2024' },
      { forms:'Segmentação e Quantificação', id: '0014', title: 'Clinica', status: 'Concluded', date: '12/4/2024' },
      { forms:'Radiosinoviortese', id: '0015', title: 'Clinica', status: 'Pending', date: '12/04/2024' },
        ]

  return (
      <Base>
        <h2>Solicitações</h2>
        
        <div>
          <Servicos requests={requests} />
        </div>
      </Base>
  )
}

export default Home