import { makeNameIntoTitle } from "../functions/generalFunctions";

export const nameAndTitleValidation = (name, value) => {
  const errorName = makeNameIntoTitle(name);

  const regEx = /^[a-zA-Z\s-.]{2,}$/;
  if (!value.length) {
    return "";
  } else if (!value.match(regEx)) {
    return `${errorName} cannot contain numbers or special characters besides - or . and must be at least two characters in length`;
  }
};

export const emailValidation = (name, value) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value.length) {
    return "";
  } else if (!value.match(regEx)) {
    return "This is not a valid email address";
  }
};

export const messageValidation = (name, value) => {
  const minLength = 10;
  if (!value.length) {
    return "";
  } else if (value.length < minLength) {
    return `Your message must be at least ${minLength} characters in length`;
  }
};

export const requiredValidation = (name, value) => {
  const fieldName = makeNameIntoTitle(name);
  if (!value.length) {
    if (name === "message") {
      return `Please leave a description for context. Thank you!`;
    } else {
      return `${fieldName} is a required field`;
    }
  }
};
