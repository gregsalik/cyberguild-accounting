export type Audience = 'business' | 'firm'

export interface LedgerRow {
  date: string
  desc: string
  amt: string
  type: 'credit' | 'debit' | 'neutral'
}

export interface ServiceItem {
  icon: 'book' | 'payroll' | 'doc' | 'house' | 'chart' | 'people'
  title: string
  desc: string
}

export interface TierItem {
  entry: string
  name: string
  price: string
  features: string[]
  cta: string
  featured?: boolean
  badge?: string
}

export interface ProcessItem {
  entry: string
  title: string
  desc: string
}

export interface OutcomeItem {
  num: string
  label: string
  numericPart?: number
  suffix?: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface SiteContent {
  navCta: string
  heroEyebrow: string
  heroH1: { pre: string; em: string; post: string }
  heroLede: string
  heroNote: string[]
  ledgerLabel: string
  ledgerRows: LedgerRow[]
  trustLabel: string
  positioning: { pre: string; post: string }
  servicesEyebrow: string
  servicesH2: string
  servicesSub: string
  services: ServiceItem[]
  tiersEyebrow: string
  tiersH2: string
  tiersSub: string
  tiers: TierItem[]
  processEyebrow: string
  processH2: string
  processSub: string
  process: ProcessItem[]
  outcomesEyebrow: string
  outcomesH2: string
  outcomes: OutcomeItem[]
  faqH2: string
  faq: FaqItem[]
  ctaH2: string
  ctaLede: string
  ctaCompanyPlaceholder: string
  ctaMessagePlaceholder: string
  ctaButton: string
  footTagline: string
}

export const CONTENT: Record<Audience, SiteContent> = {
  business: {
    navCta: 'Book a consultation',
    heroEyebrow: 'Outsourced Accounting',
    heroH1: { pre: 'Books that close', em: 'on time.', post: 'Every single month.' },
    heroLede: 'Bookkeeping, payroll, and tax handled by a dedicated team — so your numbers are accurate, current, and never the thing keeping you up at night.',
    heroNote: ['VAT & PAYE ready', 'Month-to-month', 'UK, US & Canada'],
    ledgerLabel: 'Reconciling — June close',
    ledgerRows: [
      { date: '03/06', desc: 'Client invoice paid — #1038', amt: '+£4,210.00', type: 'credit' },
      { date: '11/06', desc: 'PAYE payroll run',            amt: '−£9,845.32', type: 'debit'  },
      { date: '19/06', desc: 'VAT payment — HMRC',          amt: '−£1,204.10', type: 'debit'  },
      { date: '27/06', desc: 'Client invoice paid — #1042', amt: '+£6,839.42', type: 'credit' },
    ],
    trustLabel: 'Works inside your stack',
    positioning: {
      pre: "You didn't start a business to reconcile your own bank feed. Cyberguild Accounting runs the back office —",
      post: 'bookkeeping, payroll, tax — so your numbers are always ready for a decision, a lender, or an audit.',
    },
    servicesEyebrow: 'What We Handle',
    servicesH2: 'One team, the whole ledger.',
    servicesSub: 'Pick a single service or hand us the full back office. Everything is delivered by the same dedicated team, so nothing falls through the seam between bookkeeper, payroll, and accountant.',
    services: [
      { icon: 'book',    title: 'Bookkeeping & Reconciliation',        desc: 'Daily categorisation, monthly close, and bank/card reconciliation — kept Making Tax Digital ready, not scrambled together before the deadline.' },
      { icon: 'payroll', title: 'PAYE & Payroll',                      desc: 'Salaries, PAYE, National Insurance, and pension auto-enrolment run on schedule, every pay period.' },
      { icon: 'doc',     title: 'VAT, Corporation Tax & Self Assessment', desc: 'VAT returns filed under Making Tax Digital, Corporation Tax, and Self Assessment — coordinated with your books all year, not just before the deadline.' },
      { icon: 'house',   title: 'Accounts Payable & Receivable',       desc: 'Bills entered and paid on schedule, invoices sent and chased, so cash timing stops being a guessing game.' },
      { icon: 'chart',   title: 'Financial Reporting & Dashboards',    desc: 'P&L, balance sheet, and cash flow delivered monthly in plain language — plus a live dashboard between closes.' },
      { icon: 'people',  title: 'Fractional FD / CFO Advisory',        desc: 'Budgeting, forecasting, and margin work with someone who can sit in the room — or the board meeting — when it matters.' },
    ],
    tiersEyebrow: 'Engagement Models',
    tiersH2: 'Start where you are.',
    tiersSub: 'Every tier includes a dedicated team, not a rotating queue. Move up as the business does — nothing to re-onboard.',
    tiers: [
      { entry: '001', name: 'Essentials', price: 'Monthly bookkeeping', features: ['Transaction categorisation & coding', 'Monthly bank & card reconciliation', 'Monthly P&L and balance sheet'], cta: 'Get a quote' },
      { entry: '002', name: 'Managed', price: 'Bookkeeping + payroll + reporting', featured: true, badge: 'Most common', features: ['Everything in Essentials', 'Payroll processing, all regions', 'AP/AR management', 'Live dashboard access'], cta: 'Get a quote' },
      { entry: '003', name: 'Full Ledger', price: 'Adds tax & advisory', features: ['Everything in Managed', 'VAT & Corporation Tax filing', 'Confirmation statement & Companies House', 'Fractional CFO check-ins'], cta: 'Get a quote' },
    ],
    processEyebrow: 'How It Works',
    processH2: 'Onboarding reads like a ledger.',
    processSub: 'Every engagement moves through the same four entries — nothing improvised, nothing skipped.',
    process: [
      { entry: '001', title: 'Onboard & migrate',   desc: 'We pull historical books into your system of record, clean up miscategorised transactions, and confirm every account ties out.' },
      { entry: '002', title: 'Monthly close',        desc: 'Transactions are coded weekly; bank and card accounts are reconciled by the 5th business day of the following month.' },
      { entry: '003', title: 'Reporting & filing',   desc: 'You get a P&L, balance sheet, and cash flow with plain-language notes — plus VAT, PAYE, and Corporation Tax filings on their own statutory clock.' },
      { entry: '004', title: 'Ongoing advisory',     desc: 'A standing monthly review to walk through the numbers, flag anything unusual, and plan the quarter ahead.' },
    ],
    outcomesEyebrow: 'What To Expect',
    outcomesH2: 'What "on time" actually means here.',
    outcomes: [
      { num: '5th',   label: 'Business day your monthly close is delivered, every month', numericPart: 5, suffix: 'th' },
      { num: '100%',  label: 'Of payroll runs and filings submitted before their statutory deadline', numericPart: 100, suffix: '%' },
      { num: '<2wk',  label: 'Typical time to fully onboard and migrate a set of books' },
    ],
    faqH2: 'Before you book a call.',
    faq: [
      { q: 'What if our books are already behind?',                      a: "Most clients arrive behind. The onboarding entry above exists for exactly this — we reconstruct and reconcile historical months before starting the regular monthly cadence, so nothing gets filed on top of bad data." },
      { q: 'Do you handle VAT registration and Making Tax Digital?',     a: 'Yes. We register you for VAT where needed and file every return under Making Tax Digital, alongside PAYE and Corporation Tax as they fall due.' },
      { q: "We're UK-based but might expand to the US or Canada — does that matter?", a: "No. We work with UK, US, and Canadian entities, so if the business expands across the Atlantic your books and reporting move with you rather than starting over with a new provider." },
      { q: 'Which accounting software do you use?',                      a: "We work inside whatever you already run — Xero, QuickBooks Online, and Sage most commonly — rather than migrating you to a proprietary system." },
      { q: 'Do you have experience with restaurants and hospitality?',   a: "Yes — through Cyberguild's marketing side we already work close to restaurant, winery, and hospitality operators, so tronc scheme reporting, high-volume POS reconciliation, and seasonal cash flow aren't new territory." },
      { q: 'Is there a minimum contract length?',                        a: "No. Engagements run month-to-month. We'd rather earn the renewal than lock you into one." },
      { q: 'I run an accounting firm — do you work with firms too?',     a: 'Yes — switch to the "Accounting Firm" view above. We provide white-label bookkeeping, payroll, and tax production for firms who\'d rather outsource delivery than hire for it.' },
    ],
    ctaH2: "Let's look at your books.",
    ctaLede: "Tell us where things stand — behind, chaotic, or just ready to hand off — and we'll come to the first call with a plan, not a pitch.",
    ctaCompanyPlaceholder: 'Company',
    ctaMessagePlaceholder: 'What does your back office look like right now?',
    ctaButton: 'Book a consultation',
    footTagline: 'Serving the UK, with support for US & Canadian entities',
  },

  firm: {
    navCta: 'Talk about capacity',
    heroEyebrow: 'For Accounting Firms',
    heroH1: { pre: 'The back office', em: 'behind', post: 'your back office.' },
    heroLede: "We produce the bookkeeping, payroll, and tax work for your client files — under your name, on your templates — so you can take on more clients without hiring, training, or managing another team.",
    heroNote: ['White-label only', 'NDA before file one', 'UK, US & Canada'],
    ledgerLabel: 'Client file — ready for your review',
    ledgerRows: [
      { date: '03/06', desc: 'Wainwright & Co — Bookkeeping in',    amt: 'Received', type: 'neutral' },
      { date: '11/06', desc: 'Wainwright & Co — Books reconciled',  amt: 'Ready ✓',  type: 'credit'  },
      { date: '19/06', desc: 'Hartley Opticians — Bookkeeping in',  amt: 'Received', type: 'neutral' },
      { date: '27/06', desc: 'Hartley Opticians — Books reconciled',amt: 'Ready ✓',  type: 'credit'  },
    ],
    trustLabel: "Works inside your firm's stack",
    positioning: {
      pre: "You didn't build a practice to spend busy season on data entry. Cyberguild Accounting is the production team behind your production team —",
      post: "bookkeeping, payroll, and tax work delivered under your name, reviewed and signed off by you. Your clients never hear from us.",
    },
    servicesEyebrow: 'What We Produce',
    servicesH2: 'Capacity, filed by task.',
    servicesSub: "Hand us one service or your whole production line. Everything ships under your firm's name, formatted to your templates — nothing your clients see says 'Cyberguild.'",
    services: [
      { icon: 'book',    title: 'Bookkeeping & Reconciliation',    desc: 'Monthly write-up, coding, and reconciliation delivered ready for partner review — not redone from scratch on your end.' },
      { icon: 'payroll', title: 'Payroll Processing',              desc: "PAYE runs, pensions, and payslips processed on each client's schedule, under your firm's name." },
      { icon: 'doc',     title: 'VAT & Tax Return Preparation',   desc: "Returns prepared and reconciled to the books, ready for your review and filing — or filed directly under your agent authorization, your call." },
      { icon: 'house',   title: 'Catch-Up & Cleanup Projects',   desc: 'Backlogged client files brought current and reconciled, handed back without disrupting your live workload.' },
      { icon: 'chart',   title: 'Management Reporting',           desc: "P&L, balance sheet, and cash flow packs built to your firm's template, ready to go out under your letterhead." },
      { icon: 'people',  title: 'Overflow & Seasonal Capacity',   desc: 'Extra hands during busy season, parental leave, or a hiring gap — without a recruiting cycle.' },
    ],
    tiersEyebrow: 'Engagement Models',
    tiersH2: 'Start with one file. Scale to your roster.',
    tiersSub: "Every tier gets a dedicated team, not a rotating queue. Add clients as your practice grows — nothing to re-onboard.",
    tiers: [
      { entry: '001', name: 'Overflow',        price: 'Per-project or seasonal capacity', features: ['One-off catch-up & cleanup projects', 'Busy-season overflow support', 'No minimum commitment'], cta: 'Ask about this tier' },
      { entry: '002', name: 'Dedicated Bench', price: 'Ongoing per-client production', featured: true, badge: 'Most common', features: ['Dedicated team assigned to your roster', 'Monthly bookkeeping, payroll & reporting', 'Direct line to your account lead', 'Capacity scales with your client count'], cta: 'Ask about this tier' },
      { entry: '003', name: 'White-Label Team', price: 'Full outsourced production arm', features: ['Everything in Dedicated Bench', 'VAT & tax return preparation', 'Custom SLAs & turnaround guarantees', 'Dedicated onboarding for new client files'], cta: 'Ask about this tier' },
    ],
    processEyebrow: 'How It Works',
    processH2: 'Onboarding a firm reads like a ledger too.',
    processSub: 'Every partnership moves through the same four entries — nothing improvised, nothing skipped.',
    process: [
      { entry: '001', title: 'NDA & onboarding',      desc: "We sign a mutual NDA and data-handling agreement, then map your templates, software, and review process before touching a single client file." },
      { entry: '002', title: 'Client file handoff',   desc: "You share files through your existing system. We never contact your clients directly, at any stage, for any reason." },
      { entry: '003', title: 'Production & review',   desc: "Work is delivered on an agreed SLA, formatted to your templates, and ready for partner-level review before it reaches the client." },
      { entry: '004', title: 'Ongoing capacity',      desc: "As your client roster grows, the team assigned to you scales with it — no re-onboarding, no gap in service." },
    ],
    outcomesEyebrow: 'What To Expect',
    outcomesH2: 'What "white-label" actually means here.',
    outcomes: [
      { num: '0',     label: 'Direct contact with your clients. Ever.', numericPart: 0, suffix: '' },
      { num: '5th',   label: 'Business day your firm receives the completed file, every month', numericPart: 5, suffix: 'th' },
      { num: '<2wk',  label: 'Typical time to onboard a new client file into production' },
    ],
    faqH2: 'Before you book a call.',
    faq: [
      { q: 'Will you ever contact our clients directly?',                 a: "No. All work is delivered to your firm; you own the client relationship start to finish and sign off before anything goes out the door. If a client ever needs to be contacted directly, that request comes from you, not us." },
      { q: 'How does billing work — per client, per hour, or a retainer?', a: "Most firms run a per-client monthly production fee, so your margin is predictable and easy to price into your own client fees. Catch-up projects and overflow work are quoted per engagement instead." },
      { q: 'What if we need extra capacity mid-tax-season?',              a: "That's exactly what the Overflow tier exists for. We can bring on a batch of client files with a shorter onboarding window when the alternative is your own team burning out." },
      { q: 'Do you file VAT and tax returns directly, or prepare them for us?', a: "Either. Some firms want returns prepared and reconciled for their own review and submission; others prefer we file directly under agent authorization. We work whichever way your firm prefers." },
      { q: 'How is client data and confidentiality handled?',             a: "Every partnership starts with a signed NDA and data-handling agreement before we see a single client file — covered in Entry 001 of onboarding." },
      { q: 'Which accounting software do you work in?',                   a: "Whatever your firm and your clients already run — Xero, QuickBooks Online, and Sage most commonly — formatted to your existing templates rather than a system of our own." },
      { q: 'Is there a minimum number of clients or a lock-in?',          a: "No. Start with one client file or your whole roster — we scale with you, and it's month-to-month." },
    ],
    ctaH2: "Let's talk about capacity.",
    ctaLede: "Tell us the size of your client roster and where the pressure points are — busy season, payroll cycles, or growth outpacing headcount — and we'll come back with a proposal, not a pitch.",
    ctaCompanyPlaceholder: 'Firm name',
    ctaMessagePlaceholder: "How many client files are you looking to place, and what's the biggest bottleneck right now?",
    ctaButton: 'Request a proposal',
    footTagline: 'Serving accounting firms in the UK, with US & Canada capacity',
  },
}

export const SOFTWARE_CHIPS = ['Xero', 'QuickBooks Online', 'Sage', 'FreeAgent', 'BrightPay', 'Dext']
