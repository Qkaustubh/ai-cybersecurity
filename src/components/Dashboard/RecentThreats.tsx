import React from 'react';
import { ThreatAlert } from '../../types';
import { formatDate, getSeverityColor, getStatusColor } from '../../lib/utils';

interface RecentThreatsProps {
  threats: ThreatAlert[];
}

const RecentThreats: React.FC<RecentThreatsProps> = ({ threats }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Recent Threat Alerts</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Severity
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Threat Type
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source IP
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {threats.map((threat) => (
              <tr key={threat.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(threat.severity)}`}>
                    {threat.severity.charAt(0).toUpperCase() + threat.severity.slice(1)}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{threat.threatType}</div>
                  <div className="text-xs text-gray-500 truncate max-w-xs">{threat.description}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {threat.sourceIP}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(threat.timestamp)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(threat.status)}`}>
                    {threat.status.charAt(0).toUpperCase() + threat.status.slice(1).replace('-', ' ')}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-right">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
          View All Threats →
        </button>
      </div>
    </div>
  );
};

export default RecentThreats;