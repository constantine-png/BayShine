// Year/Make/Model picker for the lovebug landing page.
//
// Data source: NHTSA Vehicle Public API (vPIC) — free, no auth, US-government
// dataset covering every passenger vehicle sold in the US.
//   - Makes:  https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json
//   - Models: https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/{make}/modelyear/{year}?format=json
//
// Pickers are native <select> elements on purpose. Native selects are
// large-touch-target friendly on mobile, work without any JS dependency cost,
// and the audience (65+) already knows how to operate them. No combobox /
// fuzzy-search complexity.

import { useEffect, useState } from 'react';

const VPIC_BASE = 'https://vpic.nhtsa.dot.gov/api/vehicles';
const CURRENT_YEAR = new Date().getFullYear() + 1; // include next-model-year

interface VpicResult<T> {
  Count: number;
  Results: T[];
}

interface MakeRow {
  MakeId: number;
  MakeName: string;
}

interface ModelRow {
  Model_ID: number;
  Model_Name: string;
}

interface VehicleSelection {
  year: string;
  make: string;
  model: string;
}

interface Props {
  onChange?: (sel: VehicleSelection) => void;
  initialYear?: string;
}

const YEARS = Array.from(
  { length: CURRENT_YEAR - 1995 + 1 },
  (_, i) => String(CURRENT_YEAR - i),
);

const labelStyle =
  'block text-bay-ink font-semibold text-base mb-2 tracking-tight';

const selectStyle =
  'w-full bg-white border-2 border-bay-ink/15 hover:border-bay-ink/40 ' +
  'text-bay-ink text-lg font-medium rounded-md px-4 py-4 ' +
  'min-h-[56px] appearance-none cursor-pointer ' +
  'focus:outline-none focus:border-bay-gold focus:ring-4 focus:ring-bay-gold/20 ' +
  'disabled:bg-bay-ink/5 disabled:text-bay-ink/40 disabled:cursor-not-allowed transition-colors';

const chevron =
  // simple right-side chevron via background-image so native select stays accessible
  "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%231A1410' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")] " +
  'bg-[length:20px_20px] bg-[position:right_16px_center] bg-no-repeat pr-12';

export default function VehiclePicker({ onChange, initialYear }: Props) {
  const [year, setYear] = useState<string>(initialYear ?? '');
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');

  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [loadingMakes, setLoadingMakes] = useState(false);
  const [loadingModels, setLoadingModels] = useState(false);

  // Load makes once per session — they don't change between renders.
  useEffect(() => {
    const cacheKey = 'vpic:makes:car';
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setMakes(JSON.parse(cached));
      return;
    }
    setLoadingMakes(true);
    fetch(`${VPIC_BASE}/GetMakesForVehicleType/car?format=json`)
      .then((r) => r.json() as Promise<VpicResult<MakeRow>>)
      .then((j) => {
        const names = Array.from(
          new Set(j.Results.map((m) => m.MakeName.trim())),
        )
          .map(toTitle)
          .sort();
        setMakes(names);
        sessionStorage.setItem(cacheKey, JSON.stringify(names));
      })
      .catch(() => {
        // Fall back to a curated list if vPIC fails — never block the form
        setMakes(FALLBACK_MAKES);
      })
      .finally(() => setLoadingMakes(false));
  }, []);

  // Load models when year + make selected.
  useEffect(() => {
    setModel('');
    if (!year || !make) {
      setModels([]);
      return;
    }
    const cacheKey = `vpic:models:${make}:${year}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setModels(JSON.parse(cached));
      return;
    }
    setLoadingModels(true);
    const encodedMake = encodeURIComponent(make);
    fetch(
      `${VPIC_BASE}/GetModelsForMakeYear/make/${encodedMake}/modelyear/${year}?format=json`,
    )
      .then((r) => r.json() as Promise<VpicResult<ModelRow>>)
      .then((j) => {
        const names = Array.from(
          new Set(j.Results.map((m) => m.Model_Name.trim())),
        ).sort();
        setModels(names);
        sessionStorage.setItem(cacheKey, JSON.stringify(names));
      })
      .catch(() => setModels([]))
      .finally(() => setLoadingModels(false));
  }, [year, make]);

  // Surface selection upward whenever it changes.
  useEffect(() => {
    onChange?.({ year, make, model });
  }, [year, make, model, onChange]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <label htmlFor="vp-year" className={labelStyle}>
          Year
        </label>
        <select
          id="vp-year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className={`${selectStyle} ${chevron}`}
          aria-label="Vehicle year"
        >
          <option value="">Select year</option>
          {YEARS.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="vp-make" className={labelStyle}>
          Make
        </label>
        <select
          id="vp-make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          disabled={!year || loadingMakes}
          className={`${selectStyle} ${chevron}`}
          aria-label="Vehicle make"
        >
          <option value="">
            {loadingMakes
              ? 'Loading…'
              : !year
                ? 'Pick year first'
                : 'Select make'}
          </option>
          {makes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="vp-model" className={labelStyle}>
          Model
        </label>
        <select
          id="vp-model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          disabled={!year || !make || loadingModels}
          className={`${selectStyle} ${chevron}`}
          aria-label="Vehicle model"
        >
          <option value="">
            {loadingModels
              ? 'Loading…'
              : !make
                ? 'Pick make first'
                : models.length === 0
                  ? 'No models found'
                  : 'Select model'}
          </option>
          {models.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function toTitle(s: string): string {
  return s
    .split(/\s+/)
    .map((w) => {
      if (/^(BMW|GMC|MINI|FCA|RAM|AMG|SRT)$/i.test(w)) return w.toUpperCase();
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(' ');
}

// Curated fallback so the picker still works if vPIC is unreachable.
const FALLBACK_MAKES = [
  'Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet',
  'Chrysler', 'Dodge', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hyundai',
  'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln',
  'Mazda', 'Mercedes-Benz', 'MINI', 'Mitsubishi', 'Nissan', 'Polestar',
  'Porsche', 'RAM', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo',
];
