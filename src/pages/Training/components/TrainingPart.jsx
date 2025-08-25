import '../style.training.css'

const TrainingPart = ({ image, header, description }) => {
    return (
        <>
            <div className='training_part'>
                <div className='first_part'>
                    <div>
                    <img src={image} className='training_image' />
                    </div>
                    <h2 className='training_heading'>{header}</h2>
                    </div>
                <div className='last_part'>
                    <h3>{description}</h3>
                </div>
            </div>
        </>
    )
};

export default TrainingPart;