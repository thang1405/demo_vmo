export function validateInput(type, checkingText) {
  return checkingText.trim()
    ? { isInputValid: true, errorMessage: "" }
    : { isInputValid: false, errorMessage: "Không được để trống" };
}

export const validateMultiSelect = data => {
  if (data) {
    return {
      isInputValid: true,
      errorMessage: "",
    };
  }
  return {
    isInputValid: false,
    errorMessage: "Không được để trống",
  };
};
