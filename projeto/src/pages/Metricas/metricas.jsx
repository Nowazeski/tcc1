import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./metricas.css";
import grafico_pizza from '../../img/pizza_erica.png';


export default function Metricas() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <h2 className="titulo">Métricas</h2>
                </div>
                <div className="col-3"></div>
            </div>
            
            <div className="row">
                <div className="col-2"></div>
                <div className="col-3">
                    <DropdownButton className="w-100" id="dropdown-basic-button" title="Aluno">
                        <Dropdown.Item>Geremias</Dropdown.Item>
                        <Dropdown.Item>Buda</Dropdown.Item>
                        <Dropdown.Item>Cabeça</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="col-3">
                    <DropdownButton className="w-100" id="dropdown-basic-button" title="Máteria">
                        <Dropdown.Item>Matemática</Dropdown.Item>
                        <Dropdown.Item>Português</Dropdown.Item>
                        <Dropdown.Item>Inglês</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="col-3">
                    <DropdownButton className="w-100" id="dropdown-basic-button" title="Series">
                        <Dropdown.Item>Series 1</Dropdown.Item>
                        <Dropdown.Item>Series 2</Dropdown.Item>
                        <Dropdown.Item>Series 3</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="col-1"></div>
            </div>

            <div className="row">
                <div className="col-2"></div>
                <div className="col-3">
                    <DropdownButton className="w-100" id="dropdown-basic-button" title="Turma">
                        <Dropdown.Item>Turma1</Dropdown.Item>
                        <Dropdown.Item>Turma2</Dropdown.Item>
                        <Dropdown.Item>Turma3</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="col-3">
                    <Form.Floating className="mb-3">
                        <Form.Floating>
                            <Form.Control
                                id="floatingDataCustom"
                                type="date"
                                placeholder="DD/MM/YYYY"
                            />
                            <label htmlFor="floatingDataCustom">Período:</label>
                        </Form.Floating>
                    </Form.Floating>
                </div>
                <div className="col-3">
                    <Button className="w-100" variant="primary">OK</Button>
                </div>
                <div className="col-1"></div>
            </div>

            <div className='row'>
                <div className="col-12 text-center">
                    <img src={grafico_pizza} alt={grafico_pizza}></img>
                </div>
            </div>
        </div>
        );

};