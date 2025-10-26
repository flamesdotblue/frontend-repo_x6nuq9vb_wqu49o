import { CheckCircle2, XCircle, Info } from 'lucide-react';

export default function ResultCard({ result }) {
  if (!result) return null;

  const approved = result.approved;
  const pct = Math.round(result.probability * 100);

  return (
    <div className="mt-6 w-full rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
      <div className="flex items-center gap-3">
        {approved ? (
          <CheckCircle2 className="h-6 w-6 text-emerald-600" />
        ) : (
          <XCircle className="h-6 w-6 text-rose-600" />
        )}
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            {approved ? 'Approved' : 'Not Approved'}
          </h3>
          <p className="text-sm text-slate-600">Probability: {pct}%</p>
        </div>
      </div>

      {result.explanation?.length > 0 && (
        <div className="mt-4">
          <div className="mb-2 flex items-center gap-2 text-slate-800">
            <Info className="h-4 w-4" />
            <span className="font-medium">Why this decision</span>
          </div>
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            {result.explanation.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      )}

      {result.next_steps?.length > 0 && (
        <div className="mt-4">
          <div className="mb-2 flex items-center gap-2 text-slate-800">
            <Info className="h-4 w-4" />
            <span className="font-medium">Required next steps</span>
          </div>
          <ol className="list-decimal space-y-1 pl-5 text-slate-700">
            {result.next_steps.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
