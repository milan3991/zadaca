import FAQPart from "./components/FAQPart";
import arrow from '../../assets/arrow.svg';
import '../FAQ/components/style.faq.css'


let faqs = [
    {
        id: 1,
        image: arrow,
        header: `How long is the program?`,
        description: `Having an FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users.`
    },
    {
        id: 2,
        image: arrow,
        header: `Who is eligible?`,
        description: `Having an FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users.`

    },
    {
        id: 3,
        image: arrow,
        header: `What if I miss a scheduled training session?`,
        description: `Having an FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users.`


    },
]

const FAQ = () => {
    return (
        <div className='faq_wrapper'>
            <div className='faqs'>
                    <h1 className='heading_faq'>FAQs</h1>
                    <div className='faq_content'>
                        {faqs.map((faq) => (
                            <FAQPart
                                key={faq.id}
                                header={faq.header}
                                image={faq.image}
                                description={faq.description}
                            />
                        ))}
                </div>
            </div>
        </div >
    );
};

export default FAQ;
