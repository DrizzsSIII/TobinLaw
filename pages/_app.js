import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div className="mobile-cta-bar">
        <span>📞</span>
        <a href="tel:4804474837">Call Now — Free Consultation · (480) 447-4837</a>
      </div>
    </>
  );
}
