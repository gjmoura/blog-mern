import React from "react"
import Button from "react-bootstrap/Button"
import "./style.scss"

const Buttons = (props) => {
  return (
    <>
      <Button id={props.identity} disabled={props.disabled}>
        {props.text}
      </Button>
    </>
  )
}

export default Buttons;