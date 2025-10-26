import { useState } from 'react';
import Hero3D from './components/Hero3D';
import ApplicationForm from './components/ApplicationForm';
import ResultCard from './components/ResultCard';
import HowItWorks from './components/HowItWorks';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">
      <header className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight text-slate-900">CardApprove</div>
          <a href="#app" className="text-sm text-slate-600 hover:text-slate-900">Try the demo</a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <Hero3D />

        <section id="app" className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">Try the approval engine</h2>
          <p className="mt-1 text-slate-600">Fill the form and get a decision with probability and explanation.</p>
          <ApplicationForm onResult={setResult} />
          <ResultCard result={result} />
        </section>

        <HowItWorks />
      </main>

      <footer className="mt-16 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        Built for demo purposes. Do not submit real personal data.
      </footer>
    </div>
  );
}

export default App;
