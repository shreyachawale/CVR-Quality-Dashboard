import React, { useState } from 'react';
import { Header } from './components/Header';
import { MetricCard } from './components/MetricCard';
import { LeaderBoard } from './components/LeaderBoard';
import { ReportsAccordion } from './components/ReportsAccordion';
import { FilterPanel } from './components/FilterPanel';
import { 
  Users, 
  Star, 
  TrendingUp, 
  Shield,
  BarChart3,
  Zap,
  CheckCircle,
  AlertCircle 
} from 'lucide-react';
import CustomerDataTable, { sampleData } from './components/CustomerDataTable';

function App() {
  const [filters, setFilters] = useState({});

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
    // Handle filter logic here
  };

  const metrics = [
    {
      title: 'Total Site Visits',
      value: '2,847',
      change: '+12.3% from last month',
      trend: 'up' as const,
      icon: Users,
      color: 'blue' as const
    },
    {
      title: 'Good Quality CVR',
      value: '95%',
      change: '+0.2 from last quarter',
      trend: 'up' as const,
      icon: Shield,
      color: 'green' as const
    },
    {
      title: '% of salesman in good CVR',
      value: '94.2%',
      change: '+2.1% this quarter',
      trend: 'up' as const,
      icon: BarChart3,
      color: 'purple' as const
    },
    {
      title: 'Positive Sentiments',
      value: '98.1%',
      change: '+1.5% improvement',
      trend: 'up' as const,
      icon: CheckCircle,
      color: 'orange' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              trend={metric.trend}
              icon={metric.icon}
              color={metric.color}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 mb-8">
          <LeaderBoard />
        </div>

        {/* Secondary Content */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
          <ReportsAccordion />
        </div>

        {/* Filter Panel */}
        {/* <div className="mb-8">
          <FilterPanel onFiltersChange={handleFiltersChange} />
        </div> */}
      </main>
    </div>
  );
}

export default App;