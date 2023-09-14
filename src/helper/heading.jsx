import "../styles/helper.css";

export const H1 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "bold",
  color = "",
  style = {},
}) => {
  return (
    <h1
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        ...style,
      }}
      className="helper-h1"
    >
      {text}
    </h1>
  );
};
export const H2 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "bold",
  color = "",
  style = {},
}) => {
  return (
    <h2
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        ...style,
      }}
      className="helper-h2"
    >
      {text}
    </h2>
  );
};
export const H3 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "bold",
  color = "",

  style = {},
}) => {
  return (
    <h3
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,

        ...style,
      }}
      className="helper-h3"
    >
      {text}
    </h3>
  );
};
export const H4 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "700",
  color = "",

  style = {},
}) => {
  return (
    <h4
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,

        ...style,
      }}
      className="helper-h4"
    >
      {text}
    </h4>
  );
};
export const H5 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "600",
  color = "",

  style = {},
}) => {
  return (
    <h5
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,

        ...style,
      }}
      className="helper-h5"
    >
      {text}
    </h5>
  );
};
