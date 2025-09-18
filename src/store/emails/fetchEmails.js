import { getToken, baseURL } from "../utils/sessions";

export const fetchEmails = async ({ queryKey }) => {
  const [_key, { search, filter, isStarred, page, limit }] = queryKey;
  const token = getToken();

 const params = new URLSearchParams({
  page,
  limit,
  search,
  filter,
  view: "inbox",
  ...(isStarred === true ? { isStarred: "true" } : {}), // only add if true
});

  const response = await fetch(`${baseURL}/api/emails?${params.toString()}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch emails");
  }

  const data = await response.json();
  return data;
};
