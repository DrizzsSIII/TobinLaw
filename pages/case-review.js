import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';
import {
  IconCar, IconBeaker, IconHome, IconScale,
  IconLock, IconExclamationTriangle, IconChat,
} from '../components/Icons';

const CHARGE_TYPES = [
  { id: 'dui',       label: 'DUI',               sub: 'Driving under the influence',     Icon: IconCar },
  { id: 'drug',      label: 'Drug Offense',       sub: 'Possession, trafficking, sale',  Icon: IconBeaker },
  { id: 'dv',        label: 'Domestic Violence',  sub: 'Assault in domestic relationship',Icon: IconHome },
  { id: 'assault',   label: 'Assault',            sub: 'Violent crime or threatening',   Icon: IconScale },
  { id: 'theft',     label: 'Theft / Property',   sub: 'Shoplifting, burglary, damage',  Icon: IconLock },
  { id: 'traffic',   label: 'Traffic',            sub: 'Criminal speeding, reckless driving', Icon: IconExclamationTriangle },
  { id: 'other',     label: 'Other Charge',       sub: 'Fraud, weapons, white collar, etc.', Icon: IconChat },
];

const SPECIFIC_CHARGES = {
  dui:     ['First offense','Second offense','Third or more','Extreme DUI (BAC 0.15+)','Super Extreme (BAC 0.20+)','Underage DUI','DUI with accident','DUI with injury'],
  drug:    ['Simple possession','Possession with intent','Drug trafficking','Manufacturing / cultivation','Prescription fraud','Paraphernalia charge'],
  dv:      ['Misdemeanor assault','Felony assault','Criminal threatening','Protective order violation','Aggravated domestic violence','First offense','Repeat offense'],
  assault: ['Simple assault','Aggravated assault','Bar fight','Self-defense claim','Assault with weapon','Threatening / intimidating'],
  theft:   ['Shoplifting','Felony theft','Burglary','Robbery','Criminal damage','Receiving stolen property'],
  traffic: ['Criminal speeding','Reckless driving','Aggressive driving','Hit and run','Suspended license','Vehicular endangerment'],
  other:   ['Fraud','Trespassing','Disorderly conduct','Weapons charge','Sex offense','White collar crime','Juvenile offense','Other'],
};

const SEVERITY = [
  { id: 'misdemeanor', label: 'Misdemeanor',    sub: 'Less serious criminal charge', color: '#2d7a3a' },
  { id: 'felony',      label: 'Felony',         sub: 'Serious charge, prison possible', color: '#b91c1c' },
  { id: 'unsure',      label: 'Not sure yet',   sub: "I don't know the classification", color: '#b45309' },
];

const PRIOR_RECORD = [
  { id: 'none',     label: 'No prior record',    sub: 'Clean criminal history' },
  { id: 'one',      label: 'One prior offense',  sub: 'One previous charge or conviction' },
  { id: 'multiple', label: 'Multiple priors',    sub: 'Two or more prior offenses' },
];

const SITUATIONS = [
  { id: 'arrested',    label: 'Recently arrested',         sub: 'Within the last 48 hours',      urgent: true },
  { id: 'released',    label: 'Released, awaiting court',  sub: 'Out on bail or own recognizance', urgent: false },
  { id: 'cited',       label: 'Cited / summoned',          sub: 'Received a citation or summons',  urgent: false },
  { id: 'investigated',label: 'Under investigation',       sub: 'Not yet charged but being investigated', urgent: false },
];

const CITIES = ['Chandler','Mesa','Gilbert','Tempe','Scottsdale','Phoenix','San Tan Valley','Queen Creek','Other'];

const TOTAL_STEPS = 7;

