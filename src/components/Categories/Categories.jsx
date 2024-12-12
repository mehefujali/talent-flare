import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
      const [categories , setCategories] = useState([])
      useEffect(()=>{
        fetch('http://localhost:8080/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
      },[])
      return (
            <div>
                  <div className=" flex gap-2 flex-wrap ">
                        {
                              categories.map(catagory =>  <Link  className=" btn btn-sm md:btn-md rounded-md btn-outline" key={catagory._id}>{catagory.name}</Link>)
                        }
                  </div>
            </div>
      );
};

export default Categories;