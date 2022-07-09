import Validation from "../helpers/Validation";
const IsAction = ({ className, actions }) => {
  const { hasProps } = Validation;
  // console.log("actions", actions);

  return (
    <div className={`is-action ${className}`}>
      {actions.map((action, idx) => (
        <button
          key={idx}
          className={`is-action__btn ${action["className"]}`}
          onClick={action["onClick"]}
        >
          {action["name"]}
        </button>
      ))}
    </div>
  );
};

export default IsAction;
