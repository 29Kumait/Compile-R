const baseUrl = import.meta.env.VITE_BASE_SERVER_URL;

const fetchContentList = async () => {
  const response = await fetch(`${baseUrl}/api/content`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

const fetchCreateContent = async (contentData) => {
  const response = await fetch(`${baseUrl}/api/content/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contentData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export { fetchCreateContent, fetchContentList };
