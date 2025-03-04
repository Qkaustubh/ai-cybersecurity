export interface ThreatAlert {
  id: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  sourceIP: string;
  destinationIP: string;
  protocol: string;
  threatType: string;
  description: string;
  status: 'new' | 'investigating' | 'resolved' | 'false-positive';
  confidence: number;
}

export interface NetworkTraffic {
  id: string;
  timestamp: string;
  sourceIP: string;
  destinationIP: string;
  protocol: string;
  bytesTransferred: number;
  packetsTransferred: number;
  duration: number;
  anomalyScore: number;
}

export interface SystemMetric {
  timestamp: string;
  cpuUsage: number;
  memoryUsage: number;
  networkLoad: number;
  alertsGenerated: number;
}

export interface ThreatStatistics {
  totalThreats: number;
  criticalThreats: number;
  highThreats: number;
  mediumThreats: number;
  lowThreats: number;
  resolvedThreats: number;
  falsePositives: number;
}

export interface ModelPerformance {
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  lastUpdated: string;
}