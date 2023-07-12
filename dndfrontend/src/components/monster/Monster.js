import React from "react";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import classes from "./Monster.module.css";

const Monster = (props) => {
  return (
    <CCard
      style={{
        width: "18rem",
        display: "inline-block",
        padding: "5px",
        margin: "10px",
        marginLeft: "4em",
      }}
    >
      <CCardBody>
        <CCardTitle>{props.name}</CCardTitle>
        <CCardText>
          ac: {props.ac}
          <br />
          health: {props.hp}
          <br />
          cr: {props.cr}
          <br />
          strength: {props.str}
          <br />
          dexterity: {props.dex}
          <br />
          consitution:{props.con}
          <br />
          wisdom: {props.wis}
          <br />
          charisma: {props.cha}
        </CCardText>
        <CButton href={props.url}>View details</CButton>
      </CCardBody>
    </CCard>
  );
};

export default Monster;
