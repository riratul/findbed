import React from 'react';


const Search = () => {

  return (
    <>
      <section className="search">
		<div className="container">
			<div className="row">
				<div className="search-box">
					<h1>Search for a Bed</h1>
					<div className="flexRow">
						<select>
							<option selected>Find a centre by..</option>
							<option>Option A</option>
							<option>Option B</option>
							<option>Option C</option>
						</select>
	
						<select>
							<option selected>Select City</option>
							<option>Punjab</option>
							<option>Mumbai</option>
						</select>
	
						<select>
							<option selected>Cost</option>
							<option>Free</option>
							<option>Paid</option>
						</select>
	
						<button type="submit" className="btn btn-primary">Search</button>
	
	
					</div>
				</div>		   
			</div>
		</div>
	</section>
    </>
  )
}

export default Search
