import React, { useState , useEffect} from 'react';                        
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import moment from 'moment';

const HomeScreenView = () => {


    const [data, setData] = useState([]);

    const fetchData = async () => {
    const url = "http://127.0.0.1:8000/api/attendance";
    const response = await axios.get(url);
    setData(response.data);
     };
    
     //fetch the api here.
    useEffect(() => {
    fetchData();
    }, [])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Check In</td>
                    <td>Check Out</td>
                    <td>Total Working Hours</td>
                </tr>
                </thead>
                <tbody>
            {data.map((item)=>{
               
                return(
                        <tr>
                            <th>
                                {
                                    item['name']
                                }
                            </th>
                            <th>
                                {
                                    item['checkin'] === null ? 'N/A' : item['checkin'] 
                                }
                            </th>
                            <th>
                                {
                                    item['checkout']  === null ? 'N/A' : item['checkout']
                                }
                            </th>
                            <th>
                                {
                                    item['checkout'] === null || item['checkin']===null ? "N/A" : Math.round(moment.duration(moment(item['checkout'], "hh:mm:ss").diff(moment(item['checkin'], "hh:mm:ss"))).asHours())
                                }

                            </th>
                        </tr>
                )
            })}
                </tbody>
             </Table>
        </div>
    )
}

export default HomeScreenView;