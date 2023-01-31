import React from "react";

import Default from "../templates/Default";
import Avatar from "../atoms/Avatar";
import InputList from "../organisms/InputList";
import SociaField from "../molecules/SociaField";

import { Row, Col, Button, Form } from "react-bootstrap";
import { BsCameraFill } from "react-icons/bs";
import { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

// https://coodesh.com/blog/candidates/carreiras/saiba-como-adicionar-mascara-em-react-na-criacao-de-formularios/
import InputMask from "react-input-mask";

import {
  locationFields,
  personalFields,
  socialFields,
} from "./fields/fieldsProfile";

/** Call CEP API */
async function cepAPI(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((data) => data.json())
    .catch({
      msg: "Não foi possível realizar a busca.",
    });
}

export default function Profile() {
  const [info, setInfo] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    celphone: "",
    telphone: "",
    cep: "",
    logradouro: "",
    number: "",
    city: "",
    state: "",
    district: "",
    image: "",
    instagran: "",
    github: "",
    linkedin: "",
  });

  // invoke setData from logged User
  React.useEffect(() => {});

  const onlyNumber = (cep) => {
    return parseInt(cep.replace(/[^0-9]/g, ""));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      name === "cep" ? onlyNumber(event.target.value) : event.target.value;
    setInfo((values) => ({ ...values, [name]: value }));
  };

  /** Function to call CEP API */
  const handleCep = async (event) => {
    if (`${info.cep}`.length === 8) {
      const data = await cepAPI(info.cep);
      data?.erro
        ? alert("Erro")
        : setInfo((values) => ({
            ...values,
            logradouro: data.logradouro,
            city: data.localidade,
            district: data.bairro,
            state: data.uf,
          }));
      console.log(data);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(info);
  };

  return (
    <Default>
      <div className="col-12 col-md-10 col-xl-6 mx-auto border rounded-3 p-5 mt-4">
        <Form>
          <div className="mb-4 text-center">
            <Avatar width="150" height="150" className="rounded-circle mb-3" />
            <br />
            <Button type="button" variant="white">
              <BsCameraFill />
            </Button>
            <Button type="button" variant="white" title="Excluir Foto">
              <FaTrashAlt />
            </Button>
          </div>
          {personalFields.map((row, i) => {
            return (
              <InputList
                handleChange={handleChange}
                info={info}
                row={row}
                key={`personalfield_${i}`}
              />
            );
          })}
          <Row>
            <Form.Group as={Col} xm="10" sm="8" lg="6" xl="4" className="mb-3">
              <Form.Label className="small" htmlFor="cep">
                CEP
              </Form.Label>
              <Form.Control
                name="cep"
                as={InputMask}
                mask="99.999-999"
                placeholder="Digite o CEP"
                size="sm"
                type="text"
                id="cep"
                aria-describedby=""
                onChange={handleChange}
                onKeyUp={(e) => {
                  e.key === "Enter" && handleCep();
                }}
              />
              <div id="cepError" className="form-text text-danger"></div>
            </Form.Group>
            <Col className="col-2">
              <Form.Label htmlFor="find-cep">&nbsp;</Form.Label>
              <div>
                <Button
                  size="sm"
                  variant="light"
                  id="find-cep"
                  onClick={handleCep}
                >
                  <i className="bi bi-search"></i>
                </Button>
              </div>
            </Col>
          </Row>
          {locationFields.map((row, i) => {
            return (
              <InputList
                handleChange={handleChange}
                info={info}
                row={row}
                key={`locationfield_${i}`}
              />
            );
          })}
          {socialFields.map((row, i) => {
            return <SociaField row={row} key={`socialfield_${i}`} />;
          })}
          <div className="mt-2">
            <Button
              onClick={handleClick}
              type="button"
              variant="success"
              className="float-end"
            >
              Salvar
            </Button>
          </div>
        </Form>
      </div>
    </Default>
  );
}
