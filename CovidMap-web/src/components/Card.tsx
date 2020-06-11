import React from 'react'
import useScroll from '../hooks/useScroll'
import '../assets/style/components/Card.scss'
type Iprops = {
    children?: any
}

const Card: React.FC<Iprops> = ({ children }) => {
    const divRef = useScroll<HTMLDivElement>(null)
    const [Icon, Message, button] = children
    return (
        <div ref={divRef} className='RequestStatus'>
            <div className='RequestStatus-content'>
                <div className='RequestStatus-card'>
                    {Icon}
                    <div className='RequestStatus-message'>
                        {Message}
                    </div>
                </div>
                <div className='RequestStatus-controller'>
                    {button}
                </div>
            </div>
        </div>
    )
}
export default Card
