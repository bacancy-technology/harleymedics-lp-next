import NextHead from '../../components/NextHead';
import services from '../../services';
import ProductDetail from '../../components/welcome/productDetail';

function LandingPage({ data }) {
  return (
    <>
      <NextHead />
      <ProductDetail data={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const product_number = context?.query?.product_number || null;
  try {
    const response = await services.getProductByslug(product_number);
    const productDetails = response.data.data;
    // if (
    //   productDetails.type !== 'medication' ||
    //   !productDetails.has_landingpage
    // ) {
    //   return {
    //     notFound: true, //redirects to 404 page
    //   };
    // }
    return { props: { data: productDetails || {} } };
  } catch (err) {
    console.error('Error: ', err);
    return { props: { data: {} } };
  }
}
export default LandingPage;
