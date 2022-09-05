import React, { Component } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

class NavBar extends Component {

    render() {
        return (
          <MDBNavbar light bgColor='light'>
            <MDBContainer fluid className="justify-content-center" >
              <MDBNavbarBrand  href='/'>App Human Resources</MDBNavbarBrand>
            </MDBContainer>
          </MDBNavbar>
        )
    }

}

export default NavBar;