// src/App.tsx
import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types/Customer';
import './App.css';

const customers: Customer[] = [
  // Predefined list of customers or fetch from an API
  { id: 1, name: 'Customer 1', title: 'Manager', address: 'Address 1' },
  { id: 2, name: 'Customer 2', title: 'Director', address: 'Address 2' },
  { id: 3, name: 'Customer 3', title: 'Director', address: 'Address 3' },
  { id: 4, name: 'Customer 4', title: 'Director', address: 'Address 4' },
  { id: 5, name: 'Customer 5', title: 'Director', address: 'Address 5' },
  { id: 6, name: 'Customer 6', title: 'Director', address: 'Address 6' },
  { id: 7, name: 'Customer 7', title: 'Director', address: 'Address 7' },
  { id: 8, name: 'Customer 8', title: 'Director', address: 'Address 8' },
  { id: 9, name: 'Customer 9', title: 'Director', address: 'Address 9' },
  { id: 10, name: 'Customer 10', title: 'Director', address: 'Address 10' },
  // Add more customers here
];

const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const handleSelectCustomer = (customerId: number) => {
    setSelectedCustomerId(customerId);
  };

  const selectedCustomer = customers.find((customer) => customer.id === selectedCustomerId) || null;

  return (
    <div className="app">
      <CustomerList customers={customers} selectedCustomerId={selectedCustomerId} onSelectCustomer={handleSelectCustomer} />
      <CustomerDetails customer={selectedCustomer} />
    </div>
  );
};

export default App;
