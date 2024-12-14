import PropTypes from "prop-types";
import { useEffect, useState } from "react";


const Categories = ({handleFilterByCategory}) => {
      const [categories , setCategories] = useState([])
      useEffect(()=>{
        fetch(`${import.meta.env.VITE_URL}/categories`)
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
      },[])
      return (
            <div>
                  <div className=" flex gap-2 flex-wrap ">
                        {
                              categories.map(catagory =>  <button onClick={()=>handleFilterByCategory(catagory.name)}  className=" btn btn-sm md:btn-md rounded-md btn-outline" key={catagory._id}>{catagory.name}</button>)
                        }
                  </div>
            </div>
      );
};
Categories.propTypes ={
      handleFilterByCategory: PropTypes.func.isRequired
}
export default Categories;