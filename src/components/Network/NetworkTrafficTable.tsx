import React, { useState } from 'react';
import { NetworkTraffic } from '../../types';
import { formatDate, formatNumber, getAnomalyColor } from '../../lib/utils';
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface NetworkTrafficTableProps {
  traffic: NetworkTraffic[];
}

const NetworkTrafficTable: React.FC<NetworkTrafficTableProps> = ({ traffic: initialTraffic }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof NetworkTraffic>('timestamp');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedProtocol, setSelectedProtocol] = useState<string>('all');
  const [anomalyThreshold, setAnomalyThreshold] = useState<number>(0);

  // Get unique protocols
  const protocols = Array.from(new Set(initialTraffic.map(item => item.protocol)));

  // Filter traffic based on search term and filters
  const filteredTraffic = initialTraffic.filter(item => {
    const matchesSearch = 
      item.sourceIP.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.destinationIP.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.protocol.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProtocol = selectedProtocol === 'all' || item.protocol === selectedProtocol;
    const matchesAnomaly = item.anomalyScore >= anomalyThreshold;
    
    return matchesSearch && matchesProtocol && matchesAnomaly;
  });

  // Sort traffic
  const sortedTraffic = [...filteredTraffic].sort((a, b) => {
    if (sortField === 'timestamp') {
      return sortDirection === 'asc' 
        ? new Date(a[sortField]).getTime() - new Date(b[sortField]).getTime()
        : new Date(b[sortField]).getTime() - new Date(a[sortField]).getTime();
    }
    
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Handle sort
  const handleSort = (field: keyof NetworkTraffic) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // Render sort indicator
  const renderSortIndicator = (field: keyof NetworkTraffic) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
          <h3 className="text-lg font-medium text-gray-900">Network Traffic</h3>
          
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search traffic..."
                className="pl-8 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            <div className="flex space-x-2">
              <select
                className="pl-2 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                value={selectedProtocol}
                onChange={(e) => setSelectedProtocol(e.target.value)}
              >
                <option value="all">All Protocols</option>
                {protocols.map(protocol => (
                  <option key={protocol} value={protocol}>{protocol}</option>
                ))}
              </select>
              
              <select
                className="pl-2 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                value={anomalyThreshold}
                onChange={(e) => setAnomalyThreshold(parseFloat(e.target.value))}
              >
                <option value="0">All Traffic</option>
                <option value="0.3">Anomaly Score {'>'}  0.3</option>
                <option value="0.5">Anomaly Score {'>'}  0.5</option>
                <option value="0.7">Anomaly Score {'>'}  0.7</option>
                <option value="0.9">Anomaly Score {'>'}  0.9</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                scope="col" 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('timestamp')}
              >
                <div className="flex items-center">
                  Time
                  {renderSortIndicator('timestamp')}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('sourceIP')}
              >
                <div className="flex items-center">
                  Source IP
                  {renderSortIndicator('sourceIP')}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('destinationIP')}
              >
                <div className="flex items-center">
                  Destination IP
                  {renderSortIndicator('destinationIP')}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('protocol')}
              >
                <div className="flex items-center">
                  Protocol
                  {renderSortIndicator('protocol')}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('bytesTransferred')}
              >
                <div className="flex items-center">
                  Bytes
                  {renderSortIndicator('bytesTransferred')}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('duration')}
              >
                <div className="flex items-center">
                  Duration (s)
                  {renderSortIndicator('duration')}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('anomalyScore')}
              >
                <div className="flex items-center">
                  Anomaly Score
                  {renderSortIndicator('anomalyScore')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedTraffic.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(item.timestamp)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {item.sourceIP}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {item.destinationIP}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {item.protocol}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {formatNumber(item.bytesTransferred)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {item.duration}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`font-medium ${getAnomalyColor(item.anomalyScore)}`}>
                    {item.anomalyScore.toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
            
            {sortedTraffic.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                  No network traffic found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">{sortedTraffic.length}</span> of <span className="font-medium">{initialTraffic.length}</span> traffic records
        </div>
        
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkTrafficTable;