import React from 'react'

export default function FleetTextSection(props:any) {
    const { img, numSpeed, numPassangers,  title,subtitle, description } = props;
  return (
    <>
        <section className="p-spacer-b-2 position-relative">
            <div className="container">
                <h2 className="text-center spacer-b">{title}</h2>
                <div className="">
                    <div className="row justify-content-between">
                        <div className="col-7 col-md-4">
                            <img className="img-fluid" src={img} alt=""/>
                        </div>
                        <div className="col-5 col-md-3 col-lg-4 number-stats-parent">
                            <div className="number-stats">
                                <dl>
                                    <dt>Max Speed</dt>
                                    <dd>{numSpeed} <span>km/h</span></dd>
                                </dl> 
                            </div>
                            <div className="number-stats">
                                <dl>
                                    <dt>Passangers</dt>
                                    <dd>{numPassangers}</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 text d-none d-md-block">
                            <p className="spacer-b-small text-ellipsis max-lg:line-clamp-5 lg:line-clamp-7"><b>{subtitle}</b><br/>
                                {description}
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
