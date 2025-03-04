import React from 'react';
import AnalyticsCard from '../components/Analytics/AnalyticsCard';
import { threatsByType, threatsByProtocol } from '../data/mockData';

const Analytics: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Threat Analytics</h1>
        <p className="text-gray-600">Detailed analysis of security threats</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <AnalyticsCard 
          title="Threats by Type" 
          data={threatsByType} 
          dataKey="count" 
          nameKey="type"
          color="#3b82f6"
        />
        <AnalyticsCard 
          title="Threats by Protocol" 
          data={threatsByProtocol} 
          dataKey="count" 
          nameKey="protocol"
          color="#10b981"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">AI Model Insights</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium text-gray-800 mb-2">Feature Importance</h4>
            <p className="text-gray-600 mb-3">
              The AI model identifies the following features as most significant for threat detection:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Unusual port access patterns (27.3% importance)</li>
              <li>Traffic volume anomalies (21.8% importance)</li>
              <li>Connection duration outliers (18.5% importance)</li>
              <li>Protocol mismatches (15.2% importance)</li>
              <li>Geographic origin anomalies (12.7% importance)</li>
              <li>Time-of-day patterns (4.5% importance)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-gray-800 mb-2">Model Training History</h4>
            <p className="text-gray-600 mb-3">
              The current model version has been trained on 1.2 million network traffic samples with 
              continuous improvement through active learning. The model has been retrained 12 times 
              in the past 30 days to adapt to emerging threat patterns.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-gray-800 mb-2">False Positive Analysis</h4>
            <p className="text-gray-600 mb-3">
              Common causes of false positives include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Legitimate but unusual data transfer patterns (42%)</li>
              <li>Development and testing activities (31%)</li>
              <li>Misconfigured network services (18%)</li>
              <li>Other/unknown causes (9%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;