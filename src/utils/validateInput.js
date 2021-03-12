import * as REGEX from "../constants/validateReg";

export function validateInput(type, checkingText) {
  const regexp = {
    name: REGEX.regexpName,
    phoneNumber: REGEX.regexpPhoneNumber,
    priority: REGEX.regexpNumber,
  };

  const errorMessage = {
    name: "Chỉ chứa các kí tự anphabel",
    phoneNumber: "Số điện thoại phải có 10 - 11 chữ số.",
    priority: "Chỉ chứa các kí tự số và không để trống",
  };

  if (regexp[type]) {
    const checkingResult = regexp[type].exec(checkingText);

    if (checkingResult !== null) {
      return checkingText.trim()
        ? {
            isInputValid: true,
            errorMessage: "",
          }
        : {
            isInputValid: false,
            errorMessage: "Không được để trống",
          };
    } else {
      return {
        isInputValid: false,
        errorMessage: errorMessage[type],
      };
    }
  } else {
    return checkingText.trim()
      ? {
          isInputValid: true,
          errorMessage: "",
        }
      : {
          isInputValid: false,
          errorMessage: "Không được để trống",
        };
  }
}

export const validateMultiSelect = data => {
  if (data) {
    return {
      isInputValid: true,
      errorMessage: "",
    };
  } else {
    return {
      isInputValid: false,
      errorMessage: "Không được để trống",
    };
  }
};
