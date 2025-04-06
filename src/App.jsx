import React from "react";
import "./APP.css";
const App = () => {
  return (
    <div className="card">
      <div className="area">
        <span className="baslik">Ödeme Bilgileri</span>
        <span className="altBaslik">Kart Bilgilerini Giriniz</span>
      </div>
      <div className="area">
        <span className="inputBaslik">Kart Üzerindeki İsim</span>
        <input type="text" placeholder="Ahmet Yılmaz" />
      </div>

      <div className="area">
        <span className="inputBaslik">Kart Numarası</span>
        <input type="text" placeholder="0000 0000 0000 0000" />
      </div>

      <div className="area-2">
        <div className="ayg">
          <span className="inputBaslik">Ay</span>
          <Ay />
        </div>
        <div className="ayg">
          <span className="inputBaslik">Yıl</span>
          <Yil />
        </div>
        <div className="ayg">
          <span className="inputBaslik">Güvenlik Kodu</span>
          <input type="text" placeholder="123" />
        </div>
      </div>

      <div className="area">
        <button>Şimdi Öde</button>
      </div>
    </div>
  );
};

const Ay = () => {
  return (
    <select name="" id="">
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

const Yil = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 16 }, (_, i) => currentYear + i);

  return (
    <select id="expiryYear">
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default App;
