import React from 'react';
import './cardStyle.css';
import pic from '../images/cardOne.JPG';
import picOne from '../images/cardTwo.JPG';
import picTwo from '../images/cardThree.JPG';
import picThree from '../images/cardFour.JPG';

const Card = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h3>More by Eren ツ</h3>
                    </div>
                    <div class="col-6 col-md-2">
                        <a href="#">View Profile</a>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="image">
                            <img class="image__img"
                                src={pic}
                                alt="Something Wrong..."/>
                            <div class="image__overlay image__overlay--primary">
                                <p class="image__description">
                                    Onboarding...
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="image">
                            <img class="image__img"
                                src={picOne}
                                alt="Something Wrong..."/>
                            <div class="image__overlay image__overlay--primary">
                                <p class="image__description">
                                    Onboarding...
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="image">
                            <img class="image__img"
                                src={picTwo}
                                alt="Something Wrong..."/>
                            <div class="image__overlay image__overlay--primary">
                                <p class="image__description">
                                    Onboarding...
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="col-6 col-md-3">
                        <div class="image">
                            <img class="image__img"
                                src={picThree}
                                alt="Something Wrong..."/>
                            <div class="image__overlay image__overlay--primary">
                                <p class="image__description">
                                    Onboarding...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
