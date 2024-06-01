import React from 'react';
import logo from './logo.svg';
import './App.css';
import InsuranceInfo from './components/InsuranceInfo';
import styled from 'styled-components';


const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;


function App() {
  return (
    <AppContainer>
      
      <InsuranceInfo 
        companyName='Labor'
        policyNumber='11339247'
        startDate='08/07/2020'
        buttonLabels={["DETALHE", "DOCUMENTOS", "RECIBOS"]}
        showButtons={false}
      />
    </AppContainer>
  );
}

export default App;
