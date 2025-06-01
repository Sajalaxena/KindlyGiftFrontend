// components/Banner.tsx
const Banner = () => {
  return (
    <section style={styles.banner as React.CSSProperties} >
      <div style={styles.overlay as React.CSSProperties}>
        <h1 style={styles.title}>Gifts That Make People Smile 😊</h1>
        <button style={styles.button}>Shop Now</button>
      </div>
    </section>
  );
};

const styles = {
  banner: {
    height: '60vh',
    backgroundImage: "url('/banner.jpg')" as const, // place your image in public/banner.jpg
    backgroundSize: 'cover' as const,
    backgroundPosition: 'center' as const,
    position: 'relative',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  overlay: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: '2rem',
    borderRadius: '12px',
  },
  title: {
    fontSize: '2rem',
    color: '#1E1E1E',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: '#FF6B6B',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
  },
};

export default Banner;
