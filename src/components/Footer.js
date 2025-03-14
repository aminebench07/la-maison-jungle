import { useState } from "react";
import "../styles/Footer.css";

function onBlur(mail) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(mail)) {
    alert("Attention, ceci n'est pas une adresse valide.");
  }
}

function Footer() {
  const [inputValue, setInputValue] = useState("");

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        onBlur={() => onBlur(inputValue)}
        placeholder="Entrez votre mail"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </footer>
  );
}

export default Footer;
