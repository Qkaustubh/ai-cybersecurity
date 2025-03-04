import React from 'react';
import { AlertTriangle, Shield, CheckCircle, XCircle } from 'lucide-react';
import { ThreatStatistics } from '../../types';
import { formatNumber } from '../../lib/utils';

interface ThreatSummaryProps {
  statistics: ThreatStatistics;
}

const ThreatSummary: React.FC<ThreatSummaryProps> = ({ statistics }) => {
  const cards = [
    {
      title: 'Total Threats',
      value: statistics.totalThreats,
      icon: <AlertTriangle className="h-8 w-8 text-blue-500" />,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      title: 'Critical Threats',
      value: statistics.criticalThreats,
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    },
    {
      title: 'Resolved',
      value: statistics.resolvedThreats,
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      title: 'False Positives',
      value: statistics.falsePositives,
      icon: <XCircle className="h-8 w-8 text-gray-500" />,
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-700'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className={`${card.bgColor} rounded-lg shadow-sm p-4`}>
          <div className="flex items-start justify-between">
            <div>
              <p className={`text-sm font-medium ${card.textColor}`}>{card.title}</p>
              <p className={`text-2xl font-bold mt-1 ${card.textColor}`}>
                {formatNumber(card.value)}
              </p>
            </div>
            <div>{card.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreatSummary;