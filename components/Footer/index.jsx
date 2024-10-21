import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Footer() {
  const router = useRouter();
  return (
    <>
      <div className={styles.footer_main}>
        <div className='container container-full-width'>
          <div className='row'>
            <div className={`col-md-12 ${styles.box_main}`}>
              <div className={styles.box1}>
                <ul className='m-0 p-0'>
                  <li>
                    <Link href='https://www.mylondonpharmacy.co.uk/help/'>
                      <a title=''>Help</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://mylondonpharmacy.co.uk/terms-and-conditions-of-use-copy/'
                      scroll={false}
                    >
                      <a title=''>Complaints</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://www.mylondonpharmacy.co.uk/meet-the-team/'>
                      <a title=''>Accreditations</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://www.mylondonpharmacy.co.uk/blog/'>
                      <a title=''>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.box1}>
                <ul className='m-0 p-0'>
                  <li>
                    <Link href='https://www.mylondonpharmacy.co.uk/terms-and-conditions-of-use/'>
                      <a title='Terms and Conditions'>Terms and Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://www.mylondonpharmacy.co.uk/cancellation-policy/'>
                      <a title='Conditions of Sale and Refund'>
                        Conditions of Sale and Refund
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://www.mylondonpharmacy.co.uk/policy-on-privacy-and-security'>
                      <a title='Privacy Policy'>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://mylondonpharmacy.co.uk/cookies/'>
                      <a title='Cookies'>Cookies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://www.mylondonpharmacy.co.uk/sitemap_index.xml'>
                      <a title='Sitemap'>Sitemap</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.box1}>
                <br />

                <h3 className='fw-bold'>Call Us 020 3154 4734</h3>
                <br />
                <h3 className='fw-bold'>
                  Email us help@mylondonpharmacy.co.uk
                </h3>
              </div>
            </div>
          </div>
          <div className={`row d-flex ${styles.payment_footer}`}>
            <Image
              src='/images/payment_footer.png'
              alt='eye'
              width='404'
              height='55'
            />
          </div>
          <div className='container container-full-width'>
            <div className='row'>
              <div className='col-md-12 '>
                <p className={`${styles.copyright} mb-2 text-center`}>
                  Copyright © My London Pharmacy, 2023. All rights reserved. My
                  London pharmacy is powered by PharmaExpo LTD, Trading address:
                  1st floor, 45 Newmans Street, Soho, W1T 1QE. Registered in
                  England: company no. 12993595. Pharmacy : My London Pharmacy
                  GPhC no 9011790. Superintendent: Yousef Yaghoubi <br />
                  GPhC no 2218268. D-U-N-S® no: 226414184
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
