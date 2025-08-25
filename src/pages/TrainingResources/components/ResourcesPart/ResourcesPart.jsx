import GlobalButton from '../../../../components/GlobalButton/GlobalButton';
import './style.resourcespart.css'

const ResourcePart = ({ image, header, description }) => {
    return (
        <>
            <div className='resource_part'>
                <img src={image} className='resource_image' />
                <h2 className='heading_resource'>{header}</h2>
                <h3>{description}</h3>
                <GlobalButton text="Read more" className='training_button' />

            </div>
        </>
    )
};

export default ResourcePart;