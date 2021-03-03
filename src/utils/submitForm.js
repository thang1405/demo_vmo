export const isValidSubmit = (formData = []) => {
  for (const element of formData) {
    if (!element.value || !element.isInputValid) {
      return false;
    }
  }
  return true;
};
