import fs from 'fs';
import bcrypt from 'bcrypt';
const credentialsPath = 'user_credentials.txt';

// Function to check if the user already exists
const userExists = () => {
  if (!fs.existsSync(credentialsPath)) return false;
  const data = fs.readFileSync(credentialsPath, "utf8");
  return data
    .trim()
    .split("\n")
    .some((line) => line.trim().length > 0);
};

// Function to create a new user with a hashed password
const createUser = (username, password, callback) => {
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return callback(err);
    }
    // Store the username and hashed password securely (this is just an example)
    fs.appendFileSync(credentialsPath, `${username}:${hash}\n`);
    callback(null, "User created successfully!");
  });
};

// Function to authenticate an existing user
const authenticateUser = (username, password, callback) => {
  try {
    const data = fs.readFileSync(credentialsPath, "utf8");
    const lines = data.trim().split("\n");
    const userLine = lines.find((line) => line.startsWith(username));

    if (userLine) {
      const [storedUsername, storedHash] = userLine.split(":");

      if (username === storedUsername) {
        // Compare entered password with stored hash
        bcrypt.compare(password, storedHash, (err, isMatch) => {
          if (err) {
            console.error("Error comparing password:", err);
            return callback(err);
          }
          callback(null, isMatch); // Call the callback with null error and the match result
        });
      } else {
        callback(null, false);
      }
    } else {
      callback(null, false);
    }
  } catch (err) {
    console.error("Error reading user credentials:", err);
    callback(err);
  }
};

// Export the functions
export { userExists, createUser, authenticateUser };
