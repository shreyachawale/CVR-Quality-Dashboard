import React, { useState } from 'react';
import { ChevronDown, FileText, Calendar, User, AlertTriangle } from 'lucide-react';

interface Report {
  id: string;
  title: string;
  type: 'safety' | 'quality' | 'production' | 'environmental';
  date: string;
  author: string;
  status: 'completed' | 'pending' | 'review';
  summary: string;
}

const mockReports: Report[] = [
  {
    id: '1',
    title: 'Q4 Safety Compliance Audit',
    type: 'safety',
    date: '2025-01-15',
    author: 'Sarah Chen',
    status: 'completed',
    summary: 'Comprehensive safety audit covering all production facilities with 98% compliance rate.'
  },
  {
    id: '2',
    title: 'Chemical Quality Control Report',
    type: 'quality',
    date: '2025-01-14',
    author: 'Michael Rodriguez',
    status: 'review',
    summary: 'Monthly quality assessment of chemical products with detailed analysis of purity levels.'
  },
  {
    id: '3',
    title: 'Production Efficiency Analysis',
    type: 'production',
    date: '2025-01-13',
    author: 'Emily Johnson',
    status: 'pending',
    summary: 'Analysis of production line efficiency and recommendations for optimization.'
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'safety': return 'bg-red-100 text-red-800';
    case 'quality': return 'bg-blue-100 text-blue-800';
    case 'production': return 'bg-green-100 text-green-800';
    case 'environmental': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-100 text-green-800';
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    case 'review': return 'bg-orange-100 text-orange-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const ReportsAccordion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  const filteredReports = mockReports.filter(report => 
    filter === 'all' ? true : report.type === filter
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200/60 overflow-hidden">
      <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-gray-200/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileText className="text-gray-600" size={20} />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">Latest Reports</h3>
              <p className="text-sm text-gray-600">Recent safety, quality, and production reports</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="safety">Safety</option>
              <option value="quality">Quality</option>
              <option value="production">Production</option>
              <option value="environmental">Environmental</option>
            </select>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700"
            >
              <ChevronDown 
                className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </button>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="divide-y divide-gray-200">
          {filteredReports.map((report) => (
            <div key={report.id} className="p-6 hover:bg-gray-50/50 transition-colors duration-150">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-900">{report.title}</h4>
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(report.type)}`}>
                    {report.type}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{report.summary}</p>
              
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <User size={12} />
                  <span>{report.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>{new Date(report.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};