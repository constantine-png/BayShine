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

    // Form delivery via formsubmit.co — works regardless of where this page is
    // hosted (Vercel, GitHub Pages, or anywhere else). Cross-origin safe, no
    // account required (one-time activation on first submission). Free tier
    // covers 250 submissions/month — plenty of headroom for ad traffic.
    const payload = {
      _subject: `Lovebug Booking: ${name.trim()} (${zip.trim()})`,
      _template: 'table',
      _captcha: 'false',
      Name: name.trim(),
      Phone: phone.trim(),
      Vehicle: vehicleStr,
      Zip: zip.trim(),
      Service: 'Lovebug Removal',
      Notes: notes.trim() || 'Inbound from Google Ads — lovebug removal landing page',
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/constantine@bayshine.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean | string };
      // formsubmit returns success as the string "true" or boolean true
      if (res.ok && (json.success === true || json.success === 'true')) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(
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
        <p className="text-bay-ink text-lg mb-2 font-semibold">
          A real person will call you back within 2 hours with your exact quote
          and the next available slot.
        </p>
        <p className="text-bay-ink text-base font-medium">
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
        <p className="text-bay-ink text-base sm:text-lg mt-2 font-semibold">
          I respond within 2 hours during business hours.
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
        <p className="text-bay-ink text-base mt-2 font-medium">
          I come to you in Pasco County &amp; North Hillsborough.
        </p>
      </div>

      <div>
        <label htmlFor="lb-notes" className={labelStyle}>
          Anything I should know? <span className="font-medium text-bay-ink/70">(optional)</span>
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
        className="cta-primary"
        style={{ opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
      >
        {status === 'sending' ? 'Sending…' : 'Book My Lovebug Removal'}
      </button>

      {status === 'error' && (
        <p className="text-red-600 text-base text-center font-bold" role="alert">
          {errorMsg}
        </p>
      )}

      <p className="text-bay-ink text-base text-center font-semibold">
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
