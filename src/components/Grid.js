import React from 'react'

const Grid = ({stateList, getStateListItems}) => {
    let i=-1;
    return (
        <div className="state-list">
            {stateList.map((item)=>{
                i++;
                return <div className="state-list-items" id={i} onClick={(e)=>getStateListItems(e)}>{item}</div>
            })}
        </div>
    )
}

export default Grid
