import { useEffect, useMemo, useRef, useState } from "react";
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  Baby,
  BadgePercent,
  Bath,
  BedDouble,
  Briefcase,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Coffee,
  CookingPot,
  Dumbbell,
  Flame,
  Heart,
  Hotel,
  House,
  Info,
  KeyRound,
  Laptop,
  MapPin,
  Menu,
  Minus,
  MountainSnow,
  PawPrint,
  Phone,
  Plus,
  Refrigerator,
  Search,
  ShieldCheck,
  Shirt,
  Snowflake,
  Sofa,
  Sparkles,
  Star,
  Sun,
  ThermometerSnowflake,
  ThermometerSun,
  Trees,
  Tv,
  Umbrella,
  Utensils,
  Users,
  Waves,
  Wifi,
  Wind,
  X,
} from "lucide-react";

const destinationOptions = [
  { name: "Antalya Otelleri", detail: "Antalya, Türkiye" },
  { name: "Bodrum Otelleri", detail: "Muğla, Türkiye" },
  { name: "Kemer Otelleri", detail: "Antalya, Türkiye" },
  { name: "İstanbul Otelleri", detail: "İstanbul, Türkiye" },
  { name: "Kıbrıs Otelleri", detail: "Kuzey Kıbrıs" },
];

const popularSearches = [
  { label: "Antalya Otelleri", href: "https://www.etstur.com/Antalya-Otelleri" },
  { label: "Bodrum Otelleri", href: "https://www.etstur.com/Bodrum-Otelleri" },
  { label: "Afyon Termal Oteller", href: "https://www.etstur.com/Afyon-Termal-Oteller" },
  { label: "Mısır Otelleri", href: "https://www.etstur.com/egypt-690" },
  { label: "Apart Oteller", href: "https://www.etstur.com/Apart-Oteller" },
  { label: "Sapanca Bungalov Evleri", href: "https://www.etstur.com/Sapanca-Bungalov-Evleri" },
  { label: "Her Şey Dahil Oteller", href: "https://www.etstur.com/Her-Sey-Dahil-Oteller" },
  { label: "Kemer Otelleri", href: "https://www.etstur.com/Kemer-Otelleri" },
  { label: "Balayı Otelleri", href: "https://www.etstur.com/Balayi-Otelleri" },
  { label: "Denize Sıfır Oteller", href: "https://www.etstur.com/Denize-Sifir-Oteller" },
];

const hotelCampaigns = [
  {
    title: "Yaz Fırsatlarını Kaçırma",
    description: "%50'ye varan indirimlerle tatilini planla.",
    href: "https://www.etstur.com/Yaz-Firsatli-Oteller",
    image: "assets/campaigns/yaz-firsatlari.jpg",
  },
  {
    title: "Maximum'lu ol",
    description: "Şimdi kartını seç, fırsatlardan yararlan!",
    href: "https://www.isbank.com.tr/kredi-karti-basvuru?productId=18&site=ets",
    image: "assets/campaigns/maximumlu-ol.jpg",
    external: true,
  },
  {
    title: "Fleur Bay Resort",
    description: "Avantajlarla dolu bir tatil seni bekliyor!",
    href: "https://www.etstur.com/Fleur-Bay-Resort",
    image: "assets/campaigns/fleur-bay-resort.jpg",
  },
  {
    title: "7.500 TL'ye Varan MaxiPuan Fırsatı!",
    description: "Son gün 31 Ağustos. Tatil planına ekstra avantaj kat.",
    href: "https://www.etstur.com/Kampanyalar/Maximum-ile-7500-TL-ye-Varan-Maxipuan-Kazanim-Kampanyasi",
    image: "assets/campaigns/maxipuan.jpg",
  },
  {
    title: "Ücretsiz Geceleme Fırsatı Kaçmaz!",
    description: "Seçili otellerde tatilinin 1 gecesi hediye.",
    href: "https://www.etstur.com/Kampanyalar/Ucretsiz-Geceleme-Firsati-Kampanyasi",
    image: "assets/campaigns/ucretsiz-geceleme.jpg",
  },
  {
    title: "Yeni Üyelere Özel 1.500 TL İndirim Kuponu!",
    description: "UYE1500 kodu ile avantajlı bir tatil için üye ol.",
    href: "https://www.etstur.com/Kampanyalar/Yeni-Uyelere-Ozel-Kupon-Kampanyasi",
    image: "assets/campaigns/yeni-uye-kuponu.jpg",
  },
];

const offerCards = [
  {
    title: "Erken Rezervasyon Otelleri",
    description: "Yaz tatilini şimdi planla, erken rezervasyon fırsatlarını değerlendir.",
    badge: "Avantajlı erken rezervasyon fırsatları",
    count: "557",
    promotion: "%35'e varan indirim",
    href: "https://www.etstur.com/Erken-Rezervasyon-Otelleri",
    image: "assets/popular-belek.jpg",
    tone: "orange",
    icon: CalendarDays,
  },
  {
    title: "2 Çocuk Ücretsiz Oteller",
    description: "Ailece unutulmaz bir tatil için çocuk ücretsiz otelleri keşfet.",
    badge: "2 çocuğa kadar ücretsiz konaklama",
    count: "104",
    href: "https://www.etstur.com/2-Cocuk-Ucretsiz-Oteller",
    image: "assets/theme-kids.jpg",
    tone: "green",
    icon: Users,
  },
  {
    title: "Son Dakika Tatil Otelleri",
    description: "Tatilini erteleme, son dakika fırsatlarıyla hemen kaç.",
    badge: "Son dakika kaçırılmayacak fırsatlar",
    count: "197",
    promotion: "%60'a varan indirim",
    href: "https://www.etstur.com/Son-Dakika-Tatil-Firsatlari",
    image: "assets/theme-sea.jpg",
    tone: "red",
    icon: Clock3,
  },
];

const categoryCards = [
  {
    title: "Yurt İçi Oteller",
    image: "assets/domestic-hotels.jpg",
    links: ["Belek Otelleri", "Bodrum Otelleri", "Didim Otelleri", "Kemer Otelleri"],
    action: "Tüm Yurt İçi Oteller",
  },
  {
    title: "Şehir Otelleri",
    image: "assets/city-hotels.jpg",
    links: ["İstanbul Otelleri", "İzmir Otelleri", "Ankara Otelleri", "Bursa Otelleri"],
    action: "Tüm Şehir Otelleri",
  },
  {
    title: "Kıbrıs Otelleri",
    image: "assets/cyprus-hotels.jpg",
    links: ["Bafra Otelleri", "Girne Otelleri", "Mağusa Otelleri", "Lefkoşa Otelleri"],
    action: "Tüm Kıbrıs Otelleri",
  },
];

const themes = [
  {
    title: "Termal Oteller",
    description:
      "Doğanın kucağından gelen kaynak suları, termal havuzlar ve dinlenme alanlarıyla yenileyici bir konaklama deneyimi sunar.",
  },
  {
    title: "Bungalov",
    description:
      "Şehrin gürültüsünden uzaklaşıp doğaya daha yakın olmak isteyenler için farklı bütçelere uygun seçenekler sunar.",
  },
  {
    title: "Balayı Otelleri",
    description:
      "Romantik bir tatil için özel oda süslemeleri, çiftlere yönelik ikramlar ve ayrıcalıklı hizmetler bir araya gelir.",
  },
  {
    title: "Muhafazakar Oteller",
    description:
      "Kadın ve erkek misafirlere özel ayrılmış havuzlar, SPA alanları ve alkolsüz konseptleriyle hizmet verir.",
  },
  {
    title: "Apart Oteller",
    description:
      "Otel konforunu ev rahatlığıyla buluşturan, mutfaklı ve geniş yaşam alanlı konaklama alternatifleridir.",
  },
  {
    title: "Erken Rezervasyon Otelleri",
    description:
      "Yaz tatilini önceden planlayıp dönemsel indirimlerden ve esnek ödeme fırsatlarından yararlanmanızı sağlar.",
  },
  {
    title: "Denize Sıfır Oteller",
    description:
      "Odadan çıktıktan dakikalar sonra denizle buluşmak isteyenlere özel plajlı ve sahile yakın tesisleri sunar.",
  },
  {
    title: "Kayak Otelleri",
    description:
      "Türkiye'nin gözde kayak merkezlerinde pistlere yakın konum, ekipman ve kış aktivitelerini bir araya getirir.",
  },
  {
    title: "SPA Otelleri",
    description:
      "Masaj, cilt bakımı, sauna, hamam ve havuz olanaklarıyla yılın yorgunluğunu geride bırakmaya yardımcı olur.",
  },
  {
    title: "Evcil Hayvan Dostu Oteller",
    description:
      "Can dostunuzla birlikte konaklayabileceğiniz, tesise göre değişen özel alan ve hizmetlere sahip seçeneklerdir.",
  },
  {
    title: "Şehir Otelleri",
    description:
      "İş seyahati ya da kısa tatiller için merkezi konum, ulaşım kolaylığı ve dört mevsim konaklama avantajı sunar.",
  },
  {
    title: "Çocuk Dostu Oteller",
    description:
      "Çocuk havuzu, mini kulüp, oyun alanı ve aile odalarıyla minik misafirlerin de tatilden keyif almasını sağlar.",
  },
];

const popularRegions = [
  { title: "Belek Otelleri", image: "assets/popular-belek.jpg", count: "145 tesis", href: "https://www.etstur.com/Belek-Otelleri" },
  { title: "Alanya Otelleri", image: "assets/popular-alanya.jpg", count: "312 tesis", href: "https://www.etstur.com/Alanya-Otelleri" },
  { title: "Sapanca Otelleri", image: "assets/popular-sapanca.jpg", count: "168 tesis", href: "https://www.etstur.com/Sapanca-Otelleri" },
  { title: "Bodrum Otelleri", image: "assets/popular-bodrum.jpg", count: "286 tesis", href: "https://www.etstur.com/Bodrum-Otelleri" },
  { title: "Fethiye Otelleri", image: "assets/theme-sea.jpg", count: "224 tesis", href: "https://www.etstur.com/Fethiye-Otelleri" },
  { title: "Marmaris Otelleri", image: "assets/theme-honeymoon.jpg", count: "198 tesis", href: "https://www.etstur.com/Marmaris-Otelleri" },
];

const vacationRegionChips = [
  { label: "Antalya Otelleri", href: "https://www.etstur.com/Antalya-Otelleri" },
  { label: "Kemer Otelleri", href: "https://www.etstur.com/Kemer-Otelleri" },
  { label: "Fethiye Otelleri", href: "https://www.etstur.com/Fethiye-Otelleri" },
  { label: "Marmaris Otelleri", href: "https://www.etstur.com/Marmaris-Otelleri" },
  { label: "Kaş Otelleri", href: "https://www.etstur.com/Kas-Otelleri" },
  { label: "Çeşme Otelleri", href: "https://www.etstur.com/Cesme-Otelleri" },
];

const popularThemes = [
  { title: "Otelpuan Ödüllü Tesisler", image: "assets/theme-award.jpg", count: "Seçkin oteller" },
  { title: "2 Çocuk Ücretsiz Oteller", image: "assets/theme-kids.jpg", count: "Aile fırsatları" },
  { title: "Denize Sıfır Oteller", image: "assets/theme-sea.jpg", count: "Sahilde tatil" },
  { title: "Balayı Villaları", image: "assets/theme-honeymoon.jpg", count: "Romantik kaçamak" },
];

const cityRegions = [
  { title: "İstanbul Otelleri", image: "assets/city-istanbul.jpg", count: "1.460 tesis", href: "https://www.etstur.com/Istanbul-Otelleri" },
  { title: "Ankara Otelleri", image: "assets/city-ankara.jpg", count: "428 tesis", href: "https://www.etstur.com/Ankara-Otelleri" },
  { title: "Nevşehir Otelleri", image: "assets/city-nevsehir.jpg", count: "356 tesis", href: "https://www.etstur.com/Nevsehir-Otelleri" },
  { title: "Muğla Otelleri", image: "assets/city-mugla.jpg", count: "1.120 tesis", href: "https://www.etstur.com/Mugla-Otelleri" },
  { title: "İzmir Otelleri", image: "assets/city-hotels.jpg", count: "684 tesis", href: "https://www.etstur.com/Izmir-Otelleri" },
  { title: "Bursa Otelleri", image: "assets/domestic-hotels.jpg", count: "246 tesis", href: "https://www.etstur.com/Bursa-Otelleri" },
];

