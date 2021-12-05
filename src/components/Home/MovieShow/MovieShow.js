import React from "react";
import { Tabs } from "antd";
import Slider from "react-slick";
import MovieItem from './MovieItem';

const { TabPane } = Tabs;
const items = {
    showing: "Đang chiếu",
    coming: "Sắp chiếu",
  };

const arrType = Object.values(items);     //['Đang chiếu', 'Sắp chiếu']
// console.log("arrType", arrType);


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
      ><i className="fas fa-chevron-right"></i></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",}}
        onClick={onClick}
      ><i className="fas fa-chevron-left"></i></div>
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

    const {arrMovie} = props;
    console.log("arrMovie in MovieShow", arrMovie);


    const renderMovieShow = (tabType) => {
      let arrMovieRender;
        if(tabType === "Đang chiếu") {
           arrMovieRender = arrMovie?.filter(phim => phim.dangChieu === true);
            console.log("arrMovie đang chiếu", arrMovieRender);
        } else {
          arrMovieRender = arrMovie?.filter(phim => phim.sapChieu === true);
            console.log("arrMovie sắp chiếu", arrMovieRender);

        }

        return (
            <Slider {...settings}>
               {
                   arrMovieRender?.map((phim, index) => {
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
                  return (
                    <TabPane tab={tabMovieType(tabType)} key={index}>
                        
                        {
                            renderMovieShow(tabType)
                        }
                    </TabPane>
              )
              })
          }
       
      </Tabs>

    </div>
  );
}
