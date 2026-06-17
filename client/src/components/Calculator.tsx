import { useState, useCallback } from "react";
import { Trade, calculateEstimate } from "../lib/trades";
import { Calculator as CalcIcon, ChevronRight, Phone, AlertCircle } from "lucide-react";
import { Link } from "wouter";

interface Props {
  trade: Trade;
}

export function TradeCalculator({ trade }: Props) {
  const { calculator } = trade;

  // Build initial form state
  const initialValues: Record<string, any> = {};
  calculator.fields.forEach(f => {
    initialValues[f.id] = f.defaultValue;
  });

  const [values, setValues] = useState<Record<string, any>>(initialValues);
  const [result, setResult] = useState<{ low: number; high: number; breakdown: string[] } | null>(null);

  const handleChange = useCallback((id: string, value: any) => {
    setValues(prev => ({ ...prev, [id]: value }));
  }, []);

  const handleCalculate = () => {
    const est = calculateEstimate(trade, values);
    setResult(est);
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-[hsl(var(--navy))] px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
            <CalcIcon className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <h3 className="font-display font-800 text-white text-lg leading-tight">{calculator.title}</h3>
            <p className="text-sm text-white/60 mt-0.5">{calculator.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Fields */}
        {calculator.fields.map(field => (
          <div key={field.id} className="space-y-1.5">
            <label className="block text-sm font-medium text-foreground">
              {field.label}
              {field.unit && <span className="text-muted-foreground font-normal ml-1">({field.unit})</span>}
            </label>

            {field.type === 'number' && (
              <div className="flex gap-2 items-center">
                <input
                  type="range"
                  min={field.min}
                  max={field.max}
                  value={values[field.id] as number}
                  onChange={e => handleChange(field.id, Number(e.target.value))}
                  className="flex-1 accent-orange-500"
                  data-testid={`range-${field.id}`}
                />
                <input
                  type="number"
                  min={field.min}
                  max={field.max}
                  value={values[field.id] as number}
                  onChange={e => handleChange(field.id, Number(e.target.value))}
                  className="calc-input w-24 text-center"
                  data-testid={`input-${field.id}`}
                />
              </div>
            )}

            {field.type === 'select' && (
              <select
                value={values[field.id] as string}
                onChange={e => handleChange(field.id, e.target.value)}
                className="calc-input"
                data-testid={`select-${field.id}`}
              >
                {field.options?.map(opt => (
                  <option key={String(opt.value)} value={String(opt.value)}>{opt.label}</option>
                ))}
              </select>
            )}

            {field.type === 'checkbox' && (
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={values[field.id] as boolean}
                    onChange={e => handleChange(field.id, e.target.checked)}
                    className="sr-only"
                    data-testid={`checkbox-${field.id}`}
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${values[field.id] ? 'bg-orange-500' : 'bg-border'}`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-transform ${values[field.id] ? 'translate-x-5' : 'translate-x-0.5'}`} />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {field.baseContribution && field.baseContribution > 0
                    ? `+ $${field.baseContribution.toLocaleString()}`
                    : ''}
                </span>
              </label>
            )}
          </div>
        ))}

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2"
          data-testid="calculate-btn"
        >
          <CalcIcon className="w-4 h-4" />
          Calculate Estimate
        </button>

        {/* Result */}
        {result && (
          <div className="animate-fade-up">
            {/* Range */}
            <div className="bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(220,45%,8%)] rounded-xl p-5 text-white mt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">Estimated Range</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-display font-800">${result.low.toLocaleString()}</span>
                <span className="text-white/50">–</span>
                <span className="text-3xl font-display font-800">${result.high.toLocaleString()}</span>
              </div>
              {/* Breakdown */}
              {result.breakdown.length > 0 && (
                <div className="mt-3 pt-3 border-t border-white/10 space-y-1">
                  {result.breakdown.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                      <ChevronRight className="w-3 h-3 text-orange-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 p-3 rounded-xl bg-muted/60 mt-3">
              <AlertCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">{calculator.disclaimer}</p>
            </div>

            {/* CTA */}
            <Link href="/contact" className="mt-3 w-full bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              Get Exact Quote — Free
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
