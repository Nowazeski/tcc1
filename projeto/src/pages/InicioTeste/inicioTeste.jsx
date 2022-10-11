import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./inicioTeste.css";

export default function InicioTeste() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <h2 className="titulo">Iniciar Teste</h2>
                </div>
                <div className="col-3"></div>
            </div>
            
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <DropdownButton className="w-100" id="dropdown-basic-button" title="Selecione o Aluno">
                        <Dropdown.Item>Geremias</Dropdown.Item>
                        <Dropdown.Item>Buda</Dropdown.Item>
                        <Dropdown.Item>Cabeça</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="col-3"></div>
            </div>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <DropdownButton className="w-100" id="dropdown-basic-button" title="Selecione o Teste">
                        <Dropdown.Item>Matemática</Dropdown.Item>
                        <Dropdown.Item>Português</Dropdown.Item>
                        <Dropdown.Item>Inglês</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="col-3"></div>
            </div>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <Form.Floating className="mb-3">
                        <Form.Floating>
                            <Form.Control
                                id="floatingDataCustom"
                                type="date"
                                placeholder="DD/MM/YYYY"
                            />
                            <label htmlFor="floatingDataCustom">Data de Cadastro:</label>
                        </Form.Floating>
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