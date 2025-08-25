import './style.modulespart.css'

const ModulePart = ({ image, header, description }) => {
    return (
        <>
            <div className='module_part'>
                <img src={image} className='module_image' />
                <h2 className='heading_module'>{header}</h2>
                <h3>{description}</h3>
            </div>
        </>
    )
};

export default ModulePart;