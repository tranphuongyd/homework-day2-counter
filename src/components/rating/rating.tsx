import React from 'react';
import './rating.css'

interface RatingProps {
    number: number,
    numberClass: string,
    onMouseEnter?(v:any): void
}

function Rating(props: RatingProps) {
    return React.createElement('div', {
        className: 'rating'
    }, 
    React.createElement('span', {
        className: props.numberClass,
        onMouseEnter: props.onMouseEnter
    }, props.number))
}

const defaultProps: RatingProps = {
    number: 0,
    numberClass: 'number'
}

Rating.defaultProps = defaultProps;
const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export class RatingComponent extends React.Component {
    state = {
        currentRate: 0
    }

    onRating = (star: number) => {
        this.setState({
            currentRate: star
        })
    }
    render() {
        return (
            <React.Fragment>
            {
                rates.map((star) => 
                    <Rating 
                        number={star} numberClass={star <= this.state.currentRate ? 'number rated': 'number' } 
                        onMouseEnter={() => this.onRating(star)} />
                )
            }
            </React.Fragment>
        );
    };
}