'use client';

import { useEffect, useState } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const deadline = new Date('2026-02-07T23:59:59-05:00').getTime();
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    setTimeRemaining(calculateTimeRemaining());

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const developments = [
    {
      date: '2026-02-03',
      title: 'TPS Termination Temporarily Halted',
      description: 'Federal judge issues temporary injunction blocking DHS termination of Haitian TPS. Legal battle continues with potential Supreme Court appeal.',
      status: 'legal',
      impact: 'critical'
    },
    {
      date: '2026-02-02',
      title: '$6B Economic Impact Revealed',
      description: '350,000+ Haitian TPS holders contribute $6 billion annually to U.S. economy, new economic analysis shows.',
      status: 'economic',
      impact: 'high'
    },
    {
      date: '2026-02-01',
      title: 'CPT Losing Legitimacy',
      description: 'Transitional Presidential Council faces mounting criticism as "costly and failed" with calls for Haitian-led solutions.',
      status: 'political',
      impact: 'high'
    },
    {
      date: '2026-01-31',
      title: 'CARICOM Mediation Stalls',
      description: 'Regional mediation efforts face boycotts and delays as Haiti crisis continues without clear resolution path.',
      status: 'diplomatic',
      impact: 'medium'
    },
    {
      date: '2026-02-01',
      title: 'Gang Violence Affects Medical Staff',
      description: 'Healthcare professionals report daily survival conditions as gang control of Port-au-Prince reaches 80%.',
      status: 'security',
      impact: 'critical'
    }
  ];

  const metrics = [
    { label: 'TPS Holders at Risk', value: '350,000+', trend: 'critical' },
    { label: 'Port-au-Prince Gang Control', value: '80%', trend: 'critical' },
    { label: 'Economic Contribution', value: '$6B/year', trend: 'positive' },
    { label: 'Deaths in 2024', value: '5,600+', trend: 'critical' },
    { label: 'Internally Displaced', value: '1.4M', trend: 'critical' },
    { label: 'Armed Groups', value: '95+', trend: 'critical' }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      legal: 'bg-blue-500',
      economic: 'bg-green-500',
      political: 'bg-purple-500',
      diplomatic: 'bg-yellow-500',
      security: 'bg-red-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  const getImpactBadge = (impact: string) => {
    const badges: Record<string, string> = {
      critical: 'bg-red-100 text-red-800 border-red-300',
      high: 'bg-orange-100 text-orange-800 border-orange-300',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-300'
    };
    return badges[impact] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const getTrendColor = (trend: string) => {
    const colors: Record<string, string> = {
      critical: 'text-red-600',
      positive: 'text-green-600',
      neutral: 'text-gray-600'
    };
    return colors[trend] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Haiti Crisis Dashboard</h1>
              <p className="text-blue-200 mt-1">Real-time monitoring of critical developments</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-300">Last Updated</div>
              <div className="text-white font-mono">{new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Countdown Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-2xl p-8 mb-8 border border-red-500/50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">February 7 Deadline</h2>
            <p className="text-red-100 mb-6">TPS Crisis Resolution Timeline</p>
            
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-5xl font-bold text-white">{timeRemaining.days}</div>
                <div className="text-red-100 text-sm mt-2">Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-5xl font-bold text-white">{timeRemaining.hours}</div>
                <div className="text-red-100 text-sm mt-2">Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-5xl font-bold text-white">{timeRemaining.minutes}</div>
                <div className="text-red-100 text-sm mt-2">Minutes</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-5xl font-bold text-white">{timeRemaining.seconds}</div>
                <div className="text-red-100 text-sm mt-2">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="text-sm text-blue-300 mb-2">{metric.label}</div>
              <div className={`text-3xl font-bold ${getTrendColor(metric.trend)}`}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Developments */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Developments</h2>
          
          <div className="space-y-4">
            {developments.map((dev, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(dev.status)}`}></div>
                    <span className="text-blue-300 text-sm font-mono">{dev.date}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getImpactBadge(dev.impact)}`}>
                    {dev.impact.toUpperCase()}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{dev.title}</h3>
                <p className="text-blue-200 leading-relaxed">{dev.description}</p>
                
                <div className="flex items-center gap-2 mt-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(dev.status)} text-white`}>
                    {dev.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Context Box */}
        <div className="mt-8 bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-300 mb-3">🔍 Research Context</h3>
          <div className="text-blue-200 text-sm space-y-2">
            <p>This dashboard tracks the February 7, 2026 TPS (Temporary Protected Status) deadline and ongoing Haiti crisis developments.</p>
            <p><strong>Key Issues:</strong> 350,000+ Haitian TPS holders face uncertainty following DHS termination attempt, blocked by federal court. Legal battle continues with potential Supreme Court appeal.</p>
            <p><strong>Sources:</strong> Haiti Times, IJDH (Institute for Justice & Democracy in Haiti), ReliefWeb, comprehensive research tracking</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-blue-300 text-sm">
          <p>Built with Next.js + Tailwind CSS | Data from Haiti Crisis Research Archive</p>
          <p className="mt-2 text-blue-400">Last research update: 2026-02-05</p>
        </footer>
      </main>
    </div>
  );
}
