import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { setCategory } from "../store/actions/categoryAction";

const Category = () => {
  const categories = useSelector(state => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory())
  }, [dispatch])
  
  return(
    <div>
      <h1>Categories</h1>
      <ol>
        {
            categories.map((category, k) =>
                <li key={k}>
                    <p>{category.name}</p>
                </li>
            )
        }
      </ol>
    </div>
  )
}

export default Category;