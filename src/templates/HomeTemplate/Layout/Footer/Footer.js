import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import arrPartner from './arrPartner.json';


export default function Footer() {


    const renderParter = () => {
        
    }

    return (
       <div className="footer_hometemplate">
           <Container>
                <Row className="footer_top">
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <div className="footer_section">
                        <h4 className ="footer_title">
                            TIX
                        </h4>
                        <Row>
                            <Col sm={6}>
                                <div className="footer_rule">
                                    <p>
                                        <a>FAQ</a> 
                                    </p>
                                    <p>
                                        <a>Brand Guidelines</a> 
                                    </p>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="footer_rule">
                                    <p>
                                        <a>Chính sách bảo mật</a> 
                                    </p>
                                    <p>
                                        <a>Thỏa thuận sử dụng</a> 
                                    </p>
                                    
                                </div>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="footer_section footer_section_doitac">
                            <h4 className="footer_title">ĐỐI TÁC</h4>
                            <div className="partner_list d-flex">
                            {
                               arrPartner.map((partner, index) => {
                                   return  <div className="m-1 p-1 partner_item">
                                       <a href="http://" target="_blank" style ={{}}>
                                            <img src = {partner.logo} alt="partner"/>
                                        </a>
                                   </div>

                               })
                            }
 
                            </div>
                          
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className="footer_icon">
                        <Row>
                            <Col sm ={6}>
                                <h4 className="footer_title">Mobile APP</h4>
                                <div className="footer_icon d-flex">
                                    <img src="https://tix.vn/app/assets/img/icons/apple-logo.png" alt="apple-icon"/>
                                    <img src="https://tix.vn/app/assets/img/icons/android-logo.png" alt="androi-icon"/>
                                </div>
                            </Col>
                            <Col sm ={6}>
                                <h4 className="footer_title">sOCIAL</h4>
                                <div className="footer_icon d-flex">
                                    <img src="https://tix.vn/app/assets/img/icons/facebook-logo.png" alt="facebook-icon"/>
                                    <img src="https://tix.vn/app/assets/img/icons/android-logo.png" alt="zalo-icon"/>
                                </div>
                            </Col>
                  
                        </Row>
                    </Col>
                </Row>

            </Container>
       </div>
    )
}
