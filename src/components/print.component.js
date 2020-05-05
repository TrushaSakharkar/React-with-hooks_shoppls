import React, {Component, useState } from 'react';
import { withRouter } from "react-router-dom";
const productlist=["Shirt","Mobile","Skirt","Watch"];
const colorlist=["Red","Blue","White","Black"];
const products=[
    {
        product: "Shirt",
        color:"Red",
        price:1000
    },
    {
        product: "Skirt",
        color:"Blue",
        price:2000
    },
    {
        product: "Watch",
        color:"Black",
        price:3000
    },
    {
        product: "Mobile",
        color:"White",
        price:10000
    },
    {
        product: "Shirt",
        color:"Blue",
        price:1500
    },
    {
        product: "Mobile",
        color:"Black",
        price:10000
    },
    {
        product: "Shirt",
        color:"White",
        price:1500
    }
];

const Print = props => {
    const [color, setColor] = useState(""); 
    const [product, setProduct] = useState("");
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(20000);
    const Callme = e => {
        console.log(e.target.value);
        console.log("shfbdsjb");
        if(e.target.value===null)
        {
            setMax(20000);
        }
        else
        {
            setMax(e.target.value);
        }
        
      }
      console.log("trusja");
        return (
            <div>
                 <div className="row h-100" style={{justifyContent:"center" ,alignItems:"center" }} >
                <div className="col-sm-12 mx-auto my-auto">
                    <h1>Set Filters</h1>
                <form style={{ display: "flex", left:"40%" }}>
                 <div className="form-group">
                                        <input className="form-control rounded-pill" list="productData" id="productlist" placeholder="Product" onChange={(e) => setProduct(e.target.value)} />
                                        <datalist id="productData">
                                            {productlist.map((mylist) => <option value={mylist} />)}
                                        </datalist>
                </div>
                {'  '}
                <div className="form-group">
                                        <input className="form-control rounded-pill" list="colorData" id="colorlist" placeholder="Color" onChange={(e) => Callme(e)} />
                                        <datalist id="colorData">
                                            {colorlist.map((mylist) => <option value={mylist} />)}
                                        </datalist>
                </div>
                {'  '}
                <div className="form-group">
                    <input className="form-control rounded-pill" type="number" placeholder="Min Price" onChange={(e) =>  setMin(e.target.value)} />
                </div>
                <div className="form-group">
                    <input className="form-control rounded-pill" type="number" placeholder="Max Price" onChange={(e) =>  setMax(e.target.value)} />
                </div>
                </form>
                </div>
                </div>
                <br/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Color</th>
                        </tr>
                    </thead>

                    <tbody>
                    { 
                        products.map((currentUserd, i) => {
                            
                                if(((product!=="" && currentUserd.product===product) || product==="") && 
                                ((color!=="" && currentUserd.color===color) || color==="") && 
                                currentUserd.price>=min &&  currentUserd.price<=max)
                                {
                                   // console.log("selected",currentUserd);
                                    return (
                                <tr>
                                    <td>{currentUserd.product}</td>
                                    <td>{currentUserd.price}</td>
                                    <td>{currentUserd.color}</td>
                                </tr>
                                    )
                                    
                                    }
                            
                        })
                    }
                    </tbody>
                </table>

            </div>
        )
    
}
export default withRouter(Print);
