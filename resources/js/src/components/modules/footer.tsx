import React, { Component } from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

class Footer extends Component {

    render() {
        return (
            <MDBFooter bgColor='light' className='fixed-bottom text-center text-lg-left'>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href='/'>
          App Human Resources
        </a>
      </div>
    </MDBFooter>
        )
    }

}

export default Footer;