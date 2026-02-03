'use client';

import { useState } from 'react';

type Fields = {
  nume: string;
  email: string;
  telefon: string;
  mesaj: string;
};

const initial: Fields = { nume: '', email: '', telefon: '', mesaj: '' };

export function ContactForm() {
  const [form, setForm] = useState<Fields>(initial);
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  const setField = (k: keyof Fields, v: string) => {
    setForm((prev) => ({ ...prev, [k]: v }));
    if (touched[k]) setTouched((prev) => ({ ...prev, [k]: true }));
  };

  const blur = (k: keyof Fields) => setTouched((prev) => ({ ...prev, [k]: true }));

  const required = (k: keyof Fields) => {
    const v = form[k].trim();
    if (k === 'email') return v.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    return v.length > 0;
  };

  const errors = {
    nume: touched.nume && !required('nume'),
    email: touched.email && !required('email'),
    telefon: touched.telefon && !required('telefon'),
    mesaj: touched.mesaj && !required('mesaj'),
  };

  const valid = required('nume') && required('email') && required('telefon') && required('mesaj');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    Object.keys(form).forEach((k) => setTouched((prev) => ({ ...prev, [k]: true })));
    if (!valid) return;
    setSubmitStatus('sending');
    try {
      // Replace with real endpoint
      await new Promise((r) => setTimeout(r, 800));
      setSubmitStatus('ok');
      setForm(initial);
      setTouched({});
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="contact-nume" className="block text-sm font-medium text-charcoal mb-1.5">
          Nume <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-nume"
          type="text"
          value={form.nume}
          onChange={(e) => setField('nume', e.target.value)}
          onBlur={() => blur('nume')}
          className={`w-full px-4 py-3 border rounded-sm bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            errors.nume ? 'border-red-500' : 'border-charcoal/20'
          }`}
          placeholder="Numele tău"
          required
          aria-invalid={errors.nume}
          aria-describedby={errors.nume ? 'err-nume' : undefined}
        />
        {errors.nume && (
          <p id="err-nume" className="mt-1 text-sm text-red-600" role="alert">
            Introdu numele.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-1.5">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => setField('email', e.target.value)}
          onBlur={() => blur('email')}
          className={`w-full px-4 py-3 border rounded-sm bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            errors.email ? 'border-red-500' : 'border-charcoal/20'
          }`}
          placeholder="email@exemplu.ro"
          required
          aria-invalid={errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            Introdu un email valid.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-telefon" className="block text-sm font-medium text-charcoal mb-1.5">
          Telefon <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-telefon"
          type="tel"
          value={form.telefon}
          onChange={(e) => setField('telefon', e.target.value)}
          onBlur={() => blur('telefon')}
          className={`w-full px-4 py-3 border rounded-sm bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            errors.telefon ? 'border-red-500' : 'border-charcoal/20'
          }`}
          placeholder="07xx xxx xxx"
          required
          aria-invalid={errors.telefon}
        />
        {errors.telefon && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            Introdu numărul de telefon.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-mesaj" className="block text-sm font-medium text-charcoal mb-1.5">
          Mesaj <span className="text-red-600">*</span>
        </label>
        <textarea
          id="contact-mesaj"
          value={form.mesaj}
          onChange={(e) => setField('mesaj', e.target.value)}
          onBlur={() => blur('mesaj')}
          rows={4}
          className={`w-full px-4 py-3 border rounded-sm bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent resize-y ${
            errors.mesaj ? 'border-red-500' : 'border-charcoal/20'
          }`}
          placeholder="Cum te putem ajuta?"
          required
          aria-invalid={errors.mesaj}
        />
        {errors.mesaj && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            Introdu mesajul.
          </p>
        )}
      </div>

      {submitStatus === 'ok' && (
        <p className="text-green-700 font-medium" role="status">
          Mesajul a fost trimis. Te contactăm în curând.
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 font-medium" role="alert">
          A apărut o eroare. Încearcă din nou sau sună-ne.
        </p>
      )}

      <button
        type="submit"
        disabled={submitStatus === 'sending'}
        className="w-full sm:w-auto px-8 py-4 bg-accent text-dark font-semibold rounded-sm hover:bg-accent/90 disabled:opacity-60 transition-colors focus-ring"
      >
        {submitStatus === 'sending' ? 'Se trimite...' : 'Trimite mesajul'}
      </button>
    </form>
  );
}
