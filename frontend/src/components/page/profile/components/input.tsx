import React from "react";

export const EdiProfile = (props: any) => {
  return (
    <form action="">
      <div>
        <input
          type="text"
          id={props.id}
          onChange={props.change}
          value={props.value}
        />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
export const HandleImage = (props: any) => {
  const formData = new FormData();

  return (
    <form action="">
      <input
        name="images"
        type="file"
        style={{ display: "none" }}
        id={props.id}
        accept="image/"
        onChange={props.change}
      />{" "}
      <br />
      <button type="submit">submit</button>
    </form>
  );
};
