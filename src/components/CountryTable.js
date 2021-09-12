import React from 'react'

export const CountryTable = ({countries}) => {

  return (
    <>
      {countries.length === 0
        && (
          <div className="loading">
            {'Countries are loading...'}
          </div>)}
      {countries.length >= 1
        && (
      <>
        {countries.map((country) => {
            const {numericCode,name,area,population,region} =  country

            return (
              <div key={numericCode} className="itemBox row">
	
							<div className="col-md-4">
								 
							</div>
							<div className="col-md-8">

								<h3>{name}</h3>
							
								<p><strong>City/Locality:</strong> <span className="orange-text-color">{region}</span></p>
		
								<p><strong>Total Capacity:</strong> <span className="orange-text-color">{Math.round(area * 0.3861)}</span></p>
		
								<p><strong>Mobile Number:</strong> <span className="orange-text-color">22700007</span></p>
		
								<p><strong>Pincode:</strong> <span className="orange-text-color">400001</span></p>
		
								<p><strong>Address:</strong> 17, Shri S.R. Marg, Ballard Estate, Fort, Mumbai, Maharashtra</p>
								
								<a  data-toggle="collapse" href="#details-box1" role="button" aria-expanded="false" aria-controls="details-box1" className="btn btn-primary">More Details</a>						
								
								<div className="collapse">
									<div className="card card-body">
									  <h4>Specialities</h4>
									  <p>Dental , Dermatology, Emergency medicine, Obstetrics & gynaecology, Paedriatrics & child care, General medicine, Radiology, General surgery, Venereology/venereal diseases/STDs, Orthopedics, Ear nose throat (ENT), Leprosy clinic, HIV/AIDS clinic</p>

									  <h4>Health Facilites</h4>
									  <p>Only OPD, Both IPD and OPD, Only lab, Diagnostic</p>
									  
									  <h4>Email</h4>
									  <p>any@any.com</p>

									  <h4>Phone</h4>
									  <p>0000000000</p>

									  <h4>Ownership</h4>
									  <p>Public</p>


									</div>
								  </div>

							</div>


	
						</div>

                  
            )
          })}        
      </>)}
    </>
  )
}

