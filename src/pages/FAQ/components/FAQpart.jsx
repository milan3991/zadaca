import './style.FAQ.css'

const FAQPart = ({ image, header, description }) => {
    return (
        <>
            <div className='faq_part'>
                    <img src={image} className='faq_image' />
                    <h2 className='faq_heading'>{header}</h2>
                    <h3>{description}</h3>
            </div>
        </>
    )
};

export default FAQPart;