// Capabilities marquee — creates rhythm between hero and services
// Same concept as premium consulting sites (Pilot, Bench) but executed for accounting

const TERMS = [
  'Bookkeeping',
  'Payroll Processing',
  'Year-End Accounts',
  'Management Accounts',
  'Tax Support',
  'Audit Assistance',
  'Back Office Support',
  'Data Analytics',
  'IT Solutions',
  'Offshoring Services',
  'VAT Returns',
  'Corporation Tax',
]

const Sep = () => (
  <span
    className="inline-block mx-6 flex-shrink-0"
    style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#F26A3D', verticalAlign: 'middle', display: 'inline-block' }}
    aria-hidden
  />
)

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-4"
      style={{ backgroundColor: '#111111', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee-left 50s linear infinite' }}>
        {[0, 1].map(copy => (
          <span key={copy} style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
            {TERMS.map((term, i) => (
              <span key={`${copy}-${i}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: '0.72rem', letterSpacing: '0.14em', color: 'rgba(245,240,232,0.6)' }}
                >
                  {term}
                </span>
                <Sep />
              </span>
            ))}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
