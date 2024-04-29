export default async function verifyToken(cookie) {
  try {
    const response = await fetch("http://localhost:8000/verify", {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: `access_token=${cookie.value}`,
      },
    });
    if (response.ok && response.status === 200) {
      const { token_valid, userid } = await response.json();
      return { token_valid, userid };
    }
    if (!response.ok || !response.status === 200) {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
    return { token_valid: false, userid: undefined };
  }
}
