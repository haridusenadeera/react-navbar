import React from 'react';


export default class NavbarSearch extends React.Component {
	
	render() {
		return (
                <form className="navbar-form navbar-right" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
        )
	}
}