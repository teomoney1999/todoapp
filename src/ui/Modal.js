import { memo } from "react";
import ReactDom from "react-dom";
import IsAction from "./isActtion";
import Box from "./Box";

const Backdrop = (props) => {
  return <div className="backdrop" />;
};

const ModalOverlays = ({
  title,
  children,
  actions,
  className = {},
  isAction = false,
}) => {
  return (
    <Box className={`modal ${className["modal"]}`}>
      <div className={`modal__title ${className["title"]}`}>{title}</div>
      <div className={`modal__info ${className["info"]}`}>{children}</div>
      {isAction && (
        <IsAction
          className={`modal__actions ${className["actions"]}`}
          actions={actions}
        />
      )}
    </Box>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDom.createPortal(
        <ModalOverlays {...props}>{props.children}</ModalOverlays>,
        document.getElementById("overlays")
      )}
    </>
  );
};

// export default Modal;
export default memo(Modal);
