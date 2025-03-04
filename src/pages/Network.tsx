import React from 'react';
import NetworkTrafficTable from '../components/Network/NetworkTrafficTable';
import { mockNetworkTraffic } from '../data/mockData';

const Network: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Network Monitoring</h1>
        <p className="text-gray-600">Real-time network traffic analysis</p>
      </div>
      
      <div className="mb-6">
        <NetworkTrafficTable traffic={mockNetworkTraffic} />
      </div>
    </div>
  );
};

export default Network;