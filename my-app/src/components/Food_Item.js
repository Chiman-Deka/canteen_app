
import React from "react";

const FoodItem = (props) => {
    // const context = useContext(eventContext);

    const { food } = props;
    console.log(props)
    return (
  
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <img className="card-img-top" src={food.img} alt="Card image cap"/>
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{food.name}</h5>
                    </div>
                    <p className="card-text">{food.description} </p>
                    <select className='mr-3 my-1 h-100 bg-success rounded'>
                        {
                            Array.from(Array(6), (e, i)=>(
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                ))
                        }
                    </select>
                    <select className='mr-3 my-1 h-100 bg-success rounded'>
                        {
                            Array.from(Array(10), (e, i)=>(
                                    <option key={i+1} value={i+1}>Table Number{i+1}</option>
                                ))
                        }
                    </select>
                    <div className="btn btn-outline-success">Order Now</div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;

// import React from 'react'

// export default function Food_Item() {
//   return (
//     <div className="card mt-3" style={{width: "18rem" ,maxHeight: "360px"}}>
//           <img src="https://source.unsplash.com/random/1300x700/?pizaa" className="card-img-top" alt="..."/>
//             <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <div className='container m-100'>
//                     <select className='m-2 h-100 bg-success rounded'>
//                         {
//                             Array.from(Array(6), (e, i)=>(
//                                     <option key={i+1} value={i+1}>{i+1}</option>
//                                 ))
//                         }
//                     </select>

//                     <select className='m-2 h-100 bg-success rounded'>
//                         <option>half</option>
//                         <option>full</option>
//                     </select>

//                     <div className='d-inline fs-5 h-100'>
//                         Total Price
//                     </div>

//                 </div>
//             </div>
//         </div>
    
//   )
// }
