export default function HowItWorks() {
  return (
    <section className="mt-16 w-full rounded-2xl bg-slate-50 p-6 md:p-8">
      <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
      <ol className="mt-4 grid gap-4 text-slate-700 md:grid-cols-3">
        <li className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="font-medium text-slate-900">1) Submit application</p>
          <p className="text-sm">Provide age, income, credit score and a few more details.</p>
        </li>
        <li className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="font-medium text-slate-900">2) API key–secured scoring</p>
          <p className="text-sm">We send data to the secure /predict endpoint using an API key header.</p>
        </li>
        <li className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="font-medium text-slate-900">3) Instant decision</p>
          <p className="text-sm">You get an approval decision, probability, explanation, and next steps.</p>
        </li>
      </ol>

      <div className="mt-6">
        <p className="mb-2 text-sm font-medium text-slate-800">Sample cURL</p>
        <pre className="overflow-auto rounded-lg border border-slate-200 bg-white p-4 text-xs text-slate-800"><code>{`curl -X POST "$BACKEND_URL/predict" \
  -H "Content-Type: application/json" \
  -H "x-api-key: dev-key-123" \
  -d '{
    "name":"Jane Doe",
    "age":32,
    "income":85000,
    "employment_status":"employed",
    "employment_length":4,
    "credit_score":720,
    "debt_to_income":0.28,
    "existing_cards":2,
    "late_payments":0,
    "loan_amount":5000,
    "loan_purpose":"Everyday purchases"
  }'`}</code></pre>
      </div>
    </section>
  );
}
