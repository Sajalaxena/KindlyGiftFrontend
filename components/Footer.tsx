// components/Footer.tsx
const Footer = () => {
  return (
    <footer style={styles.footer as React.CSSProperties}>
      <p>© 2025 KindlyGifts. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #EDEDED',
    marginTop: '2rem',
    color: '#555',
  },
};

export default Footer;
