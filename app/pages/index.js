import { client } from '../lib/shopify';

export async function getStaticProps() {
  const query = `
    {
      products(first: 6) {
        edges {
          node {
            id
            title
            description
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await client.request(query);

  return {
    props: {
      products: data.products.edges,
    },
  };
}

export default function Home({ products }) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map(({ node }) => (
          <div key={node.id} className="border rounded p-2">
            <img src={node.images.edges[0]?.node.url} alt={node.title} className="w-full h-48 object-cover"/>
            <h2 className="text-xl mt-2">{node.title}</h2>
            <p>{node.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
