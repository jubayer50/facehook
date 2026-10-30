import React from "react";

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);

  return (
    <div className="mb-6 flex flex-col gap-2.5">
      {label && (
        <label htmlFor={id} className="leading-[138%] lg:text-lg text-white">
          {label}
        </label>
      )}

      {children}

      {error && (
        <div role="alert" className="text-red-500">
          {error.message}
        </div>
      )}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child.props) {
    return child.props.id;
  }
};

export default Field;
