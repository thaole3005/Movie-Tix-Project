import React from "react";
import { Tabs } from "antd";
import Slider from "react-slick";
import MovieItem from './MovieItem';

const { TabPane } = Tabs;
const items = {
    showing: "Đang chiếu",
    coming: "Sắp chiếu",
  };

const arrType = Object.values(items);
console.log("arrType", arrType);


const tabMovieType = (tabType) => {
    return <h3>{tabType}</h3>
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      ><i class="fas fa-chevron-right"></i></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",}}
        onClick={onClick}
      ><i class="fas fa-chevron-left"></i></div>
    );
  }
  
  


const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    speed: 500,
    // autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };




export default function MovieShow(props) {

    let {arrMovie} = props;
    // console.log("arrMovie", arrMovie);


    const renderMovieShow = (tabType) => {
        if(tabType === "Đang chiếu") {
            arrMovie = arrMovie?.filter(phim => phim.dangChieu === true);
            console.log("arrMovie đang chiếu", arrMovie);
        } else {
            arrMovie = arrMovie?.filter(phim => phim.sapChieu === true);
            console.log("arrMovie sắp chiếu", arrMovie);

        }
        return (
            <Slider {...settings}>
               {
                   arrMovie.map((phim, index) => {
                       return (
                           <div key={index} className="px-3 mt-3">
                               <MovieItem detailMovieItem ={phim}/>
                           </div>
                       )
                   })
               }


            </Slider>
        )
    }

  return (
    <div className="mt-5 container">
      <Tabs defaultActiveKey="0" centered>
          {
              arrType.map((tabType, index) => {      //tabType: đang chiếu, sắp chiếu
                  return <>
                    <TabPane tab={tabMovieType(tabType)} key={index}>
                        
                        {
                            renderMovieShow(tabType)
                        }
                    </TabPane>
                  </>
              })
          }
       
      </Tabs>

    </div>
  );
}
