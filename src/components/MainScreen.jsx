import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import BarChart from './BarChart'

const MainScreen = (props) => {
    const [searchData, setSearchData] = useState({brand: '', model: ''})
    const mobiles = useSelector(state => state.products.items)
    const [searchResult, setSearchResult] = useState([])
    const [singleMobile, setSingleMobile] = useState(null);

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value
        setSearchData((prev)=>({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(mobiles.length>0){
            const result = mobiles.filter(mobile=> mobile.model === searchData.model && mobile.brand === searchData.brand)
            setSearchResult(result)
        }
    }

    const mobileInfoHandler = (mobile)=>{
        setSingleMobile(mobile);
        console.log(singleMobile);
    }
    return(
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-8" style={{borderRight: '1px solid #212121'}}>
                        <Link to="/add" className="btn add-new m-3">Add New Mobile</Link>
                        <form className="search-form" onSubmit={handleSubmit}>
                            <div className="search-group">
                                <div className="form-group mb-3">
                                    <label htmlFor="model" className="col-form-label">Model</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="model" 
                                        placeholder="Samsung S6"
                                        value={searchData.model}
                                        name="model"
                                        onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="brand" className="col-form-label">brand</label>
                                    <select 
                                        className="form-select form-control" 
                                        id="brand"
                                        value={searchData.brand}
                                        name="brand"
                                        onChange={handleChange}
                                        >
                                        <option value="">Select Brand</option>
                                        <option value="sony">Sony</option>
                                        <option value="samsung">Samsung</option>
                                        <option value="apple">Apple</option>
                                        <option value="nokia">Nokia</option>
                                        <option value="lg">LG</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn submit">Search</button>
                            </div>
                        </form>
                        <table className="table table-striped table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th><i className="fas fa-caret-down"></i> Brand</th>   
                                    <th><i className="fas fa-caret-down"></i> Model</th>
                                    <th><i className="fas fa-caret-down"></i> Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {searchResult.length > 0 ? (searchResult.map((mobile, index) => (
                                    <tr key={index} onClick={() => mobileInfoHandler(mobile)}>
                                        <td>{mobile.brand}</td>
                                        <td>{mobile.model}</td>
                                        <td>{mobile.year}</td>
                                    </tr>
                                ))) : (mobiles.map((mobile, index) => (
                                    <tr key={index} onClick={() => mobileInfoHandler(mobile)}>
                                        <td>{mobile.brand}</td>
                                        <td>{mobile.model}</td>
                                        <td>{mobile.year}</td>
                                    </tr>
                                    )))}
                            </tbody>
                        </table>
                        <div className="selected-mobl">
                            {singleMobile? (
                                <div className="selected-data">
                                    <h5>Selected Mobile</h5>
                                    <ul className="list-unstyled">
                                        <li><span>brand:</span> {singleMobile.brand}</li>
                                        <li><span>model:</span> {singleMobile.model}</li>
                                        <li><span>Manufactor Year:</span> {singleMobile.year}</li>
                                        <li><span>color:</span> {singleMobile.color}</li>
                                        <li><span>screen:</span> {singleMobile.screen}</li>
                                    </ul>
                                </div>) : <h5 className="text-center">Select Mobile to more info</h5> }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainScreen;