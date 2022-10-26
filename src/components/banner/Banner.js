import "@/components/banner/Banner.css";

const Banner = ({ img_banner, title, large }) => {

    return (
        <div className={`banner ${large && 'banner_large'}`} style={{
            background:
                `center/cover url(${img_banner})`
        }}>
            <div className="banner_dark_background">
                <h3 className="banner__title">{title}</h3>
            </div>
        </div>
    )
}

export default Banner;