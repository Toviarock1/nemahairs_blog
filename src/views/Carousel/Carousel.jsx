import React from 'react'
//react bootstrap component
import { Carousel as Slide, Button } from 'react-bootstrap';
//images
import image from './../../assets/images/elements-bg.jpg';
//css
import classes from './Carousel.module.css';

const Carousel = () => {
    const test = [
        {
            title: 'first slide',
            description: 'hello secvnfnj nvlnkd lndsnvk',
            btnText: 'view post',
            btnBgColor: 'pink',
            btnColor: 'red'
        },
        {
            title: 'first slide',
            description: 'hello secvnfnj nvlnkd lndsnvk',
            btnText: 'view post'
        }
    ]
    return (
        <div>
            <Slide className={classes.Carousel}>
                {test.map(slideItem => {
                    return <Slide.Item>
                        <img
                            width={900}
                            height={550}
                            className="d-block w-100"
                            src={image}
                            alt="First slide"
                        />
                        <Slide.Caption>
                            <h3 className={classes.Title}>{slideItem.title}</h3>
                            <p>{slideItem.description}</p>
                            <Button style={{ backgroundColor: slideItem.btnBgColor, color: slideItem.btnColor }}>{slideItem.btnText}</Button>
                        </Slide.Caption>
                    </Slide.Item>
                })}
            </Slide>
        </div>

    )
}

export default Carousel;
