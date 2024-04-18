// Deux champs pour saisir l'email et le mdp et deux boutons pour se connecter et s'inscrire

import { useState } from "react";

export default function AuthenticationComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {}

  function register() {}

  return (
    <div className="form-group">
      <div>
        <label htmlFor="email">Email: </label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Mot de passe: </label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={login}>Login</button>
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}
