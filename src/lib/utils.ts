import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return format(new Date(date), 'MMM dd, yyyy HH:mm:ss');
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

export function getSeverityColor(severity: string): string {
  switch (severity) {
    case 'critical':
      return 'bg-red-600 text-white';
    case 'high':
      return 'bg-orange-500 text-white';
    case 'medium':
      return 'bg-yellow-500 text-black';
    case 'low':
      return 'bg-blue-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'new':
      return 'bg-red-100 text-red-800';
    case 'investigating':
      return 'bg-yellow-100 text-yellow-800';
    case 'resolved':
      return 'bg-green-100 text-green-800';
    case 'false-positive':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function truncateIP(ip: string): string {
  return ip.length > 15 ? ip.substring(0, 15) + '...' : ip;
}

export function getAnomalyColor(score: number): string {
  if (score >= 0.8) return 'text-red-600';
  if (score >= 0.6) return 'text-orange-500';
  if (score >= 0.4) return 'text-yellow-500';
  return 'text-green-500';
}