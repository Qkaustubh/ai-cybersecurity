import React from 'react';
import { Brain } from 'lucide-react';
import { ModelPerformance } from '../../types';
import { formatDate } from '../../lib/utils';

interface ModelPerformanceCardProps {
  performance: ModelPerformance;
}

const ModelPerformanceCard: React.FC<ModelPerformanceCardProps> = ({ performance }) => {
  const metrics = [
    { name: 'Accuracy', value: performance.accuracy },
    { name: 'Precision', value: performance.precision },
    { name: 'Recall', value: performance.recall },
    { name: 'F1 Score', value: performance.f1Score }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-4 py-3 bg-indigo-600 text-white">
        <div className="flex items-center">
          <Brain className="h-5 w-5 mr-2" />
          <h3 className="text-lg font-medium">AI Model Performance</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric) => (
            <div key={metric.name} className="bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-500">{metric.name}</p>
              <p className="text-xl font-bold text-indigo-700">
                {(metric.value * 100).toFixed(1)}%
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>Last model update: {formatDate(performance.lastUpdated)}</p>
        </div>
      </div>
    </div>
  );
};

export default ModelPerformanceCard;