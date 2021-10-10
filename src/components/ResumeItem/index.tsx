import { type } from "os";
import * as C from "./styler";
type Props = {
  title: string;
  value: number;
  color?: string;
};
export const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <div>
      <C.Container>
        <C.Title>{title}</C.Title>
        <C.Info color={color}>R$ {value.toFixed(2)}</C.Info>
      </C.Container>
    </div>
  );
};
