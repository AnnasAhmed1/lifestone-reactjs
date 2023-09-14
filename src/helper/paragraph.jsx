export const P1 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "",
  color = "",
  nunito = false,
  style = {},
}) => {
  return (
    <p
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        fontFamily: nunito ? "'Nunito' san-serif " : null,
        ...style,
      }}
      className="helper-p1"
    >
      {text}
    </p>
  );
};

export const P2 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "",
  color = "",

  style = {},
}) => {
  return (
    <p
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        ...style,
      }}
      className="helper-p2"
    >
      {text}
    </p>
  );
};

export const P3 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "",
  color = "",

  style = {},
}) => {
  return (
    <p
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        ...style,
      }}
      className="helper-p3"
    >
      {text}
    </p>
  );
};

export const P4 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "",
  color = "",

  style = {},
}) => {
  return (
    <p
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        ...style,
      }}
      className="helper-p4"
    >
      {text}
    </p>
  );
};
export const P5 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "",
  color = "",

  style = {},
}) => {
  return (
    <p
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        ...style,
      }}
      className="helper-p5"
    >
      {text}
    </p>
  );
};
