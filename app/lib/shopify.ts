export async function fetchProducts() {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(`https://kindlygift.in/api/2023-07/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': '7aeb3101a90e7df2c685a542703f915a',
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();

  if (!json.data || !json.data.products) {
    console.error('Error fetching products from Shopify:', json.errors ?? json);
    throw new Error('Failed to fetch products from Shopify');
  }

  return json.data.products.edges.map(({ node }: any) => ({
    id: node.id,
    title: node.title,
    handle: node.handle,
    description: node.description,
    image: node.images.edges[0]?.node.url,
    price: node.priceRange.minVariantPrice.amount,
  }));
}
