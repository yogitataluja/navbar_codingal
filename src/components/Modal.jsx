import React, { useState,useEffect } from 'react'

const Modal = () => {
    const [block, setblock] = useState({ display: "none" })
  const [text, settext]=useState({display:"none"})

    const onValue = () => {
        setblock({ display: "block"})
    }
 const textArea=()=>{
    settext({ display: "block"  })
 }
 useEffect(() => {
    setblock({display:"none"})
    settext({display:"none"})

 }, [])

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Select a reason to end class</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Class completed
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onClick={onValue} />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Class interrupted/aborted
                                    </label>
                                </div>

                                <div style={block} className="pl-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  />
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            Students didn't show up for className
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                            Students didn't show any interest
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  />
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            Students got disconnected
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                            I got  disconnected
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onClick={textArea} />
                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                            Other reason
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-3 pl-4" style={text}>
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type here"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="bg-red-500 ml-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">End Class</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Modal
