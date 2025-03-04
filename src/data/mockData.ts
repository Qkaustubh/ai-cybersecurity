import { ThreatAlert, NetworkTraffic, SystemMetric, ThreatStatistics, ModelPerformance } from '../types';

// Generate random IP address
const generateIP = () => {
  return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
};

// Generate random timestamp within the last 24 hours
const generateTimestamp = (hoursAgo = 24) => {
  const date = new Date();
  date.setHours(date.getHours() - Math.floor(Math.random() * hoursAgo));
  return date.toISOString();
};

// Protocols
const protocols = ['TCP', 'UDP', 'HTTP', 'HTTPS', 'DNS', 'ICMP', 'SSH', 'FTP', 'SMTP'];

// Threat types
const threatTypes = [
  'SQL Injection',
  'Cross-Site Scripting',
  'DDoS Attack',
  'Brute Force',
  'Man-in-the-Middle',
  'Malware',
  'Phishing',
  'Zero-day Exploit',
  'Ransomware',
  'Data Exfiltration'
];

// Threat descriptions
const threatDescriptions = [
  'Suspicious SQL query patterns detected in HTTP requests',
  'Unusual script injection attempt detected in form submission',
  'Abnormal traffic volume suggesting DDoS attack',
  'Multiple failed login attempts detected',
  'Unusual network routing detected suggesting MITM attack',
  'Signature matching known malware detected',
  'Email containing suspicious links detected',
  'Unknown attack pattern detected by anomaly detection',
  'File encryption behavior detected',
  'Large data transfer to unusual destination'
];

// Generate mock threat alerts
export const mockThreatAlerts: ThreatAlert[] = Array.from({ length: 50 }, (_, i) => {
  const severity = ['low', 'medium', 'high', 'critical'][Math.floor(Math.random() * 4)] as 'low' | 'medium' | 'high' | 'critical';
  const status = ['new', 'investigating', 'resolved', 'false-positive'][Math.floor(Math.random() * 4)] as 'new' | 'investigating' | 'resolved' | 'false-positive';
  const threatTypeIndex = Math.floor(Math.random() * threatTypes.length);
  
  return {
    id: `threat-${i + 1}`,
    timestamp: generateTimestamp(),
    severity,
    sourceIP: generateIP(),
    destinationIP: generateIP(),
    protocol: protocols[Math.floor(Math.random() * protocols.length)],
    threatType: threatTypes[threatTypeIndex],
    description: threatDescriptions[threatTypeIndex],
    status,
    confidence: parseFloat((0.5 + Math.random() * 0.5).toFixed(2))
  };
});

// Generate mock network traffic data
export const mockNetworkTraffic: NetworkTraffic[] = Array.from({ length: 100 }, (_, i) => {
  return {
    id: `traffic-${i + 1}`,
    timestamp: generateTimestamp(12),
    sourceIP: generateIP(),
    destinationIP: generateIP(),
    protocol: protocols[Math.floor(Math.random() * protocols.length)],
    bytesTransferred: Math.floor(Math.random() * 10000000),
    packetsTransferred: Math.floor(Math.random() * 10000),
    duration: Math.floor(Math.random() * 300),
    anomalyScore: parseFloat((Math.random()).toFixed(2))
  };
});

// Generate system metrics for the last 24 hours (hourly)
export const mockSystemMetrics: SystemMetric[] = Array.from({ length: 24 }, (_, i) => {
  const date = new Date();
  date.setHours(date.getHours() - 23 + i);
  
  return {
    timestamp: date.toISOString(),
    cpuUsage: parseFloat((30 + Math.random() * 50).toFixed(2)),
    memoryUsage: parseFloat((40 + Math.random() * 40).toFixed(2)),
    networkLoad: parseFloat((20 + Math.random() * 70).toFixed(2)),
    alertsGenerated: Math.floor(Math.random() * 10)
  };
});

// Mock threat statistics
export const mockThreatStatistics: ThreatStatistics = {
  totalThreats: 127,
  criticalThreats: 18,
  highThreats: 35,
  mediumThreats: 42,
  lowThreats: 32,
  resolvedThreats: 89,
  falsePositives: 15
};

// Mock model performance metrics
export const mockModelPerformance: ModelPerformance = {
  accuracy: 0.94,
  precision: 0.92,
  recall: 0.89,
  f1Score: 0.91,
  lastUpdated: new Date().toISOString()
};

// Recent threats for dashboard
export const recentThreats = mockThreatAlerts
  .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  .slice(0, 5);

// High severity threats
export const highSeverityThreats = mockThreatAlerts
  .filter(threat => threat.severity === 'critical' || threat.severity === 'high')
  .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  .slice(0, 8);

// Threat count by type
export const threatsByType = threatTypes.map(type => ({
  type,
  count: mockThreatAlerts.filter(threat => threat.threatType === type).length
})).sort((a, b) => b.count - a.count);

// Threat count by protocol
export const threatsByProtocol = protocols.map(protocol => ({
  protocol,
  count: mockThreatAlerts.filter(threat => threat.protocol === protocol).length
})).sort((a, b) => b.count - a.count);

// Hourly threat counts for the last 24 hours
export const hourlyThreatCounts = Array.from({ length: 24 }, (_, i) => {
  const date = new Date();
  date.setHours(date.getHours() - 23 + i);
  date.setMinutes(0, 0, 0);
  
  const nextHour = new Date(date);
  nextHour.setHours(nextHour.getHours() + 1);
  
  const count = mockThreatAlerts.filter(threat => {
    const threatTime = new Date(threat.timestamp);
    return threatTime >= date && threatTime < nextHour;
  }).length;
  
  return {
    hour: date.getHours(),
    count
  };
});