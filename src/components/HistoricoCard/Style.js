import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F5F5;
  width: 60%; /* Reduced width */
  height: 60%; /* Reduced height */
  padding: 12px; /* Reduced padding */
`;

export const ContainerCard = styled.div`
  width: 180px; /* Reduced width */
  border-radius: 6px; /* Reduced border radius */
  background-color: #F9F9F9;
  padding: 12px; /* Reduced padding */
  margin: 6px; /* Reduced margin */
  box-shadow: 0 2.4px 3.6px rgba(0, 0, 0, 0.1); /* Reduced box shadow */
`;

export const DataDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 18px); /* Reduced row height */
  grid-template-areas:
    "a a b"
    "c c c"
    "d e e";
`;

export const Span = styled.span`
  &#id {
    font-weight: bold;
    color: #333;
    font-size: 15px; /* Reduced font size */
    grid-area: a;
  }

  &#status {
    display: inline-block;
    font-size: 10px;
    text-align: center;
    width: 75px;
    height: 13px;
    border: 1px solid;
    border-radius: 20px;
    align-self: flex-start;
    grid-area: b;
   }
  }

  &#action {
    color: #666;
    font-size: 12px; /* Reduced font size */
    grid-area: c;
    padding: 5px;
  }

  &#time {
    color: #666;
    font-size: 10px; /* Reduced font size */
    text-align: right;
    align-self: center;
    grid-area: e;
    padding: 5px;
  }
`;
