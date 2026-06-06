import { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className="loader-wrapper"
      style={{
        opacity: loading ? 1 : 0,
        visibility: loading ? 'visible' : 'hidden',
        transition: 'opacity 0.5s ease, visibility 0.5s ease',
      }}
    >
      <div className="loader-content text-center">
        {/* Greeting line */}
        <p
          style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.85rem',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '12px',
            fontFamily: 'var(--font-outfit)',
          }}
        >
          Welcome to
        </p>

        {/* Main name */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            fontFamily: 'var(--font-outfit)',
            background: 'linear-gradient(135deg, #00e1ff 0%, #5e00ff 50%, #00e1ff 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 3s ease infinite',
            marginBottom: '4px',
            lineHeight: 1.2,
          }}
        >
          Gokulavanan's
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            fontWeight: 300,
            fontFamily: 'var(--font-outfit)',
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          Portfolio
        </h2>

        {/* Progress bar */}
        <div
          style={{
            width: '180px',
            height: '3px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '4px',
            margin: '0 auto 12px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #5e00ff, #00e1ff)',
              borderRadius: '4px',
              transition: 'width 0.1s linear',
              boxShadow: '0 0 12px rgba(0, 225, 255, 0.5)',
            }}
          />
        </div>

        <span
          style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.7rem',
            letterSpacing: '2px',
            fontFamily: 'var(--font-outfit)',
          }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default Loader;
