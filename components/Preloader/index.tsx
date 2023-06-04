import Image from "next/image";
export default function Preloader() {
  return (
    <div className="cs-preloader cs-accent_color cs-white_bg">
        <div className="cs-preloader_bg cs-center cs-accent_8_bg_2">
            <div className="cs-preloader_in cs-accent_15_border">
                <Image src="/img/online-education/logo.svg" width="100" height="100" alt="Logo" />
            </div>
        </div>
    </div>
  )
}
