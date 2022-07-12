import { FC, ReactNode } from "react";
type Props = { children: ReactNode | ReactNode[] };

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
};
