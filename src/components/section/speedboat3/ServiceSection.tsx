import React from 'react'

export default function ServiceSection() {
  return (
    <>
    {/* <section id="service-card" className="p-spacer-b-2"> */}
    <section id="service-card">
		<div className="container">
			<div className="row g-2 mb-2 g-sm-4 mb-sm-4 g-lg-5 mb-lg-5 ">
				<div className="col-6 col-xl-4 flex-column d-flex align-items-end align-content-stretch">
					<div className="card d-flex flex-column h-100 justify-content-start linear-black-gradiant z-2 border-0 text-bg-dark pb-4 ps-4 pe-4 pb-md-4 ps-md-4 pe-md-4 rounded-5 p-text-bg-dark p-spacer-t-3" style={{backgroundImage:'url(../images/service/big-pic/fleet-service-1.png)'}}>
						<h5 className="card-title mb-4">Fruits included</h5>
							{/* <p className="card-text">This is a wider card with supporting text<br/> below as a natural</p> */}
					  </div>
				</div>
				<div className="col-6 col-xl-4 flex-column d-flex align-items-end align-content-stretch">
					<div className="card d-flex flex-column h-100 justify-content-start linear-black-gradiant z-2 border-0 text-bg-dark pb-4 ps-4 pe-4 pb-md-4 ps-md-4 pe-md-4 rounded-5 p-text-bg-dark p-spacer-t-3" style={{backgroundImage:'url(../images/service/big-pic/fleet-service-2.jpg)'}}>
						<h5 className="card-title mb-4">Buffet</h5>
							{/* <p className="card-text">This is a wider card with supporting text<br/> below as a natural</p> */}
					  </div>
				</div>
				<div className="col-12 col-xl-4 flex-column d-flex align-items-end align-content-stretch">
					<div className="card d-flex flex-column h-100 justify-content-start linear-black-gradiant z-2 border-0 text-bg-dark pb-4 ps-4 pe-4 pb-md-4 ps-md-4 pe-md-4 rounded-5 p-text-bg-dark p-spacer-t-3" style={{backgroundImage:'url(../images/service/big-pic/fleet-service-3.jpg)'}}>
						<h5 className="card-title mb-4">Snorkling gear</h5>
							{/* <p className="card-text">This is a wider card with supporting text<br/> below as a natural</p> */}
					  </div>
				</div>
			</div>

			<div className="row row-cols-2 row-cols-md-2 row-cols-xl-4 g-2 g-sm-4 g-lg-5">
				<div className="col flex-column d-flex align-items-end align-content-stretch">
					<div className="card d-flex flex-column  justify-content-start linear-black-gradiant z-2 border-0 text-bg-dark pb-4 ps-4 pe-4 pb-md-4 ps-md-4 pe-md-4 rounded-5 p-text-bg-dark p-spacer-t-3" style={{backgroundImage:'url(../images/service/service-01.jpg)'}}>
						<h5 className="card-title mb-4">Cocktails</h5>
							{/* <p className="card-text">This is a wider card with supporting text below as a natural</p> */}
					  </div>
				</div>
				<div className="col flex-column d-flex align-items-end align-content-stretch">
					<div className="card d-flex flex-column  justify-content-start linear-black-gradiant z-2 border-0 text-bg-dark pb-4 ps-4 pe-4 pb-md-4 ps-md-4 pe-md-4 rounded-5 p-text-bg-dark p-spacer-t-3" style={{backgroundImage:'url(../images/service/service-02.jpg)'}}>
						<h5 className="card-title mb-4">Shower on Pier</h5>
							{/* <p className="card-text">This is a wider card with supporting text below as a natural</p> */}
					  </div>
				</div>
				<div className="col flex-column d-flex align-items-end align-content-stretch">
					<div className="card d-flex flex-column  justify-content-start linear-black-gradiant z-2 border-0 text-bg-dark pb-4 ps-4 pe-4 pb-md-4 ps-md-4 pe-md-4 rounded-5 p-text-bg-dark p-spacer-t-3" style={{backgroundImage:'url(../images/service/service-03.png)'}}>
						<h5 className="card-title mb-4">Magnum Ice</h5>
							{/* <p className="card-text">This is a wider card with supporting text below as a natural</p> */}
					  </div>
				</div>
				<div className="col flex-column d-flex align-items-end align-content-stretch">
					<div className="card d-flex flex-column  justify-content-start linear-black-gradiant z-2 border-0 text-bg-dark pb-4 ps-4 pe-4 pb-md-4 ps-md-4 pe-md-4 rounded-5 p-text-bg-dark p-spacer-t-3" style={{backgroundImage:'url(../images/service/service-04.jpg)'}}>
						<h5 className="card-title mb-4">Free Softdrinks</h5>
							{/* <p className="card-text">This is a wider card with supporting text below as a natural</p> */}
					  </div>
				</div>
			</div>

		</div>
	</section>
    </>
  )
}
