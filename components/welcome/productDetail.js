import Link from "next/link";
import styles from "./style.module.css";

const ProductDetail = (props) => {
  const { data } = props;
  const title = data[0]?.name || "";
  const med_desc = data[0]?.description || "";
  const med_img1 = data[0]?.imagelink;
  const med_price = data[0]?.price;
  // const med_url_name = data?.sub_category?.slug || '';
  // const product_url = `${
  //   process.env.BASE_URL || ''
  // }/category/${med_url_name}/step1`;
  const product_url = `${process.env.BASE_URL || ""}/med/${data[0]?._id}`;

  return (
    <div>
      <header className={`bg-white ${styles.lp_header_main}`}>
        <div className="container container-full-width">
          <div className="row">
            <div
              className={`col-md-12 d-lg-flex align-items-center ${styles.farmeci_heading}`}
            >
              <div className={`d-flex ${styles.header_top_level}`}>
                <Link href="https://www.harleymedics.com/">
                  <a title="">
                    <img
                      src="/welcome/images/Harley Medics-logo.png"
                      width={180}
                      height={54}
                      className={`img-fluid ${styles.header_logo}`}
                      alt="header-logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={` d-flex justify-content-center my-5 ${styles.content_section}`}
      >
        <div className="w-100">
          <div className={`row ${styles.content_section_mobile}`}>
            <div className={`col-md-6 col-sm-12 ${styles.content_text}`}>
              <div className="h-100 d-flex flex-column justify-content-center">
                <h1 className="my-3">{title}</h1>

                <div
                  className="fs-16"
                  dangerouslySetInnerHTML={{ __html: med_desc }}
                ></div>
              </div>
            </div>
            <div className={`col-md-6 col-sm-12 ${styles.content_img}`}>
              <img
                className="w-100 h-100"
                style={{
                  maxWidth: "300px",
                  objectFit: "contain",
                }}
                src={med_img1}
              />
            </div>
          </div>
          <div className={`${styles.view_treatment_button}`}>
            <button className="btn btn-primary">
              <a className="text-white" href={product_url}>
                {med_price ? (
                  <p className="text-center fs-18 mb-1 mt-1">
                    Click here to view the treatment
                  </p>
                ) : null}{" "}
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className={`row ${styles.trust_org_section}`}>
        <h6>
          {" "}
          <a className="" href="https://www.harleymedics.com/">
            Harley Medics
          </a>{" "}
          As Featured In:
        </h6>
        <div className={`${styles.org_logo_section}`}>
          <img
            className="w-100 h-100"
            style={{
              maxWidth: "200px",
              objectFit: "contain",
            }}
            src="/welcome/images/CDlogoeps 1.png"
          />
          <img
            className="w-100 h-100"
            style={{
              maxWidth: "200px",
              objectFit: "contain",
            }}
            src="/welcome/images/Logo-new-strap-RGB-mono-01.png"
          />
          <img
            className="w-100 h-100"
            style={{
              maxWidth: "200px",
              objectFit: "contain",
            }}
            src="/welcome/images/Vector.png"
          />
          <img
            className="w-100 h-100"
            style={{
              maxWidth: "200px",
              objectFit: "contain",
            }}
            src="/welcome/images/Vector (1).png"
          />
        </div>
      </div>

      <div className={`row ${styles.rating_section}`}>
        <img
          className="w-100 h-100"
          style={{
            maxWidth: "300px",
            objectFit: "contain",
          }}
          src="/welcome/images/Group 25.png"
        />
        <h6>Average Google Rating is 4.9</h6>
      </div>

      <div className={`row ${styles.graphics_section}`}>
        <div className={`col-sm-12 col-md-4 my-3 ${styles.graphic_div}`}>
          <h6>All inclusive services</h6>
          <p className="mb-0">No extra costs</p>
          <div
            className={`bg-white d-flex flex-column align-items-center h-100 ${styles.graphics}`}
          >
            <img
              src="/welcome/images/frame1.png"
              alt="doctor-pana"
              className={`img-fluid ${styles.graphics_image}`}
            />
          </div>
        </div>
        <div className={`col-sm-12 col-md-4 my-3 ${styles.graphic_div}`}>
          <h6>Free tracked delivery</h6>
          <p className="mb-0">Delivered in plain packaging</p>
          <div
            className={`bg-white d-flex flex-column align-items-center h-100 ${styles.graphics}`}
          >
            <img
              src="/welcome/images/Frame.png"
              alt="doctor-pana"
              className={`img-fluid ${styles.graphics_image}`}
            />
          </div>
        </div>
        <div className={`col-sm-12 col-md-4 my-3 ${styles.graphic_div}`}>
          <h6>UAE delivered</h6>
          <p className="mb-0">From our london pharmacy</p>
          <div
            className={`bg-white d-flex flex-column align-items-center h-100 ${styles.graphics}`}
          >
            <img
              src="/welcome/images/Frame 7.png"
              alt="doctor-pana"
              className={`img-fluid ${styles.graphics_image}`}
            />
          </div>
        </div>
      </div>

      {/* payment options */}
      <div className={styles.payment_option__container}>
        <h3>All major payment options are available.</h3>
        <div className={styles.payment_option}>
          <div className={styles.payment_option__item}>
            <img
              className={styles.payment_option__item}
              src="/welcome/images/visa-logo.svg"
              alt="payment-visa"
            />
          </div>
          <div className={styles.payment_option__item}>
            <img
              className={styles.payment_option__item}
              src="/welcome/images/mastercard-logo.svg"
              alt="payment-mastercard"
            />
          </div>
          <div className={styles.payment_option__item}>
            <img
              className={styles.payment_option__item}
              src="/welcome/images/american-express-logo.png"
              alt="payment-american-express"
            />
          </div>
        </div>
      </div>

      <div className={styles.footer_main}>
        <div className="container container-full-width">
          <div className="row">
            {/* <div className="col-md-4 mb-3 mb-md-0">
              <span
                className={`d-block text-center mb-3 ${styles.responsive_logo}`}
              >
                <Link href="/">
                  <a title="">
                    <img
                      src="/welcome/images/Mayfair_Logo.png"
                      width={195}
                      height={117}
                      className={`img-fluid ${styles.footer_logo}`}
                      alt="footer-logo"
                    />
                  </a>
                </Link>
              </span>
            </div> */}
            <div className={`col-md-12 ${styles.box_main}`}>
              <div className={styles.box1}>
                <h3 className="fw-bold">About Us</h3>
                <ul className="m-0 p-0">
                  <li>
                    <Link href="https://www.harleymedics.com/about-us">
                      <a title="">About</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.harleymedics.com/about-us#medical-experts"
                      scroll={false}
                    >
                      <a title="">Medical Experts</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.harleymedics.com/blog">
                      <a title="">Blogs</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.box1}>
                <h3 className="fw-bold">Policies</h3>
                <ul className="m-0 p-0">
                  <li>
                    <Link href="https://www.harleymedics.com/terms">
                      <a title="terms">Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.harleymedics.com/policy">
                      <a title="privacy">Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.harleymedics.com/returns">
                      <a title="returns">Return & Refund</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.box1}>
                <h3 className="fw-bold">Help</h3>
                <ul className="m-0 p-0">
                  <li>
                    <Link href="https://www.harleymedics.com/contact">
                      <a title="contact">Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className={`${styles.hr}`} />
        <div className="container container-full-width">
          <div className="row">
            <div className="col-md-12 ">
              <p className="mb-2 text-center">
                Use of this website constitutes acceptance of the Terms and
                Conditions and Privacy Policy. All copyrights, trademarks, and
                service marks belong to their respective owners. 3rd Floor,
                86-90 Paul Street, London, England, United Kingdom, EC2A 4NE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
