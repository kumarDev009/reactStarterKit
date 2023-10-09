const BASE_URL = 'http://api.starter.kit.mitrahsoft.co.in/api';

export const registerUser = async userData => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || 'Error during registration.');
  }
  return response.json();
};
