import React from 'react'
import web from '../Images/img1.jpg'
const Result = (props) => {
    let Boxes = props.movies.map((item,id)=>{
        return <Box key={id} image={item.poster_path} title={item.title} rating={item.vote_average}/>
    })
  return (
    <div className='w-full grid md:grid-col-4 gap-3'>
      {Boxes}
    </div>
  )
}

export default Result


const Box = (props)=>{
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return(
        <div className="shadow min-h-[200px] border border-black mt-3 pb-1">
            <img src={ IMGPATH + props.image} alt="" className='w-full'/>
            <div className='flex justify-between px-2 items-center'>
                <span className='text-2x1'> {props.title} </span>
                <span className='text-x1 text-yellow-500 font-bold'> {props.rating} </span>
            </div>
        </div>
    )
}