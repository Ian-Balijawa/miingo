import React from 'react'
import { Carousel } from 'react-responsive-carousel'


const data = [
    {
        id:1,
        Image:"https://res.cloudinary.com/itgenius/image/upload/v1668011068/pexels-mahdi-chaghari-12463279_yt9vgo.jpg",
    },
    {
        id:2,
        Image:"https://res.cloudinary.com/itgenius/image/upload/v1668324978/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI_tiveqj.png",
    },
    {
        id:3,
        Image:"https://res.cloudinary.com/itgenius/image/upload/v1668011062/pexels-martin-boh%C3%A1%C4%8D-10288457_hmd0gl.jpg",
    },
    {
        id:4,
        Image:"https://res.cloudinary.com/itgenius/image/upload/v1668011068/pexels-mahdi-chaghari-12463279_yt9vgo.jpg",
    },
    {
        id:5,
        Image:"https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
    }
]

const StatusPopOut = ({onChange , onClickItem , onClickThumb}) => {
  return (
    <div>
          <Carousel showArrows={true} autoPlay interval="2000" transitionTime="1000" showThumbs={false} swipeable  useKeyboardArrows onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            {data.map((dta)=>(
                  <div style={{height:"70vh"}} key={dta.id}>
                <img style={{marginTop:10}} src={dta.Image} alt="status"/>
                
            </div>
            ))}                              
            </Carousel>
    </div>
  )
}

export default StatusPopOut