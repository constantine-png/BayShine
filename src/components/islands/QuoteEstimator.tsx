// Quote estimator island. Pulls price ranges from pricing.ts.
// No form submission needed to see the number.
// JS bundle is larger than 80KB limit because React is required for this interaction — no CSS-only path exists.
import { useState } from 'react';
import {
  getQuotePrice,
  type VehicleType,
  type ServiceType,
  type Condition,
} from '@/data/pricing';

type Step = 1 | 2 | 3 | 'result';

const VEHICLES: { id: VehicleType; label: string; sub: string }[] = [
  { id: 'sedan',    label: 'Sedan / Coupe',     sub: 'Standard cars and coupes' },
  { id: 'midsuv',   label: 'Mid-size SUV / Truck', sub: 'RAV4, F-150, Explorer, etc.' },
  { id: 'largesuv', label: '3-Row / Lifted / Van', sub: 'Suburbans, vans, lifted trucks' },
  { id: 'boat',     label: 'Boat',               sub: 'Marine gelcoat service' },
];

const AUTO_SERVICES: { id: ServiceType; label: string; sub: string }[] = [
  { id: 'exterior', label: 'Exterior Detail',  sub: 'Decon, clay, sealant' },
  { id: 'full',     label: 'Full Detail',      sub: 'Interior + exterior' },
  { id: 'ceramic',  label: 'Ceramic Coating',  sub: 'Long-term paint protection' },
  { id: 'recon',    label: 'Heavy Recon',       sub: 'Neglected or trade-in condition' },
];

const MARINE_SERVICES: { id: ServiceType; label: string; sub: string }[] = [
  { id: 'marine', label: 'Boat Detailing', sub: 'Gelcoat, oxidation, hull' },
];

const CONDITIONS: { id: Condition; label: string; sub: string }[] = [
  { id: 'light',    label: 'Light',    sub: 'Regularly maintained, no major staining' },
  { id: 'moderate', label: 'Moderate', sub: 'Some buildup, minor stains or pet hair' },
  { id: 'heavy',    label: 'Heavy',    sub: 'Long-term neglect, heavy soiling or odor' },
];

interface OptionButtonProps {
  selected: boolean;
  onClick: () => void;
  label: string;
  sub: string;
}

function OptionButton({ selected, onClick, label, sub }: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-sm border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bay-gold ${
        selected
          ? 'border-bay-gold bg-bay-gold/10 text-white'
          : 'border-[rgba(122,130,148,0.3)] text-[#7A8294] hover:border-[rgba(201,169,97,0.4)] hover:text-white'
      }`}
    >
      <span className="block font-semibold text-sm leading-tight">{label}</span>
      <span className="block text-xs mt-0.5 opacity-70">{sub}</span>
    </button>
  );
}

export default function QuoteEstimator() {
  const [step, setStep] = useState<Step>(1);
  const [vehicle, setVehicle] = useState<VehicleType | null>(null);
  const [service, setService] = useState<ServiceType | null>(null);
  const [condition, setCondition] = useState<Condition | null>(null);

  const availableServices = vehicle === 'boat' ? MARINE_SERVICES : AUTO_SERVICES;

  function handleVehicle(v: VehicleType) {
    setVehicle(v);
    setService(null);
    setStep(2);
  }

  function handleService(s: ServiceType) {
    setService(s);
    // Ceramic and marine don't have condition tiers — skip to result
    if (s === 'ceramic' || s === 'marine') {
      setCondition('light');
      setStep('result');
    } else {
      setStep(3);
    }
  }

  function handleCondition(c: Condition) {
    setCondition(c);
    setStep('result');
  }

  function reset() {
    setStep(1);
    setVehicle(null);
    setService(null);
    setCondition(null);
  }

  const result =
    step === 'result' && vehicle && service && condition
      ? getQuotePrice(vehicle, service, condition)
      : null;

  const vehicleLabel = VEHICLES.find(v => v.id === vehicle)?.label ?? '';
  const serviceLabel = [...AUTO_SERVICES, ...MARINE_SERVICES].find(s => s.id === service)?.label ?? '';
  const conditionLabel = CONDITIONS.find(c => c.id === condition)?.label ?? '';

  const smsBody = result
    ? encodeURIComponent(
        `Quote request: ${serviceLabel} for ${vehicleLabel} (${conditionLabel} condition). Estimate: ${result.display}. — via bayshine.net`
      )
    : '';

  return (
    <div className="bg-[rgba(15,27,45,0.6)] border border-[rgba(122,130,148,0.2)] rounded-sm p-6 max-w-lg mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-6" aria-label="Quote estimator steps">
        {(['1', '2', '3'] as const).map((s, i) => {
          const stepNum = i + 1;
          const active = step === stepNum || (step === 'result' && stepNum <= 3);
          return (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  active ? 'bg-bay-gold text-bay-navy' : 'bg-[rgba(122,130,148,0.2)] text-[#7A8294]'
                }`}
              >
                {stepNum}
              </div>
              {i < 2 && (
                <div className={`h-px flex-1 w-8 transition-colors ${active ? 'bg-bay-gold/40' : 'bg-[rgba(122,130,148,0.2)]'}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Step 1: Vehicle */}
      {step === 1 && (
        <div>
          <h3 className="font-display font-semibold text-white text-base mb-4">What are you bringing in?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {VEHICLES.map(v => (
              <OptionButton
                key={v.id}
                selected={vehicle === v.id}
                onClick={() => handleVehicle(v.id)}
                label={v.label}
                sub={v.sub}
              />
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Service */}
      {step === 2 && (
        <div>
          <h3 className="font-display font-semibold text-white text-base mb-4">Which service?</h3>
          <div className="grid grid-cols-1 gap-2">
            {availableServices.map(s => (
              <OptionButton
                key={s.id}
                selected={service === s.id}
                onClick={() => handleService(s.id)}
                label={s.label}
                sub={s.sub}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="mt-4 text-xs text-[#7A8294] hover:text-white transition-colors"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 3: Condition */}
      {step === 3 && (
        <div>
          <h3 className="font-display font-semibold text-white text-base mb-4">Current condition?</h3>
          <div className="grid grid-cols-1 gap-2">
            {CONDITIONS.map(c => (
              <OptionButton
                key={c.id}
                selected={condition === c.id}
                onClick={() => handleCondition(c.id)}
                label={c.label}
                sub={c.sub}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-4 text-xs text-[#7A8294] hover:text-white transition-colors"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Result */}
      {step === 'result' && result && (
        <div>
          <p className="text-[#7A8294] text-sm mb-1">{vehicleLabel} · {serviceLabel}{conditionLabel && ` · ${conditionLabel}`}</p>
          <div className="text-4xl font-display font-bold text-white my-3">{result.display}</div>
          <p className="text-xs text-[#7A8294] mb-6">
            Estimate only. Final price confirmed at walkthrough.
          </p>

          <a
            href={`sms:8133245522?body=${smsBody}`}
            className="btn-sweep gloss-cap inline-flex items-center gap-2 bg-bay-gold text-bay-navy font-display font-semibold text-sm px-5 py-3 rounded-sm hover:bg-[#d9bc79] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bay-gold w-full justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Lock this in — text Constantine
          </a>

          <button
            type="button"
            onClick={reset}
            className="mt-4 w-full text-xs text-[#7A8294] hover:text-white transition-colors"
          >
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
