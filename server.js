// Client-side RPC call to get user information
const getUserInfo = async (userId) => {
  const response = await fetch("/rpc/getUserInfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  });
  const result = await response.json();
  return result.userInfo;
};