const cityRegionChips = [
  { label: "İzmir Otelleri", href: "https://www.etstur.com/Izmir-Otelleri" },
  { label: "Bursa Otelleri", href: "https://www.etstur.com/Bursa-Otelleri" },
  { label: "Eskişehir Otelleri", href: "https://www.etstur.com/Eskisehir-Otelleri" },
  { label: "Trabzon Otelleri", href: "https://www.etstur.com/Trabzon-Otelleri" },
  { label: "Gaziantep Otelleri", href: "https://www.etstur.com/Gaziantep-Otelleri" },
  { label: "Adana Otelleri", href: "https://www.etstur.com/Adana-Otelleri" },
];

const cyprusRegions = [
  { title: "Lefkoşa Otelleri", image: "assets/cyprus-lefkosa.jpg", count: "Şehir otelleri", href: "https://www.etstur.com/Lefkosa-Otelleri" },
  { title: "Girne Otelleri", image: "assets/cyprus-girne.jpg", count: "Sahil otelleri", href: "https://www.etstur.com/Girne-Otelleri" },
  { title: "Bafra Otelleri", image: "assets/cyprus-bafra.jpg", count: "Resort oteller", href: "https://www.etstur.com/Bafra-Otelleri" },
  { title: "Gazimağusa Otelleri", image: "assets/cyprus-gazimagusa.jpg", count: "Tarihi rota", href: "https://www.etstur.com/Gazimagusa-Otelleri" },
  { title: "İskele Otelleri", image: "assets/cyprus-hotels.jpg", count: "Sahil otelleri", href: "https://www.etstur.com/Iskele-Otelleri" },
  { title: "Güzelyurt Otelleri", image: "assets/cyprus-girne.jpg", count: "Ada konaklaması", href: "https://www.etstur.com/Guzelyurt-Otelleri" },
];

const hotelTypeGroups = [
  {
    title: "Konaklama Türüne Göre",
    icon: BedDouble,
    tone: "blue",
    image: "assets/popular-sapanca.jpg",
    description: "Doğayla iç içe konaklamalardan şehir merkezindeki alternatiflere kadar farklı tesis türlerini keşfedin.",
    links: [
      { label: "Bungalov Evleri", href: "https://www.etstur.com/Bungalov-Evleri", icon: Trees },
      { label: "Apart Oteller", href: "https://www.etstur.com/Apart-Oteller", icon: Building2 },
      { label: "Butik Oteller", href: "https://www.etstur.com/Butik-Oteller", icon: House },
      { label: "Resort Oteller", href: "https://www.etstur.com/Resort-Oteller", icon: Hotel },
      { label: "Tatil Köyleri", href: "https://www.etstur.com/Tatil-Koyu-Resort-Oteller", icon: Umbrella },
      { label: "Tiny House Otelleri", href: "https://www.etstur.com/Tiny-House-Otelleri", icon: Hotel },
      { label: "Küçük Oteller", href: "https://www.etstur.com/Kucuk-Oteller", icon: KeyRound },
      { label: "Dağ Evleri", href: "https://www.etstur.com/Dag-Evleri", icon: MountainSnow },
    ],
  },
  {
    title: "Konseptine Göre Oteller",
    icon: Check,
    tone: "green",
    image: "assets/domestic-hotels.jpg",
    description: "Yeme içme hizmetlerinin kapsamına göre tatilinize en uygun otel konseptini kolayca karşılaştırın.",
    links: [
      { label: "Ultra Her Şey Dahil Oteller", href: "https://www.etstur.com/Ultra-Her-Sey-Dahil-Oteller", icon: Sparkles },
      { label: "Her Şey Dahil Oteller", href: "https://www.etstur.com/Her-Sey-Dahil-Oteller", icon: Utensils },
      { label: "5 Yıldızlı Oteller", href: "https://www.etstur.com/5-Yildizli-Oteller", icon: Star },
      { label: "Tam Pansiyon Oteller", href: "https://www.etstur.com/Tam-Pansiyon-Oteller", icon: Utensils },
      { label: "Yarım Pansiyon Oteller", href: "https://www.etstur.com/Yarim-Pansiyon-Oteller", icon: Sun },
      { label: "Ekonomik Oteller", href: "https://www.etstur.com/Ekonomik-Oteller", icon: BadgePercent },
      { label: "Oda Kahvaltı Oteller", href: "https://www.etstur.com/Oda-Kahvalti-Oteller", icon: Coffee },
    ],
  },
  {
    title: "Tatil Tarzına Göre",
    icon: Sparkles,
    tone: "orange",
    image: "assets/theme-honeymoon.jpg",
    description: "Dinlenme, romantik kaçamak, aile tatili veya kış macerası için öne çıkan otelleri inceleyin.",
    links: [
      { label: "Evcil Hayvan Dostu Oteller", href: "https://www.etstur.com/Evcil-Hayvan-Dostu-Oteller", icon: PawPrint },
      { label: "Çocuk Dostu Oteller", href: "https://www.etstur.com/Cocuk-Dostu-Oteller", icon: Baby },
      { label: "Yetişkin Otelleri", href: "https://www.etstur.com/Yetiskin-Otelleri", icon: Users },
      { label: "Balayı Otelleri", href: "https://www.etstur.com/Balayi-Otelleri", icon: Heart },
      { label: "Termal Oteller", href: "https://www.etstur.com/Termal-Oteller", icon: Bath },
      { label: "Aile Otelleri", href: "https://www.etstur.com/Aile-Otelleri", icon: Baby },
      { label: "Kayak Otelleri", href: "https://www.etstur.com/Kayak-Otelleri", icon: Snowflake },
      { label: "Kış Otelleri", href: "https://www.etstur.com/Kis-Otelleri", icon: ThermometerSnowflake },
      { label: "Doğa Otelleri", href: "https://www.etstur.com/Doga-Otelleri", icon: Trees },
    ],
  },
  {
    title: "Özelliklerine Göre",
    icon: ShieldCheck,
    tone: "teal",
    image: "assets/theme-sea.jpg",
    description: "Plaj, havuz, aquapark ve SPA gibi tatil deneyiminizi belirleyen özelliklere göre seçim yapın.",
    links: [
      { label: "Aquaparklı Oteller", href: "https://www.etstur.com/Aquapark-Otelleri", icon: Umbrella },
      { label: "Denize Sıfır Oteller", href: "https://www.etstur.com/Denize-Sifir-Oteller", icon: Waves },
      { label: "Swim-Up Odalı Oteller", href: "https://www.etstur.com/Swim-Up-Odali-Oteller", icon: Waves },
      { label: "Havuzlu Odaları Olan Oteller", href: "https://www.etstur.com/Havuzlu-Odalari-Olan-Oteller", icon: BedDouble },
      { label: "Kum Plajı Olan Oteller", href: "https://www.etstur.com/Kum-Plaji-Olan-Oteller", icon: Umbrella },
      { label: "Özel Havuzlu Oteller", href: "https://www.etstur.com/Ozel-Havuzlu-Oteller", icon: Bath },
      { label: "Isıtmalı Açık Havuzlu Oteller", href: "https://www.etstur.com/Isitmali-Acik-Havuzu-Olan-Oteller", icon: ThermometerSun },
    ],
  },
];

const affordableThemeOptionGroups = [
  { label: "Konaklama Türü", options: hotelTypeGroups[0].links.map((link) => link.label) },
  { label: "Tatil Tarzı", options: hotelTypeGroups[2].links.map((link) => link.label) },
  { label: "Otel Konsepti", options: hotelTypeGroups[1].links.map((link) => link.label) },
];

const hotelDiscoveryItems = [
  { label: "Resort Oteller", description: "Tatil odaklı geniş tesisler", href: "https://www.etstur.com/Resort-Oteller", icon: Hotel },
  { label: "Butik Oteller", description: "Özgün ve küçük ölçekli", href: "https://www.etstur.com/Butik-Oteller", icon: House },
  { label: "Bungalov Evleri", description: "Doğayla iç içe konaklama", href: "https://www.etstur.com/Bungalov-Evleri", icon: Trees },
  { label: "Aile Otelleri", description: "Ailece rahat bir tatil", href: "https://www.etstur.com/Aile-Otelleri", icon: Users },
  { label: "Balayı Otelleri", description: "Çiftlere özel deneyimler", href: "https://www.etstur.com/Balayi-Otelleri", icon: Heart },
  { label: "Termal Oteller", description: "Dinlenme ve yenilenme", href: "https://www.etstur.com/Termal-Oteller", icon: Bath },
  { label: "Şehir Otelleri", description: "Merkezi ve pratik konaklama", href: "https://www.etstur.com/Sehir-Otelleri", icon: Building2 },
  { label: "Kayak Otelleri", description: "Kış tatili ve pist keyfi", href: "https://www.etstur.com/Kayak-Otelleri", icon: MountainSnow },
];

const roomTypeGallery = [
  {
    title: "Standart Oda",
    description: "Bir veya iki kişi için temel konfor sunan, en sık tercih edilen oda.",
    image: "assets/room-types/standard-room.jpg",
  },
  {
    title: "Aile Odası",
    description: "Çocuklu aileler için daha geniş, bazen ara kapılı yatak düzeni.",
    image: "assets/room-types/family-room.jpg",
  },
  {
    title: "Süit Oda",
    description: "Yatak odası ile oturma alanını ayıran daha geniş bir oda tipi.",
    image: "assets/room-types/suite-room.jpg",
  },
  {
    title: "Swim-Up Oda",
    description: "Terasından ortak veya özel havuza doğrudan geçiş sağlar.",
    image: "assets/room-types/swim-up-room.jpg",
  },
  {
    title: "Villa",
    description: "Bağımsız giriş, geniş yaşam alanı ve daha fazla mahremiyet sunar.",
    image: "assets/room-types/villa-room.jpg",
  },
  {
    title: "Apart Oda",
    description: "Mutfak ve oturma alanıyla uzun konaklamalara uygun bir düzen sunar.",
    image: "assets/room-types/apart-room.jpg",
  },
];

const roomFeatureCloud = [
  { label: "Deniz Manzarası", icon: Waves, tone: "blue" },
  { label: "Balkon", icon: Sun, tone: "green" },
  { label: "Teras", icon: Umbrella, tone: "green" },
  { label: "Jakuzi", icon: Bath, tone: "violet" },
  { label: "Özel Havuz", icon: Waves, tone: "blue" },
  { label: "Mutfak", icon: CookingPot, tone: "orange" },
  { label: "Ara Kapılı", icon: KeyRound, tone: "orange" },
  { label: "2 Yatak Odası", icon: BedDouble, tone: "orange" },
  { label: "Oturma Alanı", icon: Sofa, tone: "violet" },
  { label: "Şömine", icon: Flame, tone: "coral" },
  { label: "Engelli Dostu", icon: Accessibility, tone: "teal" },
  { label: "Havuz Bağlantılı", icon: Waves, tone: "blue" },
  { label: "Oda Servisi", icon: Utensils, tone: "coral" },
  { label: "Minibar", icon: Refrigerator, tone: "blue" },
  { label: "Klima", icon: Snowflake, tone: "teal" },
  { label: "Televizyon", icon: Tv, tone: "violet" },
  { label: "Kablosuz İnternet", icon: Wifi, tone: "blue" },
  { label: "Kasa", icon: ShieldCheck, tone: "green" },
  { label: "Saç Kurutma Makinesi", icon: Wind, tone: "coral" },
  { label: "Banyo Ürünleri", icon: Bath, tone: "violet" },
  { label: "Bebek Karyolası", icon: Baby, tone: "teal" },
  { label: "Çalışma Masası", icon: Laptop, tone: "violet" },
  { label: "Ütü Ekipmanı", icon: Shirt, tone: "coral" },
  { label: "Uyandırma Servisi", icon: Clock3, tone: "blue" },
];

