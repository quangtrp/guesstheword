import "./GlobalStyles.scss";

interface Iprop {
  children: JSX.Element;
}

const GlobalStyles: React.FC<Iprop> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default GlobalStyles;
