import React from "react";

function SyllabusAccordion(props)
{
    // console.log(props);
    return(
        
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={props.id}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.datatarget} aria-expanded="false" aria-controls={props.arialcontrols}>
                            {props.title}
                        </button>
                        </h2>
                        <div id={props.arialcontrols} className="accordion-collapse collapse" aria-labelledby={props.id} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {props.description}
                        </div>
                        </div>
                    </div>
    )
}

export default SyllabusAccordion;