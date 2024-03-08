'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function FleetCarousel(props:any) {
	const { items } = props;
	
  return (
    <>
		<section className="p-spacer-b position-relative">
			<div className="container">
				<h2 className="text-center spacer-b">Our Fleet</h2>
				<div id="Fleet_Carousel" className="carousel slide">
					<div className="carousel-indicators">
						{items.map((item:any, index:any) => 
							<>
								{index === 0 
									? <button type="button" data-bs-target="#Fleet_Carousel" data-bs-slide-to={index} className="active" aria-current="true" aria-label={"Slide "+index}></button>
									: <button type="button" data-bs-target="#Fleet_Carousel" data-bs-slide-to={index} aria-label={"Slide "+index}></button>
								}
							</>
						)}
					</div>
					<div className="carousel-inner">
						{items.map((item:any, index:any) => 
							<div className={`carousel-item ${index !== 0 ? null : "active" }`} key={index}>
								<div className="row justify-content-between">
									<div className="col-7 col-md-4">
										<Image src={item.img} className='rounded-xl img-fluid ml-3' alt='Catamaran' width={514} height={499} />
									</div>
									<div className="col-5 col-md-3 col-lg-4 number-stats-parent">
										<div className="number-stats">
											<dl>
												<dt>Max Speed</dt>
												<dd>{item.numSpeed} <span>km/h</span></dd>
											</dl> 
										</div>
										<div className="number-stats">
											<dl>
												<dt>Passangers</dt>
												<dd>{item.numPassangers}</dd>
											</dl>
										</div>
									</div>

									<div className="col-lg-4 col-md-5 text d-none d-md-block">
										<p className="spacer-b-small fleet-txt"><b>{item.subtitle}</b><br/>
											{item.description}
										</p>
										<Link className="button mb-lg-0" href={item.link}>Learn More</Link> 
									</div>
								</div>
							</div>
						)}
					</div>
					
					<button className="carousel-control-prev" type="button" data-bs-target="#Fleet_Carousel" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#Fleet_Carousel" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</section>
    </>
  )
}
