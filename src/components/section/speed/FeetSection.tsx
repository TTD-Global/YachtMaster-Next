import React from 'react'

export default function FeetSection() {
  return (
    <>
    <section className="p-spacer-2 position-relative">
		<div className="container">
			<h2 className="text-center spacer-b">Speed Catamaran</h2>
            <div className="">
                <div className="row justify-content-between">
                    <div className="col-7 col-md-4">
                        <img className="img-fluid" src="/sys_img/img/fleet/speed_cat_2.svg" alt=""/>
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
                                <dd>24</dd>
                            </dl>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-5 text d-none d-md-block">
                        <p className="spacer-b-small"><b>Speed Catamaran</b><br/>
                            Embark on a thrilling journey with our high-performance speed catamaran, the epitome of speed and luxury in the world of maritime adventures.
                        </p>
                        <div className="line mb-lg-0"></div>
                    </div>

                </div>
            </div>
		</div>
	</section>
    </>
  )
}
