import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./novaSenha.css";

export default function NovaSenha() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <h2 className="titulo">Nova Senha</h2>
                </div>
                <div className="col-3"></div>
            </div>
            
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="input"
                            size="lg" 
                        />
                        <label htmlFor="floatingInputCustom">Código enviado para seu email:</label>
                    </Form.Floating>
                </div>
                <div className="col-3"></div>
            </div>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="input"
                            size="lg" 
                        />
                        <label htmlFor="floatingInputCustom">Nova Senha:</label>
                    </Form.Floating>
                </div>
                <div className="col-3"></div>
            </div>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="input"
                            size="lg" 
                        />
                        <label htmlFor="floatingInputCustom">Confirme a nova senha:</label>
                    </Form.Floating>
                </div>
                <div className="col-3"></div>
            </div>
            
            <div className="row">
                <div className="col-5"/>
                <div className="col-2"><Button className="w-100" variant="primary">OK</Button></div>
                <div className="col-5"/>
            </div>
        </div>
        );

};