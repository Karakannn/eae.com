import Icon from "../Icon/Icon";
import "./Button.scss";

type ButtonProps = {
  class: string;
  children?: any;
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
};

export default function Button(props: ButtonProps) {

  return (
    <button type="button" disabled={props.disabled || false} className={`${props.class}`}>
      {props.iconLeft && <Icon class="button-icon" id={props.iconLeft} />}
      {props.children}
      {props.iconRight && <Icon class="button-icon" id={props.iconRight} />}

    </button>
  );
}
