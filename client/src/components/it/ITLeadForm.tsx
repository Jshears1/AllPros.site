import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  org: string;
  message: string;
}

const IT_SERVICES = [
  "Software & Cloud (Microsoft 365, security, backup)",
  "Commercial Pro Audio / AV",
  "Custom or AI Build",
  "Hard-to-Find Parts",
  "Managed IT / ongoing support",
  "Not sure yet",
];

export function ITLeadForm({ prefillService = "" }: { prefillService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: { service: prefillService },
  });

  const onSubmit = async (data: FormData) => {
    // TODO: wire to a free form endpoint (Web3Forms / Formspree) to email submissions.
    await new Promise((r) => setTimeout(r, 800));
    console.log("IT quote request:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <div>
          <p className="font-display font-extrabold text-xl text-foreground">Request received</p>
          <p className="text-sm text-muted-foreground mt-1">We'll reply with a quote within one business day.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Your name *</label>
          <input {...register("name", { required: "Name required" })} placeholder="Jesse Shears" className="calc-input" />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Email *</label>
          <input {...register("email", { required: "Email required" })} type="email" placeholder="you@email.com" className="calc-input" />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Organization</label>
          <input {...register("org")} placeholder="Church, nonprofit, business…" className="calc-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Phone</label>
          <input {...register("phone")} type="tel" placeholder="(404) 000-0000" className="calc-input" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">What do you need? *</label>
        <select {...register("service", { required: true })} className="calc-input">
          <option value="">— Select —</option>
          {IT_SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Tell us about your project</label>
        <textarea {...register("message")} rows={3} placeholder="Space size, # of people, goal, timeline, budget if any…" className="calc-input resize-none" />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 text-primary-foreground font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</span>
        ) : (
          <><Send className="w-4 h-4" /> Request my quote</>
        )}
      </button>
      <p className="text-xs text-muted-foreground text-center">No obligation. We respond within one business day.</p>
    </form>
  );
}