const hotelAmenityGroups = [
  {
    title: "Genel Hizmetler",
    description: "Konaklamayı kolaylaştıran temel tesis hizmetleri",
    icon: Hotel,
    tone: "blue",
    amenities: ["Kablosuz İnternet", "24 Saat Resepsiyon", "Otopark", "Bagaj Odası", "Oda Servisi"],
  },
  {
    title: "Havuz",
    description: "Tesisteki ve odaya bağlı havuz seçenekleri",
    icon: Waves,
    tone: "teal",
    amenities: ["Açık Havuz", "Kapalı Havuz", "Isıtmalı Açık Havuz", "Isıtmalı Kapalı Havuz", "Sonsuzluk Havuzu", "Termal Havuz", "Çocuk Havuzu", "Aquapark", "Odaya Özel Havuz", "Swim-Up Havuz Erişimi"],
  },
  {
    title: "Plaj",
    description: "Sahil yapısını ve plaj kullanımını belirleyen olanaklar",
    icon: Umbrella,
    tone: "blue",
    amenities: ["Özel Plaj", "Mavi Bayraklı Plaj", "Kum Plaj", "Kum-Çakıl Plaj", "İskele", "Plaj Şemsiye ve Şezlongu"],
  },
  {
    title: "Yeme ve İçme",
    description: "Tesis içindeki yeme ve içme alternatifleri",
    icon: Utensils,
    tone: "orange",
    amenities: ["Restoran", "A la Carte Restoran", "Bar", "Havuz Bar", "Kahvaltı Salonu"],
  },
  {
    title: "SPA ve Wellness",
    description: "Dinlenme ve yenilenmeye yönelik tesis alanları",
    icon: Bath,
    tone: "violet",
    amenities: ["SPA Merkezi", "Hamam", "Sauna", "Buhar Odası", "Masaj"],
  },
  {
    title: "Aile ve Çocuk",
    description: "Çocuklu ailelerin tatilini kolaylaştıran hizmetler",
    icon: Baby,
    tone: "green",
    amenities: ["Mini Kulüp", "Çocuk Oyun Alanı", "Çocuk Havuzu", "Çocuk Menüsü", "Bebek Bakıcısı"],
  },
  {
    title: "Spor ve Eğlence",
    description: "Aktif ve hareketli bir tatil için sunulan seçenekler",
    icon: Dumbbell,
    tone: "coral",
    amenities: ["Fitness", "Su Sporları", "Tenis", "Masa Tenisi", "Canlı Müzik", "Animasyon"],
  },
  {
    title: "İş ve Ulaşım",
    description: "İş seyahati ve ulaşım ihtiyaçlarına yönelik hizmetler",
    icon: Briefcase,
    tone: "slate",
    amenities: ["Toplantı Salonu", "İş Merkezi", "Havaalanı Transferi", "Vale Servisi", "Elektrikli Araç Şarjı"],
  },
];

const affordableLocationSuggestions = [
  "Antalya", "Alanya", "Belek", "Kemer", "Manavgat", "Muğla", "Bodrum", "Marmaris",
  "Fethiye", "Ölüdeniz", "Aydın", "Didim", "Kuşadası", "İzmir", "Çeşme", "İstanbul",
  "Ankara", "Bursa", "Sapanca", "Kıbrıs", "Girne", "Bafra",
];

const popularHotels = [
  {
    title: "Voyage Kundu",
    location: "Lara-Kundu, Antalya",
    href: "https://www.etstur.com/Voyage-Kundu",
    image: "assets/popular-hotels/voyage-kundu.jpg",
    score: "8.6",
    scoreLabel: "Çok iyi",
    reviews: "532 değerlendirme",
    features: ["Denize sıfır", "Balayı", "Isıtmalı açık havuz"],
  },
  {
    title: "Anda Barut Collection",
    location: "Didim, Aydın",
    href: "https://www.etstur.com/Anda-Barut-Collection",
    image: "assets/popular-hotels/anda-barut-collection.jpg",
    score: "9.3",
    scoreLabel: "Mükemmel",
    reviews: "1.430 değerlendirme",
    features: ["Denize sıfır", "Balayı", "Aquapark"],
  },
  {
    title: "Kremlin Palace",
    location: "Lara-Kundu, Antalya",
    href: "https://www.etstur.com/Kremlin-Palace",
    image: "assets/popular-hotels/kremlin-palace.jpg",
    score: "8.4",
    scoreLabel: "Çok iyi",
    reviews: "4.756 değerlendirme",
    features: ["Denize sıfır", "Aquapark", "Çocuk dostu"],
  },
  {
    title: "Mirage Park Resort",
    location: "Göynük, Kemer",
    href: "https://www.etstur.com/Mirage-Park-Resort",
    image: "assets/popular-hotels/mirage-park-resort.jpg",
    score: "9.0",
    scoreLabel: "Mükemmel",
    reviews: "1.191 değerlendirme",
    features: ["Denize sıfır", "2 çocuk ücretsiz"],
  },
  {
    title: "Grand Hotel Ontur",
    location: "Çeşme, İzmir",
    href: "https://www.etstur.com/Grand-Hotel-Ontur",
    image: "assets/popular-hotels/grand-hotel-ontur.jpg",
    score: "7.7",
    scoreLabel: "İyi",
    reviews: "777 değerlendirme",
    features: ["Denize sıfır", "Özel plaj", "Spa oteli"],
  },
  {
    title: "Nirvana Dolce Vita",
    location: "Tekirova, Kemer",
    href: "https://www.etstur.com/Nirvana-Dolce-Vita",
    image: "assets/popular-hotels/nirvana-dolce-vita.jpg",
    score: "8.8",
    scoreLabel: "Çok iyi",
    reviews: "2.272 değerlendirme",
    features: ["Denize sıfır", "Balayı", "Aquapark"],
  },
  {
    title: "Vikingen Infinity Resort & Spa",
    location: "Türkler, Alanya",
    href: "https://www.etstur.com/Vikingen-Infinity-Resort-Spa",
    image: "assets/popular-hotels/vikingen-infinity.jpg",
    score: "7.8",
    scoreLabel: "İyi",
    reviews: "3.658 değerlendirme",
    features: ["Denize sıfır", "Aquapark", "Aile oteli"],
  },
  {
    title: "Starlight Resort Hotel",
    location: "Manavgat, Antalya",
    href: "https://www.etstur.com/Starlight-Resort-Hotel",
    image: "assets/popular-hotels/starlight-resort-hotel.jpg",
    score: "9.3",
    scoreLabel: "Mükemmel",
    reviews: "1.407 değerlendirme",
    features: ["Denize sıfır", "Balayı", "2 çocuk ücretsiz"],
  },
];

const cityPopularHotels = [
  {
    title: "Anemon Koleksiyon Galata Otel",
    location: "Beyoğlu, İstanbul",
    href: "https://www.etstur.com/Anemon-Koleksiyon-Galata-Otel",
    image: "assets/popular-hotels/anemon-galata.jpg",
    score: "8.7",
    scoreLabel: "Çok iyi",
    reviews: "144 değerlendirme",
    features: ["Şehir oteli", "Galata Kulesi'ne yakın"],
  },
  {
    title: "Hilton İstanbul Kozyatağı",
    location: "Kadıköy, İstanbul",
    href: "https://www.etstur.com/Hilton-Istanbul-Kozyatagi",
    image: "assets/popular-hotels/hilton-kozyatagi.jpg",
    score: "7.9",
    scoreLabel: "İyi",
    reviews: "1.405 değerlendirme",
    features: ["Şehir oteli", "Otopark"],
  },
  {
    title: "Rixos Tersane Istanbul + Nickelodeon Play Tersane Access",
    location: "Beyoğlu, İstanbul",
    href: "https://www.etstur.com/Rixos-Tersane-Istanbul---Nickelodeon-Play-Tersane-Access",
    image: "assets/popular-hotels/rixos-tersane.jpg",
    score: "9.3",
    scoreLabel: "Mükemmel",
    reviews: "136 değerlendirme",
    features: ["Şehir oteli", "Isıtmalı açık havuz"],
  },
  {
    title: "Sheraton Grand İstanbul Ataşehir",
    location: "Ataşehir, İstanbul",
    href: "https://www.etstur.com/Sheraton-Grand-Istanbul-Atasehir",
    image: "assets/popular-hotels/sheraton-atasehir.jpg",
    score: "9.4",
    scoreLabel: "Mükemmel",
    reviews: "107 değerlendirme",
    features: ["Şehir oteli", "Otopark"],
  },
];

const cyprusPopularHotels = [
  {
    title: "Concorde Aria Hotel",
    location: "Bafra, Kuzey Kıbrıs",
    href: "https://www.etstur.com/Concorde-Aria-Hotel",
    image: "assets/popular-hotels/concorde-aria.jpg",
    score: "9.5",
    scoreLabel: "Mükemmel",
    reviews: "34 değerlendirme",
    features: ["Denize sıfır", "Özel plaj"],
  },
  {
    title: "Elexus Hotel Resort Casino",
    location: "Çatalköy, Girne",
    href: "https://www.etstur.com/Elexus-Hotel-Resort-Casino",
    image: "assets/popular-hotels/elexus.jpg",
    score: "9.8",
    scoreLabel: "Mükemmel",
    reviews: "6.153 değerlendirme",
    features: ["Denize sıfır", "Casino", "Aquapark"],
  },
  {
    title: "Acapulco Resort Convention Spa",
    location: "Çatalköy, Girne",
    href: "https://www.etstur.com/Acapulco-Resort-Convention-Spa",
    image: "assets/popular-hotels/acapulco.jpg",
    score: "7.7",
    scoreLabel: "İyi",
    reviews: "3.727 değerlendirme",
    features: ["Denize sıfır", "Aquapark"],
  },
  {
    title: "Cratos Premium Hotel Casino Port Spa",
    location: "Çatalköy, Girne",
    href: "https://www.etstur.com/Cratos-Premium-Hotel-Casino-Port-Spa",
    image: "assets/popular-hotels/cratos-premium.jpg",
    score: "8.7",
    scoreLabel: "Çok iyi",
    reviews: "1.551 değerlendirme",
    features: ["Denize sıfır", "Casino", "Spa oteli"],
  },
];

const internationalPopularHotels = [
  {
    title: "Rixos Sharm El Sheikh (Adult-Only +18)",
    location: "Şarm El-Şeyh, Mısır",
    href: "https://www.etstur.com/Rixos-Sharm-El-Sheikh-Adult-only-18-",
    image: "assets/popular-hotels/rixos-sharm-adult.jpg",
    score: "9.0",
    scoreLabel: "Çok iyi",
    reviews: "100 değerlendirme",
    features: ["Denize sıfır", "Balayı", "Isıtmalı açık havuz"],
  },
  {
    title: "Rixos Premium Seagate Sharm El Sheikh",
    location: "Şarm El-Şeyh, Mısır",
    href: "https://www.etstur.com/Rixos-Premium-Seagate",
    image: "assets/popular-hotels/rixos-premium-seagate.jpg",
    score: "8.8",
    scoreLabel: "Çok iyi",
    reviews: "135 değerlendirme",
    features: ["Denize sıfır", "Özel plaj", "Isıtmalı açık havuz"],
  },
  {
    title: "Swissotel Sharm El Sheikh All Inclusive Collection",
    location: "Şarm El-Şeyh, Mısır",
    href: "https://www.etstur.com/Swissotel-Sharm-El-Sheikh-All-Inclusive-Collection",
    image: "assets/popular-hotels/swissotel-sharm.jpg",
    score: "8.6",
    scoreLabel: "Çok iyi",
    reviews: "80 değerlendirme",
    features: ["Denize sıfır", "Isıtmalı açık havuz", "Türkçe rehberlik"],
  },
  {
    title: "Rixos Radamis Beach Hotel",
    location: "Şarm El-Şeyh, Mısır",
    href: "https://www.etstur.com/Rixos-Radamis-Beach-Hotel",
    image: "assets/popular-hotels/rixos-radamis-beach.jpg",
    score: "8.8",
    scoreLabel: "Çok iyi",
    reviews: "7 değerlendirme",
    features: ["Denize sıfır", "Isıtmalı açık havuz", "Türkçe rehberlik"],
  },
];

const popularHotelGroups = [
  { id: "resorts", label: "Tatil Köyleri", hotels: popularHotels },
  { id: "city", label: "Şehir Otelleri", hotels: cityPopularHotels },
  { id: "cyprus", label: "Kıbrıs Otelleri", hotels: cyprusPopularHotels },
  { id: "international", label: "Yurt Dışı Otelleri", hotels: internationalPopularHotels },
];

const topRatedLocationSuggestions = [...new Set(
  popularHotelGroups.flatMap((group) => group.hotels.flatMap((hotel) => hotel.location.split(", "))),
)].sort((first, second) => first.localeCompare(second, "tr-TR"));

