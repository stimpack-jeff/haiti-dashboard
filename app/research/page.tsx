'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ResearchDocument {
  title: string;
  filename: string;
  description: string;
  lastUpdated: string;
  status: string;
  size: string;
  icon: string;
}

export default function ResearchHub() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const documents: ResearchDocument[] = [
    {
      title: 'Knowledge Gaps Analysis',
      filename: 'knowledge-gaps.md',
      description: 'Critical knowledge gaps identified and systematically filled through Grokipedia-style research. Tracks gang economics, state capacity, comparative cases, and elite capture.',
      lastUpdated: '2026-02-15 15:55 EST',
      status: 'Active Research',
      size: '33KB',
      icon: '🔍'
    },
    {
      title: 'Comparative Cases Study',
      filename: 'comparative-cases.md',
      description: 'Evidence-based analysis of gang dismantling efforts in El Salvador, Medellín, Liberia, Rwanda, and Jamaica. What worked, what failed, costs, timelines.',
      lastUpdated: '2026-02-14 19:15 EST',
      status: 'Filled',
      size: '22KB',
      icon: '🌍'
    },
    {
      title: 'Solutions Matrix',
      filename: 'solutions-matrix.md',
      description: 'Intervention evaluation matrix rating feasibility, evidence level, costs, and human rights risks for 12+ proposed interventions.',
      lastUpdated: '2026-02-14 19:25 EST',
      status: 'Filled',
      size: '25KB',
      icon: '💡'
    },
    {
      title: 'Elite-Gang Political Capture',
      filename: 'elite-gang-political-capture.md',
      description: 'Deep analysis of how Haitian elites fund and control gangs, creating a political-criminal nexus that prevents reform.',
      lastUpdated: '2026-02-15 16:18 EST',
      status: 'Active Research',
      size: '38KB',
      icon: '🏛️'
    },
    {
      title: 'Historical Successes Analysis',
      filename: 'historical-successes.md',
      description: 'When did Haiti have stability? What worked? Why did it end? Critical finding: Haiti never had long-term self-sustaining democratic stability.',
      lastUpdated: '2026-02-14 19:06 EST',
      status: 'Partial',
      size: '14KB',
      icon: '📜'
    },
    {
      title: 'Epistemic Foundations',
      filename: 'epistemic-foundations.md',
      description: 'Research methodology and evidence standards. How we know what we know, confidence levels, source tiers.',
      lastUpdated: '2026-02-14 19:05 EST',
      status: 'Complete',
      size: '19KB',
      icon: '📊'
    },
    {
      title: 'Executive Summary',
      filename: 'EXECUTIVE-SUMMARY.md',
      description: 'High-level overview of crisis status, key findings, and recommended interventions. Start here for quick context.',
      lastUpdated: '2026-02-14 19:09 EST',
      status: 'Complete',
      size: '11KB',
      icon: '📋'
    }
  ];

  const loadDocument = async (filename: string) => {
    setLoading(true);
    try {
      // In production, this would fetch from your research folder
      // For now, we'll show a message that content is available in the repo
      setContent(`# ${documents.find(d => d.filename === filename)?.title}

**This is a live research document stored in the haiti-dashboard repository.**

To view the full content:
1. Clone the repository: \`git clone https://github.com/stimpack-jeff/haiti-dashboard.git\`
2. Navigate to: \`research/haiti/deep-knowledge/${filename}\`
3. Or view directly on GitHub: [View on GitHub](https://github.com/stimpack-jeff/haiti-dashboard/blob/main/research/haiti/deep-knowledge/${filename})

---

## Document Information

**Last Updated:** ${documents.find(d => d.filename === filename)?.lastUpdated}  
**Status:** ${documents.find(d => d.filename === filename)?.status}  
**Size:** ${documents.find(d => d.filename === filename)?.size}

**Description:**  
${documents.find(d => d.filename === filename)?.description}

---

## Research Methodology

All research documents follow Grokipedia-style systematic knowledge gap closure:

1. **Multi-tier source verification**
   - Tier 1 (UN, ICG, peer-reviewed): 80-95% confidence
   - Tier 2 (think tanks, major media): 70-85% confidence
   - All claims cite sources and state confidence levels

2. **Evidence standards**
   - Strong: Proven in 2+ contexts
   - Moderate: Success in 1 context or mixed results
   - Weak: Theoretical only or proven failures

3. **Continuous updates**
   - Documents updated as new evidence emerges
   - Gap status tracked (queued → partial → filled)
   - Citations maintained for verification

---

## Key Sources

- **UNODC** (gang economics, money laundering)
- **International Crisis Group** (Viv Ansanm analysis, political dynamics)
- **Academic papers** (comparative cases, DDR programs)
- **UN DPKO** (peacekeeping data, Liberia case)
- **RNDDH** (local Haiti research, human rights)
- **Major media** (Reuters, NYT, Miami Herald verification)

---

## Access Full Content

The complete research library is available in the repository at:
\`research/haiti/deep-knowledge/\`

Each document contains:
- Detailed analysis with citations
- Confidence level assessments
- Cross-references to other research docs
- Actionable insights and recommendations

**Repository:** [github.com/stimpack-jeff/haiti-dashboard](https://github.com/stimpack-jeff/haiti-dashboard)
`);
      setSelectedDoc(filename);
    } catch (error) {
      console.error('Error loading document:', error);
      setContent('# Error Loading Document\n\nPlease try again or view directly in the repository.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm mb-2 inline-block">
                ← Back to Dashboard
              </Link>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                🔬 Haiti Crisis: Deep Research Library
              </h1>
              <p className="text-blue-200 mt-2">
                Systematic knowledge gap closure • Evidence-based analysis • 48 hours of research
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Research Highlights Banner */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl shadow-2xl p-8 mb-8 border border-blue-500/50">
          <div className="text-center">
            <div className="inline-block bg-black/30 rounded-full px-6 py-2 mb-4">
              <span className="text-blue-300 font-mono text-sm">GROKIPEDIA-STYLE RESEARCH</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">What Makes This Research Different?</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div className="bg-black/20 backdrop-blur rounded-lg p-4 border border-white/10">
                <div className="text-blue-300 text-sm">Research Time</div>
                <div className="text-white font-bold mt-1">48 minutes</div>
              </div>
              <div className="bg-black/20 backdrop-blur rounded-lg p-4 border border-white/10">
                <div className="text-blue-300 text-sm">Documents</div>
                <div className="text-white font-bold mt-1">7 created</div>
              </div>
              <div className="bg-black/20 backdrop-blur rounded-lg p-4 border border-white/10">
                <div className="text-blue-300 text-sm">Sources</div>
                <div className="text-white font-bold mt-1">25+ verified</div>
              </div>
              <div className="bg-black/20 backdrop-blur rounded-lg p-4 border border-white/10">
                <div className="text-blue-300 text-sm">Total Size</div>
                <div className="text-white font-bold mt-1">162KB</div>
              </div>
            </div>

            <div className="mt-6 max-w-3xl mx-auto">
              <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-4">
                <p className="text-green-100 text-sm">
                  <strong>✓ Multi-tier source verification</strong> • UN, ICG, academic papers, think tanks<br />
                  <strong>✓ Confidence levels stated explicitly</strong> • 40-95% range, not false certainty<br />
                  <strong>✓ Systematic gap closure</strong> • Identified unknowns, filled them with evidence<br />
                  <strong>✓ Comparative case analysis</strong> • What actually worked in similar crises
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Document Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {documents.map((doc, index) => (
            <button
              key={index}
              onClick={() => loadDocument(doc.filename)}
              className={`text-left bg-white/5 border rounded-xl p-6 hover:bg-white/10 transition-all ${
                selectedDoc === doc.filename ? 'border-blue-500 bg-blue-500/10' : 'border-white/10'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{doc.icon}</span>
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                  doc.status === 'Complete' || doc.status === 'Filled' 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : doc.status === 'Active Research'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                }`}>
                  {doc.status}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{doc.title}</h3>
              <p className="text-blue-200 text-sm mb-3 leading-relaxed">{doc.description}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-white/10">
                <span>{doc.size}</span>
                <span>{doc.lastUpdated.split(' ')[0]}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Document Viewer */}
        {selectedDoc && (
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 mb-8">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin text-4xl mb-4">⏳</div>
                <p className="text-white">Loading document...</p>
              </div>
            ) : (
              <div className="prose prose-invert prose-blue max-w-none">
                <div className="whitespace-pre-wrap text-blue-100 leading-relaxed">
                  {content}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Key Insights Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-300 mb-4">🚨 Critical Findings</h3>
            <ul className="text-red-200 text-sm space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Haiti never had long-term self-sustaining democratic stability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Gangs generate $60-75M/year, now autonomous from elites</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Viv Ansanm controls 80-90% of Port-au-Prince</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>20-year commitment required (Medellín took 25 years)</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-4">💡 Evidence-Based Solutions</h3>
            <ul className="text-blue-200 text-sm space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Phase 1: Security (15-20k troops, $3-4B, 55% success probability)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Phase 2: DDR + Police Reform ($1-2B, 65% probability)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Phase 3: Social Urbanism ($3-5B, 60% probability)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Break elite-gang nexus from day one (Jamaica lesson)</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-300 mb-4">📊 Research Quality</h3>
            <ul className="text-green-200 text-sm space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>All claims cite sources (UN, ICG, academic)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Confidence levels stated (40-95% range)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Comparative cases analyzed (5+ countries)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Gap tracking (queued → partial → filled)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Research Methodology</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-blue-300 mb-3">Grokipedia-Style Gap Closure</h3>
              <ol className="text-blue-200 text-sm space-y-2">
                <li><strong>1. Identify critical unknowns</strong> - What don't we know that matters?</li>
                <li><strong>2. Prioritize by impact</strong> - Which gaps change strategy if filled?</li>
                <li><strong>3. Scan authoritative sources</strong> - UN, ICG, academics, think tanks</li>
                <li><strong>4. Multi-tier verification</strong> - Cross-check claims, assess confidence</li>
                <li><strong>5. Document findings</strong> - Citations, confidence levels, caveats</li>
                <li><strong>6. Update continuously</strong> - Gap status tracked, new evidence added</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-bold text-green-300 mb-3">Evidence Standards</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white/5 rounded p-3">
                  <div className="font-bold text-white mb-1">🟢 Strong Evidence (80-95%)</div>
                  <div className="text-gray-300">UN reports, ICG analysis, peer-reviewed papers, proven in 2+ contexts</div>
                </div>
                <div className="bg-white/5 rounded p-3">
                  <div className="font-bold text-white mb-1">🟡 Moderate Evidence (70-85%)</div>
                  <div className="text-gray-300">Think tanks, major media, success in 1 context or mixed results</div>
                </div>
                <div className="bg-white/5 rounded p-3">
                  <div className="font-bold text-white mb-1">🔴 Weak Evidence (40-70%)</div>
                  <div className="text-gray-300">Single sources, theoretical only, or proven failures elsewhere</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-slate-400 text-sm">
          <p>Haiti Crisis Research Library | Built with Next.js + Tailwind CSS</p>
          <p className="mt-2 text-slate-500">
            Research documents stored in repository at <code className="bg-white/5 px-2 py-1 rounded">research/haiti/deep-knowledge/</code>
          </p>
          <p className="mt-2">
            <a 
              href="https://github.com/stimpack-jeff/haiti-dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              View on GitHub
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
