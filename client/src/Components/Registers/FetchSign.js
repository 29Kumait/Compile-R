const baseUrl = import.meta.env.VITE_BASE_SERVER_URL;
const FetchSignUp = async (userInfo) => {
  const response = await fetch(`${baseUrl}/api/sign/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

const FetchSignIn = async (credentials) => {
  const response = await fetch(`${baseUrl}/api/sign/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export { FetchSignIn, FetchSignUp };
