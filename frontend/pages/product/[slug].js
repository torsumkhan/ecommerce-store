import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";

export default function ProductDetails() {
  const { query } = useRouter();

  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { Slug: query.slug },
  });

  const { data, fetching, error } = result;

  if (fetching) {
    return <p>...Loading</p>;
  }
  if (error) {
    return <p>Fetch Error</p>;
  }
  console.log(data.products.data);

  return (
    <div>
      <img />
      <div>
        <h3>Title</h3>
        <p>description</p>
      </div>
      <div>
        <span>Quantity</span>
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}
