// src/components/CustomerDetails.tsx
import React from 'react';
import { Customer } from '../types/Customer';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  if (!customer) {
    return <div>Please select a customer from the list.</div>;
  }

  return (
    <div className="customer-details">
      <h2>{customer.name} details here</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <PhotoGrid customerId={customer.id} />
    </div>
  );
};

export default CustomerDetails;
