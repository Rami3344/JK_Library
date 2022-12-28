import React from 'react'
function StarsRating({rating}) {
    function stars(x){
        var star =[];
        for(let i = 0 ; i < 5 ;i++){
            if(i<=x-1){
                star.push(<span>🟊</span>);
            }
        }
        return star
    }
    return <div>{stars(rating)}</div>
}

export default StarsRating