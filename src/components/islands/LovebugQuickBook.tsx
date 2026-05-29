// Lovebug landing page — quick-book form.
//
// Optimized for ad traffic on mobile + 65+ readability:
//   - Big inputs (56px min height, 18px text)
//   - High-contrast labels (navy ink on paper background)
//   - One screen of fields, no multi-step
//   - Submits to existing /api/book with source:'lovebug-ad' so the lead
//     shows up tagged in the operator inbox.

import { useState } from 'react';
import VehiclePicker from './VehiclePicker';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

const labelStyle =
  'block text-bay-ink font-semibold text-base mb-2 tracking-tight';

const inputStyle =
  'w-full bg-white border-2 border-bay-ink/15 hover:border-bay-ink/40 ' +
  'text-bay-ink text-lg font-medium rounded-md px-4 py-4 min-h-[56px] ' +
  'placeholder:text-bay-ink/35 ' +
  'focus:outline-none focus:border-bay-gold focus:ring-4 focus:ring-bay-gold/20 ' +
  'transition-colors';

export default function LovebugQuickBook() {
  const [vehicle, setVehicle] = useState({ year: '', make: '', model: '' });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const vehicleStr = [vehicle.year, vehicle.make, vehicle.model]
    .filter(Boolean)
    .join(' ');
  const canSubmit =
    name.trim().length > 0 &&
    phone.trim().length >= 7 &&
    /^\d{5}$/.test(zip) &&
    vehicleStr.length >= 2 &&
    status !== 'sending';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          vehicle: vehicleStr,
          zip: zip.trim(),
          service: 'Lovebug Removal',
          notes: notes.trim() || 'Inbound from Google Ads — lovebug removal landing page',
        }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (res.ok && json.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(
          json.error ||
            'Something went wrong sending your request. Call us at (813) 324-5522.',
        );
      }
    } catch {
      setStatus('error');
      setErrorMsg(
        'Network problem sending your request. Call us at (813) 324-5522.',
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white shadow-[0_24px_60px_-30px_rgba(15,27,45,0.4)] border border-bay-ink/8 p-8 sm:p-10 text-center">
        <div
          className="w-16 h-16 rounded-full bg-bay-gold/15 flex items-center justify-center mx-auto mb-6"
          aria-hidden="true"
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-bay-gold">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display text-3xl text-bay-ink font-bold mb-3">
          We've got your request.
        </h3>
        <p className="text-bay-ink/75 text-lg mb-2">
          A real person will call you back within 2 hours with your exact quote
          and the next available slot.
        </p>
        <p className="text-bay-ink/55 text-sm">
          Calls come from <span className="font-mono">(813) 324-5522</span>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white shadow-[0_24px_60px_-30px_rgba(15,27,45,0.4)] border border-bay-ink/8 p-6 sm:p-8 space-y-6"
      noValidate
    >
      <div>
        <p className="inline-flex items-center gap-2 text-bay-ink text-sm font-bold uppercase tracking-[0.18em] mb-3">
          <span className="inline-block w-4 h-0.5 bg-bay-gold"></span>
          Step 1 of 1
        </p>
        <h3 className="font-display text-2xl sm:text-3xl text-bay-ink font-bold leading-tight">
          Get your lovebug removal booked.
        </h3>
        <p className="text-bay-ink/75 text-base sm:text-lg mt-2">
          We respond within 2 hours during business hours.
        </p>
      </div>

      <fieldset className="space-y-4">
        <legend className={labelStyle}>Your vehicle</legend>
        <VehiclePicker onChange={setVehicle} />
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lb-name" className={labelStyle}>
            Your name
          </label>
          <input
            id="lb-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
            placeholder="First and last"
            className={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="lb-phone" className={labelStyle}>
            Phone
          </label>
          <input
            id="lb-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            required
            placeholder="(813) 000-0000"
            className={`${inputStyle} font-mono`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lb-zip" className={labelStyle}>
          Zip code
        </label>
        <input
          id="lb-zip"
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
          inputMode="numeric"
          autoComplete="postal-code"
          required
          maxLength={5}
          placeholder="34638"
          className={`${inputStyle} font-mono sm:max-w-[200px]`}
        />
        <p className="text-bay-ink/55 text-sm mt-2">
          We come to you in Pasco County &amp; North Hillsborough.
        </p>
      </div>

      <div>
        <label htmlFor="lb-notes" className={labelStyle}>
          Anything we should know? <span className="font-normal text-bay-ink/55">(optional)</span>
        </label>
        <textarea
          id="lb-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          placeholder="How bad are the bugs? Any other concerns?"
          className={`${inputStyle} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full bg-bay-gold text-bay-navy font-sans font-extrabold text-xl sm:text-2xl tracking-tight px-8 py-5 rounded-md min-h-[68px]
                   hover:bg-[#d9bc79] active:scale-[0.99] transition-all
                   focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bay-gold/40
                   disabled:opacity-50 disabled:cursor-not-allowed
                   shadow-[0_8px_24px_-8px_rgba(201,169,97,0.6)]"
      >
        {status === 'sending' ? 'Sending…' : 'Book My Lovebug Removal'}
      </button>

      {status === 'error' && (
        <p className="text-red-600 text-base text-center font-semibold" role="alert">
          {errorMsg}
        </p>
      )}

      <p className="text-bay-ink/75 text-base text-center font-medium">
        Prefer to talk?{' '}
        <a
          href="tel:+18133245522"
          className="font-bold text-bay-ink underline underline-offset-4 decoration-bay-gold decoration-2 hover:text-bay-gold"
        >
          Call (813) 324-5522
        </a>
      </p>
    </form>
  );
}
