'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [hoursSinceDeadline, setHoursSinceDeadline] = useState<number>(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const deadline = new Date('2026-02-07T00:00:00-05:00').getTime();
      const hoursPassed = Math.floor((now.getTime() - deadline) / (1000 * 60 * 60));
      
      setCurrentTime(now.toLocaleString('en-US', { 
        timeZone: 'America/New_York',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
      setHoursSinceDeadline(Math.max(0, hoursPassed));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const liveUpdates = [
    {
      time: '06:00 EST',
      title: 'Reuters Confirms Political Limbo',
      description: '"Haiti enters political limbo as transition government\'s mandate ends" - No succession plan in place.',
      source: 'Reuters',
      type: 'breaking'
    },
    {
      time: '04:00 EST',
      title: 'NYT: Haiti Reaches "Full Crisis"',
      description: 'New York Times headline declares Haiti has reached full crisis as transition government expires.',
      source: 'New York Times',
      type: 'breaking'
    },
    {
      time: 'Feb 6, Evening',
      title: 'US Embassy Issues Security Alert',
      description: 'Americans urged to stay alert for "unrest outside the normal" tied to February 7th deadline.',
      source: 'US Embassy Haiti',
      type: 'alert'
    },
    {
      time: 'Feb 6',
      title: 'US Backs PM Fils-Aimé',
      description: 'Secretary Rubio signals support for Prime Minister continuing after CPT mandate expires.',
      source: 'State Department',
      type: 'political'
    },
    {
      time: 'Feb 6',
      title: 'DOJ Appeals TPS Block',
      description: 'Justice Department asks federal court to lift injunction blocking TPS termination for 350,000+ Haitians.',
      source: 'DOJ Filing',
      type: 'legal'
    }
  ];

  const crisisMetrics = [
    { label: 'Constitutional Status', value: 'VACUUM', subtext: 'No legal government', status: 'critical' },
    { label: 'Hours Since Deadline', value: hoursSinceDeadline.toString(), subtext: 'Feb 7, 2026 12:00 AM', status: 'critical' },
    { label: 'Port-au-Prince Control', value: '80%+', subtext: 'Gang-controlled', status: 'critical' },
    { label: 'TPS Holders at Risk', value: '350K+', subtext: 'Legal battle ongoing', status: 'warning' },
    { label: 'Deaths (2024-25)', value: '5,600+', subtext: 'Gang violence', status: 'critical' },
    { label: 'Displaced Persons', value: '1.4M', subtext: 'Internal refugees', status: 'critical' }
  ];

  const getTypeStyles = (type: string) => {
    const styles: Record<string, string> = {
      breaking: 'bg-red-500 text-white',
      alert: 'bg-orange-500 text-white',
      political: 'bg-purple-500 text-white',
      legal: 'bg-blue-500 text-white'
    };
    return styles[type] || 'bg-gray-500 text-white';
  };

  const getStatusStyles = (status: string) => {
    const styles: Record<string, string> = {
      critical: 'text-red-500 bg-red-500/10 border-red-500/30',
      warning: 'text-orange-500 bg-orange-500/10 border-orange-500/30',
      stable: 'text-green-500 bg-green-500/10 border-green-500/30'
    };
    return styles[status] || 'text-gray-500 bg-gray-500/10 border-gray-500/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
      {/* BREAKING BANNER */}
      <div className="bg-red-600 text-white py-3 px-4 text-center animate-pulse">
        <span className="font-bold">⚠️ FEBRUARY 7, 2026 - CPT MANDATE HAS EXPIRED ⚠️</span>
        <span className="ml-4 text-red-100">Haiti enters constitutional vacuum - No legal government in place</span>
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">LIVE</span>
                <h1 className="text-3xl font-bold text-white">Haiti Crisis Dashboard</h1>
              </div>
              <p className="text-red-200 mt-1">Day Zero: Transitional Government Mandate Expired</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-red-300">Current Time (EST)</div>
              <div className="text-white font-mono text-lg">{currentTime}</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Crisis Status Banner */}
        <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl shadow-2xl p-8 mb-8 border border-red-500/50">
          <div className="text-center">
            <div className="inline-block bg-black/30 rounded-full px-6 py-2 mb-4">
              <span className="text-red-300 font-mono text-sm">CONSTITUTIONAL CRISIS ACTIVE</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">The Deadline Has Passed</h2>
            <p className="text-red-100 text-lg mb-6">
              The Transitional Presidential Council (CPT) mandate expired at midnight. 
              Haiti now operates without a constitutionally legitimate government.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-black/20 backdrop-blur rounded-lg p-4 border border-white/10">
                <div className="text-red-300 text-sm">What Happened</div>
                <div className="text-white font-bold mt-1">CPT mandate expired</div>
              </div>
              <div className="bg-black/20 backdrop-blur rounded-lg p-4 border border-white/10">
                <div className="text-red-300 text-sm">Who&apos;s In Charge</div>
                <div className="text-white font-bold mt-1">PM Fils-Aimé (US-backed)</div>
              </div>
              <div className="bg-black/20 backdrop-blur rounded-lg p-4 border border-white/10 md:col-span-1 col-span-2">
                <div className="text-red-300 text-sm">Legal Status</div>
                <div className="text-white font-bold mt-1">Constitutional vacuum</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {crisisMetrics.map((metric, index) => (
            <div key={index} className={`backdrop-blur border rounded-xl p-6 transition-all ${getStatusStyles(metric.status)}`}>
              <div className="text-sm opacity-80 mb-2">{metric.label}</div>
              <div className="text-3xl font-bold">{metric.value}</div>
              <div className="text-xs opacity-60 mt-1">{metric.subtext}</div>
            </div>
          ))}
        </div>

        {/* Live Updates Timeline */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">LIVE</span>
            <h2 className="text-2xl font-bold text-white">Today&apos;s Updates</h2>
          </div>
          
          <div className="space-y-4">
            {liveUpdates.map((update, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${getTypeStyles(update.type)}`}>
                      {update.type.toUpperCase()}
                    </span>
                    <span className="text-blue-300 text-sm font-mono">{update.time}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{update.source}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{update.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{update.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What This Means Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-300 mb-4">🚨 Immediate Concerns</h3>
            <ul className="text-red-200 text-sm space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>No constitutional basis for current government authority</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Gang coalitions control 80%+ of Port-au-Prince</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>350,000+ TPS holders face legal uncertainty in US</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>US Embassy warning of potential unrest remains active</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-4">🔍 What We&apos;re Watching</h3>
            <ul className="text-blue-200 text-sm space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>International community response (UN, CARICOM, US)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Gang activity levels in Port-au-Prince</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>PM Fils-Aimé&apos;s next moves and legitimacy claims</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>TPS court case developments</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Context Box */}
        <div className="bg-slate-800/50 border border-slate-600/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-300 mb-3">📊 Research Context</h3>
          <div className="text-slate-400 text-sm space-y-2">
            <p><strong>February 7 Significance:</strong> This date marks the constitutional end of the Transitional Presidential Council (CPT) mandate, established via the April 2024 political accord to guide Haiti toward elections.</p>
            <p><strong>Current Reality:</strong> No elections held. No successor government established. PM Alix Didier Fils-Aimé continues with US backing but without constitutional authority.</p>
            <p><strong>Sources:</strong> Reuters, NYT, Haiti Times, US State Department, IJDH</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-slate-400 text-sm">
          <p>Haiti Crisis Dashboard | Built with Next.js + Tailwind CSS</p>
          <p className="mt-2 text-slate-500">Live monitoring active | Powered by StimPack Research</p>
        </footer>
      </main>
    </div>
  );
}
