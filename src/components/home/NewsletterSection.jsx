import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="px-5 pb-16 sm:px-8 md:pb-24 lg:px-12">
      <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-8 overflow-hidden rounded-[28px] bg-[#dce8ce] px-6 py-9 sm:px-10 md:flex-row md:items-center md:px-14 md:py-12">
        <div className="relative z-10">
          <p className="mb-2 text-[10px] font-bold tracking-[.17em] text-[#567360]">A LITTLE GOOD IN YOUR INBOX</p>
          <h2 className="font-display text-3xl font-semibold tracking-[-1.2px] sm:text-4xl">Feel-good notes, occasionally.</h2>
          <p className="mt-2 text-sm text-[#738579]">A few useful reads and 10% off your first order.</p>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (email.includes("@")) setSubmitted(true);
          }}
          className="relative z-10 flex w-full max-w-md rounded-full border border-white/80 bg-white p-1.5 shadow-sm"
        >
          <input
            type="email"
            required
            aria-label="Email address"
            placeholder="Your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-[#9aa69c]"
          />
          <button className="shrink-0 rounded-full bg-[#1d4e40] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#143b30]">
            {submitted ? "You're on the list!" : "Count me in"}
          </button>
        </form>
      </div>
    </section>
  );
}
