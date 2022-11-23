const name = (name) => {
  const regEx = /[a-zA-Z.-]+/;
  if (name.length) {
    if (!name.match(regEx)) {
      return "Name can only contain numbers . or -";
    } else {
      return "";
    }
  }
};

const requiredField = (name, value, validationFunction) => {
  if (!value.length) {
    return `${name} is a required field`;
  } else {
    validationFunction(name);
  }
};

export const validateName = requiredField(name());
