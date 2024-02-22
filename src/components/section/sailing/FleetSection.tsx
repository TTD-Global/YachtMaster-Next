import React from 'react'

export default function FleetSection() {
  return (
    <>
        <section className="p-spacer-2 position-relative">
            <div className="container">
                <h2 className="text-center spacer-b">Speed Boat</h2>
                        <div className="">
                            <div className="row justify-content-between">
                                <div className="col-7 col-md-4">
                                    <img className="img-fluid" src="/sys_img/img/fleet/speed_boat.svg" alt=""/>
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
                                    <div className="line mb-lg-0"></div>
                                </div>

                            </div>
                        </div>


            </div>
            
        </section>
    </>
  )
}
