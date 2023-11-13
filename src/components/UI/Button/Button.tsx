import Icon from "../Icon/Icon";
import "./Button.scss";

type ButtonProps = {
  class: string;
  children?: any;
  iconId?: string;
  iconRight?: string;
  disabled?: boolean;
};

export default function Button(props: ButtonProps) {

  return (
    <button type="button" disabled={props.disabled} className={`custom-button ${props.class}`}>
      {props.iconId && <Icon id={props.iconId} />}
      {props.children}
      {props.iconRight && <Icon id={props.iconRight} />}

    </button>
  );
}
