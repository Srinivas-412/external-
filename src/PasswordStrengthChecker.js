import React, { useState } from "react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");

  const getPasswordStrength = (pwd) => {
    if (pwd.length < 6) return { label: "Weak", color: "red" };

    const hasLetters = /[a-zA-Z]/.test(pwd);
    const hasNumbers = /[0-9]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasSpecial = /[^A-Za-z0-9]/.test(pwd);

    if (pwd.length >= 8 && hasUpper && hasLower && hasNumbers && hasSpecial) {
      return { label: "Strong", color: "green" };
    }

    if (hasLetters && hasNumbers) {
      return { label: "Moderate", color: "orange" };
    }

    return { label: "Weak", color: "red" };
  };

  const { label, color } = getPasswordStrength(password);

  return (
    <div style={styles.container}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      {password && (
        <p style={{ ...styles.strengthText, color: color }}>
          Strength: {label}
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    width: "100%",
    fontSize: "16px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  strengthText: {
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default PasswordStrengthChecker;
