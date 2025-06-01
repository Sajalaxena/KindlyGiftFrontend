// components/ProductCard.tsx
type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3 style={styles.title}>{product.title}</h3>
      <p style={styles.price}>₹{product.price}</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '1rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    textAlign: 'center' as const,
    width: '100%',
    maxWidth: '250px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    height: '200px',
    objectFit: 'cover' as const,
  },
  title: {
    fontSize: '1rem',
    marginTop: '0.75rem',
  },
  price: {
    color: '#0A74DA',
    fontWeight: 'bold',
    margin: '0.5rem 0',
  },
  button: {
    backgroundColor: '#FF6B6B',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: 'none',
  },
};

export default ProductCard;
