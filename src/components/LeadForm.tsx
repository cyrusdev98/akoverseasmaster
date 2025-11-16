"use client";
import { useState } from "react";

type State = { loading: boolean; ok: boolean | null; error: string | null };

export default function LeadForm() {
  const [state, set] = useState<State>({ loading: false, ok: null, error: null });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    set({ loading: true, ok: null, error: null });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed");
      set({ loading: false, ok: true, error: null });
      form.reset();
    } catch (err: any) {
      set({ loading: false, ok: false, error: err?.message || "Something went wrong" });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {/* honeypot */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* row 1 */}
      <div className="row">
        <input className="input" type="text" name="name" placeholder="Name" required />
        <input className="input" type="email" name="email" placeholder="Email" required />
      </div>

      {/* row 2 */}
      <div className="row">
        <input className="input" type="tel" name="phone" placeholder="Phone Number" />
        <div className="select-wrap">
          <select className="select" name="service" aria-label="Select Services" defaultValue="">
            <option value="" disabled>Select Services</option>
            <option>Tour Packages</option>
            <option>Flight Booking</option>
            <option>Visa Assistance</option>
            <option>Hotel Reservation</option>
          </select>
          <span className="arrow"></span>
        </div>
      </div>

      {/* message */}
      <textarea className="textarea" name="message" placeholder="Message" />

      <button className="button" disabled={state.loading} type="submit">
        {state.loading ? "Sending..." : "Send a Message"}
      </button>

      {state.ok && <p style={{ color: "#16a34a", marginTop: 8 }}>Thanks! We’ll contact you soon.</p>}
      {state.error && <p style={{ color: "#dc2626", marginTop: 8 }}>{state.error}</p>}
    </form>
  );
}
