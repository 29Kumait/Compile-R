const baseUrl = import.meta.env.VITE_BASE_SERVER_URL;
console.log("Base URL:", baseUrl);

const fetchContentList = async () => {
  const response = await fetch(`${baseUrl}/api`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

const fetchCreateContent = async (contentData) => {
  const response = await fetch(`${baseUrl}/api/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contentData),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export { fetchCreateContent, fetchContentList };
