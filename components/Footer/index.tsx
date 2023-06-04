import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="cs-footer cs-style1 rounded-0 cs-accent_5_bg">
        <div className="container">
        <div className="cs-height_115 cs-height_lg_75"></div>
        <div className="row">
            <div className="col-lg-3">
            <div className="cs-footer_item">
                <h2 className="cs-widget_title">Zona Kita</h2>
                <div className="cs-footer_newsletter cs-style1">
                <div className="cs-footer_newsletter_text">Kami melayani dengan sepenuh hati, untuk bersama memajukan Indonesia dengan teknologi.</div>
                <div className="cs-height_30 cs-height_lg_30"></div>
                </div>
            </div>
            </div>
            <div className="col-lg-8 offset-lg-1">
            <div className="row">
                <div className="col-md-6">
                <div className="cs-footer_item widget_nav_menu">
                    <h2 className="cs-widget_title">Layanan</h2>
                    <ul className="menu">
                    <li>Web Profile</li>
                    <li>Web Aplikasi</li>
                    <li>IOT</li>
                    <li>Pengadaan Barang</li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6">
                <div className="cs-footer_item cs-address_widgert">
                    <h2 className="cs-widget_title">Follow us</h2>
                    <ul>
                    <li>zkitara.sby@gmail.com</li>
                    <li>+62 819-3851-2146</li>
                    </ul>
                </div>
                <div className="cs-footer_item cs-social_widgert">
                    <div className="cs-social_btns cs-style1">
                    <a href="#" className="cs-accent_bg_hover cs-white_hover cs-white_bg cs-ternary_color"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="cs-accent_bg_hover cs-white_hover cs-white_bg cs-ternary_color"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="cs-accent_bg_hover cs-white_hover cs-white_bg cs-ternary_color"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="cs-accent_bg_hover cs-white_hover cs-white_bg cs-ternary_color"><i className="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="cs-height_90 cs-height_lg_50"></div>
        </div>
        <div className="cs-copyright text-center cs-accent_4_bg">
        <div className="container">Copyright © 2022. All rights reserved by Multim</div>
        </div>
    </footer>
    </>
  )
}
