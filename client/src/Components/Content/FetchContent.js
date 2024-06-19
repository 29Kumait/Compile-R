const baseUrl = import.meta.env.VITE_BASE_SERVER_URL;
console.log("Base URL:", baseUrl);

const fetchContentList = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching content list:", error);
    throw error;
  }
};

const fetchCreateContent = async (contentData) => {
  try {
    const response = await fetch(`${baseUrl}/api/content`, {
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

    return await response.json();
  } catch (error) {
    console.error("Error creating content:", error);
    throw error;
  }
};

export { fetchCreateContent, fetchContentList };
