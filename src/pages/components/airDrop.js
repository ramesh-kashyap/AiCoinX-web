import React from 'react';
const AirdropCard = () => {
    // Example points value
    const points = 50000; // e.g. "50,000"
  
    // Inline styles
    const styles = {
      container: {
        maxWidth: '100%',
        maxHeight: '50%',
        marginTop:'20px',
        border: '2px solid #6633cc',
        borderRadius: '12px',
        padding: '12px',
        fontFamily: 'sans-serif',
        background: 'linear-gradient(90deg, #6633cc, #9b59b6)',
        color: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
        position: 'relative',
      },
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      title: {
        margin: 0,
        fontSize: '1rem',
        fontWeight: 700,
      },
      arrow: {
        fontSize: '1.25rem',
        color: '#6633cc',
        cursor: 'pointer',
        userSelect: 'none',
      },
      subtitle: {
        margin: '8px 0 16px',
        fontSize: '0.875rem',
        lineHeight: 1.2,
        color: '#fff',
      },
      pointsRow: {
        marginBottom: '16px',
      },
      pointsValue: {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#6633cc',
        padding: '6px 10px',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '0.75rem',
      },
      klinkSymbol: {
        display: 'inline-block',
        marginLeft: '4px',
        fontWeight: 600,
        fontSize: '0.75rem',
        color: '#fff',
      },
      progressSteps: {
        display: 'flex',
        gap: '4px',
      },
      step: {
        flex: 1,
        height: '6px',
        backgroundColor: '#eee',
        borderRadius: '4px',
      },
      stepCompleted: {
        flex: 1,
        height: '6px',
        backgroundColor: '#6633cc',
        borderRadius: '4px',
      },
    };
  
    return (
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h3 style={styles.title}>Get Your First Airdrop Points!</h3>
          {/* Replace "→" with an icon if desired */}
          <span style={styles.arrow}>→</span>
        </div>
  
        {/* Subtitle */}
        <p style={styles.subtitle}>
          Complete your profile set-up and earn 70,000 $KLINK Airdrop Points
        </p>
  
        {/* Points Row */}
        <div style={styles.pointsRow}>
          <span style={styles.pointsValue}>
            {points.toLocaleString()}
            {/* Replace this with an icon if you have one */}
            <span style={styles.klinkSymbol}>K</span>
          </span>
        </div>
  
        {/* Progress Steps (4 segments total; 2 completed) */}
        <div style={styles.progressSteps}>
          <div style={styles.stepCompleted}></div>
          <div style={styles.stepCompleted}></div>
          <div style={styles.step}></div>
          <div style={styles.step}></div>
        </div>
      </div>
    );
  };
  export default AirdropCard;