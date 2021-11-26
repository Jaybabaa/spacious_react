import React from 'react'
import {Form, Button} from "react-bootstrap";
import cross from "../images/cross.png"

const FormsPlanet = () => {
    return (
        <div className="bg-light add text-info rounded-3 p-2 w-50">
            <div className="d-flex justify-content-end"><img src ={cross} alt="cross" className="buups"/></div>
            <h1 className="text-black">Character</h1>
                <Form>
                    <Form.Group controlId="formFile">
                        <Form.Label className="text-black">Image</Form.Label>
                        <Form.Control type ="text"/>
                        <Form.Text classname = "text-muted">
                            Paste the URL of a JPG or PNG of max 20kb
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formText">
                        <Form.Label className="text-black">Name</Form.Label>
                        <Form.Control type ="text"/>
                    </Form.Group>
                    <Form.Group controlId="formTextArea">
                        <Form.Label className="text-black">Description</Form.Label>
                        <Form.Control as ="textarea" rows={3}/>
                    </Form.Group>
                    <Form.Select className="mb-3" id="gope">
                        <option value="0"> Choose...</option>
                        <option value="1"> Jane Cooper</option>
                        <option value="2"> Rober Myrr</option>
                        <option value="3"> Stone Brian</option>
                    </Form.Select>
                    <div className="d-flex justify-content-end mt-4">
                        <Button className="bg-dark pb-2 m-2 text-light border-dark" type="submit">Cancel</Button>
                        <Button className="bg-dark pb-2 m-2 text-light border-dark" type="submit">Create Character</Button>
                    </div>
                </Form>
        </div>
        
    )
}

export default FormsPlanet
