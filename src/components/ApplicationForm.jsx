import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
const API_KEY = import.meta.env.VITE_API_KEY || 'dev-key-123';

export default function ApplicationForm({ onResult }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    age: 30,
    income: 80000,
    employment_status: 'employed',
    employment_length: 3,
    credit_score: 700,
    debt_to_income: 0.3,
    existing_cards: 2,
    late_payments: 0,
    loan_amount: 5000,
    loan_purpose: 'Everyday purchases',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if ([
      'age','income','employment_length','credit_score','debt_to_income','existing_cards','late_payments','loan_amount'
    ].includes(name)) {
      v = Number(value);
    }
    setForm((f) => ({ ...f, [name]: v }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || 'Request failed');
      }
      const data = await res.json();
      onResult(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
      onResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="mt-8 grid w-full grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-white/70 p-6 backdrop-blur md:grid-cols-2">
      <Field label="Full name" name="name" value={form.name} onChange={handleChange} />
      <Field label="Age" name="age" type="number" value={form.age} onChange={handleChange} />
      <Field label="Annual income ($)" name="income" type="number" value={form.income} onChange={handleChange} />
      <Select
        label="Employment status"
        name="employment_status"
        value={form.employment_status}
        onChange={handleChange}
        options={[
          { value: 'employed', label: 'Employed' },
          { value: 'self-employed', label: 'Self-employed' },
          { value: 'student', label: 'Student' },
          { value: 'unemployed', label: 'Unemployed' },
          { value: 'retired', label: 'Retired' },
        ]}
      />
      <Field label="Employment length (years)" name="employment_length" type="number" step="0.1" value={form.employment_length} onChange={handleChange} />
      <Field label="Credit score" name="credit_score" type="number" value={form.credit_score} onChange={handleChange} />
      <Field label="Debt-to-income (0-1)" name="debt_to_income" type="number" step="0.01" value={form.debt_to_income} onChange={handleChange} />
      <Field label="Existing cards" name="existing_cards" type="number" value={form.existing_cards} onChange={handleChange} />
      <Field label="Late payments (last 12m)" name="late_payments" type="number" value={form.late_payments} onChange={handleChange} />
      <Field label="Requested credit limit ($)" name="loan_amount" type="number" value={form.loan_amount} onChange={handleChange} />
      <Field label="Purpose" name="loan_purpose" value={form.loan_purpose} onChange={handleChange} className="md:col-span-2" />

      {error && (
        <div className="md:col-span-2 rounded-md bg-rose-50 p-3 text-sm text-rose-700">{error}</div>
      )}

      <div className="md:col-span-2 flex items-center justify-between gap-4">
        <p className="text-xs text-slate-500">Your data is sent securely to the API using an API key.</p>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 disabled:opacity-60"
        >
          {loading ? 'Scoring…' : 'Get decision'}
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, value, onChange, type = 'text', step, className }) {
  return (
    <label className={`flex flex-col ${className || ''}`}>
      <span className="mb-1 text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        step={step}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-500 focus:outline-none"
      />
    </label>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <label className="flex flex-col">
      <span className="mb-1 text-sm font-medium text-slate-700">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </label>
  );
}
