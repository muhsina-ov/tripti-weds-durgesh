/**
 * wedding-data.js — Customer-facing editable data layer for ivory-waltz
 * Personalised for Durgesh Pratap Singh & Tripti Singh (Groom First)
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Durgesh",
    bride: "Tripti",
    groomFull: "Durgesh Pratap Singh",
    brideFull: "Tripti Singh",
    groomParents: "Together with their cherished families",
    brideParents: "With the loving blessings of family and elders",
    hashtag: "#DurgeshWedsTripti",
    monogram: "D · T",
    familySign: "With love & blessings, the Singh families",
  },

  wedding: {
    dateISO: "2026-12-03T19:00:00+05:30",
    dateLabel: "Thursday, 3rd December 2026",
    timeLabel: "Wedding at 7:00 PM onwards",
  },

  verse: {
    sanskrit: "॥ ॐ श्री गणेशाय नमः ॥",
    shloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    arabic: "॥ ॐ श्री गणेशाय नमः ॥", // fallback for backward compatibility
    text: "With joy in our hearts and the blessings of our families, we invite you to celebrate the wedding ceremonies of Durgesh & Tripti as we begin our forever together.",
  },

  // Chronological order of all wedding functions/events
  events: [
    {
      id: "engagement",
      name: "Engagement",
      category: "Ring Ceremony",
      date: "Saturday, 17th October 2026",
      dayLabel: "Saturday",
      dayNum: "17",
      monthLabel: "October 2026",
      time: "11:00 AM onwards",
      venue: "Hotel Holiday Heights",
      mapsUrl: "https://maps.app.goo.gl/QkwJTDuG6zYTm3Wd8?g_st=ic",
      note: "An auspicious celebration marking the joyful beginning of our journey together.",
    },
    {
      id: "haldi",
      name: "Haldi",
      category: "Auspicious Turmeric Ritual",
      date: "Wednesday, 2nd December 2026",
      dayLabel: "Wednesday",
      dayNum: "02",
      monthLabel: "December 2026",
      time: "1:00 PM onwards",
      venue: "Awadh Castle",
      mapsUrl: "https://maps.app.goo.gl/4cXmFXDzBceqM5ZH9?g_st=ic",
      note: "A vibrant ritual of auspicious turmeric, love, sunshine, and joyful laughter.",
    },
    {
      id: "sangeet",
      name: "Sangeet",
      category: "Musical Night of Celebrations",
      date: "Wednesday, 2nd December 2026",
      dayLabel: "Wednesday",
      dayNum: "02",
      monthLabel: "December 2026",
      time: "7:00 PM onwards",
      venue: "Awadh Castle",
      mapsUrl: "https://maps.app.goo.gl/4cXmFXDzBceqM5ZH9?g_st=ic",
      note: "An enchanting evening of music, dance, celebrations, and festive rhythms.",
    },
    {
      id: "wedding",
      name: "Wedding (Shubh Vivah)",
      category: "Sacred Vows & Pheras",
      date: "Thursday, 3rd December 2026",
      dayLabel: "Thursday",
      dayNum: "03",
      monthLabel: "December 2026",
      time: "7:00 PM onwards",
      venue: "Awadh Castle",
      mapsUrl: "https://maps.app.goo.gl/4cXmFXDzBceqM5ZH9?g_st=ic",
      note: "The sacred Phere, holy vows around the sacred fire, and celebration of union.",
    },
  ],

  program: [
    { name: "Engagement Ceremony", time: "17 Oct · 11:00 AM", venue: "Hotel Holiday Heights" },
    { name: "Haldi Ceremony", time: "02 Dec · 1:00 PM", venue: "Awadh Castle" },
    { name: "Sangeet Night", time: "02 Dec · 7:00 PM", venue: "Awadh Castle" },
    { name: "Baraat & Reception", time: "03 Dec · 7:00 PM", venue: "Awadh Castle" },
    { name: "Sacred Pheras & Vows", time: "03 Dec · 10:00 PM", venue: "Awadh Castle" },
  ],

  // Multiple venues with verified working Google Maps links
  venues: [
    {
      id: "holiday-heights",
      name: "Hotel Holiday Heights",
      role: "Engagement Venue",
      events: "Engagement Ceremony • 17 October 2026 (11:00 AM onwards)",
      mapsUrl: "https://maps.app.goo.gl/QkwJTDuG6zYTm3Wd8?g_st=ic",
      mapsQuery: "Hotel Holiday Heights",
      mapsEmbed: "https://maps.google.com/maps?q=Hotel+Holiday+Heights&output=embed",
    },
    {
      id: "awadh-castle",
      name: "Awadh Castle",
      role: "Wedding Functions Venue",
      events: "Haldi & Sangeet (2 Dec) • Wedding Ceremony (3 Dec)",
      mapsUrl: "https://maps.app.goo.gl/4cXmFXDzBceqM5ZH9?g_st=ic",
      mapsQuery: "Awadh Castle",
      mapsEmbed: "https://maps.google.com/maps?q=Awadh+Castle&output=embed",
    },
  ],

  venue: {
    name: "Awadh Castle",
    address: "Awadh Castle (Haldi, Sangeet & Wedding) • Hotel Holiday Heights (Engagement)",
    mapsQuery: "Awadh Castle",
    mapsUrl: "https://maps.app.goo.gl/4cXmFXDzBceqM5ZH9?g_st=ic",
  },

  music: {
    audio: "./editable/assets/music.mp3",
    title: "Navrai Majhi",
    film: "English Vinglish",
    youtube: "https://youtu.be/hEHNef66HT0?si=Own9VAlh1cS3f_qE",
    autoplayOnOpen: true,
  },

  photos: [
    {
      src: "./editable/assets/couple-photo.jpg",
      caption: "Durgesh & Tripti",
      subtitle: "Two hearts, one soul, starting our forever together",
    },
  ],

  sections: {
    events: true,
    venues: true,
    photos: true,
    music: true,
    countdown: true,
  },

  images: {
    couple: "./editable/assets/layer-couple.png",
    background: "./editable/assets/layer-01-background.png",
    shadows: "./editable/assets/layer-02-shadows.png",
    groom: "./editable/assets/layer-03-groom.png",
    bride: "./editable/assets/layer-04-bride.png",
    bouquet: "./editable/assets/layer-05-bouquet.png",
    heroComposite: "./editable/assets/hero-composite.jpg",
    couplePhoto: "./editable/assets/couple-photo.jpg",
    ogWhatsApp: "./editable/assets/og-whatsapp.jpg",
    ogWhatsAppSquare: "./editable/assets/og-whatsapp-square.jpg",
  },
};
