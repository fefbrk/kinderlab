# 🤖 KinderLab Robotics - Yaz Dönemi Staj Projesi

Eğitim robotları için geliştirilmiş modern full-stack web platformu. E-ticaret, içerik yönetimi ve eğitim özelliklerini içeren kapsamlı bir uygulama.

## Özellikler

**E-Ticaret Sistemi**
- 129 ürün sayfası ile kapsamlı katalog
- Gelişmiş alışveriş sepeti ve ödeme sistemi
- Sipariş yönetimi ve takip

**İçerik Yönetim Sistemi**
- Blog, basın bültenleri, medya kapsamı ve etkinlikler
- Rich text editor ile içerik oluşturma
- Görsel yükleme ve yönetim sistemi

**Admin Paneli**
- Kapsamlı dashboard ve CRUD işlemleri
- Kullanıcı ve sipariş yönetimi
- İstatistik kartları ve raporlama

**Eğitim Platformu**
- Kurs kayıt sistemi
- Öğretim materyalleri ve etkinlik yönetimi

## Teknolojiler

**Frontend**
- React 18 + TypeScript
- Vite
- Tailwind CSS
- TanStack Query
- React Router

**Backend**
- Node.js + Express.js
- SQLite3 veritabanı

## Proje Büyüklüğü

- 129 sayfa
- 64 UI bileşeni
- 9 veritabanı tablosu
- 50+ API endpoint
- 3 Context provider

## Veritabanı

```
users → orders → order_items
      → course_registrations
blog_posts, press_releases, events, media_coverage, contacts
```

## Proje Yapısı

```
├── src/
│   ├── components/    # UI bileşenleri
│   ├── pages/         # Sayfa bileşenleri
│   ├── context/       # Global state
│   └── services/      # API çağrıları
├── server/
│   ├── database/      # Veritabanı
│   └── server.js      # Express sunucu
└── public/            # Statik dosyalar
```
