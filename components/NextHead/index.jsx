import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BASE_URL, ENVIRONMENT } from '../../env';

function NextHead({ title, description, keywords }) {
  const { asPath } = useRouter();
  return (
    <Head>
      <title>{title || 'Lovely Meds'}</title>
      <meta name='title' content={title || 'Lovely Meds'} />
      <meta name='description' content={description || 'Lovely Meds'} />
      <link rel='canonical' href={`${BASE_URL}${asPath}` || ''} />
      <meta name='keywords' content={keywords || ''} />
      <meta name='theme-color' content='#5197CB' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='nofollow, noindex' />
    </Head>
  );
}

export default NextHead;
