import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import phone from '../../../assets/img/mobile.png';

// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/autoplay/autoplay.scss'; // Pagination module

import { Autoplay } from 'swiper';
import arrImgSlidePhone from './arrImgSlidePhone.json';

export default function AppTix() {
  return (
    <div id="app_tix" className="app_tix">
   
      <Container maxWidth="lg">
        <Grid container spacing={2} direction="row"
         alignItems="center">
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <div className="app_tix_left">
              <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
              <p>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <div>
                <button className="btn_download">
                  <a
                  href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                  target="_blank"
                  >App miễn phí - Tải về ngay!</a>
                </button>
              </div>
              <p className="mt-3">
                TIX có hai phiên bản
                <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                target="_blank">
                  iOS
                </a>
                &amp;
                <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                target="_blank">
                  Android
                </a>
              </p>
            </div>
          </Grid>

          <Grid item sm={12} xs={12} md={6} lg={6}>
            <div className="app_tix_right">
                <div className="phone">
                    <img src={phone} className="w-100"/>
                    <div className="phone_slide">
                    <Swiper
                    className="text-info"
                        spaceBetween={50}
                        slidesPerView={1}
                        modules={[ Autoplay ]}
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                          }}
                        
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            arrImgSlidePhone.map((item, index) => {
                                return <>
                                    <SwiperSlide>
                                        <img src={item.imgSlide} className="w-100 img_phone_slide"/>
                                    </SwiperSlide>

                                </>
                            })
                        }
                    </Swiper>
                </div>
                </div>

                
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
