export default function Reviews({ params }: { params: {productId: string, reviewID: string}}) {
  return (
    <>
        <h1>Review {params.reviewID} for product {params.productId} </h1>
    </>
  );
}