import React from 'react'
import {Form, Button} from "react-bootstrap";
import cross from "../images/cross.png"

const FormsPlanet = () => {
    return (
        <div className="bg-light add text-info rounded-3 p-2 w-50">
            <div className="d-flex justify-content-end"><img src ={cross} alt="cross" className="buups"/></div>
            <h1 className="text-black">Planet</h1>
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
                    <div className="d-flex justify-content-end mt-4">
                        <Button className="bg-dark pb-2 m-2 text-light border-dark" type="submit">Cancel</Button>
                        <Button className="bg-dark pb-2 m-2 text-light border-dark" type="submit">Create Planet</Button>
                    </div>
                </Form>
        </div>
        
    )
}

export default FormsPlanet
