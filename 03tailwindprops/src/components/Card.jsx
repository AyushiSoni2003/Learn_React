import React from 'react'

// destructuring props // instead of props.dish and props.price
// setting default value for price prop
function Card({ dish, price = 50 }) {
    console.log('Card props:', dish);
    return (
        <div className="flex flex-col items-center p-7 rounded-2xl">
      
        <div>
          <img className="size-48 shadow-xl rounded-md" alt=""
            src="https://images.pexels.com/photos/31735711/pexels-photo-31735711.jpeg" />
        </div>
  
          <div className="flex">

                <span className="text-2xl font-medium">{dish}</span>
                <span className="text-2xl font-medium"> - {price}</span>
              
           </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default Card
