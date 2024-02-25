"use client"
import React from 'react';
import Card from './components/Card';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <h1>Sample React Application</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          title="Example Card showing sunflower"
          description="This is a sample card component with a button."
          imageUrl="https://tse1.mm.bing.net/th?id=OIP.Vs10QMlK8OWadPCkSXS_2QHaE8&pid=Api&P=0&h=180"
        >
          <Button text="Click me" onClick={() => alert('Button clicked!')} />
        </Card>
        <Card
          title="Example Card showing Rose flower"
          description="This is another sample card component with a button."
          imageUrl="https://tse4.mm.bing.net/th?id=OIP.KIF9OxJ7rVzrG3UcyhmiMwHaEK&pid=Api&P=0&h=180"
        >
          <Button
            text="Click me too"
            onClick={() => alert('Another button clicked!')}
            backgroundColor="#28a745"
            hoverBackgroundColor="#218838"
          />
        </Card>
      </div>
    </div>
  );
};

export default App;