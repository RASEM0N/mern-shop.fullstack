import React, { FunctionComponent } from 'react'

interface PropsType {
    value: number
    text?: string
    color?: string
}

const Rating: FunctionComponent<PropsType> = ({ text, value, color = '#c2aa34' }) => {
    const star = (x: number) => (
        <i
            style={{
                color,
            }}
            className={
                value >= x
                    ? 'fas fa-star'
                    : value >= x - 0.5
                    ? 'fas fa-star-half-alt'
                    : 'far fa-star'
            }
        />
    )

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((s) => {
                return <span key={s}>{star(s)}</span>
            })}{' '}
            <span>{text && text}</span>
        </div>
    )
}

export default Rating
