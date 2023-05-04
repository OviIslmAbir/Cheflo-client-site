import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blogs = () => {
    return ( 
        <div ref={ref} className='pdf container mt-5'>
            <h1 className="text-center">Frequently Asked Any Question</h1>
            <p className="text-center">Write the correct answer to the question</p>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Differences between uncontrolled and controlled components.
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Uncontrolled components are typically used for simple, isolated functionality and don't require explicit state management. They offer less control over their behavior but are generally easier to implement and manage.

                            Controlled components, on the other hand, are used for more complex functionality and offer greater control over their behavior. They rely on explicit state management and receive all their data and behavior through props passed down from their parent.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          How to validate React props using PropTypes?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        To validate React props using PropTypes, you need to import PropTypes library, define the PropTypes for your component by adding a static propTypes object to your component class, and optionally define defaultProps to provide default values for props that are not passed to the component. By defining propTypes and defaultProps, you can ensure that the props passed to your component are of the correct type and shape.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           Difference between nodejs and express js
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          Node.js provides the runtime environment for executing JavaScript, while Express.js provides a web application framework that can be used with Node.js to build web applications and APIs quickly and easily.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          What is a custom hook, and why will you create a custom hook?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                         A custom hook is a reusable function that encapsulates common logic and can be  shared across multiple components. Custom hooks are created to improve code reuse, maintainability, and readability. They allow developers to abstract away complex logic and provide an easy-to-use interface for other components to consume.
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <h3>Download the PDF  
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button style={{border:"none"}} className='btn btn-white' onClick={toPdf}><FaDownload/></button>}
                    </Pdf>
                </h3>
            </div>
        </div>
    );
};

export default Blogs;