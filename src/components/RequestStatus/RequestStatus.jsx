import React, { useState, useEffect, useRef } from 'react';
import {
  RequestStatusContainer,
  ChartContainer,
  LegendContainer,
  LegendItem,
  LegendColor,
  LegendLabel,
} from './Style'; // Importe os estilos

const RequestStatus = ({ requestsData }) => {
  const canvasRef = useRef(null); 

  const colors = ['#5d708a', '#35516e', '#001354', '#556B2F', '#87CEEB', '#4682B4'];

  const statuses = ['Pending', 'Progress', 'Concluded'];
  const statusCounts = statuses.map(status => ({
    status,
    count: requestsData.filter(request => request.status === status).length,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Limpar o canvas antes de desenhar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calcular os ângulos para cada fatia
    const total = statusCounts.reduce((sum, count) => sum + count.count, 0);
    let startAngle = 0;
    statusCounts.forEach((count, index) => {
      const endAngle = startAngle + (count.count / total) * 2 * Math.PI;
      drawSlice(ctx, startAngle, endAngle, count.status, canvas, colors[index]);
      startAngle = endAngle;
    });
  }, [statusCounts]); 

  const drawSlice = (ctx, startAngle, endAngle, status, canvas, color) => {
    const radius = 100; 
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Desenhar a fatia
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = color;
    ctx.fill();
  };

  return (
    <RequestStatusContainer>
      <ChartContainer>
        <canvas ref={canvasRef} width="200" height="200" /> 
      </ChartContainer>
      <LegendContainer>
        {statusCounts.map((count, index) => (
          <LegendItem key={index}>
            <LegendColor style={{ backgroundColor: colors[index] }} />
            <LegendLabel>
              {count.status} {count.count}
            </LegendLabel>
          </LegendItem>
        ))}
      </LegendContainer>
    </RequestStatusContainer>
  );
};

export default RequestStatus;