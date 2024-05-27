import { useRouter } from 'next/router';
function Custom404() {
  const router = useRouter();
  return (
    <div className='container my-5 d-flex'>
      <div className='row mt-4'>
        <div className='col-md-6'>
          <img
            className='img-fluid'
            src='/images/404Error.svg'
            alt='page-not-found'
          />
        </div>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
          <div className='ps-md-5 ms-md-5 ps-0 ms-0'>
            <div>
              <h2>Sorry, page not found!</h2>
              {/* <button
                className="btn btn-primary rounded-pill fw-bold mt-4 p-1 p-md-2"
                onClick={() => router.push(`/`)}
              >
                <h6 className="my-2 mx-4">Back To Home</h6>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Custom404.layout = 'L1';

export default Custom404;