function ProgressBar({ step }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', fontFamily: 'Raleway, sans-serif', letterSpacing: '0.06em' }}>
          STEP {step} OF {TOTAL_STEPS}
        </span>
        <span style={{ fontSize: 12, color: 'var(--gold)', fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}>
          {Math.round((step / TOTAL_STEPS) * 100)}% complete
        </span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${(step / TOTAL_STEPS) * 100}%`,
          background: 'var(--gold)',
          borderRadius: 2,
          transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1)',
        }} />
      </div>
    </div>
  );
}

function StepHeading({ title, sub }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(20px, 3vw, 28px)', color: 'var(--white)', marginBottom: 8, lineHeight: 1.2 }}>{title}</h2>
      {sub && <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{sub}</p>}
    </div>
  );
}

function NavButtons({ onBack, onNext, canNext, nextLabel = 'Continue →', step }) {
  return (
    <div style={{ display: 'flex', gap: 12, marginTop: 32, alignItems: 'center' }}>
      {step > 1 && (
        <button onClick={onBack} style={{
          background: 'transparent', border: '1.5px solid rgba(255,255,255,0.2)',
          color: 'rgba(255,255,255,0.6)', fontFamily: 'Raleway, sans-serif',
          fontWeight: 600, fontSize: 14, padding: '12px 24px', borderRadius: 2,
          cursor: 'pointer', transition: 'border-color 0.15s, color 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = 'var(--white)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
        >← Back</button>
      )}
      <button onClick={onNext} disabled={!canNext} style={{
        background: canNext ? 'var(--gold)' : 'rgba(201,168,76,0.25)',
        color: canNext ? 'var(--navy)' : 'rgba(255,255,255,0.3)',
        fontFamily: 'Raleway, sans-serif', fontWeight: 700,
        fontSize: 15, padding: '13px 32px', borderRadius: 2,
        border: 'none', cursor: canNext ? 'pointer' : 'not-allowed',
        transition: 'background 0.18s, transform 0.15s',
        opacity: canNext ? 1 : 0.4,
        flex: 1,
      }}
      onMouseEnter={e => { if (canNext) e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
      >{nextLabel}</button>
    </div>
  );
}

function SelectionCard({ label, sub, selected, onClick, color, Icon }) {
  return (
    <button onClick={onClick} style={{
      background: selected ? 'rgba(201,168,76,0.14)' : 'rgba(255,255,255,0.04)',
      border: `2px solid ${selected ? 'var(--gold)' : 'rgba(255,255,255,0.1)'}`,
      borderRadius: 4, padding: '18px 16px',
      cursor: 'pointer', textAlign: 'left', width: '100%',
      transition: 'background 0.15s, border-color 0.15s, transform 0.15s',
      transform: selected ? 'translateY(-1px)' : 'none',
    }}
    onMouseEnter={e => { if (!selected) { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; } }}
    onMouseLeave={e => { if (!selected) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; } }}
    >
      {Icon && (
        <div style={{ color: selected ? 'var(--gold)' : 'rgba(255,255,255,0.4)', marginBottom: 10 }}>
          <Icon width={24} height={24} />
        </div>
      )}
      {color && (
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, marginBottom: 10 }} />
      )}
      <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 15, color: selected ? 'var(--gold)' : 'var(--white)', marginBottom: 4 }}>{label}</div>
      {sub && <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{sub}</div>}
    </button>
  );
}

function Pill({ label, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      padding: '8px 16px',
      background: selected ? 'var(--gold)' : 'rgba(255,255,255,0.06)',
      border: `1.5px solid ${selected ? 'var(--gold)' : 'rgba(255,255,255,0.15)'}`,
      borderRadius: 20, cursor: 'pointer',
      fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: 13,
      color: selected ? 'var(--navy)' : 'rgba(255,255,255,0.8)',
      transition: 'all 0.15s',
      whiteSpace: 'nowrap',
    }}
    onMouseEnter={e => { if (!selected) { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)'; e.currentTarget.style.color = 'var(--white)'; } }}
    onMouseLeave={e => { if (!selected) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; } }}
    >{label}</button>
  );
}

export default function CaseReview() {
  const [step, setStep]           = useState(1);
  const [chargeType, setCharge]   = useState('');
  const [specifics, setSpecifics] = useState([]);
  const [severity, setSeverity]   = useState('');
  const [priorRecord, setPrior]   = useState('');
  const [situation, setSituation] = useState('');
  const [contact, setContact]     = useState({ name: '', phone: '', city: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSub]      = useState(false);

  const isUrgent = situation === 'arrested';

  function toggleSpecific(val) {
    setSpecifics(s => s.includes(val) ? s.filter(x => x !== val) : [...s, val]);
  }

  const canContinue = [
    chargeType !== '',
    specifics.length > 0,
    severity !== '',
    priorRecord !== '',
    situation !== '',
    contact.name.trim() !== '' && contact.phone.trim() !== '',
    true,
  ][step - 1];

  function next() { if (canContinue) setStep(s => s + 1); }
  function back() { setStep(s => s - 1); }

  async function handleSubmit() {
    setSub(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'case-review-wizard',
          chargeType,
          specifics: specifics.join(', '),
          severity,
          priorRecord,
          situation,
          ...contact,
        }),
      });
    } catch {}
    setSub(false);
    setSubmitted(true);
  }

  const chargeLabel = CHARGE_TYPES.find(c => c.id === chargeType)?.label || '';
  const severityLabel = SEVERITY.find(s => s.id === severity)?.label || '';
  const priorLabel = PRIOR_RECORD.find(p => p.id === priorRecord)?.label || '';
  const situationLabel = SITUATIONS.find(s => s.id === situation)?.label || '';

  return (
    <>
      <Head>
        <title>Free Case Review | Tobin Law Office</title>
        <meta name="description" content="Start your free, confidential case review with attorney Tim Tobin. Answer a few questions and get a personalized response — same day." />
        <meta property="og:title" content="Free Case Review | Tobin Law Office" />
        <meta property="og:description" content="Start your free case review with former prosecutor Tim Tobin. Fast, confidential, no obligation." />
        <meta property="og:url" content="https://tobinlawoffice.com/case-review" />
      </Head>

      <Nav />

      {/* Page header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
        padding: '52px 24px 48px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(ellipse 50% 80% at 90% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />
        <img src="/logo.webp" alt="" aria-hidden="true" style={{
          position: 'absolute', top: 20, right: 24,
          height: 36, width: 'auto',
          filter: 'brightness(0) invert(1)', opacity: 0.2, pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-label">Free Case Evaluation</span>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(28px, 5vw, 48px)', color: 'var(--white)', lineHeight: 1.12, marginBottom: 14 }}>
            Tell Us About Your Case
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', maxWidth: 540, lineHeight: 1.75 }}>
            Answer 7 quick questions and Tim will know exactly what you're facing before he calls you. No back-and-forth, no repeating yourself.
          </p>
        </div>
      </div>

      {/* 3-step explainer bar */}
      <div style={{ background: 'var(--white)', borderBottom: '3px solid #c9a84c', padding: '28px 24px' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
          {[
            { n: '1', heading: 'Answer 7 questions',   sub: 'Takes about 90 seconds. No account needed.' },
            { n: '2', heading: 'Tim reviews your case', sub: 'He sees your full situation before picking up the phone.' },
            { n: '3', heading: 'Get a real answer',     sub: 'A free, direct consultation. Not a sales call.' },
          ].map(({ n, heading, sub }, i) => (
            <div key={n} style={{
              textAlign: 'center', padding: '16px 24px',
              borderRight: i < 2 ? '1px solid var(--gray-light)' : 'none',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: '#0a1628', color: '#c9a84c',
                fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 15,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 12px',
              }}>{n}</div>
              <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 5 }}>{heading}</div>
              <div style={{ fontSize: 12, color: 'var(--gray-mid)', lineHeight: 1.55 }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wizard */}
      <section style={{ padding: '48px 24px 80px', background: 'var(--navy-mid)', minHeight: '60vh' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>

          {submitted ? (
            /* Confirmation */
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              {isUrgent && (
                <div style={{
                  background: 'rgba(185,28,28,0.15)', border: '1.5px solid rgba(185,28,28,0.5)',
                  borderRadius: 4, padding: '14px 20px', marginBottom: 32, textAlign: 'left',
                  display: 'flex', gap: 12, alignItems: 'flex-start',
                }}>
                  <span style={{ color: '#ef4444', fontSize: 18, flexShrink: 0 }}>⚠</span>
                  <div>
                    <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, color: '#fca5a5', fontSize: 14 }}>Recently arrested — Tim will prioritize this response</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>Expected response: within the hour</div>
                  </div>
                </div>
              )}
              <div style={{ fontSize: 52, color: 'var(--gold)', marginBottom: 20 }}>✓</div>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 28, color: 'var(--white)', marginBottom: 14 }}>
                Case Review Received
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 420, margin: '0 auto 32px' }}>
                Tim will personally review your information and be in touch{' '}
                <strong style={{ color: 'var(--gold)' }}>{isUrgent ? 'within the hour' : 'within a few hours'}</strong>.
                If your situation is urgent, call directly:
              </p>
              <a href="tel:4804474837" className="cta-gold" style={{ fontSize: 18, textTransform: 'none', display: 'inline-block' }}>
                (480) 447-4837
              </a>
              <div style={{ marginTop: 24 }}>
                <Link href="/" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 2 }}>
                  Return to homepage
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {/* Urgency banner */}
              <div style={{
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: 4, padding: '8px 14px',
                fontSize: 13, color: '#c9a84c',
                marginBottom: 24,
                fontFamily: 'Raleway, sans-serif',
              }}>
                ⚡ Tim personally reviews every submission. Average response time under 2 hours.
              </div>

              <ProgressBar step={step} />

              {/* Step 1 — Charge type */}
              {step === 1 && (
                <div>
                  <StepHeading title="What type of charge are you facing?" sub="Select the category that best describes your situation." />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
                    {CHARGE_TYPES.map(({ id, label, sub, Icon }) => (
                      <SelectionCard key={id} label={label} sub={sub} Icon={Icon}
                        selected={chargeType === id}
                        onClick={() => { setCharge(id); setSpecifics([]); }} />
                    ))}
                  </div>
                  <NavButtons step={step} onBack={back} onNext={next} canNext={chargeType !== ''} />
                </div>
              )}

              {/* Step 2 — Specific charges */}
              {step === 2 && (
                <div>
                  <StepHeading title="Which specific charges apply?" sub="Select all that apply. You can choose multiple." />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {(SPECIFIC_CHARGES[chargeType] || []).map(charge => (
                      <Pill key={charge} label={charge}
                        selected={specifics.includes(charge)}
                        onClick={() => toggleSpecific(charge)} />
                    ))}
                  </div>
                  <NavButtons step={step} onBack={back} onNext={next} canNext={specifics.length > 0} />
                </div>
              )}

              {/* Step 3 — Severity */}
              {step === 3 && (
                <div>
                  <StepHeading title="What is the severity of the charge?" sub="Not sure? Select 'Not sure yet' and Tim can help clarify." />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
                    {SEVERITY.map(({ id, label, sub, color }) => (
                      <SelectionCard key={id} label={label} sub={sub} color={color}
                        selected={severity === id}
                        onClick={() => setSeverity(id)} />
                    ))}
                  </div>
                  <NavButtons step={step} onBack={back} onNext={next} canNext={severity !== ''} />
                </div>
              )}

              {/* Step 4 — Prior record */}
              {step === 4 && (
                <div>
                  <StepHeading title="Do you have a prior criminal record?" sub="This helps Tim understand the potential sentencing exposure." />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
                    {PRIOR_RECORD.map(({ id, label, sub }) => (
                      <SelectionCard key={id} label={label} sub={sub}
                        selected={priorRecord === id}
                        onClick={() => setPrior(id)} />
                    ))}
                  </div>
                  <NavButtons step={step} onBack={back} onNext={next} canNext={priorRecord !== ''} />
                </div>
              )}

              {/* Step 5 — Current situation */}
              {step === 5 && (
                <div>
                  <StepHeading title="What is your current situation?" sub="This helps Tim understand the urgency of your case." />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
                    {SITUATIONS.map(({ id, label, sub, urgent }) => (
                      <SelectionCard key={id} label={label} sub={sub}
                        selected={situation === id}
                        onClick={() => setSituation(id)} />
                    ))}
                  </div>
                  <NavButtons step={step} onBack={back} onNext={next} canNext={situation !== ''} />
                </div>
              )}

              {/* Step 6 — Contact info */}
              {step === 6 && (
                <div>
                  <StepHeading title="How should Tim reach you?" sub="Your information is kept completely confidential." />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input type="text" required placeholder="Your name" className="input-field-dark"
                        value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input type="tel" required placeholder="(480) 000-0000" className="input-field-dark"
                        value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} />
                    </div>
                    <div>
                      <label style={labelStyle}>Your City</label>
                      <select className="input-field-dark"
                        value={contact.city} onChange={e => setContact({ ...contact, city: e.target.value })}
                        style={{ color: contact.city ? 'var(--white)' : 'rgba(255,255,255,0.38)' }}>
                        <option value="">Select city</option>
                        {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Anything else to add? (Optional)</label>
                      <textarea rows={4} placeholder="Brief description of your situation..." className="input-field-dark"
                        style={{ resize: 'vertical' }}
                        value={contact.notes} onChange={e => setContact({ ...contact, notes: e.target.value })} />
                    </div>
                  </div>
                  <NavButtons step={step} onBack={back} onNext={next}
                    canNext={contact.name.trim() !== '' && contact.phone.trim() !== ''} />
                </div>
              )}

              {/* Step 7 — Review & submit */}
              {step === 7 && (
                <div>
                  <StepHeading title="Review your case summary" sub="Please confirm the details below, then submit for Tim's review." />

                  {isUrgent && (
                    <div style={{
                      background: 'rgba(185,28,28,0.15)', border: '1.5px solid rgba(185,28,28,0.5)',
                      borderRadius: 4, padding: '14px 20px', marginBottom: 24,
                      display: 'flex', gap: 12, alignItems: 'flex-start',
                    }}>
                      <span style={{ color: '#ef4444', fontSize: 18, flexShrink: 0 }}>⚠</span>
                      <div>
                        <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, color: '#fca5a5', fontSize: 14 }}>Recently arrested — Tim will prioritize this response</div>
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>Expected response time: within the hour</div>
                      </div>
                    </div>
                  )}

                  <div style={{
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: 5, padding: '24px', marginBottom: 8,
                  }}>
                    {[
                      ['Charge Type',     chargeLabel],
                      ['Specific Charges',specifics.join(', ') || '—'],
                      ['Severity',        severityLabel],
                      ['Prior Record',    priorLabel],
                      ['Situation',       situationLabel],
                      ['Name',            contact.name],
                      ['Phone',           contact.phone],
                      ['City',            contact.city || '—'],
                      ['Notes',           contact.notes || '—'],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', gap: 16, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: 120, flexShrink: 0, fontFamily: 'Raleway, sans-serif', paddingTop: 1 }}>{k}</span>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{v}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: 12, marginTop: 24, alignItems: 'center' }}>
                    <button onClick={back} style={{
                      background: 'transparent', border: '1.5px solid rgba(255,255,255,0.2)',
                      color: 'rgba(255,255,255,0.6)', fontFamily: 'Raleway, sans-serif',
                      fontWeight: 600, fontSize: 14, padding: '12px 24px', borderRadius: 2,
                      cursor: 'pointer',
                    }}>← Back</button>
                    <button onClick={handleSubmit} disabled={submitting} style={{
                      flex: 1, background: 'var(--gold)', color: 'var(--navy)',
                      fontFamily: 'Raleway, sans-serif', fontWeight: 700,
                      fontSize: 16, padding: '14px 32px', borderRadius: 2,
                      border: 'none', cursor: 'pointer',
                      transition: 'background 0.18s, transform 0.15s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                    >{submitting ? 'Submitting…' : 'Submit Case Review →'}</button>
                  </div>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginTop: 14, lineHeight: 1.6 }}>
                    Completely confidential. No attorney-client relationship is formed by submitting this form.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

const labelStyle = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: 11, fontWeight: 700,
  letterSpacing: '0.08em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 6,
};
