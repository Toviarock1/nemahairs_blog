import React from 'react';
import classes from './Newsletter.module.css';

const Newsletter = (props) => {

    return (
        <div className="CardWrapper">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter and stay updated to our best offers and deals!</p>
            <form action="https://gmail.us5.list-manage.com/subscribe/post?u=61de5de74ce5111ded9eba571&amp;id=e26ff328d3" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                <div >

                    <div>
                        <input type="email" name="EMAIL" class="required email" className={classes.Input} required />
                    </div>
                    <div id="mce-responses">
                        <div id="mce-error-response" style={{ display: "none" }}></div>
                        <div id="mce-success-response" style={{ display: "none" }}></div>
                    </div>
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                        <input type="text" name="b_61de5de74ce5111ded9eba571_e26ff328d3" tabindex="-1" value="" />
                    </div>
                    <div>
                        <input type="submit" value="Subscribe" name="subscribe" className={classes.Btn} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Newsletter;