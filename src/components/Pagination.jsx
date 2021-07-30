import React from 'react'
import { NavLink } from 'react-router-dom'

const Pagination = ({postsperpage, totalposts, paginate}) => {
    const  pageNumber=[]
    for( let i  =1; i <= Math.ceil(totalposts / postsperpage); i++){
        pageNumber.push(i)  
        
    }

   
    
    return (
        <nav>
            <ul className="pagination">
            {
    pageNumber.map(number=>(
                    <li key={number} className="page-item">
                        <NavLink onClick={()=>paginate(number)} to='#' className="page-link">{number}</NavLink>
                    </li>
                ))  
            }

            </ul> 
        </nav>
    )
}

export default Pagination
