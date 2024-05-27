import React from 'react';
import services from '../services';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://welcome.mylondonpharmacy.co.uk';
  let allPaths = [];

  try {
    const productData = await services.getProductSlug();
    allPaths = productData?.data?.data?.map((el) => {
      return el;
    });
  } catch (err) {
    console.log('err', err);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
    <channel>
      <title>Test</title>
      <link>https://app.mylondonpharmacy.co.uk</link>
      <description>MLP product xml file</description>
      ${allPaths
        .map((el) => {
          return `
          <item>
            <g:id>${el?._id}</g:id>
            <g:title>${el?.shoparize_title.replace(/&/g, 'and')}</g:title>
            <g:brand>${el?.shoparize_brand.replace(/&/g, 'and')}</g:brand>
            <g:product_type>${el?.shoparize_product_type.replace(
              /&/g,
              'and',
            )}</g:product_type>
            <g:condition>${el?.shoparize_condition.replace(
              /&/g,
              'and',
            )}</g:condition>
            <g:description>${el?.shoparize_description
              .replace(/<\/?[^>]+(>|$)/g, '')
              .replace(/&nbsp;/g, '')
              .replace(/&/g, 'and')}</g:description>
            <g:image_link>${el?.imagelink}</g:image_link>
            <g:link>${`https://welcome.mylondonpharmacy.co.uk/welcome/${el._id}`}</g:link>
            <g:price>GBP ${parseFloat(el?.shoparize_price)}</g:price>
            <g:availability>${el?.shoparize_availability.replace(
              /&/g,
              'and',
            )}</g:availability>
            <g:gtin>${el?.shoparize_gtin.replace(/&/g, 'and')}</g:gtin>
            <g:gender>${el?.shoparize_gender.replace(/&/g, 'and')}</g:gender>
            <g:category>${el?.shoparize_category.replace(
              /&/g,
              'and',
            )}</g:category>
            <g:sales_price>${el?.shoparize_sales_price.replace(
              /&/g,
              'and',
            )}</g:sales_price>
          </item>
          `;
        })
        .join('')}
      </channel>
    </rss>
`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