function getTopRatedHotelThemes(hotel, groupId) {
  const themes = new Set();
  const title = hotel.title.toLocaleLowerCase("tr-TR");
  const features = hotel.features.map((feature) => feature.toLocaleLowerCase("tr-TR"));

  if (groupId === "resorts" || title.includes("resort") || title.includes("rixos")) themes.add("Resort Oteller");
  if (features.includes("balayı")) themes.add("Balayı Otelleri");
  if (features.includes("aile oteli") || features.includes("çocuk dostu") || features.includes("2 çocuk ücretsiz")) {
    themes.add("Aile Otelleri");
  }
  if (features.includes("çocuk dostu") || features.includes("2 çocuk ücretsiz")) themes.add("Çocuk Dostu Oteller");
  if (title.includes("adult-only") || title.includes("adult only")) themes.add("Yetişkin Otelleri");
  if (title.includes("all inclusive")) themes.add("Her Şey Dahil Oteller");

  return [...themes];
}

const popularHotelGroupDescriptions = {
  resorts: "Tatil planlarında en çok ilgi gören tatil köyleri ve resort oteller.",
  city: "Merkezi konumları ve hizmetleriyle en çok ilgi gören şehir otelleri.",
  cyprus: "Kıbrıs tatili planlayan misafirlerin en çok incelediği oteller.",
  international: "Yurt dışı tatillerinde en çok ilgi gören seçkin oteller.",
};

const reviewAudienceTabs = [
  {
    id: "all",
    label: "Bütün Değerlendirmeler",
    description: "Tüm misafirlerin değerlendirmelerine göre en yüksek puan alan oteller.",
  },
  {
    id: "couples",
    label: "Çiftler",
    description: "Çift olarak konaklayan misafirlerin değerlendirmelerine göre en yüksek puan alan oteller.",
  },
  {
    id: "families",
    label: "Aileler",
    description: "Ailesiyle konaklayan misafirlerin değerlendirmelerine göre en yüksek puan alan oteller.",
  },
  {
    id: "friends",
    label: "Arkadaş Grupları",
    description: "Arkadaş grubuyla konaklayan misafirlerin değerlendirmelerine göre en yüksek puan alan oteller.",
  },
  {
    id: "solo",
    label: "Yalnız",
    description: "Yalnız konaklayan misafirlerin değerlendirmelerine göre en yüksek puan alan oteller.",
  },
];

const reviewAudienceHotelTitles = {
  couples: [
    "Anda Barut Collection",
    "Starlight Resort Hotel",
    "Rixos Sharm El Sheikh (Adult-Only +18)",
    "Nirvana Dolce Vita",
    "Voyage Kundu",
    "Cratos Premium Hotel Casino Port Spa",
    "Grand Hotel Ontur",
  ],
  families: [
    "Elexus Hotel Resort Casino",
    "Anda Barut Collection",
    "Starlight Resort Hotel",
    "Mirage Park Resort",
    "Nirvana Dolce Vita",
    "Kremlin Palace",
    "Vikingen Infinity Resort & Spa",
    "Acapulco Resort Convention Spa",
  ],
  friends: [
    "Elexus Hotel Resort Casino",
    "Sheraton Grand İstanbul Ataşehir",
    "Rixos Tersane Istanbul + Nickelodeon Play Tersane Access",
    "Cratos Premium Hotel Casino Port Spa",
    "Anemon Koleksiyon Galata Otel",
    "Hilton İstanbul Kozyatağı",
  ],
  solo: [
    "Sheraton Grand İstanbul Ataşehir",
    "Rixos Tersane Istanbul + Nickelodeon Play Tersane Access",
    "Rixos Sharm El Sheikh (Adult-Only +18)",
    "Cratos Premium Hotel Casino Port Spa",
    "Anemon Koleksiyon Galata Otel",
    "Swissotel Sharm El Sheikh All Inclusive Collection",
    "Hilton İstanbul Kozyatağı",
  ],
};

const affordableHotels = [
  {
    title: "Julian Club Hotel",
    location: "Armutalan, Marmaris",
    href: "https://www.etstur.com/Julian-Club-Hotel",
    image: "assets/popular-hotels/julian-club-hotel.jpg",
    score: "9.0",
    scoreLabel: "Çok iyi",
    reviews: "460 değerlendirme",
    features: ["Aile oteli", "Açık havuz"],
    filterThemes: ["Resort Oteller", "Aile Otelleri", "Çocuk Dostu Oteller", "Her Şey Dahil Oteller", "Ekonomik Oteller"],
  },
  {
    title: "Hotel Esra Family",
    location: "Altınkum, Didim",
    href: "https://www.etstur.com/Hotel-Esra-Family",
    image: "assets/popular-hotels/hotel-esra-family.jpg",
    score: "9.0",
    scoreLabel: "Çok iyi",
    reviews: "718 değerlendirme",
    features: ["Aile oteli", "Çocuk dostu"],
    filterThemes: ["Resort Oteller", "Aile Otelleri", "Çocuk Dostu Oteller", "Her Şey Dahil Oteller", "Ekonomik Oteller"],
  },
  {
    title: "Sundia By Liberty Ölüdeniz",
    location: "Ölüdeniz, Fethiye",
    href: "https://www.etstur.com/Sundia-By-Liberty-Oludeniz",
    image: "assets/popular-hotels/sundia-oludeniz.jpg",
    score: "8.9",
    scoreLabel: "Çok iyi",
    reviews: "654 değerlendirme",
    features: ["Balayı", "Aile oteli", "Isıtmalı açık havuz"],
    filterThemes: ["Resort Oteller", "Balayı Otelleri", "Aile Otelleri", "Çocuk Dostu Oteller", "Her Şey Dahil Oteller", "5 Yıldızlı Oteller", "Ekonomik Oteller"],
  },
  {
    title: "Grand Paşa Hotel",
    location: "Marmaris, Muğla",
    href: "https://www.etstur.com/Grand-Pasa-Hotel",
    image: "assets/popular-hotels/grand-pasa-hotel.jpg",
    score: "8.9",
    scoreLabel: "Çok iyi",
    reviews: "219 değerlendirme",
    features: ["Balayı", "Açık havuz"],
    filterThemes: ["Resort Oteller", "Balayı Otelleri", "Her Şey Dahil Oteller", "5 Yıldızlı Oteller", "Ekonomik Oteller"],
  },
  {
    title: "Ephesia Resort Hotel",
    location: "Kuşadası, Aydın",
    href: "https://www.etstur.com/Ephesia-Resort-Hotel",
    image: "assets/popular-hotels/ephesia-resort.jpg",
    score: "8.2",
    scoreLabel: "Çok iyi",
    reviews: "2.350 değerlendirme",
    features: ["Denize sıfır", "Balayı", "Çocuk dostu"],
    filterThemes: ["Resort Oteller", "Tatil Köyleri", "Balayı Otelleri", "Aile Otelleri", "Çocuk Dostu Oteller", "Her Şey Dahil Oteller", "5 Yıldızlı Oteller", "Ekonomik Oteller"],
  },
  {
    title: "Garden Of Sun Hotel",
    location: "Didim, Aydın",
    href: "https://www.etstur.com/Garden-Of-Sun-Hotel",
    image: "assets/popular-hotels/garden-of-sun.jpg",
    score: "8.1",
    scoreLabel: "Çok iyi",
    reviews: "2.997 değerlendirme",
    features: ["Aile oteli", "2 çocuk ücretsiz"],
    filterThemes: ["Resort Oteller", "Aile Otelleri", "Çocuk Dostu Oteller", "Her Şey Dahil Oteller", "5 Yıldızlı Oteller", "Ekonomik Oteller"],
  },
  {
    title: "Club Müskebi",
    location: "Ortakent, Bodrum",
    href: "https://www.etstur.com/Club-Muskebi",
    image: "assets/popular-hotels/club-muskebi.jpg",
    score: "8.1",
    scoreLabel: "Çok iyi",
    reviews: "2.022 değerlendirme",
    features: ["Denize sıfır", "Özel plaj", "Aile oteli"],
    filterThemes: ["Resort Oteller", "Tatil Köyleri", "Aile Otelleri", "Çocuk Dostu Oteller", "Her Şey Dahil Oteller", "Ekonomik Oteller"],
  },
  {
    title: "Bitez Risa Hotel",
    location: "Bitez, Bodrum",
    href: "https://www.etstur.com/Bitez-Risa-Hotel",
    image: "assets/popular-hotels/bitez-risa.jpg",
    score: "7.8",
    scoreLabel: "İyi",
    reviews: "809 değerlendirme",
    features: ["Aile oteli", "Plaja 100 m"],
    filterThemes: ["Resort Oteller", "Aile Otelleri", "Çocuk Dostu Oteller", "Her Şey Dahil Oteller", "Ekonomik Oteller"],
  },
];

const internationalRegions = [
  { title: "Dubai Otelleri", image: "assets/city-hotels.jpg", count: "Şehir ve sahil otelleri", href: "https://www.etstur.com/dubai-60715" },
  { title: "Mısır Otelleri", image: "assets/theme-sea.jpg", count: "Resort oteller", href: "https://www.etstur.com/egypt-690" },
  { title: "Bali Otelleri", image: "assets/popular-bodrum.jpg", count: "Ada otelleri", href: "https://www.etstur.com/bali-133706" },
  { title: "Roma Otelleri", image: "assets/theme-award.jpg", count: "Merkezi konaklama", href: "https://www.etstur.com/rome-160741" },
  { title: "Şarm El-Şeyh Otelleri", image: "assets/theme-kids.jpg", count: "Kızıldeniz tatili", href: "https://www.etstur.com/sharm-el-sheikh-281105" },
  { title: "Marsa Alam Otelleri", image: "assets/theme-honeymoon.jpg", count: "Sahil otelleri", href: "https://www.etstur.com/marsa-alam-241172" },
];

const internationalRegionChips = [
  { label: "Pattaya Otelleri", href: "https://www.etstur.com/pattaya-56011" },
  { label: "Bali Otelleri", href: "https://www.etstur.com/bali-133706" },
  { label: "Roma Otelleri", href: "https://www.etstur.com/rome-160741" },
  { label: "Mısır Otelleri", href: "https://www.etstur.com/egypt-690" },
  { label: "Dubai Otelleri", href: "https://www.etstur.com/dubai-60715" },
  { label: "Marsa Alam Otelleri", href: "https://www.etstur.com/marsa-alam-241172" },
];

