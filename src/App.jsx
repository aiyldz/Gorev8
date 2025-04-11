import React, { useState } from "react";
import "./APP.css";
const App = () => {
  const [ad, setAd] = useState("");
  const [kart, setKart] = useState("");
  const [ay, setAy] = useState("");
  const [yil, setYil] = useState("");
  const [cvv, setCvv] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    if (!ad || !kart || !ay || !yil || !cvv) {
      alert("Lütfen tüm boş alanları doldurun.");
      return;
    }

    alert(`
    Kart Üzerindeki isim: ${ad}
    Kart Numarası: ${kart}
    Ay:${ay}
    Yıl: ${yil}
    Cvv: ${cvv}    
    `);
  };

  return (
    <form className="card">
      <div className="area">
        <span className="baslik">Ödeme Bilgileri</span>
        <span className="altBaslik">Kart Bilgilerini Giriniz</span>
      </div>
      <div className="area">
        <span className="inputBaslik">Kart Üzerindeki İsim</span>
        <input
          type="text"
          placeholder="Ahmet Yılmaz"
          required
          onChange={(e) => setAd(e.target.value)}
        />
      </div>

      <div className="area">
        <span className="inputBaslik">Kart Numarası</span>
        <input
          type="number"
          required
          placeholder="0000 0000 0000 0000"
          onChange={(e) => setKart(e.target.value)}
        />
      </div>

      <div className="area-2">
        <div className="ayg">
          <span className="inputBaslik">Ay</span>
          <Ay value={ay} onChange={setAy} />
        </div>
        <div className="ayg">
          <span className="inputBaslik">Yıl</span>
          <Yil value={yil} onChange={setYil} />
        </div>
        <div className="ayg">
          <span className="inputBaslik">Güvenlik Kodu</span>
          <input
            type="number"
            placeholder="123"
            required
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </div>

      <div className="area">
        <button type="submit" onClick={handleClick}>
          Şimdi Öde
        </button>
      </div>
    </form>
  );
};

const Ay = ({ value, onChange }) => {
  return (
    <select
      className="secim"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        AA
      </option>
      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
  );
};

const Yil = ({ value, onChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 16 }, (_, i) => currentYear + i);

  return (
    <select
      className="secim"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        YY
      </option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default App;
