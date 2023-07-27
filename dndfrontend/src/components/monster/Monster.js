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
    const handleDelete = () => {
      props.onDelete(props.monster.id); // Access the id from the monster prop
    };


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
        <CCardTitle>{props.monster.name}</CCardTitle>
        <CCardText>
          ac: {props.monster.ac}
          <br />
          health: {props.monster.hp}
          <br />
          cr: {props.monster.cr}
          <br />
          strength: {props.monster.str}
          <br />
          dexterity: {props.monster.dex}
          <br />
          consitution:{props.monster.con}
          <br />
          wisdom: {props.monster.wis}
          <br />
          charisma: {props.monster.cha}
        </CCardText>
        <CButton href={props.monster.url}>View details</CButton>
        <br/>
      </CCardBody>
    </CCard>
  );
};

export default Monster;
