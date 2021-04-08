import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const { register, handleSubmit, errors } = useForm(); 
  const [imageUrl,setImageUrl] = useState(null);

  const onSubmit = (data) => {
      const bookData = {
          name : data.name,
          price: data.price,
          quantity: data.quantity,
          imageUrl: imageUrl
      };
    const url = `https://dry-stream-47875.herokuapp.com/addBook`;
    console.log(bookData);
    fetch(url,{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(bookData)
    })
    .then(res=>console.log('server side response',res))
  }; 
  const handleImageUpload = (event) =>{
      console.log(event.target.files[0]);
      const imageData = new FormData();
      imageData.set('key','eff508700a1e88f6d620259e5536e133');
      imageData.append('image',event.target.files[0]);

      axios.post('https://api.imgbb.com/1/upload', 
      imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
        console.log('image url',response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
        <div className="mx-5 mt-5">
      <h3>Add new books here.</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" placeholder="Enter Book Name" ref={register} />
        <br/>
        <input name="price" placeholder="Enter book price" ref={register({ required: true })} />
        <br/>
        <input name="quantity" placeholder="Enter quantity" ref={register({ required: true })} />
        <br/>
        <input name="exampleRequired"  type="file" onChange={handleImageUpload} ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>
        <input className="btn btn-primary mt-2" type="submit" />
      </form>
      </div>
    </div>
  );
};

export default AddBook;
