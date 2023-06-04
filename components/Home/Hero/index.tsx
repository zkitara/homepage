import React from 'react'
import Image from 'next/image';

// import image1 from "@/styles/assets/img/online-education/icons/icon1.svg";
// import image2 from "@/styles/assets/img/online-education/icons/icon2.svg";
// import image3 from "@/styles/assets/img/online-education/icons/icon3.svg";
// import image4 from "@/styles/assets/img/online-education/icons/icon4.svg";
// import image5 from "@/styles/assets/img/online-education/icons/icon5.svg";
// import heroImg from "@/styles/assets/img/online-education/hero-img.svg";
import Link from "next/link";
export default function Hero() {
    return (
        <div className="cs-hero cs-style7 cs-accent_bg_2 cs-center cs-hobble">
            <div className="cs-hero_bg_frame">
                <div className="cs-hero_bg"></div>
            </div>
            <div className="container">
                <div className="cs-hero_text wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                    <h3 className="cs-hero_minititle text-uppercase">Solusi Digital</h3>
                    <h1 className="cs-hero_title">Solusi bisnis anda <br />di era digitalisasi <br /><b>Zona Kita</b></h1>
                    <div className="cs-hero_subtitle cs-primary_color">Kami menyediakan solusi digitalisasi perusahaan anda, <br/>efisiensi pekerjaan dan juga meningkatkan produktifitas </div>
                    <div className="cs-hero_btns">
                        <Link href="https://api.whatsapp.com/send?phone=6281938512146&text=Saya%20ingin%20menanyakan%20terkait%20pemesanan%20website%20disini" className="cs-btn cs-style1 cs-btn_lg cs-primary_font cs-medium cs-accent_bg cs-accent_border cs-white cs-white_hover cs-primary_bg_hover cs-primary_border_hover">Kontak Kami</Link>
                    </div>
                </div>
            </div>
            <div className="cs-hero_img cs-parallax wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
                <div className="cs-to_right"><Image src="/img/online-education/hero-img.svg" width="700" height="700" alt="Hero Image" /></div>
            </div>
            <div className="cs-animated_shape_wrap">
                <div className="cs-animated_shape"><Image src="/img/online-education/icons/icon1.svg" width="50" height="50" alt="Shape" /></div>
                <div className="cs-animated_shape"><Image src="/img/online-education/icons/icon2.svg" width="50" height="50" alt="Shape" /></div>
                <div className="cs-animated_shape"><Image src="/img/online-education/icons/icon3.svg" width="50" height="50" alt="Shape" /></div>
                <div className="cs-animated_shape"><Image src="/img/online-education/icons/icon4.svg" width="50" height="50" alt="Shape" /></div>
                <div className="cs-animated_shape"><Image src="/img/online-education/icons/icon5.svg" width="50" height="50" alt="Shape" /></div>
            </div>
        </div>
    )
}