const faqItems = [
  {
    question: "Otel seçerken nelere dikkat edilmeli?",
    answer: "Konum, bütçe, pansiyon tipi, oda özellikleri, tesis olanakları ve iptal koşulları birlikte değerlendirilmelidir. Misafir yorumlarını ve otelin tatil beklentinize uygunluğunu da kontrol edin.",
  },
  {
    question: "İyi bir otel nasıl seçilir?",
    answer: "İyi otel, en yüksek puanlı veya en pahalı tesisten çok ihtiyaçlarınıza en iyi cevap veren tesistir. Konumu, temizlik ve hizmet yorumlarını, oda yapısını ve sunulan olanakları seyahat amacınızla karşılaştırın.",
  },
  {
    question: "Otellerde yıldız sayısı ne anlama gelir?",
    answer: "Yıldız sayısı; tesisin fiziki yapısı, hizmet kapsamı ve belirli standartlara uygunluğu hakkında genel bir sınıflandırma sunar. Tek başına deneyim garantisi olmadığı için güncel misafir yorumlarıyla birlikte değerlendirilmelidir.",
  },
  {
    question: "Resort otel ile standart otel arasındaki fark nedir?",
    answer: "Resort oteller genellikle havuz, plaj, restoran, spor, eğlence ve çocuk alanları gibi kapsamlı olanakları tek tesis içinde sunar. Standart oteller ise daha çok konaklama ve temel hizmetlere odaklanabilir.",
  },
  {
    question: "Her şey dahil otel ne demek?",
    answer: "Her şey dahil konseptte ana öğünler ile tesisin belirlediği yiyecek ve içecekler belirli saatlerde konaklama fiyatına dahil edilir. Kapsam, marka ve servis saatleri her otelde farklı olabilir.",
  },
  {
    question: "Her şey dahil ile ultra her şey dahil arasındaki fark nedir?",
    answer: "Ultra her şey dahil konsept, her şey dahile kıyasla daha uzun servis saatleri, daha geniş içecek seçimi ve ek atıştırmalıklar sunabilir. Kesin farklar tesisin konsept açıklamasında belirtilir.",
  },
  {
    question: "Tam pansiyon ile yarım pansiyon arasındaki fark nedir?",
    answer: "Tam pansiyonda genellikle kahvaltı, öğle ve akşam yemeği; yarım pansiyonda ise kahvaltı ve akşam yemeği sunulur. İçecekler ve ara öğünler çoğu tesiste ayrıca ücretlendirilebilir.",
  },
  {
    question: "Oda kahvaltı, yarım pansiyon ve tam pansiyon arasındaki fark nedir?",
    answer: "Oda kahvaltıda yalnızca kahvaltı; yarım pansiyonda genellikle kahvaltı ve akşam yemeği; tam pansiyonda ise kahvaltı, öğle ve akşam yemeği fiyata dahildir. Uygulama detayları tesise göre değişir.",
  },
  {
    question: "Hangi otel konsepti kimler için daha uygundur?",
    answer: "Aile otelleri çocuklu misafirlere, yetişkin otelleri sakinlik arayan çiftlere, resort tesisler olanakların çoğunu otelde isteyenlere, şehir otelleri ise iş ve gezi odaklı konaklamalara daha uygun olabilir.",
  },
  {
    question: "Standart oda ile aile odası arasındaki fark nedir?",
    answer: "Standart odalar genellikle bir veya iki kişilik temel yatak düzenine sahiptir. Aile odaları daha geniş olabilir; ek yatak, ayrı uyuma alanı veya ara kapılı oda gibi seçenekler sunabilir.",
  },
  {
    question: "Swim-up oda nedir?",
    answer: "Swim-up oda, terasından bir havuza doğrudan erişim sağlayan oda tipidir. Havuz yalnızca odaya ait olabileceği gibi belirli odalar tarafından ortak da kullanılabilir.",
  },
  {
    question: "Otel fiyatları neye göre değişir?",
    answer: "Fiyatlar; tarih, talep, konum, oda tipi, pansiyon konsepti, konaklama süresi, kişi sayısı, iptal koşulu ve kampanyalara göre değişebilir. Aynı otelde farklı tarihler için farklı fiyatlar görülebilir.",
  },
  {
    question: "Ucuz otel nasıl bulunur?",
    answer: "Tarihleri esnek tutmak, alternatif bölgeleri karşılaştırmak, erken rezervasyon ve son dakika fırsatlarını izlemek avantaj sağlayabilir. Karşılaştırmada fiyata dahil hizmetleri ve iptal koşullarını da dikkate alın.",
  },
  {
    question: "Otel rezervasyonu nasıl yapılır?",
    answer: "Bölge veya otel adını, tarihleri ve konaklayacak kişi sayısını seçerek arama yapın. Uygun tesisi belirledikten sonra oda, pansiyon ve ödeme seçeneklerini kontrol ederek rezervasyonu tamamlayın.",
  },
  {
    question: "Otel rezervasyonu ne zaman yapılmalı?",
    answer: "Resmi tatil, bayram ve yaz sezonu gibi yoğun dönemlerde daha erken rezervasyon yapmak seçenekleri artırabilir. Tarihleriniz esnekse sezon dışı ve hafta içi alternatiflerini de inceleyebilirsiniz.",
  },
  {
    question: "Otel rezervasyonu iptal veya değiştirilebilir mi?",
    answer: "Bu durum seçilen fiyat paketinin koşullarına bağlıdır. Son ücretsiz iptal tarihini, kesinti oranını ve iadesiz rezervasyon bilgisini ödeme öncesinde kontrol edin.",
  },
  {
    question: "Otel rezervasyonu yaptıktan sonra süreç nasıl ilerler?",
    answer: "Rezervasyon tamamlandığında onay ve rezervasyon bilgileri paylaşılır. Misafir adlarını, tarihleri, oda ve pansiyon tipini kontrol edin; otele giderken rezervasyon bilgilerinizi erişilebilir durumda bulundurun.",
  },
  {
    question: "Otellerde check-in ve check-out ne demektir?",
    answer: "Check-in otele varışta kimlik ve rezervasyon kontrolüyle odaya giriş işlemlerinin; check-out ise konaklama sonunda hesabın kapatılıp odanın teslim edilmesinin genel adıdır.",
  },
  {
    question: "Otele erken giriş veya otelden geç çıkış yapılabilir mi?",
    answer: "Erken giriş ve geç çıkış genellikle tesisin doluluğuna ve oda müsaitliğine bağlıdır. Otel bu hizmet için ek ücret talep edebilir; talebinizi önceden tesise iletmeniz faydalı olur.",
  },
  {
    question: "Otele giriş yaparken hangi belgeler gerekir?",
    answer: "Otel girişinde konaklayacak misafirlerin geçerli kimlik veya seyahat belgeleri talep edilir. Çocuklar ve yurt dışından gelen misafirler için istenebilecek belgeler tesise ve seyahat koşullarına göre değişebilir.",
  },
  {
    question: "Otel fiyatına hangi hizmetler dahildir?",
    answer: "Dahil hizmetler seçilen oda ve pansiyon paketine göre belirlenir. Öğünler, içecekler, SPA, transfer, otopark ve bazı aktiviteler ayrıca ücretli olabilir; rezervasyon koşullarını inceleyin.",
  },
  {
    question: "Otel yorumları ve puanları nasıl değerlendirilmelidir?",
    answer: "Yalnızca ortalama puana değil, yorum sayısına, yorumların güncelliğine ve tekrar eden konulara bakın. Aile, çift veya yalnız gezgin gibi size benzeyen misafirlerin deneyimleri daha anlamlı olabilir.",
  },
];

const faqPlaceholderAnswer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris vitae faucibus tincidunt, neque sem feugiat lorem, sed ultrices sapien lacus at erat.";

const faqGroups = [
  {
    title: "Otel Seçimi ve Değerlendirme",
    questions: [
      "Otel seçerken nelere dikkat edilmeli?",
      "Otelin konumu ve çevresi nasıl değerlendirilmelidir?",
      "Otelin hangi misafir profiline uygun olduğu nasıl anlaşılır?",
      "Otellerde yıldız sayısı ne anlama gelir?",
      "Resort otel nedir ve diğer otellerden farkı nedir?",
      "Otel yorumları ve puanları nasıl değerlendirilmelidir?",
    ],
  },
  {
    title: "Otel Konseptleri ve Pansiyon Tipleri",
    questions: [
      "Her şey dahil ile ultra her şey dahil arasındaki fark nedir?",
      "Oda kahvaltı, yarım pansiyon ve tam pansiyon arasındaki fark nedir?",
      "Hangi otel konsepti kimler için daha uygundur?",
    ],
  },
  {
    title: "Otel Fiyatları ve Ödeme",
    questions: [
      "Otel fiyatları neye göre değişir?",
      "Otel rezervasyonunda görünen fiyata neler dahildir ve hangi ek ücretler çıkabilir?",
      "Otel rezervasyonunda daha avantajlı fiyat nasıl bulunur?",
      "Otel rezervasyonunda ödeme seçenekleri nelerdir?",
    ],
  },
  {
    title: "Rezervasyon, İptal, Değişiklik ve İade",
    questions: [
      "Otel rezervasyonu tamamlandıktan sonra onay ve rezervasyon belgeleri nasıl iletilir?",
      "Otel rezervasyonunda iptal veya değişiklik talebi nasıl iletilir ve hangi koşullar uygulanır?",
      "Ücretsiz iptal, iadesiz rezervasyon ve Erken Rezervasyon İptal ve İade Paketi ne anlama gelir?",
      "İptal edilen otel rezervasyonunun ücret iadesi nasıl ve ne zaman yapılır?",
    ],
  },
  {
    title: "Otele Giriş ve Çıkış Süreci",
    questions: [
      "Otele giriş ve çıkış süreci nasıl işler?",
      "Otele geç saatte giriş yapılabilir mi?",
      "Check-in sırasında depozito veya kredi kartı provizyonu alınabilir mi?",
    ],
  },
  {
    title: "Otele Ulaşım ve Transfer",
    questions: [
      "Havaalanı transferinde karşılama ve otele ulaşım süreci nasıl işler?",
      "Otel transferi nasıl çalışır ve rezervasyon fiyatına dahil midir?",
      "Transfer rezervasyonunda hangi bilgilerin verilmesi gerekir?",
      "Uçuş saatinin değişmesi veya gecikmesi durumunda transfer ne olur?",
    ],
  },
];

