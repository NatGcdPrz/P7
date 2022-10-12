import "./Stars.css"
import GrayStar from "../../assets/img/white-star.png"
import OrangeStar from "../../assets/img/orange-star.png"

const Stars = ({ rating }) => {
    //Le nombre d'étoile rouge qu'on veut

    return (
        <div>
            {
                [...Array(5)].map((_, index) => {
                    if (index + 1 > rating) {
                        return (
                            <img src={GrayStar} alt="étoile" key={index} className="starImg" />
                        )
                    }
                    else {
                        return (
                            <img src={OrangeStar} alt="étoile" key={index} className="starImg" />
                        )
                    }
                })
            }
        </div>
    )
}

export default Stars;