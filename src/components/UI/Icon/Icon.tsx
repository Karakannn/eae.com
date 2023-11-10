import { default as sprite } from "@assets/icons/sprite.svg";

type IconProps = {
  id: string;
  class?: string;
  width?: number;
  height?: number;
};

const Icon = (props: IconProps) => {
  return (
    <svg
      style={{ width: props.width, height: props.height }}
      className={`icon ${props.class ? props.class : ""}`}
    >
      <use href={`${sprite}#${props.id}`} />
    </svg>
  );
};

export default Icon;
