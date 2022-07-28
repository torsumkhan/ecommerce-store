export default function Product({ product }) {
  const { Title, image, Price } = product.attributes;
  return (
    <div>
      <h1>{Title}</h1>
      <p>{Price}</p>
    </div>
  );
}
