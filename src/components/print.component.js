import React, {Component} from 'react';

export default class Print extends Component {
    
    constructor(props) {
        super(props);
        this.state = {products:[
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
        ],
        color:"",
        product:"",
        min:0,
        max:20000
    }
        this.onCancel = this.onCancel.bind(this);
    }
    productlist=["Shirt","Mobile","Skirt","Watch"]
    colorlist=["Red","Blue","White","Black"]

 
    onCancel(e) {
        console.log("hjdsvbfhewbfvcewhjbsf");
    }
   
    render() {
        return (
            <div>
                 <div className="row h-100" style={{justifyContent:"center" ,alignItems:"center" }} >
                <div className="col-sm-12 mx-auto my-auto">
                    <h1>Set Filters</h1>
                <form style={{ display: "flex", left:"40%" }}>
                 <div className="form-group">
                                        <input className="form-control rounded-pill" list="productData" id="productlist" placeholder="Product" onChange={(e) => this.setState({ product: e.target.value })} />
                                        <datalist id="productData">
                                            {this.productlist.map((mylist) => <option value={mylist} />)}
                                        </datalist>
                </div>
                {'  '}
                <div className="form-group">
                                        <input className="form-control rounded-pill" list="colorData" id="colorlist" placeholder="Color" onChange={(e) => this.setState({ color: e.target.value })} />
                                        <datalist id="colorData">
                                            {this.colorlist.map((mylist) => <option value={mylist} />)}
                                        </datalist>
                </div>
                {'  '}
                <div className="form-group">
                    <input className="form-control rounded-pill" type="number" placeholder="Min Price" onChange={(e) => this.setState({ min: e.target.value })} />
                </div>
                <div className="form-group">
                    <input className="form-control rounded-pill" type="number" placeholder="Max Price" onChange={(e) => this.setState({ max: e.target.value })} />
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
                        this.state.products.map((currentUserd, i) => {
                            
                              
                                if(((this.state.product!==null && currentUserd.product===this.state.product) || this.state.product==="") && 
                                ((this.state.color!==null && currentUserd.color===this.state.color) || this.state.color==="") && 
                                currentUserd.price>=this.state.min &&  currentUserd.price<=this.state.max)
                                {
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
}