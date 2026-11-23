// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const giftData: Record<string, GiftData> = {

  // ----------------------------------------------------------
  // CUSTOMER: Aya
  // Link: yourdomain.com/gift/aya
  // ----------------------------------------------------------
  aya: {
    name: "Habibty",                                     // اسم مستلم الهدية
    senderName: "your love",                                   // التوقيع في آخر الرسالة (اختياري)
    envelopeImage: "/images/envelope-aya.png",           // صورة الظرف
    birthdayImage: "/images/birthday-aya.png",           // صورة الهدية النهائية
    accentColor: "#38bdf8",                              // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
    musicUrl: "",                                        // رابط الموسيقى هنا
    message: `ساندودة حبيبتي كل سنه و انتي طيبه يحبيبتي و يخليكي ليا و ميحرمنيش منك ابدا ، انا عارف ان الدنيا مش ظابطه معانا بس عادي يعني مضطرين نكمل عشان العيال بقا و بتاع 
انا بحبك ولله انتي حبيبتي و صاحبتي م اقرب حد ليا و اغلي م فحياتي 
انا هفضل جمبك و معاكي علطول و مش هبعد عنك لحظه و هفضل سندك و ضهرك و كتف تسندي عليه طول عمرك 
انتي بجد متعرفيش اد ايه انا ببقي مبسوط و انا معاكي ، جمبك ، بكلمك ،بشوفك اي حاجه بعملها معاكي كفيله تخليني مبسوط لباقي الاسبوع و ابضن حاجه بتعدي عليا وقت م بنضطر نروح او نقفل او كدا 
بتوحشيني دايما لو لسا سايبك من دقيقه بتوحشيني و عمري م شبعت منك ولا زهقت 
ربنا يخليكي ليا و يبارك فعمرك و يحميكي من اي شر و ميحرمنيش منك ابدا و نفضل نكبر سوا و احنا مع بعض و مزهقين بعض علطول و منبعدش ابدا  
اوعدك السنادي هتبقي احسن من الي قبلها و هحاول اخليكي دايما اسعد واحده فالدنيا زي م بتخليني اسعد واحد فالدنيا بمجرد وجودك  
انا مش عارف اوصفلك بحبك اد ايه و انتي عامله ازاي بالنسبالي انتي ممكن عارف اني بحبك بس الي جوايا اكتر بكتير من الي ظاهر 
Ur lovely BF doudi 😘`,
  },

};

export default giftData;