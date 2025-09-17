const getToken = () => {
  const token = JSON.parse(localStorage.getItem("user-token"));
  return token;
};

const clearSession = () => {
  localStorage.setItem("session", false);
  localStorage.removeItem("user-token");
};

const baseURL = "https://email-list-api-3.onrender.com";

export { getToken, clearSession, baseURL };
