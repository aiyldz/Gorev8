# Ödeme Bilgileri Formu

Bu proje, ödeme bilgilerini toplamak için bir form uygulamasıdır. Kullanıcılar, kart üzerindeki isim, kart numarası, son kullanma tarihi ve güvenlik kodu (CVV) gibi bilgilerini girerek ödemelerini gerçekleştirebilirler. Proje, React kullanarak geliştirilmiştir.

## Özellikler

- Kart üzerindeki isimi girme
- Kart numarasını girme
- Son kullanma tarihi (Ay ve Yıl) seçimi
- Güvenlik kodu (CVV) girme
- Tüm alanlar doldurulmazsa kullanıcıya uyarı mesajı gösterme

## Başlangıç

### Gereksinimler

- Node.js (LTS sürümü)
- npm (Node Package Manager)

### Kurulum

Bu projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

1. Reposu klonlayın:

   ```bash
   git clone https://github.com/aiyldz/gorev8.git

   cd gorev8

    npm install

    npm start

    http://localhost:5173
   ```

### Kullanım

    Uygulama açıldıktan sonra, kullanıcılar aşağıdaki alanları doldurarak ödeme bilgilerini girebilirler:

    Kart Üzerindeki İsim: Kullanıcının kredi kartındaki isim.
    Kart Numarası: Kullanıcının kredi kartı numarası (16 haneli).
    Ay ve Yıl: Kartın son kullanma tarihi.
    Güvenlik Kodu (CVV): Kartın arkasındaki 3 haneli güvenlik kodu.
    Tüm alanlar doldurulmazsa, kullanıcıya "Lütfen tüm boş alanları doldurun." şeklinde bir uyarı mesajı gösterilir.
