import { Row } from "react-bootstrap";
import LabelField from "../molecules/LabelField";

export default function InputList(props) {
  return (
    <Row>
      {props.row.map((col) => {
        return (
          <LabelField
            handleChange={props.handleChange}
            info={props.info}
            col={col}
            key={col.name}
          />
        );
      })}
    </Row>
  );
}
