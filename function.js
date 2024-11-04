window.function = function (companyName) {
  // Retrieve and process the company name input
  const input = companyName.value || "";
  const sanitizedInput = input.replace(/[^A-Za-z0-9]/g, ""); // Remove all spaces and special characters

  // Extract specified characters in the required order
  const firstTwo = sanitizedInput.slice(0, 2);
  const lastFour = sanitizedInput.slice(-4);
  const thirdAndFourth = sanitizedInput.slice(2, 4);

  // Construct the base string in the specified order
  let baseString = firstTwo + lastFour + thirdAndFourth;

  // Character set for random insertion
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  // Function to generate two random alphanumeric characters
  function getRandomChars() {
    return characters.charAt(Math.floor(Math.random() * charactersLength)) +
           characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  // Ensure baseString has at least 8 characters by padding with random characters if necessary
  while (baseString.length < 8) {
    baseString += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  // Generate the final string with inserted characters
  let result = '';
  for (let i = 0; i < baseString.length; i += 2) {
    result += baseString.slice(i, i + 2) + getRandomChars();
  }

  // Ensure the result is exactly 16 characters by trimming or adding random characters at the end
  if (result.length < 16) {
    while (result.length < 16) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  } else {
    result = result.slice(0, 16);
  }

  return result;
};
