import React from "react";
import "./index.scss";
export default function FooterComponent() {
  const img = "/img/icons-footer/";
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 footer__content1">
            <p className="title__footer">TIX</p>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  <a
                    className="footer__cursor"
                    target="blank"
                    href="https://tix.vn/faq"
                  >
                    FAQ
                  </a>
                </p>
                <p className="footer__cursor">
                  <a
                    className="footer__cursor"
                    target="blank"
                    href="https://tix.vn/brand-guideline/"
                  >
                    Brand Guidelines
                  </a>
                </p>
              </div>
              <div className="col-sm-6">
                <p className="footer__cursor">
                  <a
                    className="footer__cursor"
                    target="blank"
                    href="https://tix.vn/thoa-thuan-su-dung"
                  >
                    Thỏa thuận sử dụng
                  </a>
                </p>
                <p className="footer__cursor">
                  <a
                    className="footer__cursor"
                    target="blank"
                    href="https://tix.vn/chinh-sach-bao-mat"
                  >
                    Chính sách bảo mật
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 footer__content2">
            <p className="title__footer">ĐỐI TÁC</p>
            <div className="row">
              <div className="col-sm-12 col-xs-12 lineFooter">
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    href="https://www.cgv.vn/"
                  >
                    <img
                      src={`${img}cgv.png`}
                      height={30}
                      width={30}
                      alt=""
                      style={{ backgroundColor: "white", borderRadius: "100%" }}
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    href="http://bhdstar.vn/"
                  >
                    <img src={`${img}bhd.png`} height={30} width={30} alt="" />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    href="https://www.galaxycine.vn/"
                  >
                    <img
                      src={`${img}galaxycine.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    href="http://cinestar.com.vn/"
                  >
                    <img
                      src={`${img}cinestar.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="http://lottecinemavn.com"
                  >
                    <img
                      src={`${img}lotte.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
              </div>
              <div className="col-sm-12 col-xs-12 lineFooter">
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://www.megagscinemas.vn/"
                  >
                    <img
                      src={`${img}megags.png`}
                      height={30}
                      width={30}
                      alt=""
                      style={{ backgroundColor: "white", borderRadius: "100%" }}
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://www.betacinemas.vn/"
                  >
                    <img src={`${img}bt.jpg`} height={30} width={30} alt="" />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="http://ddcinema.vn/"
                  >
                    <img
                      src={`${img}dongdacinema.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://touchcinema.com/"
                  >
                    <img
                      src={`${img}TOUCH.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://cinemaxvn.com/"
                  >
                    <img src={`${img}cnx.jpg`} height={30} width={30} alt="" />
                  </a>
                </span>
              </div>
              <div className="col-sm-12 col-xs-12 lineFooter">
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://starlight.vn/"
                  >
                    <img
                      src={`${img}STARLIGHT.png`}
                      height={30}
                      width={30}
                      alt=""
                      style={{ backgroundColor: "white", borderRadius: "100%" }}
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://www.dcine.vn/"
                  >
                    <img
                      src={`${img}dcine.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://zalopay.vn/"
                  >
                    <img
                      src={`${img}zalopay_icon.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://www.payoo.vn/"
                  >
                    <img
                      src={`${img}payoo.jpg`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://portal.vietcombank.com.vn/"
                  >
                    <img src={`${img}VCB.png`} height={30} width={30} alt="" />
                  </a>
                </span>
              </div>
              <div className="col-sm-12 col-xs-12 lineFooter">
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://www.agribank.com.vn/"
                  >
                    <img
                      src={`${img}AGRIBANK.png`}
                      height={30}
                      width={30}
                      alt=""
                      style={{ backgroundColor: "white", borderRadius: "100%" }}
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://www.vietinbank.vn/web/home/vn/index.html"
                  >
                    <img
                      src={`${img}VIETTINBANK.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://www.indovinabank.com.vn/"
                  >
                    <img src={`${img}IVB.png`} height={30} width={30} alt="" />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://webv3.123go.vn/"
                  >
                    <img
                      src={`${img}123go.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://laban.vn/"
                  >
                    <img
                      src={`${img}laban.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-4 footer__content3">
            <div className="row">
              <div className="col-sm-6 text-center">
                {" "}
                <p className="title__footer">MOBILE APP</p>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                  >
                    <img
                      src={`${img}apple-logo.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  >
                    <img
                      src={`${img}android-logo.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
              </div>
              <div className="col-sm-6 text-center">
                {" "}
                <p className="title__footer">SOCIAL</p>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://www.facebook.com/tix.vn/"
                  >
                    <img
                      src={`${img}facebook-logo.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a
                    className="footer__cursor"
                    target="blank"
                    spx
                    href="https://zalo.me/tixdatve"
                  >
                    <img
                      src={`${img}zalo-logo.png`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="hrFooter" />
        <div className="row footer2">
          <div className="col-xs-12 col-sm-1 zionLogo">
            <img src={`${img}zion-logo.jpg`} alt="" />
          </div>
          <div className="col-xs-12 col-sm-9 infoFooter">
            <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
            <br />
            <span>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </span>
            <br />
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              <br />
              đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
              ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
              Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí
              Minh cấp.
            </span>
            <br />
            <span>
              Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
              <br />
              Email:{" "}
              <a href="mailto:support@tix.vn" style={{ color: "#FB4226" }}>
                support@tix.vn
              </a>
            </span>
          </div>
          <div className="col-xs-12 col-sm-2 zionLogo2">
            <span>
              <a
                className="footer__cursor"
                target="blank"
                spx
                href="http://online.gov.vn/Home/WebDetails/62782?AspxAutoDetectCookieSupport=1"
              >
                <img src={`${img}daThongBaoBoCongThuong.png`} alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
