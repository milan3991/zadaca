import module1 from '../../assets/module1.jpg';
import module2 from '../../assets/module2.jpg';
import module3 from '../../assets/module3.jpg';
import module4 from '../../assets/module4.jpg';
import module5 from '../../assets/module5.jpg';
import module6 from '../../assets/module6.jpg';
import '../TrainingModules/components/ModulesPart/style.modulespart.css';
import ModulePart from './components/ModulesPart/ModulesPart';


let modules = [
    {
        id: 1,
        image: module1,
        header: `MODULE 1`,
        description: 'Taking charge of your own growth'
    },
    {
        id: 2,
        image: module2,
        header: `MODULE 2`,
        description: 'Building trust with your team'

    },
    {
        id: 3,
        image: module3,
        header: `MODULE 3`,
        description: 'Giving and receiving feedback'


    },
        {
        id: 4,
        image: module4,
        header: `MODULE 4`,
        description: 'Growing your impact'
    },
    {
        id: 5,
        image: module5,
        header: `MODULE 5`,
        description: 'Empowering others'

    },
    {
        id: 6,
        image: module6,
        header: `MODULE 6`,
        description: 'Sustainable leadership'
    },

]


const OurModules = () => {
    return (
        <div className='modules_wrapper'>
            <div className='modules_content'>
                <div className='modules'>
                    <h1 className='heading_modules'>Training hub overview</h1>
                    <div className='modules_content'>
                        {modules.map((module) => (
                            <ModulePart
                                key={module.id}
                                header={module.header}
                                image={module.image}
                                description={module.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurModules;