const popularLinkGroups = [
  {
    title: "Popüler Bölgeler",
    links: ["Antalya Otelleri", "Bodrum Otelleri", "Kemer Otelleri", "Belek Otelleri", "Fethiye Otelleri"],
  },
  {
    title: "Otel Temaları",
    links: ["Balayı Otelleri", "Termal Oteller", "Bungalov Oteller", "Kayak Otelleri", "Çocuk Dostu Oteller"],
  },
  {
    title: "Konaklama Tipleri",
    links: ["Her Şey Dahil", "Oda Kahvaltı", "Yarım Pansiyon", "Sadece Oda", "Ultra Her Şey Dahil"],
  },
  {
    title: "ETS Group",
    links: ["Otelpuan", "Lets Go", "Etsevent", "Jetset", "35 Yıldır Sizinleyiz"],
  },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationLinks = [
    { label: "Otel", href: "#top", dropdown: true },
    { label: "Tur", href: "https://www.etstur.com/Tur", dropdown: true },
    { label: "Kıbrıs", href: "https://www.etstur.com/Kibris", dropdown: true },
    { label: "Mısır", href: "https://www.etstur.com/Misir-Turlari", dropdown: true },
    { label: "Villa", href: "https://www.etstur.com/Villa", dropdown: true },
    { label: "Ulaşım", href: "https://www.etstur.com/Ulasim", dropdown: true },
    { label: "Kampanyalar", href: "#campaigns", dropdown: false },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="icon-button menu-button" aria-label="Menüyü aç" onClick={() => setMenuOpen(true)}>
          <Menu size={21} />
        </button>
        <a className="brand" href="#top" aria-label="Etstur ana sayfa">
          <img src="assets/etstur-logo.svg" alt="Etstur 35. yıl" />
        </a>
        <nav className="desktop-nav" aria-label="Ana navigasyon">
          {navigationLinks.map((item) => (
            <a key={item.label} className="nav-link" href={item.href}>
              {item.label}
              {item.dropdown ? <ChevronDown size={15} aria-hidden="true" /> : null}
            </a>
          ))}
          <a className="nav-link nav-highlight" href="#campaigns">ETS Yaz Fırsatları</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button mobile-only" aria-label="Bizi arayın">
            <Phone size={21} />
          </button>
          <button className="account-button" aria-label="Hesabım">
            <CircleUserRound size={23} />
            <span>Hesabım</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobil menü">
          <div className="mobile-menu-header">
            <img src="assets/etstur-logo.svg" alt="Etstur 35. yıl" />
            <button className="icon-button" aria-label="Menüyü kapat" onClick={() => setMenuOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <nav>
            {[...navigationLinks, { label: "ETS Yaz Fırsatları", href: "#campaigns" }].map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>{item.label}</span>
                <ChevronRight size={18} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function CalendarMonth({ title, days, selectedDates, onSelect }) {
  return (
    <div className="calendar-month">
      <h4>{title}</h4>
      <div className="weekdays" aria-hidden="true">
        {['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz'].map((day) => <span key={day}>{day}</span>)}
      </div>
      <div className="calendar-grid">
        {days.map((day, index) => {
          if (!day) return <span key={`empty-${index}`} />;
          const value = `${title}-${day}`;
          const selected = selectedDates.includes(value);
          return (
            <button key={value} className={selected ? "selected-day" : ""} onClick={() => onSelect(value, `${day} ${title.split(' ')[0]}`)}>
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SearchBar() {
  const [panel, setPanel] = useState(null);
  const [destination, setDestination] = useState("Nereye Gideceksiniz?");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const onEscape = (event) => event.key === "Escape" && setPanel(null);
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  const filteredDestinations = useMemo(() => {
    const query = destinationQuery.toLocaleLowerCase("tr-TR");
    return destinationOptions.filter((item) => `${item.name} ${item.detail}`.toLocaleLowerCase("tr-TR").includes(query));
  }, [destinationQuery]);

  const selectDate = (value, label) => {
    if (!checkIn || checkOut) {
      setCheckIn(label);
      setCheckOut("");
      setSelectedDates([value]);
      return;
    }
    setCheckOut(label);
    setSelectedDates((current) => [...current, value]);
    window.setTimeout(() => setPanel(null), 180);
  };

  const runSearch = (event) => {
    event?.preventDefault();
    if (!checkIn || !checkOut) {
      setPanel("dates");
      setNotice("Aramaya devam etmek için tarih aralığını belirleyin.");
      return;
    }
    const place = destination === "Nereye Gideceksiniz?" ? "Türkiye" : destination.replace(" Otelleri", "");
    setNotice(`${place} için ${adults + children} misafire uygun otelleri hazırladık.`);
    setPanel(null);
    scrollToId("regions");
  };

  const togglePanel = (name) => setPanel((current) => current === name ? null : name);

  return (
    <section className="search-shell" aria-label="Otel arama">
      <div className="search-hero-copy">
        <h1>Oteller</h1>
        <p>Hospitia varia, loca amoena et officia diligenter composita tibi ad iter quietum et memorabile parata sunt. Elige locum quem cupis, tempora constitue, atque commorationem tuam facile incipe.</p>
      </div>
      <form className="search-bar" role="search" onSubmit={runSearch}>
        <div className="search-field destination-field">
          <button type="button" onClick={() => togglePanel("destination")} aria-expanded={panel === "destination"}>
            <MapPin size={20} />
            <span>
              <small>Otel veya bölge</small>
              <strong>{destination}</strong>
            </span>
          </button>
          {panel === "destination" ? (
            <div className="search-popover destination-popover">
              <label>
                <Search size={18} />
                <input autoFocus value={destinationQuery} onChange={(event) => setDestinationQuery(event.target.value)} placeholder="Otel veya bölge ara" />
              </label>
              <div className="destination-list">
                {filteredDestinations.map((item) => (
                  <button key={item.name} onClick={() => { setDestination(item.name); setDestinationQuery(""); setPanel("dates"); }}>
                    <MapPin size={18} />
                    <span><strong>{item.name}</strong><small>{item.detail}</small></span>
                    <ChevronRight size={17} />
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="search-field date-field">
          <button type="button" onClick={() => togglePanel("dates")} aria-expanded={panel === "dates"}>
            <CalendarDays size={20} />
            <span>
              <small>Giriş Tarihi</small>
              <strong>
                <span className="desktop-date-value">{checkIn || "Giriş Tarihi"}</span>
                <span className="mobile-date-value">{checkIn && checkOut ? `${checkIn} - ${checkOut}` : "Tarih Belirleyiniz"}</span>
              </strong>
            </span>
            <span className="date-separator" />
            <span>
              <small>Çıkış Tarihi</small>
              <strong>{checkOut || "Çıkış Tarihi"}</strong>
            </span>
          </button>
          {panel === "dates" ? (
            <div className="search-popover calendar-popover">
              <div className="popover-mobile-title">
                <button aria-label="Takvimi kapat" onClick={() => setPanel(null)}><ArrowLeft size={20} /></button>
                <strong>Tarih Seçin</strong>
              </div>
              <div className="calendar-tabs">
                <button className="active">Takvim</button>
                <button>Resmi Tatiller</button>
                <button>Hafta Sonu Tatilleri</button>
              </div>
              <div className="calendar-months">
                <CalendarMonth title="Ağustos 2026" days={[null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]} selectedDates={selectedDates} onSelect={selectDate} />
                <CalendarMonth title="Eylül 2026" days={[null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]} selectedDates={selectedDates} onSelect={selectDate} />
              </div>
              <div className="calendar-footer">
                <span><i /> 30 Ağustos Zafer Bayramı</span>
                <button onClick={() => { setCheckIn(""); setCheckOut(""); setSelectedDates([]); }}>Takvimi Temizle</button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="search-field guest-field">
          <button type="button" onClick={() => togglePanel("guests")} aria-expanded={panel === "guests"}>
            <Users size={20} />
            <span>
              <small>{adults + children} Kişi, {rooms} Oda</small>
              <strong>{adults} yetişkin{children ? `, ${children} çocuk` : ""}</strong>
            </span>
          </button>
          {panel === "guests" ? (
            <div className="search-popover guest-popover">
              <div className="popover-mobile-title">
                <button aria-label="Misafir panelini kapat" onClick={() => setPanel(null)}><ArrowLeft size={20} /></button>
                <strong>Misafir ve Oda</strong>
              </div>
              <h4>{rooms}. Oda</h4>
              <Counter label="Yetişkin Sayısı" value={adults} min={1} onChange={setAdults} />
              <Counter label="Çocuk Sayısı" value={children} min={0} onChange={setChildren} />
              <button className="add-room" onClick={() => setRooms((value) => Math.min(4, value + 1))}><Plus size={17} /> Yeni Oda Ekle</button>
              <button className="apply-button" onClick={() => setPanel(null)}>Uygula</button>
            </div>
          ) : null}
        </div>

        <button className="search-submit" type="submit" aria-label="Otel Ara">
          <Search size={28} />
          <span>Otel Ara</span>
        </button>
      </form>
      {panel ? <button className="page-overlay" aria-label="Açık paneli kapat" onClick={() => setPanel(null)} /> : null}
      {notice ? (
        <div className="search-notice" role="status">
          <Info size={17} />
          <span>{notice}</span>
          <button aria-label="Bildirimi kapat" onClick={() => setNotice("")}><X size={16} /></button>
        </div>
      ) : null}
    </section>
  );
}

function Counter({ label, value, min, onChange }) {
  return (
    <div className="counter-row">
      <span>{label}</span>
      <div className="counter-control">
        <button aria-label={`${label} azalt`} disabled={value <= min} onClick={() => onChange(value - 1)}><Minus size={18} /></button>
        <strong>{value}</strong>
        <button aria-label={`${label} artır`} onClick={() => onChange(value + 1)}><Plus size={18} /></button>
      </div>
    </div>
  );
}

function SectionNav() {
  return (
    <nav className="section-nav" aria-label="Sayfa bölümleri">
      <a href="#regions"><MapPin size={17} aria-hidden="true" /> Bölgeler</a>
      <a href="#hotel-types"><Sparkles size={17} aria-hidden="true" /> Temalar</a>
      <a href="#hotel-amenities"><Hotel size={17} aria-hidden="true" /> Olanaklar</a>
    </nav>
  );
}

function CategoryCard({ card }) {
  return (
    <article className="category-card">
      <img src={card.image} alt={card.title} />
      <div className="category-card-body">
        <h2>{card.title}</h2>
        <div className="category-links">
          {card.links.map((link) => <a key={link} href="#regions">{link}</a>)}
        </div>
        <a className="text-action" href="#regions">{card.action}<ArrowRight size={17} /></a>
      </div>
    </article>
  );
}

function ImageRail({ id, eyebrow, title, items }) {
  const railRef = useRef(null);
  const move = (direction) => railRef.current?.scrollBy({ left: direction * 304, behavior: "smooth" });

  return (
    <section className="image-section" id={id}>
      <div className="section-heading-row">
        <div>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
        </div>
        <div className="rail-controls">
          <button aria-label="Önceki kartlar" onClick={() => move(-1)}><ChevronLeft size={21} /></button>
          <button aria-label="Sonraki kartlar" onClick={() => move(1)}><ChevronRight size={21} /></button>
        </div>
      </div>
      <div className="image-rail" ref={railRef}>
        {items.map((item) => (
          <a className="image-card" href={item.href ?? "#top"} key={item.title}>
            <img src={item.image} alt={item.title} />
            <span className="image-card-copy"><strong>{item.title}</strong><small>{item.count}</small></span>
            <ChevronRight size={19} />
          </a>
        ))}
      </div>
    </section>
  );
}

function CampaignSection() {
  const railRef = useRef(null);
  const move = (direction) => railRef.current?.scrollBy({ left: direction * 380, behavior: "smooth" });

  return (
    <section className="campaign-section" id="campaigns" aria-labelledby="campaign-title">
      <div className="section-heading-row">
        <h2 id="campaign-title">Otel Kampanyaları ve Fırsatları</h2>
      </div>
      <div className="campaign-rail-wrap">
        <button className="opportunity-rail-button previous" aria-label="Önceki kampanyalar" onClick={() => move(-1)}>
          <ChevronLeft size={20} />
        </button>
        <div className="campaign-grid" ref={railRef}>
          {hotelCampaigns.slice(0, 6).map((campaign) => (
            <article className="campaign-card" key={campaign.title}>
              <img src={campaign.image} alt="" />
              <div>
                <h3>
                  <a href={campaign.href} target={campaign.external ? "_blank" : undefined} rel={campaign.external ? "noreferrer" : undefined}>
                    <span>{campaign.title}</span><ArrowRight size={16} />
                  </a>
                </h3>
                <p>{campaign.description}</p>
              </div>
            </article>
          ))}
        </div>
        <button className="opportunity-rail-button next" aria-label="Sonraki kampanyalar" onClick={() => move(1)}>
          <ChevronRight size={20} />
        </button>
      </div>
      <OpportunityCards />
    </section>
  );
}

function OpportunityCards() {
  return (
    <div className="opportunity-section" aria-label="Öne çıkan otel fırsatları">
      <p className="opportunity-heading">Öne Çıkan Otel Fırsatları</p>
      <div className="opportunity-rail-wrap">
        <div className="opportunity-grid">
          {offerCards.map((offer) => {
            const Icon = offer.icon;
            return (
              <article className={`opportunity-card ${offer.tone}`} key={offer.title}>
                <div className="opportunity-body">
                  <span className="opportunity-icon"><Icon size={18} /></span>
                  <h3>
                    <a href={offer.href}>
                      <span>{offer.title}</span>
                      <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  </h3>
                  <div className="opportunity-details">
                    <span><BedDouble size={15} aria-hidden="true" />{offer.count} otel</span>
                    {offer.promotion ? <strong>{offer.promotion}</strong> : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function RegionRailGroup({ title, href, items, chips = [], content }) {
  const railRef = useRef(null);
  const move = (direction) => railRef.current?.scrollBy({ left: direction * 304, behavior: "smooth" });

  return (
    <section className="region-rail-group" aria-labelledby={`${title}-title`}>
      <div className="region-group-heading">
        <h3 id={`${title}-title`}>
          {href ? <a href={href}>{title}<ArrowRight size={16} aria-hidden="true" /></a> : title}
        </h3>
        <div className="rail-controls">
          <button aria-label={`${title} için önceki lokasyonlar`} onClick={() => move(-1)}><ChevronLeft size={21} /></button>
          <button aria-label={`${title} için sonraki lokasyonlar`} onClick={() => move(1)}><ChevronRight size={21} /></button>
        </div>
      </div>
      <div className="region-content">
        <p>{content}</p>
      </div>
      <div className="image-rail region-image-rail" ref={railRef}>
        {items.map((item) => (
          <a className="image-card" href={item.href} key={item.title}>
            <img src={item.image} alt={item.title} />
            <span className="image-card-copy"><strong>{item.title}</strong><small>{item.count}</small></span>
            <ChevronRight size={19} />
          </a>
        ))}
      </div>
      {chips.length ? (
        <div className="region-chips" aria-label={`${title} için daha fazla lokasyon`}>
          {chips.map((chip) => <a href={chip.href} key={chip.label}>{chip.label}</a>)}
        </div>
      ) : null}
    </section>
  );
}

function PopularRegionsSection() {
  const regionGroups = [
    {
      tab: "Yurtiçi Otelleri",
      title: "Yurtiçi Tatil Otelleri",
      href: "https://www.etstur.com/Yurtici-Otel",
      items: popularRegions,
      chips: vacationRegionChips,
      content: "Deniz, doğa ve sakinlik arayanlar için yurt içindeki farklı konaklama seçeneklerini; tesis olanakları, konum ve pansiyon türlerine göre karşılaştırabilirsiniz.",
    },
    {
      tab: "Şehir Otelleri",
      title: "Şehir Otelleri",
      href: "https://www.etstur.com/Sehir-Otelleri",
      items: cityRegions,
      chips: cityRegionChips,
      content: "İş seyahatleri, kısa kaçamaklar ve kültür rotaları için merkezi konumda yer alan şehir otelleri arasından planınıza uygun seçenekleri inceleyebilirsiniz.",
    },
    {
      tab: "Kıbrıs Otelleri",
      title: "Kıbrıs Otelleri",
      href: "https://www.etstur.com/Kibris",
      items: cyprusRegions,
      content: "Sahil otellerinden şehir merkezindeki tesislere kadar Kıbrıs'ta konaklama seçeneklerini tatil beklentinize ve tercih ettiğiniz bölgeye göre keşfedebilirsiniz.",
    },
    {
      tab: "Yurtdışı Otelleri",
      title: "Yurtdışı Otelleri",
      href: "https://www.etstur.com/Yurt-Disi-Otelleri",
      items: internationalRegions,
      chips: internationalRegionChips,
      content: "Yakın şehirlerden tropik adalara kadar farklı ülkelerdeki konaklama seçeneklerini seyahat planınıza ve tatil tarzınıza göre değerlendirebilirsiniz.",
    },
  ];
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section className="popular-regions-section" id="regions" aria-labelledby="popular-regions-title">
      <h2 id="popular-regions-title">Popüler Otel Bölgeleri</h2>
      <div className="region-tabs" role="tablist" aria-label="Popüler otel bölgeleri">
        {regionGroups.map((group, index) => (
          <button
            aria-controls={`region-tab-panel-${index}`}
            aria-selected={activeRegion === index}
            id={`region-tab-${index}`}
            key={group.title}
            onClick={() => setActiveRegion(index)}
            role="tab"
            type="button"
          >
            {group.tab}
          </button>
        ))}
      </div>
      {regionGroups.map((group, index) => (
        <div
          aria-labelledby={`region-tab-${index}`}
          hidden={activeRegion !== index}
          id={`region-tab-panel-${index}`}
          key={group.title}
          role="tabpanel"
        >
          <RegionRailGroup title={group.title} href={group.href} items={group.items} chips={group.chips} content={group.content} />
        </div>
      ))}
    </section>
  );
}

function HotelTypeLinks({ links }) {
  return (
    <div className="hotel-type-links">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
        <a href={link.href} key={link.label}>
          <span className="hotel-type-link-icon"><LinkIcon size={16} aria-hidden="true" /></span>
          <span>{link.label}</span>
          <ArrowRight size={15} aria-hidden="true" />
        </a>
        );
      })}
    </div>
  );
}

function HotelTypesSection() {
  return (
    <section className="hotel-types-section" id="hotel-types" aria-labelledby="hotel-types-title">
      <h2 id="hotel-types-title">Popüler Otel Temaları</h2>

      <div className="hotel-theme-mosaic">
        {hotelTypeGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article
              className={`hotel-theme-card ${group.tone}`}
              key={group.title}
            >
              <div className="hotel-theme-card-body">
                <div className="hotel-theme-card-heading">
                  <span><Icon size={22} aria-hidden="true" /></span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>
                <HotelTypeLinks links={group.links} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function RoomTypesSection() {
  return (
    <section className="room-types-section" id="room-types" aria-labelledby="room-types-title">
      <div className="stay-explorer">
        <div className="stay-explorer-group stay-room-group">
          <div className="stay-explorer-heading">
            <span><BedDouble size={18} aria-hidden="true" /></span>
            <div>
              <h2 id="room-types-title">Otellerde Yaygın Oda Tipleri Nelerdir?</h2>
              <p>Konaklayacak kişi sayına ve istediğin alana göre karşılaştır.</p>
            </div>
          </div>
          <div className="room-type-gallery">
            {roomTypeGallery.map((roomType) => (
              <article key={roomType.title}>
                <img src={roomType.image} alt="" loading="lazy" />
                <div><h3>{roomType.title}</h3><p>{roomType.description}</p></div>
              </article>
            ))}
          </div>
        </div>

        <div className="stay-explorer-group stay-feature-group">
          <div className="stay-explorer-heading">
            <span><Sparkles size={18} aria-hidden="true" /></span>
            <div>
              <h3 id="room-features-title">Yaygın Oda Özellikleri Nelerdir?</h3>
              <p>Konforunu ve deneyimini tamamlayan popüler oda özellikleri.</p>
            </div>
          </div>
          <ul className="room-feature-cloud" aria-labelledby="room-features-title">
            {roomFeatureCloud.map((feature) => {
              const Icon = feature.icon;
              return <li className={feature.tone} key={feature.label}><Icon size={17} aria-hidden="true" />{feature.label}</li>;
            })}
          </ul>
          <aside className="room-discovery-note" aria-label="Oda özellikleri hakkında not"><Info size={15} aria-hidden="true" />Oda özellikleri tesise ve oda tipine göre değişebilir; bazı hizmetler ücretli sunulabilir.</aside>
        </div>
      </div>
    </section>
  );
}

function HotelAmenitiesSection() {
  return (
    <section className="hotel-amenities-section" id="hotel-amenities" aria-labelledby="hotel-amenities-title">
      <div className="hotel-amenities-heading">
        <h2 id="hotel-amenities-title">Yaygın Otel Olanakları Nelerdir?</h2>
        <p>Oteller; konseptlerine, konumlarına ve hizmet kapsamlarına göre farklı olanaklar sunar. Konaklama tercihinde öne çıkan, yaygın ve sık talep edilen olanaklardan bazıları aşağıda yer alır.</p>
      </div>

      <div className="hotel-amenities-table-wrap">
        <table className="hotel-amenities-table">
          <tbody>
            {hotelAmenityGroups.map((group) => {
              const Icon = group.icon;
              return (
                <tr key={group.title}>
                  <th scope="row">
                    <div className="hotel-amenity-category">
                      <span className={`hotel-amenity-category-icon ${group.tone}`}><Icon size={20} aria-hidden="true" /></span>
                      <span className="hotel-amenity-category-copy">
                        <strong>{group.title}</strong>
                        <small>{group.description}</small>
                      </span>
                    </div>
                  </th>
                  <td>
                    <ul>
                      {group.amenities.map((amenity) => (
                        <li key={amenity}>{amenity}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <aside className="hotel-amenities-note" aria-label="Otel olanakları hakkında not"><Info size={15} aria-hidden="true" />Olanakların kapsamı, kullanım saatleri ve ücretlendirmesi tesise ve sezona göre değişebilir.</aside>
    </section>
  );
}

function HotelCardRail({ hotels, railRef, onMove, label }) {
  return (
    <div className={`popular-hotels-rail-wrap ${hotels.length <= 4 ? "desktop-no-rail-controls" : ""} ${hotels.length <= 1 ? "single-card" : ""}`}>
      <button
        className="popular-hotels-rail-button previous"
        type="button"
        aria-label={`Önceki ${label}`}
        onClick={() => onMove(-1)}
      >
        <ChevronLeft size={21} />
      </button>
      <div className="popular-hotels-rail" ref={railRef}>
        {hotels.map((hotel) => (
          <article className="popular-hotel-card" key={hotel.title}>
            <a className="popular-hotel-image" href={hotel.href} aria-label={`${hotel.title} detaylarını incele`}>
              <img src={hotel.image} alt={hotel.title} loading="lazy" />
              {hotel.score ? (
                <span className="popular-hotel-score"><small>{hotel.scoreLabel}</small><strong>{hotel.score}</strong></span>
              ) : null}
            </a>
            <div className="popular-hotel-card-body">
              <h3>
                <a href={hotel.href}><span>{hotel.title}</span><ArrowRight size={17} aria-hidden="true" /></a>
              </h3>
              <p className="popular-hotel-location"><MapPin size={14} aria-hidden="true" />{hotel.location}</p>
              <p className="popular-hotel-review-count"><Star size={14} aria-hidden="true" />{hotel.reviews}</p>
              <ul className="popular-hotel-features" aria-label={`${hotel.title} özellikleri`}>
                {hotel.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <button
        className="popular-hotels-rail-button next"
        type="button"
        aria-label={`Sonraki ${label}`}
        onClick={() => onMove(1)}
      >
        <ChevronRight size={21} />
      </button>
    </div>
  );
}

function PopularHotelsSection() {
  const railRefs = useRef({});
  const [activeGroupId, setActiveGroupId] = useState(popularHotelGroups[0].id);
  const move = (direction) => railRefs.current[activeGroupId]?.scrollBy({ left: direction * 320, behavior: "smooth" });

  useEffect(() => {
    if (railRefs.current[activeGroupId]) railRefs.current[activeGroupId].scrollLeft = 0;
  }, [activeGroupId]);

  return (
    <section className="popular-hotels-section" id="popular-hotels" aria-labelledby="popular-hotels-title">
      <div className="popular-hotels-heading">
        <div>
          <div className="popular-hotels-title-row">
            <h2 id="popular-hotels-title">En Popüler Oteller</h2>
            <button
              className="popular-hotels-info"
              type="button"
              aria-label="En popüler otellerin listeleme ölçütünü öğrenin"
              data-tooltip="Bu listede Etstur'da en çok aranan ve incelenen oteller yer alır."
            >
              <Info size={16} aria-hidden="true" />
            </button>
          </div>
          <p>Etstur'da en çok aranan ve tatil planlarında öne çıkan otelleri keşfedin.</p>
        </div>
      </div>

      <div className="review-audience-tabs" role="tablist" aria-label="Popüler otel kategorileri">
        {popularHotelGroups.map((group) => (
          <button
            id={`popular-hotels-tab-${group.id}`}
            className={activeGroupId === group.id ? "active" : ""}
            type="button"
            role="tab"
            aria-selected={activeGroupId === group.id}
            aria-controls={`popular-hotels-panel-${group.id}`}
            key={group.id}
            onClick={() => setActiveGroupId(group.id)}
          >
            {group.label}
          </button>
        ))}
      </div>

      {popularHotelGroups.map((group) => (
        <div
          id={`popular-hotels-panel-${group.id}`}
          role="tabpanel"
          aria-labelledby={`popular-hotels-tab-${group.id}`}
          hidden={activeGroupId !== group.id}
          key={group.id}
        >
          <p className="review-audience-description">{popularHotelGroupDescriptions[group.id]}</p>
          <HotelCardRail
            hotels={group.hotels}
            railRef={(node) => { railRefs.current[group.id] = node; }}
            onMove={move}
            label={`${group.label.toLocaleLowerCase("tr-TR")} popüler oteller`}
          />
        </div>
      ))}
    </section>
  );
}

function TopRatedHotelsSection() {
  const railRefs = useRef({});
  const [activeAudienceId, setActiveAudienceId] = useState(reviewAudienceTabs[0].id);
  const [locationFilter, setLocationFilter] = useState("");
  const [themeFilter, setThemeFilter] = useState("all");
  const rankedHotelsByAudience = useMemo(() => {
    const normalizedLocation = locationFilter.trim().toLocaleLowerCase("tr-TR");
    const eligibleHotels = popularHotelGroups
      .flatMap((group) => group.hotels.map((hotel) => ({
        ...hotel,
        filterThemes: getTopRatedHotelThemes(hotel, group.id),
      })))
      .filter((hotel) => Number(hotel.reviews.split(" ")[0].replaceAll(".", "")) > 50)
      .filter((hotel) => !normalizedLocation || hotel.location.toLocaleLowerCase("tr-TR").includes(normalizedLocation))
      .filter((hotel) => themeFilter === "all" || hotel.filterThemes.includes(themeFilter));

    return Object.fromEntries(reviewAudienceTabs.map((audience) => {
      const audienceHotelTitles = reviewAudienceHotelTitles[audience.id];
      const hotels = eligibleHotels
        .filter((hotel) => !audienceHotelTitles || audienceHotelTitles.includes(hotel.title))
        .sort((first, second) => Number(second.score) - Number(first.score));
      return [audience.id, hotels];
    }));
  }, [locationFilter, themeFilter]);
  const rankedHotels = rankedHotelsByAudience[activeAudienceId] ?? [];
  const move = (direction) => railRefs.current[activeAudienceId]?.scrollBy({ left: direction * 320, behavior: "smooth" });
  const clearFilters = () => {
    setLocationFilter("");
    setThemeFilter("all");
  };

  useEffect(() => {
    if (railRefs.current[activeAudienceId]) railRefs.current[activeAudienceId].scrollLeft = 0;
  }, [activeAudienceId, locationFilter, themeFilter]);

  return (
    <section className="popular-hotels-section top-rated-hotels-section" id="top-rated-hotels" aria-labelledby="top-rated-hotels-title">
      <div className="popular-hotels-heading">
        <div>
          <div className="popular-hotels-title-row">
            <h2 id="top-rated-hotels-title">En Yüksek Puanlı Oteller</h2>
            <button
              className="popular-hotels-info"
              type="button"
              aria-label="En yüksek puanlı otellerin listeleme ölçütünü öğrenin"
              data-tooltip="50'den fazla değerlendirmeye sahip oteller arasından en yüksek puan alan tesisler listelenir."
            >
              <Info size={16} aria-hidden="true" />
            </button>
          </div>
          <p>Misafir değerlendirmelerinde öne çıkan yüksek puanlı otelleri keşfedin.</p>
        </div>
      </div>

      <div>
        <div className="review-audience-tabs" role="tablist" aria-label="Misafir değerlendirme türleri">
          {reviewAudienceTabs.map((audience) => (
            <button
              id={`review-audience-tab-${audience.id}`}
              className={activeAudienceId === audience.id ? "active" : ""}
              type="button"
              role="tab"
              aria-selected={activeAudienceId === audience.id}
              aria-controls={`review-audience-panel-${audience.id}`}
              key={audience.id}
              onClick={() => setActiveAudienceId(audience.id)}
            >
              {audience.label}
            </button>
          ))}
        </div>

        <div className="affordable-hotel-filters top-rated-hotel-filters" aria-label="En yüksek puanlı otelleri filtrele">
          <label>
            <MapPin size={18} aria-hidden="true" />
            <span>
              <small>Lokasyon</small>
              <input
                type="search"
                list="top-rated-location-suggestions"
                value={locationFilter}
                placeholder="Şehir, ilçe veya bölge yazın"
                aria-label="En yüksek puanlı oteller için lokasyon yazın"
                onChange={(event) => setLocationFilter(event.target.value)}
              />
              <datalist id="top-rated-location-suggestions">
                {topRatedLocationSuggestions.map((location) => <option value={location} key={location} />)}
              </datalist>
            </span>
          </label>
          <label>
            <Sparkles size={18} aria-hidden="true" />
            <span>
              <small>Tema ve konsept</small>
              <select value={themeFilter} onChange={(event) => setThemeFilter(event.target.value)}>
                <option value="all">Tüm temalar</option>
                {affordableThemeOptionGroups.map((group) => (
                  <optgroup label={group.label} key={group.label}>
                    {group.options.map((option) => <option value={option} key={option}>{option}</option>)}
                  </optgroup>
                ))}
              </select>
            </span>
            <ChevronDown size={17} aria-hidden="true" />
          </label>
          <button className="affordable-filters-clear" type="button" aria-label="En yüksek puanlı otel filtrelerini temizle" onClick={clearFilters}>
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <p className="affordable-filter-result" aria-live="polite">{rankedHotels.length} otel gösteriliyor</p>
        {reviewAudienceTabs.map((audience) => {
          const audienceHotels = rankedHotelsByAudience[audience.id] ?? [];
          return (
            <div
              id={`review-audience-panel-${audience.id}`}
              role="tabpanel"
              aria-labelledby={`review-audience-tab-${audience.id}`}
              hidden={activeAudienceId !== audience.id}
              key={audience.id}
            >
              <p className="review-audience-description">{audience.description}</p>
              {audienceHotels.length ? (
                <HotelCardRail
                  hotels={audienceHotels}
                  railRef={(node) => { railRefs.current[audience.id] = node; }}
                  onMove={move}
                  label={`${audience.label.toLocaleLowerCase("tr-TR")} yüksek puanlı oteller`}
                />
              ) : (
                <div className="affordable-filter-empty" role="status">
                  <strong>Bu seçimlerle eşleşen yüksek puanlı otel bulunamadı.</strong>
                  <button type="button" onClick={clearFilters}>Filtreleri Temizle</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function AffordableHotelsSection() {
  const railRef = useRef(null);
  const [locationFilter, setLocationFilter] = useState("");
  const [themeFilter, setThemeFilter] = useState("all");
  const [scoreFilter, setScoreFilter] = useState("all");
  const filteredHotels = useMemo(() => affordableHotels.filter((hotel) => {
    const normalizedLocation = locationFilter.trim().toLocaleLowerCase("tr-TR");
    const matchesLocation = !normalizedLocation || hotel.location.toLocaleLowerCase("tr-TR").includes(normalizedLocation);
    const matchesTheme = themeFilter === "all" || hotel.filterThemes.includes(themeFilter);
    const matchesScore = scoreFilter === "all" || Number(hotel.score) >= Number(scoreFilter);

    return matchesLocation && matchesTheme && matchesScore;
  }), [locationFilter, themeFilter, scoreFilter]);
  const move = (direction) => railRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  const clearFilters = () => {
    setLocationFilter("");
    setThemeFilter("all");
    setScoreFilter("all");
  };

  useEffect(() => {
    if (railRef.current) railRef.current.scrollLeft = 0;
  }, [locationFilter, themeFilter, scoreFilter]);

  return (
    <section className="popular-hotels-section affordable-hotels-section" id="affordable-hotels" aria-labelledby="affordable-hotels-title">
      <div className="popular-hotels-heading">
        <div>
          <div className="popular-hotels-title-row">
            <h2 id="affordable-hotels-title">Ucuz Oteller</h2>
            <button
              className="popular-hotels-info"
              type="button"
              aria-label="Ucuz otellerin listeleme ölçütünü öğrenin"
              data-tooltip="Bu oteller Etstur'un Ekonomik Oteller listesinde yer alır. Fiyatlar tarih ve müsaitliğe göre değişebilir."
            >
              <Info size={16} aria-hidden="true" />
            </button>
          </div>
          <p>Bütçe dostu bir tatil için öne çıkan ekonomik otel seçeneklerini keşfedin.</p>
        </div>
      </div>

      <div className="affordable-hotel-filters" aria-label="Ucuz otelleri filtrele">
        <label>
          <MapPin size={18} aria-hidden="true" />
          <span>
            <small>Lokasyon</small>
            <input
              type="search"
              list="affordable-location-suggestions"
              value={locationFilter}
              placeholder="Şehir, ilçe veya bölge yazın"
              aria-label="Ucuz oteller için lokasyon yazın"
              onChange={(event) => setLocationFilter(event.target.value)}
            />
            <datalist id="affordable-location-suggestions">
              {affordableLocationSuggestions.map((location) => <option value={location} key={location} />)}
            </datalist>
          </span>
        </label>
        <label>
          <Sparkles size={18} aria-hidden="true" />
          <span>
            <small>Tema ve konsept</small>
            <select value={themeFilter} onChange={(event) => setThemeFilter(event.target.value)}>
              <option value="all">Tüm temalar</option>
              {affordableThemeOptionGroups.map((group) => (
                <optgroup label={group.label} key={group.label}>
                  {group.options.map((option) => <option value={option} key={option}>{option}</option>)}
                </optgroup>
              ))}
            </select>
          </span>
          <ChevronDown size={17} aria-hidden="true" />
        </label>
        <label>
          <Star size={18} aria-hidden="true" />
          <span>
            <small>Misafir puanı</small>
            <select value={scoreFilter} onChange={(event) => setScoreFilter(event.target.value)}>
              <option value="all">Tüm puanlar</option>
              <option value="9">9 ve üzeri</option>
              <option value="8">8 ve üzeri</option>
              <option value="7">7 ve üzeri</option>
            </select>
          </span>
          <ChevronDown size={17} aria-hidden="true" />
        </label>
        <button className="affordable-filters-clear" type="button" aria-label="Ucuz otel filtrelerini temizle" onClick={clearFilters}>
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      <p className="affordable-filter-result" aria-live="polite">{filteredHotels.length} otel gösteriliyor</p>
      {filteredHotels.length ? (
        <HotelCardRail hotels={filteredHotels} railRef={railRef} onMove={move} label="ucuz oteller" />
      ) : (
        <div className="affordable-filter-empty" role="status">
          <strong>Bu seçimlerle eşleşen otel bulunamadı.</strong>
          <button type="button" onClick={clearFilters}>Filtreleri Temizle</button>
        </div>
      )}
    </section>
  );
}

function ThemeGrid() {
  const [openTheme, setOpenTheme] = useState(0);

  return (
    <section className="theme-section" id="themes">
      <div className="section-heading-row">
        <div>
          <span className="eyebrow">Tatil tarzını seç</span>
          <h2>Temalarına Göre Oteller</h2>
        </div>
        <p>Hizmet özelliklerine göre ayrılmış oteller arasından beklentinize en uygun seçeneği kolayca bulun.</p>
      </div>
      <div className="theme-grid">
        {themes.map((theme, index) => {
          const open = openTheme === index;
          return (
            <article className={`theme-item ${open ? "open" : ""}`} key={theme.title}>
              <button aria-expanded={open} onClick={() => setOpenTheme(open ? -1 : index)}>
                <span><Star size={17} />{theme.title}</span>
                <ChevronDown size={19} />
              </button>
              <div className="theme-answer"><p>{theme.description}</p><a href="#top">Otelleri Gör<ArrowRight size={16} /></a></div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function InfoBand({ id, icon: Icon, title, children, action }) {
  return (
    <section className="info-band" id={id}>
      <div className="info-band-icon"><Icon size={24} /></div>
      <div>
        <h2>{title}</h2>
        <div className="info-copy">{children}</div>
      </div>
      {action ? <a href="#top" className="outline-button">{action}<ArrowRight size={17} /></a> : null}
    </section>
  );
}

function FAQ() {
  const [openItem, setOpenItem] = useState("");

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-heading">
        <span>Merak edilenler</span>
        <h2 id="faq-title">Oteller Hakkında Sıkça Sorulan Sorular</h2>
        <p>Otel seçimi, oda tipleri, pansiyonlar ve rezervasyon süreciyle ilgili en çok merak edilen konuları incele.</p>
      </div>
      <div className="faq-groups">
        {faqGroups.map((group, groupIndex) => (
          <section className="faq-group" key={group.title} aria-labelledby={`faq-group-${groupIndex}`}>
            <div className="faq-group-heading">
              <div>
                <span className="faq-group-index" aria-hidden="true">{String(groupIndex + 1).padStart(2, "0")}</span>
                <h3 id={`faq-group-${groupIndex}`}>{group.title}</h3>
              </div>
            </div>
            <div className="faq-group-items">
              {group.questions.map((question, questionIndex) => {
                const itemKey = `${groupIndex}-${questionIndex}`;
                const open = openItem === itemKey;
                const answerId = `faq-answer-${groupIndex}-${questionIndex}`;
                return (
                  <article className={`faq-item ${open ? "open" : ""}`} key={question}>
                    <h4>
                      <button aria-expanded={open} aria-controls={answerId} onClick={() => setOpenItem(open ? "" : itemKey)}>
                        <span>{question}</span>
                        <ChevronDown size={19} aria-hidden="true" />
                      </button>
                    </h4>
                    <div className="faq-answer" data-nosnippet hidden={!open} id={answerId}>
                      <p>{faqPlaceholderAnswer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {popularLinkGroups.map((group) => (
          <details key={group.title}>
            <summary>
              <span>{group.title}</span>
              <ChevronDown size={18} />
            </summary>
            <div>
              {group.links.map((link) => <a key={link} href="#top">{link}</a>)}
            </div>
          </details>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-brand-row">
          <img src="assets/etstur-logo.svg" alt="Etstur 35. yıl" />
          <span>Etstur Ersoy Turizm Seyahat Acentası Belge No: 2242</span>
        </div>
        <div className="store-links">
          <a href="#top" aria-label="App Store uygulaması"><img src="assets/app-store.png" alt="App Store'dan indirin" /></a>
          <a href="#top" aria-label="Google Play uygulaması"><img src="assets/google-play.png" alt="Google Play'den indirin" /></a>
        </div>
        <p>Copyright © 2026 Ets Ersoy Turistik Servisleri A.Ş. Tüm hakları saklıdır.</p>
        <div className="legal-links">
          <a href="#top">Kullanım Sözleşmesi</a>
          <a href="#top">Gizlilik Sözleşmesi</a>
          <a href="#top">Kişisel Verilerin Korunması ve İşlenmesi Politikası</a>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <div id="top">
      <Header />
      <SearchBar />
      <SectionNav />

      <main>
        <div className="page-container">
          <nav className="breadcrumb" aria-label="İçerik yolu">
            <ol>
              <li><a href="https://www.etstur.com/">Etstur</a></li>
              <li aria-current="page"><ChevronRight size={15} aria-hidden="true" /><span>Oteller</span></li>
            </ol>
          </nav>

          <section className="popular-searches" aria-labelledby="popular-searches-title">
            <h2 id="popular-searches-title">Popüler Aramalar</h2>
            <ul>
              {popularSearches.map((search) => <li key={search.href}><a href={search.href}>{search.label}</a></li>)}
            </ul>
          </section>

          <CampaignSection />

          <PopularRegionsSection />

          <HotelTypesSection />

          <PopularHotelsSection />

          <TopRatedHotelsSection />

          <AffordableHotelsSection />

          <RoomTypesSection />

          <HotelAmenitiesSection />

          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
}
