import TrainingPart from "./components/TrainingPart";
import arrow from '../../assets/arrow.svg';
import './style.training.css'



let trainings = [
    {
        id: 1,
        image: arrow,
        header: `Self-paced materials`,
        description: `Use this space to talk about your organization’straining program. What makes it relevant and effective? Add that here.`
    },
    {
        id: 2,
        image: arrow,
        header: `Scheduled group workshops and 1-on-1 mentorship Use this`,
        description: `Use this space to talk about your organization’straining program. What makes it relevant and effective? Add that here.`

    },
    {
        id: 3,
        image: arrow,
        header: `On-the-job application`,
        description: `Use this space to talk about your organization’straining program. What makes it relevant and effective? Add that here.`


    },
]

const Training = () => {
    return (
        <div className='training_wrapper'>
            <div className='trainings'>
                <div className="training_left_part">
                    <h1 className='heading_training'>How your training journey looks like</h1>
                </div>
                <div className="training_right_part">
                    <div className='training_content'>
                        {trainings.map((training) => (
                            <TrainingPart
                                key={training.id}
                                header={training.header}
                                image={training.image}
                                description={training.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Training;
