import Link from 'next/link'
import React from 'react'

export default function WhereSection() {
  return (
    <>
    <section>
        <div className="container spacer-b-2">

            <div className="row row-cols-1 row-cols-lg-2 align-items-lg-start align-items-baseline g-5">
              <div className="col mt-0">
                <h2 className="fw-bold color-black spacer-b-small">Follow us on Social Media</h2>
					<div className="row row-cols-1 row-cols-sm-2 g-4">
						<div className="col d-flex flex-row gap-2">
						  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-white bg-main fs-4 rounded-3">
							  <i className="bi bi-pin-map-fill"></i>
						  </div>
						 
						  <p className="text-body-secondary ps-4 link-underline-opacity-0 text">Avenue Reine<br/>1190, Brussels</p>
						</div>
			  
						<div className="col d-flex flex-row gap-2">
							<div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-white bg-main fs-4 rounded-3">
								<i className="bi bi-telephone-fill"></i>
							</div>
							<p className="ps-4 text text-start">
							<Link className="link text-body-secondary" href="tel:+3365132845">+33 6 513 28 45</Link><br/>
							<Link className="link text-body-secondary" href="mailto:example@info.com">example@info.com</Link></p>
						</div>
            	
            	</div>

              </div>
        
              <div className="col">
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                  <Link href="#" className="col d-flex flex-column gap-2 link-underline link-underline-opacity-0">
						<div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-white bg-main fs-4 rounded-3">
							<i className="bi bi-facebook"></i>
						</div>
						<h4 className="fw-semibold mb-0 color-black text-spacing">Facebook</h4>
						<p className="text text-start text-body-secondary ">Follow us on Facebook for the latest News about our Fleet</p>
					</Link>
        
                <Link href="#" className="col d-flex flex-column gap-2 link-underline link-underline-opacity-0">
                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-white bg-main fs-4 rounded-3">
						<i className="bi bi-instagram"></i>
                    </div>
                    <h4 className="fw-semibold mb-0 color-black text-spacing">Instagram</h4>
						<p className="text text-start text-body-secondary ">Follow us on Instagram for the latest News about our Fleet</p>
				</Link>
        
                <Link href="#" className="col d-flex flex-column gap-2 link-underline link-underline-opacity-0">
                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-white bg-main fs-4 rounded-3">
						<i className="bi bi-line"></i>
                    </div>
                    <h4 className="fw-semibold mb-0 color-black text-spacing">Line</h4>
						<p className="text text-start text-body-secondary ">Chat with us on Line and we answer all your questions</p>
				</Link>
        
                <Link href="#" className="col d-flex flex-column gap-2 link-underline link-underline-opacity-0">
                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-white bg-main fs-4 rounded-3">
						<i className="bi bi-whatsapp"></i>
                    </div>
                    <h4 className="fw-semibold mb-0 color-black text-spacing">WhatsApp</h4>
						<p className="text text-start text-body-secondary ">Chat with us on WhatsApp and we answer all your questions</p>
				</Link>
                </div>
              </div>
            </div>
          </div>
    </section>
    </>
  )
}
