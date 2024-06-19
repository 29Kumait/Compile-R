const baseUrl = import.meta.env.VITE_BASE_SERVER_URL;
console.log("Base URL:", baseUrl);

const FetchSignUp = async (userInfo) => {
  const response = await fetch(`${baseUrl}/api/signup`, {
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
  const response = await fetch(`${baseUrl}/api/signin`, {
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
