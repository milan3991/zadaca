import resource1 from '../../assets/module1.jpg';
import resource2 from '../../assets/module2.jpg';
import resource3 from '../../assets/module3.jpg';
import '../TrainingResources/components/ResourcesPart/style.resourcespart.css'
import ResourcePart from './components/ResourcesPart/ResourcesPart';


let resources = [
    {
        id: 1,
        image: resource1,
        header: `Essentials handbook`,
        description: 'Give your audience a short description of this resource.'
    },
    {
        id: 2,
        image: resource2,
        header: `Training journal`,
        description: 'Give your audience a short description of this resource.'

    },
    {
        id: 3,
        image: resource3,
        header: `Modules`,
        description: 'Give your audience a short description of this resource.'


    },
]


const TrainingResources = () => {
    return (
        <div className='resources_wrapper'>
            <div className='resources_content'>
                <div className='resources'>
                    <h1 className='heading_resources'>Our resources</h1>
                    <div className='resources_content'>
                        {resources.map((resource) => (
                            <ResourcePart
                                key={resource.id}
                                header={resource.header}
                                image={resource.image}
                                description={resource.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingResources;
