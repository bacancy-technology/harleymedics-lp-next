import * as network from './network';

const getProductById = (id) => {
  return network.get(`product/id/${id}`);
};

const getProductByslug = (id) => {
  return network.get(`product/only-slug/product?id=${id}`);
};

const getProductSlug = (token) => {
  return network.get(`product/only-slug/shoparize`);
};


export default {
  getProductById,
  getProductByslug,
  getProductSlug
};
