
import type { btnProps } from "../../utils/types";

export default ({ className = "", children, ...props }: btnProps)=> {
  return (
    <button className={"" + className} disabled={props.disabled} {...props}>
      
      {children}
    </button>
  );
}
