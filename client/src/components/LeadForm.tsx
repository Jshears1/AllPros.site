import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2 } from "lucide-react";
import { TRADES } from "../lib/trades";
import { submitLead } from "../lib/formConfig";

interface FormData {
  name: string;
  phone: string;
  email: string;
  trade: string;
  message: string;
  zip: string;
}

interface Props {
  prefillTrade?: string;
  compact?: boolean;
}

export function LeadForm({ prefillTrade = "", compact = false }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: { trade: prefillTrade }
  });

  const [error, setError] = useState(false);
  const onSubmit = async (data: FormData) => {
    setError(false);
    const trade = TRADES.find(t => t.id === data.trade)?.name || data.trade;
    const ok = await submitLead(
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        zip: data.zip,
        trade,
        message: data.message,
      },
      `AllPros estimate request — ${trade || "general"}`,
    );
    if (ok) setSubmitted(true);
    else setError(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <p className="font-display font-800 text-xl text-foreground">Request Received!</p>
          <p className="text-sm text-muted-foreground mt-1">We'll call you within 1 business hour.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" data-testid="lead-form">
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
        <div>
          <label className="block text-sm font-medium mb-1.5">Full Name *</label>
          <input
            {...register("name", { required: "Name required" })}
            placeholder="Jesse Shears"
            className="calc-input"
            data-testid="input-name"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Phone *</label>
          <input
            {...register("phone", { required: "Phone required" })}
            placeholder="(404) 000-0000"
            type="tel"
            className="calc-input"
            data-testid="input-phone"
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
        <div>
          <label className="block text-sm font-medium mb-1.5">Email</label>
          <input
            {...register("email")}
            placeholder="you@email.com"
            type="email"
            className="calc-input"
            data-testid="input-email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">ZIP Code *</label>
          <input
            {...register("zip", { required: "ZIP required" })}
            placeholder="30084"
            className="calc-input"
            data-testid="input-zip"
          />
          {errors.zip && <p className="text-xs text-red-500 mt-1">{errors.zip.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Service Needed *</label>
        <select
          {...register("trade", { required: true })}
          className="calc-input"
          data-testid="select-trade"
        >
          <option value="">— Select a Trade —</option>
          {TRADES.map(t => (
            <option key={t.id} value={t.id}>{t.icon} {t.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Tell Us About Your Project</label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Describe your project, timeline, any special requirements..."
          className="calc-input resize-none"
          data-testid="textarea-message"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500 text-center">Something went wrong. Please email info@allpros.site or call (404) 400-4747.</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 text-primary-foreground font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
        data-testid="btn-submit"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</span>
        ) : (
          <><Send className="w-4 h-4" /> Get My Free Estimate</>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        No obligation. We respond within 1 business hour.
      </p>
    </form>
  );
}
