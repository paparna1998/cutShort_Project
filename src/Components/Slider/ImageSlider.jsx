import React, {useReducer} from "react";
import './sliderStyle.css';
import pic from '../images/sliderOne.JPG';
import pic1 from '../images/sliderSecond.JPG';
import pic2 from '../images/sliderThird.JPG';
import pic3 from '../images/sliderForth.JPG';
import pic4 from '../images/sliderFifth.JPG';


let initialValue = pic;
const reducer = (state, action) => {
    if (action.type === "imageOne") {
        return pic;
    }
    if (action.type === "imageTwo") {
        return pic1;
    }
    if (action.type === "imageThree") {
        return pic2;
    }
    if (action.type === "imageFour") {
        return pic3;
    }
    if (action.type === "imageFive") {
        return pic4;
    }
    return state;
}

const ImageSlider = () => {

    const [state, dispatch] = useReducer(reducer, initialValue);
    return (
        <div className="Box_container">
            <img src={state}
                alt="imaSomething Wrong..."/>
            <div className="Buttons_container">
                <button onClick={
                    () => {
                        dispatch({type: "imageOne"})
                    }
                }><img src={pic}
                        alt="imaSomething Wrong..."
                        width={80}
                        height={80}/></button>
                <button onClick={
                    () => {
                        dispatch({type: "imageTwo"})
                    }
                }><img src={pic1}
                        alt="imageSomething Wrong..."
                        width={80}
                        height={80}/></button>
                <button onClick={
                    () => {
                        dispatch({type: "imageThree"})
                    }
                }><img src={pic2}
                        alt="imagSomething Wrong..."
                        width={80}
                        height={80}/></button>
                <button onClick={
                    () => {
                        dispatch({type: "imageFour"})
                    }
                }><img src={pic3}
                        alt="horse"
                        width={80}
                        height={80}/></button>
                <button onClick={
                    () => {
                        dispatch({type: "imageFive"})
                    }
                }><img src={pic4}
                        alt="Something Wrong..."
                        width={80}
                        height={80}/></button>
            </div>
        </div>
    )
}
export default ImageSlider;
