import styled from 'styled-components';

export const RequestStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F5F5;
  width: 75%; /* Reduced width */
  height: auto; /* Reduced height */
  padding: 1px; /* Reduced padding */
  margin: 0 auto;
  border-radius: 5px
  `;

export const ChartContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  position: relative;
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LegendColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const LegendLabel = styled.span`
  font-size: 15px;
`;

