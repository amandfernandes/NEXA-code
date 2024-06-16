import React, { useState, useEffect, useRef } from 'react';
import {
  RequestStatusContainer,
  ChartContainer,
  LegendContainer,
  LegendItem,
  LegendColor,
  LegendLabel,
} from './Style';

const RequestStatus = ({ requestsData, onFilterChange }) => {
  const canvasRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [statusCounts, setStatusCounts] = useState([]);

  const colors = ['#5d708a', '#35516e', '#001354', '#556B2F', '#87CEEB', '#4682B4'];
  const statuses = ['Pending', 'Progress', 'Concluded'];

  const calculateStatusCounts = (data) => {
    const counts = {};
    statuses.forEach(status => counts[status] = 0);
    data.forEach(request => {
      if (counts.hasOwnProperty(request.status)) {
        counts[request.status]++;
      }
    });
    return statuses.map(status => ({ status, count: counts[status] }));
  };

  useEffect(() => {
    setStatusCounts(calculateStatusCounts(requestsData));
  }, [requestsData]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

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

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = color;
    ctx.fill();
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter); // Envia o filtro para o DashboardSection
  };

  return (
    <RequestStatusContainer>
      <ChartContainer>
        <canvas ref={canvasRef} width="200" height="200" />
      </ChartContainer>
      <LegendContainer>
        {statusCounts.map((count, index) => (
          <LegendItem key={index} onClick={() => handleFilterChange(count.status)}>
            <LegendColor style={{ backgroundColor: colors[index] }} />
            <LegendLabel>
              {count.status} ({count.count})
            </LegendLabel>
          </LegendItem>
        ))}
      </LegendContainer>
    </RequestStatusContainer>
  );
};

export default RequestStatus;