// AllPros lead-form configuration.
// ONE THING TO DO: paste your free Web3Forms access key below.
// Get it in 30 seconds at https://web3forms.com — enter the email you want
// leads sent to (hello@allpros.site or jessenshears@gmail.com), copy the key.
// Until a real key is set, forms fall back to a mailto: so no lead is ever lost.

export const WEB3FORMS_ACCESS_KEY = "e1bda52d-12b8-49ff-94d1-59ef3433f94d";

// Where leads land if the access key hasn't been set yet (mailto fallback).
export const LEADS_EMAIL = "hello@allpros.site";

export const isFormConfigured = () =>
  WEB3FORMS_ACCESS_KEY.length === 36 && !WEB3FORMS_ACCESS_KEY.startsWith("REPLACE");

// Posts a lead to Web3Forms. Returns true on success.
export async function submitLead(
  payload: Record<string, unknown>,
  subject: string,
): Promise<boolean> {
  if (!isFormConfigured()) {
    // No key yet: open the user's mail client with the details prefilled.
    const body = Object.entries(payload)
      .map(([k, v]) => `${k}: ${v ?? ""}`)
      .join("\n");
    window.location.href = `mailto:${LEADS_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    return true;
  }
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: "AllPros website",
      ...payload,
    }),
  });
  const data = await res.json().catch(() => ({ success: false }));
  return Boolean(data?.success);
}
