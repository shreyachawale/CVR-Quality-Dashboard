import React, { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import CustomerDataTable, { CustomerData, sampleData } from './CustomerDataTable';

export const ReportsAccordion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  const filteredData = sampleData.filter(item => 
    filter === 'all' ? true : item.category === filter
  );

  const uniqueCategories = Array.from(new Set(sampleData.map(item => item.category)));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200/60 overflow-hidden">
      <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-gray-200/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileText className="text-gray-600" size={20} />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">Latest Reports</h3>
              <p className="text-sm text-gray-600">Customer interaction and feedback reports</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {uniqueCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
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
        <div className="p-6">
          <CustomerDataTable data={filteredData} />
        </div>
      )}
    </div>
  );
};