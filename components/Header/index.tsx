import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header className="cs-site_header cs-style1 cs-type4 cs-sticky-header cs-primary_font">
                <div className="cs-main_header">
                <div className="container">
                    <div className="cs-main_header_in">
                    <div className="cs-main_header_left">
                        <div className="cs-nav">
                            <ul className="cs-nav_list">
                                <li> <Link href="/">Home</Link></li>
                                {/* <li> <Link href="/about">About</Link></li> */}
                                {/* <li> <Link href="/portofolio">Portofilo</Link></li> */}
                                <li> <Link href="#produk">Produk</Link></li>
                                <li> <Link href="#klien">Klien</Link></li>
                                <li> <Link href="#info">Info</Link></li>
                                {/* <li className="menu-item-has-children"><a href="courses-list-2.html">Produk</a>
                                    <ul>
                                        <li> <Link href="/web-profile">Web Profile</Link></li>
                                        <li> <Link href="/web-apps">Web Apps</Link></li>
                                        <li> <Link href="/iot">IOT</Link></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="cs-main_header_center">
                        <a className="cs-site_branding" href="/"><img src="{logo}" alt="" /></a>
                    </div>
                    <div className="cs-main_header_right">
                        <div className="cs-toolbox">
                        <a href="https://api.whatsapp.com/send?phone=6281938512146&text=Saya%20ingin%20menanyakan%20terkait%20pemesanan%20website%20disini" className="cs-toolbox_btn cs-accent_bg cs-white_hover cs-accent_bg_2_hover"><span className="cs-btn_text">Hubungi Kami</span></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}
