'use client'
import Catamaran2 from '@/assets/icons/catamaran2'
import SailingCat from '@/assets/icons/sailing_cat'
import SpeedBoatSVG from '@/assets/icons/speed-boat'
import SpeedBoat2 from '@/assets/icons/speed_boat_2'
import SpeedCat from '@/assets/icons/speed_cat'
import SpeedCat2 from '@/assets/icons/speed_cat_2'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function FleetSection() {
  return (
    <>
      <section className="p-spacer-b position-relative">
		<div className="container">
			<h2 className="text-center spacer-b">Our Fleet</h2>
			<div id="Fleet_Carousel" className="carousel slide">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#Fleet_Carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#Fleet_Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#Fleet_Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
					<button type="button" data-bs-target="#Fleet_Carousel" data-bs-slide-to="3" aria-label="Slide 3"></button>
					<button type="button" data-bs-target="#Fleet_Carousel" data-bs-slide-to="4" aria-label="Slide 3"></button>
					<button type="button" data-bs-target="#Fleet_Carousel" data-bs-slide-to="5" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="row justify-content-between">
							<div className="col-7 col-md-4">
								<SpeedBoatSVG className="img-fluid" />
							</div>
							<div className="col-5 col-md-3 col-lg-4 number-stats-parent">
								<div className="number-stats">
									<dl>
										<dt>Max Speed</dt>
										<dd>250 <span>km/h</span></dd>
									</dl> 
								</div>
								<div className="number-stats">
									<dl>
										<dt>Passangers</dt>
										<dd>12</dd>
									</dl>
								</div>
							</div>

							<div className="col-lg-4 col-md-5 text d-none d-md-block">
								<p className="spacer-b-small fleet-txt"><b>Speed Boat 3 Engine</b><br/>
									Boasting unmatched speed and agility, our watercraft ensures a fast and exhilarating experience on the water, making up the perfect blend of power and maneuverability for an adrenaline-pumping adventure.
								</p>
								<Link className="button mb-lg-0" href="/fleet_speedboat3">Learn More</Link> 
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="row justify-content-between">
							<div className="col-7 col-md-4">
								<Catamaran2 className="img-fluid"/>
							</div>
							<div className="col-5 col-md-3 col-lg-4 number-stats-parent">
								<div className="number-stats">
									<dl>
										<dt>Max Speed</dt>
										<dd>200 <span>km/h</span></dd>
									</dl> 
								</div>
								<div className="number-stats">
									<dl>
										<dt>Passangers</dt>
										<dd>48</dd>
									</dl>
								</div>
							</div>
							<div className="col-lg-4 col-md-5 text d-none d-md-block">
								<p className="spacer-b-small fleet-txt"><b>Power Catamaran</b><br/>
									Fusing power and luxury seamlessly, our watercraft offers a comfortable and efficient mode of marine transportation, ensuring a delightful experience on the water.
								</p>
								<a className="button mb-lg-0" href="fleet_power_cat.html">Learn More</a>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="row justify-content-between">
							<div className="col-7 col-md-4">
								<SpeedCat2 className="img-fluid"/>
							</div>
							<div className="col-5 col-md-3 col-lg-4 number-stats-parent">
								<div className="number-stats">
									<dl>
										<dt>Max Speed</dt>
										<dd>250 <span>km/h</span></dd>
									</dl> 
								</div>
								<div className="number-stats">
									<dl>
										<dt>Passangers</dt>
										<dd>12</dd>
									</dl>
								</div>
							</div>
							<div className="col-lg-4 col-md-5 text d-none d-md-block">
								<p className="spacer-b-small fleet-txt"><b>Speed Catamaran</b><br/>
									Boasting a cutting-edge design and unwavering stability, our watercraft guarantees an exhilarating experience with high-speed capabilities and a remarkably smooth sailing performance. 
								</p>
								<Link className="button mb-lg-0" href="/fleet_speed_cat">Learn More</Link>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="row justify-content-between">
							<div className="col-7 col-md-4">
								<SpeedBoat2 className="img-fluid"/>
							</div>
							<div className="col-5 col-md-3 col-lg-4 number-stats-parent">
								<div className="number-stats">
									<dl>
										<dt>Max Speed</dt>
										<dd>250 <span>km/h</span></dd>
									</dl> 
								</div>
								<div className="number-stats">
									<dl>
										<dt>Passangers</dt>
										<dd>12</dd>
									</dl>
								</div>
							</div>

							<div className="col-lg-4 col-md-5 text d-none d-md-block">
								<p className="spacer-b-small fleet-txt"><b>Speed Boat 2 Engine</b><br/>
									Increased power for a dynamic and thrilling ride, ideal for island-hopping adventures
								</p>
								<Link className="button mb-lg-0" href="/fleet_speedboat2">Learn More</Link>
							</div>

						</div>
					</div>
					
					<div className="carousel-item">
						<div className="row justify-content-between">
							<div className="col-7 col-md-4">
								<SpeedCat className="img-fluid" />
							</div>
							<div className="col-5 col-md-3 col-lg-4 number-stats-parent">
								<div className="number-stats">
									<dl>
										<dt>Max Speed</dt>
										<dd>250 <span>km/h</span></dd>
									</dl> 
								</div>
								<div className="number-stats">
									<dl>
										<dt>Passangers</dt>
										<dd>12</dd>
									</dl>
								</div>
							</div>

							<div className="col-lg-4 col-md-5 text d-none d-md-block">
								<p className="spacer-b-small fleet-txt"><b>Speed Boat 1 Engine</b><br/>
									Amet consectetur. Duis in in enim eu eu metus. Pretium scelerisque a fusce sit aliquam nunc. Odio elit volutpat cras laoreet hendrerit mi sollicitudin. Venenatis pellentesque turpis nisi at ultrices a fermentum sit mi sollicitudin. Venenatis pellene turpis nisi at ultrices a fermentum sit 
								</p>
								<Link className="button mb-lg-0" href="/fleet_speedboat1">Learn More</Link>
							</div>

						</div>
					</div>

					<div className="carousel-item">
						<div className="row justify-content-between">
							<div className="col-7 col-md-4">
								<SailingCat className="img-fluid" />
							</div>
							<div className="col-5 col-md-3 col-lg-4 number-stats-parent">
								<div className="number-stats">
									<dl>
										<dt>Max Speed</dt>
										<dd>250 <span>km/h</span></dd>
									</dl> 
								</div>
								<div className="number-stats">
									<dl>
										<dt>Passangers</dt>
										<dd>12</dd>
									</dl>
								</div>
							</div>

							<div className="col-lg-4 col-md-5 text d-none d-md-block">
								<p className="spacer-b-small fleet-txt"><b>Sailing Catamaran</b><br/>
									Amet consectetur. Duis in in enim eu eu metus. Pretium scelerisque a fusce sit aliquam nunc. Odio elit volutpat cras laoreet hendrerit mi sollicitudin. Venenatis pellentesque turpis nisi at ultrices a fermentum sit mi sollicitudin. Venenatis pellene turpis nisi at ultrices a fermentum sit 
								</p>
								<Link className="button mb-lg-0" href="/fleet_sailing_cat">Learn More</Link>
							</div>

						</div>
					</div>
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
