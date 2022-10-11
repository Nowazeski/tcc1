import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./esqueceuSenha.css";

export default function EsqueceuSenha() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <h2 className="titulo">Recuperar Senha</h2>
                </div>
                <div className="col-3"></div>
            </div>
            
            <div className="row h-10">
                <div className="col-3"></div>
                <div className="col-6">
                    <bold1>Informe o email da conta, para que seja enviado o código para recuperar senha.</bold1>
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
                    <label htmlFor="floatingInputCustom">Email:</label>
                    </Form.Floating>
                </div>
                <div className="col-3"></div>
            </div>
            
            <div className="row">
                <div className="col-3"/>
                <div className="col-3"><Button className="w-100" variant="primary">Enviar</Button></div>
                <div className="col-3"><Button className="w-100" variant="danger">Limpar</Button></div>
                <div className="col-3"/>
            </div>
        </div>
        );

};