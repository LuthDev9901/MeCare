const pwShowHidePassword = document.querySelector(".showHidePwPassword");
const pwShowHideConfirmPassword = document.querySelector(".showHidePwConfirmPassword");
const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirmPassword");

pwShowHidePassword.addEventListener("click", () => {
    togglePasswordVisibility(passwordField, pwShowHidePassword);
});

pwShowHideConfirmPassword.addEventListener("click", () => {
    togglePasswordVisibility(confirmPasswordField, pwShowHideConfirmPassword);
});

function togglePasswordVisibility(field, icon) {
    if (field.type === "password") {
        field.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
        field.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
    }
}