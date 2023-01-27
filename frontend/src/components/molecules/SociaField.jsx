import { InputGroup, Form } from "react-bootstrap";

export default function SociaField(props) {
  return (
    <InputGroup size="sm" className={props.row.className}>
      <InputGroup.Text>
        <i className={props.row.icon} title={props.row.title}></i>
      </InputGroup.Text>
      <Form.Control
        type="text"
        id={`id_social${props.row.name}`}
        placeholder="https://"
        aria-label=""
        aria-describedby={`addon-wrapping-${props.row.name}`}
      ></Form.Control>
    </InputGroup>
  );
}
