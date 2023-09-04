import React from "react";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";


  const Player = (props) => {
    const handleDelete = () => {
      props.onDelete(props.player.id); // Access the id from the player prop
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
        <CCardTitle>{props.player.name}</CCardTitle>
        <CCardText>
          DM: {props.player.dungeonMaster}
          <br />
          ac: {props.player.ac}
          <br />
          health: {props.player.hp}
          <br />
          cr: {props.player.cr}
          <br />
          strength: {props.player.str}
          <br />
          dexterity: {props.player.dex}
          <br />
          consitution:{props.player.con}
          <br />
          wisdom: {props.player.wis}
          <br />
          charisma: {props.player.cha}

        </CCardText>
        <CButton href={props.player.url}>View details</CButton>
        <br/>
        <CButton color="danger" onClick={handleDelete}>
          Delete
        </CButton>
      </CCardBody>
    </CCard>
  );
};

export default Player;
