import { Col, Form } from "react-bootstrap";

export default function LabelFIeld(props) {
  return (
    <Form.Group
      as={Col}
      xs={props.col.xs}
      sm={props.col.sm}
      md={props.col.md}
      lg={props.col.lg}
      xl={props.col.xl}
      className={props.col.className}
      key={`id_${props.col.name}`}
    >
      <Form.Label className="small" htmlFor={props.col.name}>
        {props.col.title}
      </Form.Label>
      <Form.Control
        size="sm"
        type={props.col.type}
        id={`id_${props.col.name}`}
        name={props.col.name}
        aria-describedby={props["aria-describedby"]}
        value={props.info[props.col.name]}
        onChange={props.handleChange}
      />
    </Form.Group>
  );
}
