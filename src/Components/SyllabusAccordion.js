function SyllabusAccordion(props)
{
    return(
        <div className="container-fluid">
            <div className="row course-heading">
            <div className="col-md-8 ps-1 pe-2">
                {/* <h4 className="fw-bolder">Course Curriculum</h4> */}
                <div className="accordion" id="accordionExample">
                    {
                        props.syllabus.map((i)=>{
                            console.log(i.title);
                            console.log(i.datatarget);
                            console.log(i.id);
                            console.log(i.arialcontrols);

                    return <div className="accordion-item">
                        <h2 className="accordion-header" id={i.id}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={i.datatarget} aria-expanded="false" aria-controls={i.arialcontrols}>
                            {i.title}
                        </button>
                        </h2>
                        <div id={i.arialcontrols} className="accordion-collapse collapse" aria-labelledby={i.id} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {i.description}
                        </div>
                        </div>
                    </div>
                        })
                    }
                </div>
            </div>
        </div>
        </div>
    )
}

export default SyllabusAccordion;