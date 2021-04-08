import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Deals = () => {
    const [deals,setDeals] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:5000/deals?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setDeals(data))
    },[])

    return (
        <div>
            <div className="container my-5">
            <h3>You have {deals.length} purchases.</h3>
            {
                deals.map(deal=> <li><strong>Book Name:</strong> {deal.name},Price: {deal.price},Date: {deal.date}.</li>)
            }
            </div>
        </div>
    );
};

export default Deals;