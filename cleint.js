// Example RPC endpoint for getting user information
app.post("/rpc/getUserInfo", async (req, res) => {
  try {
    // Perform necessary actions (e.g., fetch user data from the database)
    const userInfo = await getUserInfo(req.body.userId);
    res.json({ result: "success", userInfo });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ result: "error", message: "Internal server error" });
  }
});
