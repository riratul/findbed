import React, { Component} from "react"
import axios from 'axios'
import { CountryTable } from '../components/CountryTable'
import { LanguageTable } from '../components/LanguageTable'

const APIS = {
  CountryAPI: 'https://restcountries.eu/rest/v2/all'
}

export default class Body extends Component {
 state = {
   countries: []
 }


 async getData(APIS) {
   this.setState((prevState, props) => ({
     countries: [],
   }))
   try{
     const response = await axios.get(APIS,
       {
         header:
           {'Content-Type': 'application/json'}
         })
       return response
   } catch(error) {
     console.log('Error:', error)
     return []
   }
 }

  componentDidMount() {
   var initPromise = this.getData(APIS.CountryAPI)
   let names
   initPromise
   .then(countries => (
     names = countries.data.map(country => country.name),
     this.setState((prevState, props) => ({
       countries: countries.data,
       names,
     }))
   ))
 }
 
 render(){

  return (
    <>

<section id="container" className="container">
			
			<div className="row">
				<div className="col-md-12">
					<h2>Available Beds</h2>

					<select className="sort-select">
						<option>Sort By</option>
						<option>Number of beds</option>
						<option>Availability</option>
					</select>
						
					<div  className="commodityWrap">
	
          <CountryTable countries={this.state.countries}/>
	
					</div>
	

				</div>
			</div>	
			

		</section>


    
    </>
  )
   }
}


