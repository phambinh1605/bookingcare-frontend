import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">Truyền thông nói về Booking Care</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/FyDQljKtWnI?start=3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              BookingCare là nền tảng đặt lịch khám bệnh trực tuyến, giúp bệnh nhân dễ dàng tìm kiếm bác sĩ, bệnh viện, phòng khám phù hợp và đặt lịch hẹn nhanh chóng. Hệ thống hỗ trợ tra cứu thông
              tin bác sĩ, chuyên khoa, dịch vụ y tế, đồng thời quản lý lịch hẹn hiệu quả cho cả bệnh nhân và cơ sở y tế.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
