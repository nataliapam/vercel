import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const styleSel: CSSProperties = {
  color: "red",
  textDecoration: "underline",
  marginLeft: "10px",
};
const style = { marginLeft: "10px" };
type Props = { text: string; href: string };
const CustomActiveLink: FC<Props> = ({ text, href }) => {
  let { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? styleSel : style}>{text}</a>
    </Link>
  );
};

export default CustomActiveLink;
