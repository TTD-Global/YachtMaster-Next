import React from 'react'

export default function ShowcaseSection() {
  return (
    <>
        <section className="showcase curve-cut-spacing-fixer-t curve-cut-spacing-fixer-b">
            <div className="container">
                <div className="showcase-grid">
                    <a href="service.html#service-card" className="showcase-box-big showcase-1">
                        <div className="showcase-1-background bg-show-food"></div>
                        <div className="showcase-1-text">
                            <div className="d-flex align-items-center mb-4"><div className="blue-icon bg-service me-4"></div><h4 className="mb-0">Included Services</h4></div>
                            <p>Experience the ultimate in convenience and comfort with our comprehensive services, ensuring every aspect of your adventure is taken care of.</p>
                            <button className="button">Learn More</button>
                        </div>
                    </a>
                    <a href="service.html#service-card" className="showcase-box showcase-2 d-flex flex-wrap flex-row">
                        <div className="align-items-start">
                            <div className="blue-icon bg-cutllery mb-4"></div>
                            <h4 className="align-items-end mb-4">Pick-up/Drop-off</h4>
                        </div>
                        <p className="mb-0">Convenient Pick-up and Drop-off Transfer from the Hotel</p>
                    </a>
                    <a href="service.html#service-card" className="showcase-box showcase-3 d-flex flex-wrap flex-row">
                        <div className="align-items-start">
                            <div className="blue-icon bg-snorkle mb-4"></div>
                            <h4 className="align-items-end mb-4">Snorkeling Gear</h4>
                        </div>
                        <p className="mb-0">Fresh unlimited Saisonal fruits Included</p>
                    </a>
                    <a href="service.html#service-card" className="showcase-box showcase-4 d-flex flex-wrap flex-row">
                        <div className="align-items-start">
                            <div className="blue-icon bg-ice mb-4"></div>
                            <h4 className="align-items-end mb-4">Delicious Meal</h4>
                        </div>
                        <p className="mb-0">Fresh unlimited Saisonal fruits Inkluded</p>
                    </a>
                    <a href="service.html#service-card" className="showcase-box showcase-5 d-flex flex-wrap flex-column align-content-start justify-content-between">
                        
                        <div>	
                            <h4 className="mb-4">See All</h4>
                            
                            <p className="mb-0">Click here to see all of our services</p>
                        </div>
                        <div className="align-items-end align-self-end d-flex justify-content-end w-100-percent">
                            <div className="blue-icon bg-poins"></div>
                        </div>
                    </a>
                    
                </div>
            </div>
        </section>
    </>
  )
}
