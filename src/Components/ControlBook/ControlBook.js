// import React from "react";
// import { Button } from "react-bootstrap";

// const ControlBook = ({ book }) => {
//     const handleDelete = (id) =>{
//         console.log(id);
//         fetch(`http://localhost:5000/delete/${id}`,{
//             method:'DELETE'
//         })
//         .then(res=>res.json())
//         .then(result=>{
//             console.log('deleted');
//         })
//     }
   
//   return (
//     <>
      
//         <td>{book.name}</td>
//         <td>{book.price}</td>
//         <td><Button onClick={() => handleDelete(book._id)}>Delete</Button></td>
    
//     </>
//   );
// };

// export default ControlBook;
