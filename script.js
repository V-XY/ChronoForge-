// ==============================
// CHRONOFORGE · 天时
// Chinese Lunisolar Calendar 

// ==============================
// PHASE 0: LUNAR DATA & CONVERSION
// ==============================

const lunarTable = {
  1900: 0x0b557, 1901: 0x06ca0, 1902: 0x0b550, 1903: 0x15355, 1904: 0x04da0,
  1905: 0x0a5b0, 1906: 0x14573, 1907: 0x052b0, 1908: 0x0a9a8, 1909: 0x0e950,
  1910: 0x06aa0, 1911: 0x0aea6, 1912: 0x0ab50, 1913: 0x04b60, 1914: 0x0aae4,
  1915: 0x0a570, 1916: 0x05260, 1917: 0x0f263, 1918: 0x0d950, 1919: 0x05b57,
  1920: 0x056a0, 1921: 0x096d0, 1922: 0x04dd5, 1923: 0x04ad0, 1924: 0x0a4d0,
  1925: 0x0d4d4, 1926: 0x0d250, 1927: 0x0d558, 1928: 0x0b540, 1929: 0x0b6a0,
  1930: 0x195a6, 1931: 0x095b0, 1932: 0x049b0, 1933: 0x0a974, 1934: 0x0a4b0,
  1935: 0x0b27a, 1936: 0x06a50, 1937: 0x06d40, 1938: 0x0af46, 1939: 0x0ab60,
  1940: 0x09570, 1941: 0x04af5, 1942: 0x04970, 1943: 0x064b0, 1944: 0x074a3,
  1945: 0x0ea50, 1946: 0x06b58, 1947: 0x055c0, 1948: 0x0ab60, 1949: 0x096d5,
  1950: 0x092e0, 1951: 0x0c960, 1952: 0x0d954, 1953: 0x0d4a0, 1954: 0x0da50,
  1955: 0x07552, 1956: 0x056a0, 1957: 0x0abb7, 1958: 0x025d0, 1959: 0x092d0,
  1960: 0x0cab5, 1961: 0x0a950, 1962: 0x0b4a0, 1963: 0x0baa4, 1964: 0x0ad50,
  1965: 0x055d9, 1966: 0x04ba0, 1967: 0x0a5b0, 1968: 0x15176, 1969: 0x052b0,
  1970: 0x0a930, 1971: 0x07954, 1972: 0x06aa0, 1973: 0x0ad50, 1974: 0x05b52,
  1975: 0x04b60, 1976: 0x0a6e6, 1977: 0x0a4e0, 1978: 0x0d260, 1979: 0x0ea65,
  1980: 0x0d530, 1981: 0x05aa0, 1982: 0x076a3, 1983: 0x096d0, 1984: 0x04bd7,
  1985: 0x04ad0, 1986: 0x0a4d0, 1987: 0x0d0b6, 1988: 0x0d250, 1989: 0x0d520,
  1990: 0x0dd45, 1991: 0x0b5a0, 1992: 0x056d0, 1993: 0x055b2, 1994: 0x049b0,
  1995: 0x0a577, 1996: 0x0a4b0, 1997: 0x0aa50, 1998: 0x1b255, 1999: 0x06d20,
  2000: 0x0ada0, 2001: 0x14b63, 2002: 0x09370, 2003: 0x049f8, 2004: 0x04970,
  2005: 0x064b0, 2006: 0x168a6, 2007: 0x0ea50, 2008: 0x06aa0, 2009: 0x1a6c4,
  2010: 0x0aae0, 2011: 0x092e0, 2012: 0x0d2e0, 2013: 0x0d960, 2014: 0x0d550,
  2015: 0x0da50, 2016: 0x15d54, 2017: 0x056a0, 2018: 0x0a6d0, 2019: 0x055d4,
  2020: 0x04ae0, 2021: 0x0a9d0, 2022: 0x0a2d0, 2023: 0x0d150, 2024: 0x0f252,
  2025: 0x0d520, 2026: 0x0ab60, 2027: 0x0b6a0, 2028: 0x195a6, 2029: 0x095b0,
  2030: 0x049f0, 2031: 0x0a974, 2032: 0x0a4b0, 2033: 0x0b27a, 2034: 0x06a50,
  2035: 0x06d40, 2036: 0x0af46, 2037: 0x0ab60, 2038: 0x09570, 2039: 0x04af5,
  2040: 0x04970, 2041: 0x064b0, 2042: 0x074a3, 2043: 0x0ea50, 2044: 0x06b58,
  2045: 0x055c0, 2046: 0x0ab60, 2047: 0x096d5, 2048: 0x092e0, 2049: 0x0c960,
  2050: 0x0d954, 2051: 0x0d4a0, 2052: 0x0da50, 2053: 0x07552, 2054: 0x056a0,
  2055: 0x0abb7, 2056: 0x025d0, 2057: 0x092d0, 2058: 0x0cab5, 2059: 0x0a950,
  2060: 0x0b4a0, 2061: 0x0baa4, 2062: 0x0ad50, 2063: 0x055d9, 2064: 0x04ba0,
  2065: 0x0a5b0, 2066: 0x15176, 2067: 0x052b0, 2068: 0x0a930, 2069: 0x07954,
  2070: 0x06aa0, 2071: 0x0ad50, 2072: 0x05b52, 2073: 0x04b60, 2074: 0x0a6e6,
  2075: 0x0a4e0, 2076: 0x0d260, 2077: 0x0ea65, 2078: 0x0d530, 2079: 0x05aa0,
  2080: 0x076a3, 2081: 0x096d0, 2082: 0x04bd7, 2083: 0x04ad0, 2084: 0x0a4d0,
  2085: 0x0d0b6, 2086: 0x0d250, 2087: 0x0d520, 2088: 0x0dd45, 2089: 0x0b5a0,
  2090: 0x056d0, 2091: 0x055b2, 2092: 0x049b0, 2093: 0x0a577, 2094: 0x0a4b0,
  2095: 0x0aa50, 2096: 0x1b255, 2097: 0x06d20, 2098: 0x0ada0, 2099: 0x14b63,
  2100: 0x09370
};

const monthNames = ["正月", "二月", "三月", "四月", "五月", "六月", 
                    "七月", "八月", "九月", "十月", "十一月", "十二月"];

const chineseDayNumbers = [
  "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
  "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
  "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"
];

const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const zodiac = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
const elements = ["木", "火", "土", "金", "水"];
const elementColors = ["wood", "fire", "earth", "metal", "water"];
const yinYang = ["阳", "阴"];

// ==============================
// CORRECTED LUNAR CONVERSION
// ==============================

function decodeLunarYear(yearData) {
  const leapMonth = yearData >> 16;
  const monthBits = yearData & 0xFFFF;
  
  const monthLengths = [];
  for (let i = 0; i < 12; i++) {
    monthLengths.push((monthBits >> i) & 1 ? 30 : 29);
  }
  
  const leapMonthLength = leapMonth > 0 ? ((monthBits >> 12) & 1 ? 30 : 29) : 0;
  
  return {
    leapMonth,
    monthLengths,
    leapMonthLength,
    totalDays: monthLengths.reduce((a, b) => a + b, 0) + leapMonthLength
  };
}

function gregorianToLunar(date) {
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  
  const ref = new Date(1900, 0, 31);
  ref.setHours(0, 0, 0, 0);
  
  let days = Math.floor((target - ref) / (1000 * 60 * 60 * 24));
  
  if (days < 0) {
    return { status: 'pre1900', message: 'Pre-1900', year: 0, month: 0, day: 0, isLeap: false };
  }
  
  let year = 1900;
  while (year <= 2100) {
    const data = lunarTable[year];
    if (!data) break;
    
    const decoded = decodeLunarYear(data);
    
    if (days < decoded.totalDays) {
      let remainingDays = days;
      
      // Check regular months
      for (let m = 0; m < 12; m++) {
        if (remainingDays < decoded.monthLengths[m]) {
          return {
            status: 'accurate',
            year: year,
            month: m + 1,
            day: remainingDays + 1,
            isLeap: false,
            monthLength: decoded.monthLengths[m],
            yearData: decoded
          };
        }
        remainingDays -= decoded.monthLengths[m];
      }
      
      // Check leap month if exists
      if (decoded.leapMonth > 0 && remainingDays < decoded.leapMonthLength) {
        return {
          status: 'accurate',
          year: year,
          month: decoded.leapMonth,
          day: remainingDays + 1,
          isLeap: true,
          monthLength: decoded.leapMonthLength,
          yearData: decoded
        };
      }
    }
    
    days -= decoded.totalDays;
    year++;
  }
  
  return { status: 'post2100', message: 'Post-2100', year: 0, month: 0, day: 0, isLeap: false };
}

function formatLunarMonth(month, isLeap) {
  if (month < 1 || month > 12) return "—";
  return isLeap ? `闰${monthNames[month - 1]}` : monthNames[month - 1];
}

function formatLunarDay(day) {
  if (day < 1 || day > 30) return day.toString();
  return chineseDayNumbers[day - 1];
}

// ==============================
// CORRECTED FOUR PILLARS
// ==============================

function getYearPillar(year) {
  // 1984 is 甲子年 (stem 0, branch 0)
  // For 2024: (2024-1984) = 40 → 40 % 10 = 0 (甲), 40 % 12 = 4 (辰) → 甲辰 ✓
  const offset = year - 1984;
  const stemIndex = (offset % 10 + 10) % 10;
  const branchIndex = (offset % 12 + 12) % 12;
  
  return {
    stem: stems[stemIndex],
    branch: branches[branchIndex],
    full: stems[stemIndex] + branches[branchIndex],
    zodiac: zodiac[branchIndex],
    element: elements[Math.floor(stemIndex / 2)],
    elementColor: elementColors[Math.floor(stemIndex / 2)],
    yinYang: yinYang[stemIndex % 2]
  };
}

function getDayPillar(date) {
  // Reference: 1900-01-31 was 甲子日
  const ref = new Date(1900, 0, 31);
  ref.setHours(0, 0, 0, 0);
  
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  
  const daysSinceRef = Math.floor((target - ref) / (1000 * 60 * 60 * 24));
  const cycleIndex = (daysSinceRef % 60 + 60) % 60;
  
  const stemIndex = cycleIndex % 10;
  const branchIndex = cycleIndex % 12;
  
  return {
    stem: stems[stemIndex],
    branch: branches[branchIndex],
    full: stems[stemIndex] + branches[branchIndex],
    element: elements[Math.floor(stemIndex / 2)],
    elementColor: elementColors[Math.floor(stemIndex / 2)],
    yinYang: yinYang[stemIndex % 2],
    zodiac: zodiac[branchIndex]
  };
}

// ==============================
// CORRECTED MONTH PILLARS (五虎遁)
// ==============================

const monthBranches = ["寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"];
const monthStartTermIndices = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 0];

// 五虎遁: 甲己之年丙作首, 乙庚之年戊为头, 丙辛寻庚起, 丁壬壬位流, 戊癸甲上求
const monthStemStart = {
  "甲": 2, "己": 2,  // 丙
  "乙": 4, "庚": 4,  // 戊
  "丙": 6, "辛": 6,  // 庚
  "丁": 8, "壬": 8,  // 壬
  "戊": 0, "癸": 0   // 甲
};

function getMonthPillar(date) {
  const year = date.getFullYear();
  const yearPillar = getYearPillar(year);
  const terms = solarTerms[year];
  
  if (!terms) {
    return { full: "—", stem: "—", branch: "—", monthIndex: 0 };
  }
  
  // Find month index based on solar terms
  let monthIndex = 0;
  const dayOfYear = Math.floor((date - new Date(year, 0, 1)) / (1000 * 60 * 60 * 24)) + 1;
  
  for (let i = 0; i < monthStartTermIndices.length; i++) {
    const termIndex = monthStartTermIndices[i];
    const termOffset = terms[termIndex]?.offset || 0;
    
    if (dayOfYear < termOffset) {
      monthIndex = i;
      break;
    }
  }
  
  if (monthIndex === 0) monthIndex = 11;
  
  const startStemIndex = monthStemStart[yearPillar.stem] || 0;
  const stemIndex = (startStemIndex + monthIndex) % 10;
  
  return {
    full: stems[stemIndex] + monthBranches[monthIndex],
    stem: stems[stemIndex],
    branch: monthBranches[monthIndex],
    monthIndex: monthIndex,
    monthName: monthNames[monthIndex]
  };
}

// ==============================
// SOLAR TERMS
// ==============================

const solarTermNames = [
  { zh: "小寒", en: "Minor Cold" },
  { zh: "大寒", en: "Major Cold" },
  { zh: "立春", en: "Start of Spring" },
  { zh: "雨水", en: "Rain Water" },
  { zh: "惊蛰", en: "Awakening of Insects" },
  { zh: "春分", en: "Spring Equinox" },
  { zh: "清明", en: "Pure Brightness" },
  { zh: "谷雨", en: "Grain Rain" },
  { zh: "立夏", en: "Start of Summer" },
  { zh: "小满", en: "Grain Full" },
  { zh: "芒种", en: "Grain in Ear" },
  { zh: "夏至", en: "Summer Solstice" },
  { zh: "小暑", en: "Minor Heat" },
  { zh: "大暑", en: "Major Heat" },
  { zh: "立秋", en: "Start of Autumn" },
  { zh: "处暑", en: "End of Heat" },
  { zh: "白露", en: "White Dew" },
  { zh: "秋分", en: "Autumn Equinox" },
  { zh: "寒露", en: "Cold Dew" },
  { zh: "霜降", en: "Frost Descent" },
  { zh: "立冬", en: "Start of Winter" },
  { zh: "小雪", en: "Minor Snow" },
  { zh: "大雪", en: "Major Snow" },
  { zh: "冬至", en: "Winter Solstice" }
];

const solarTermBase = {
  1900: [6,21,35,50,65,80,95,110,126,141,157,172,188,203,219,234,250,265,281,296,312,327,343,358],
  1950: [6,20,35,50,65,80,95,110,126,141,157,172,188,203,219,234,250,265,281,296,312,327,343,358],
  2000: [6,20,35,50,65,80,95,110,126,141,157,172,188,203,219,234,250,265,281,296,312,327,343,358],
  2050: [5,20,35,50,65,80,95,110,126,141,157,172,188,203,219,234,250,265,281,296,312,327,343,358],
  2100: [5,20,34,49,64,79,94,109,125,140,156,171,187,202,218,233,249,264,280,295,311,326,342,357]
};

const solarTerms = {};

function generateSolarTermsTable() {
  const baseYears = [1900, 1950, 2000, 2050, 2100];
  
  for (let year = 1900; year <= 2100; year++) {
    let lower = 1900, upper = 2100;
    for (let i = 0; i < baseYears.length - 1; i++) {
      if (year >= baseYears[i] && year <= baseYears[i + 1]) {
        lower = baseYears[i];
        upper = baseYears[i + 1];
        break;
      }
    }
    
    const lowerOffsets = solarTermBase[lower];
    const upperOffsets = solarTermBase[upper];
    const ratio = (year - lower) / (upper - lower);
    
    solarTerms[year] = lowerOffsets.map((low, i) => {
      const high = upperOffsets[i];
      const offset = Math.round(low + (high - low) * ratio);
      return {
        zh: solarTermNames[i].zh,
        en: solarTermNames[i].en,
        offset: offset
      };
    });
  }
}
generateSolarTermsTable();

function getSolarTerm(date) {
  const year = date.getFullYear();
  const dayOfYear = Math.floor((date - new Date(year, 0, 1)) / (1000 * 60 * 60 * 24)) + 1;
  
  const terms = solarTerms[year];
  if (!terms) {
    return { current: "—", currentEn: "—", next: "—", nextEn: "—", progress: 0, currentTerm: null, nextTerm: null };
  }
  
  let current = null;
  let next = null;
  
  for (let i = 0; i < terms.length; i++) {
    if (terms[i].offset >= dayOfYear) {
      next = terms[i];
      current = i > 0 ? terms[i - 1] : terms[terms.length - 1];
      break;
    }
  }
  
  if (!current) {
    current = terms[terms.length - 1];
    next = solarTerms[year + 1]?.[0] || terms[0];
  }
  
  const progress = next && current ? 
    ((dayOfYear - current.offset) / (next.offset - current.offset)) * 100 : 0;
  
  return {
    current: current?.zh || "—",
    currentEn: current?.en || "—",
    next: next?.zh || "—",
    nextEn: next?.en || "—",
    progress: Math.min(100, Math.max(0, progress)),
    currentTerm: current,
    nextTerm: next
  };
}

// ==============================
// AUSPICIOUS RULES
// ==============================

const auspiciousRules = {
  "子": { suitable: ["祭祀", "结婚"], unsuitable: ["安葬", "出行"] },
  "丑": { suitable: ["祭祀", "嫁娶"], unsuitable: ["动土", "开市"] },
  "寅": { suitable: ["出行", "搬家"], unsuitable: ["祭祀", "安葬"] },
  "卯": { suitable: ["开业", "签约"], unsuitable: ["安床", "出行"] },
  "辰": { suitable: ["祭祀", "结婚"], unsuitable: ["开市", "动土"] },
  "巳": { suitable: ["祭祀", "出行"], unsuitable: ["结婚", "安葬"] },
  "午": { suitable: ["祭祀", "嫁娶"], unsuitable: ["开市", "安床"] },
  "未": { suitable: ["祭祀", "结婚"], unsuitable: ["出行", "搬家"] },
  "申": { suitable: ["出行", "搬家"], unsuitable: ["祭祀", "安葬"] },
  "酉": { suitable: ["开业", "签约"], unsuitable: ["祭祀", "结婚"] },
  "戌": { suitable: ["祭祀", "安葬"], unsuitable: ["出行", "开市"] },
  "亥": { suitable: ["祭祀", "结婚"], unsuitable: ["出行", "搬家"] }
};

const auspiciousTranslations = {
  "祭祀": { zh: "祭祀", en: "Worship" },
  "结婚": { zh: "结婚", en: "Wedding" },
  "嫁娶": { zh: "嫁娶", en: "Marriage" },
  "安葬": { zh: "安葬", en: "Burial" },
  "出行": { zh: "出行", en: "Travel" },
  "搬家": { zh: "搬家", en: "Moving" },
  "开业": { zh: "开业", en: "Opening" },
  "签约": { zh: "签约", en: "Signing" },
  "动土": { zh: "动土", en: "Excavation" },
  "开市": { zh: "开市", en: "Market" },
  "安床": { zh: "安床", en: "Bed Setup" }
};

function getAuspicious(date) {
  const dayPillar = getDayPillar(date);
  const rules = auspiciousRules[dayPillar.branch] || { suitable: ["—"], unsuitable: ["—"] };
  
  return {
    suitable: rules.suitable,
    unsuitable: rules.unsuitable,
    direction: "宜东 · 忌西"
  };
}

// ==============================
// TRANSLATION SYSTEM
// ==============================

const translations = {
  // UI Labels
  lunarMonthLabel: { zh: "农历月", en: "Lunar Month" },
  monthStemLabel: { zh: "月干支", en: "Month Pillar" },
  monthDaysLabel: { zh: "天数", en: "Days" },
  monthTermsLabel: { zh: "节气", en: "Solar Terms" },
  gregorianTitle: { zh: "公历 · Gregorian", en: "Gregorian" },
  lunarTitle: { zh: "农历 · Lunar", en: "Lunar" },
  dateLabel: { zh: "日期", en: "Date" },
  weekdayLabel: { zh: "星期", en: "Weekday" },
  lunarMonthLabel2: { zh: "月", en: "Month" },
  lunarDayLabel: { zh: "日", en: "Day" },
  leapLabel: { zh: "闰月", en: "Leap" },
  yearDaysLabel: { zh: "全年天数", en: "Year Days" },
  pillarsTitle: { zh: "四柱 · Four Pillars", en: "Four Pillars" },
  yearPillarLabel: { zh: "年柱", en: "Year" },
  monthPillarLabel: { zh: "月柱", en: "Month" },
  dayPillarLabel: { zh: "日柱", en: "Day" },
  hourPillarLabel: { zh: "时柱*", en: "Hour*" },
  hourNote: { zh: "*时柱 approximated (子时)", en: "*Hour approx (11pm-1am)" },
  solarTermTitle: { zh: "节气 · Solar Term", en: "Solar Term" },
  auspiciousTitle: { zh: "宜忌 · Auspicious", en: "Auspicious" },
  suitableLabel: { zh: "宜", en: "Good" },
  unsuitableLabel: { zh: "忌", en: "Avoid" },
  woodLabel: { zh: "木", en: "Wood" },
  fireLabel: { zh: "火", en: "Fire" },
  earthLabel: { zh: "土", en: "Earth" },
  metalLabel: { zh: "金", en: "Metal" },
  waterLabel: { zh: "水", en: "Water" },
  yangLabel: { zh: "阳", en: "Yang" },
  yinLabel: { zh: "阴", en: "Yin" },
  zodiacLegend: { zh: "生肖: 鼠牛虎兔龙蛇马羊猴鸡狗猪", en: "Zodiac: Rat Ox Tiger Rabbit Dragon Snake Horse Goat Monkey Rooster Dog Pig" },
  disclaimerText: { zh: "📅 1900–2100 · 古历/未来为占位 · 时柱固定子时", en: "📅 1900–2100 · Ancient/future estimated · Hour fixed" },
  
  // Month names for display
  monthNames: [
    { zh: "正月", en: "1st Month" },
    { zh: "二月", en: "2nd Month" },
    { zh: "三月", en: "3rd Month" },
    { zh: "四月", en: "4th Month" },
    { zh: "五月", en: "5th Month" },
    { zh: "六月", en: "6th Month" },
    { zh: "七月", en: "7th Month" },
    { zh: "八月", en: "8th Month" },
    { zh: "九月", en: "9th Month" },
    { zh: "十月", en: "10th Month" },
    { zh: "十一月", en: "11th Month" },
    { zh: "十二月", en: "12th Month" }
  ]
};

// ==============================
// DOM ELEMENTS - LOADED AFTER DOM
// ==============================

document.addEventListener('DOMContentLoaded', function() {
  
  // ==============================
  // DOM REFERENCES
  // ==============================
  
  // Header elements
  const headerGregorian = document.getElementById("headerGregorian");
  const headerLunar = document.getElementById("headerLunar");
  const cycleBadge = document.getElementById("cycleBadge");
  const yearPillarEl = document.getElementById("yearPillar");
  const monthPillarEl = document.getElementById("monthPillar");
  const solarTermEl = document.getElementById("solarTerm");
  const lunarLeapIndicator = document.getElementById("lunarLeapIndicator");
  const rangeWarning = document.getElementById("rangeWarning");

  // Month metadata
  const lunarMonthName = document.getElementById("lunarMonthName");
  const monthStemBranch = document.getElementById("monthStemBranch");
  const monthDays = document.getElementById("monthDays");
  const monthTerms = document.getElementById("monthTerms");

  // Calendar grid
  const daysContainer = document.getElementById("daysContainer");
  const leapNotice = document.getElementById("leapNotice");

  // Info panel elements
  const infoGregorian = document.getElementById("infoGregorian");
  const infoWeekday = document.getElementById("infoWeekday");
  const infoLunarMonth = document.getElementById("infoLunarMonth");
  const infoLunarDay = document.getElementById("infoLunarDay");
  const infoIsLeap = document.getElementById("infoIsLeap");
  const infoYearDays = document.getElementById("infoYearDays");
  const pillarYear = document.getElementById("pillarYear");
  const pillarMonth = document.getElementById("pillarMonth");
  const pillarDay = document.getElementById("pillarDay");
  const pillarHour = document.getElementById("pillarHour");
  const pillarYearElement = document.getElementById("pillarYearElement");
  const pillarDayZodiac = document.getElementById("pillarDayZodiac");
  const pillarYinYang = document.getElementById("pillarYinYang");
  const currentTerm = document.getElementById("currentTerm");
  const nextTerm = document.getElementById("nextTerm");
  const termProgress = document.getElementById("termProgress");
  const termDates = document.getElementById("termDates");
  const auspiciousSection = document.getElementById("auspiciousSection");
  const suitable = document.getElementById("suitable");
  const unsuitable = document.getElementById("unsuitable");
  const auspiciousDirection = document.getElementById("auspiciousDirection");
  const rangeWarningSection = document.getElementById("rangeWarningSection");
  const rangeWarningMessage = document.getElementById("rangeWarningMessage");
  const dataSourceNote = document.getElementById("dataSourceNote");

  // Navigation elements
  const prevYear = document.getElementById("prevYear");
  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");
  const nextYear = document.getElementById("nextYear");
  const toggleToday = document.getElementById("toggleToday");
  const settingsToggle = document.getElementById("settingsToggle");
  const settingsMenu = document.getElementById("settingsMenu");
  const toast = document.getElementById("toast");

  // Settings inputs
  const detailLevel = document.getElementById("detailLevel");
  const languagePreference = document.getElementById("languagePreference");
  const showSolarTerms = document.getElementById("showSolarTerms");
  const showZodiac = document.getElementById("showZodiac");
  const showAuspicious = document.getElementById("showAuspicious");
  const showPillars = document.getElementById("showPillars");
  const compactMode = document.getElementById("compactMode");
  const ultraCompact = document.getElementById("ultraCompact");

  // Label elements for translation
  const labelElements = {
    lunarMonthLabel: document.getElementById("lunarMonthLabel"),
    monthStemLabel: document.getElementById("monthStemLabel"),
    monthDaysLabel: document.getElementById("monthDaysLabel"),
    monthTermsLabel: document.getElementById("monthTermsLabel"),
    gregorianTitle: document.getElementById("gregorianTitle"),
    lunarTitle: document.getElementById("lunarTitle"),
    dateLabel: document.getElementById("dateLabel"),
    weekdayLabel: document.getElementById("weekdayLabel"),
    lunarMonthLabel2: document.getElementById("lunarMonthLabel2"),
    lunarDayLabel: document.getElementById("lunarDayLabel"),
    leapLabel: document.getElementById("leapLabel"),
    yearDaysLabel: document.getElementById("yearDaysLabel"),
    pillarsTitle: document.getElementById("pillarsTitle"),
    yearPillarLabel: document.getElementById("yearPillarLabel"),
    monthPillarLabel: document.getElementById("monthPillarLabel"),
    dayPillarLabel: document.getElementById("dayPillarLabel"),
    hourPillarLabel: document.getElementById("hourPillarLabel"),
    hourNote: document.getElementById("hourNote"),
    solarTermTitle: document.getElementById("solarTermTitle"),
    auspiciousTitle: document.getElementById("auspiciousTitle"),
    suitableLabel: document.getElementById("suitableLabel"),
    unsuitableLabel: document.getElementById("unsuitableLabel"),
    woodLabel: document.getElementById("woodLabel"),
    fireLabel: document.getElementById("fireLabel"),
    earthLabel: document.getElementById("earthLabel"),
    metalLabel: document.getElementById("metalLabel"),
    waterLabel: document.getElementById("waterLabel"),
    yangLabel: document.getElementById("yangLabel"),
    yinLabel: document.getElementById("yinLabel"),
    zodiacLegend: document.getElementById("zodiacLegend"),
    disclaimerText: document.getElementById("disclaimerText")
  };

  // ==============================
  // APPLICATION STATE
  // ==============================

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let selectedDate = new Date(currentDate);
  let settings = {
    detailLevel: 'standard',
    language: 'bilingual',
    showSolarTerms: true,
    showZodiac: true,
    showAuspicious: false,
    showPillars: true,
    compactMode: true,
    ultraCompact: false
  };

  // ==============================
  // TRANSLATION FUNCTIONS
  // ==============================

  function t(zh, en) {
    if (settings.language === 'chinese') return zh;
    if (settings.language === 'english') return en;
    return `${zh} (${en})`;
  }

  function translateMonth(monthIndex, isLeap) {
    const monthName = translations.monthNames[monthIndex];
    if (!monthName) return "—";
    
    const base = settings.language === 'english' ? monthName.en : monthName.zh;
    if (isLeap && settings.language === 'chinese') return `闰${monthName.zh}`;
    if (isLeap && settings.language === 'english') return `Leap ${monthName.en}`;
    if (isLeap) return `闰${monthName.zh} (Leap ${monthName.en})`;
    return base;
  }

  function translateDay(day) {
    if (day < 1 || day > 30) return day.toString();
    if (settings.language === 'english') return `Day ${day}`;
    return chineseDayNumbers[day - 1];
  }

  function translateList(items) {
    if (settings.language === 'chinese') return items.join(' · ');
    if (settings.language === 'english') {
      return items.map(item => auspiciousTranslations[item]?.en || item).join(' · ');
    }
    return items.map(item => `${item} (${auspiciousTranslations[item]?.en || item})`).join(' · ');
  }

  function updateAllLabels() {
    Object.keys(labelElements).forEach(key => {
      const el = labelElements[key];
      const trans = translations[key];
      if (el && trans) {
        el.textContent = t(trans.zh, trans.en);
      }
    });
  }

  // ==============================
  // UI FUNCTIONS
  // ==============================

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
  }

  function updateCompactModes() {
    document.body.classList.toggle('compact-mode', settings.compactMode);
    document.body.classList.toggle('ultra-compact', settings.ultraCompact);
  }

  // ==============================
  // RENDER FUNCTIONS
  // ==============================

  function updateHeader() {
    if (!headerGregorian || !headerLunar) return;
    
    const lunar = gregorianToLunar(currentDate);
    const yearPillarData = getYearPillar(currentYear);
    const term = getSolarTerm(currentDate);
    
    headerGregorian.textContent = currentDate.toLocaleDateString('en-US', { 
      year: 'numeric', month: 'long' 
    });
    
    if (lunar.status === 'accurate') {
      const monthDisplay = translateMonth(lunar.month - 1, lunar.isLeap);
      const termDisplay = settings.language === 'english' ? term.currentEn : term.current;
      headerLunar.textContent = `${monthDisplay} · ${termDisplay}`;
    } else {
      headerLunar.textContent = lunar.message;
    }
    
    if (cycleBadge) {
      const elementEn = ["Wood", "Fire", "Earth", "Metal", "Water"][Math.floor(stems.indexOf(yearPillarData.stem) / 2)];
      const zodiacEn = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"][branches.indexOf(yearPillarData.branch)];
      
      if (settings.language === 'english') {
        cycleBadge.textContent = `${elementEn} ${zodiacEn}`;
      } else if (settings.language === 'chinese') {
        cycleBadge.textContent = `${yearPillarData.element}${yearPillarData.zodiac}`;
      } else {
        cycleBadge.textContent = `${yearPillarData.element}${yearPillarData.zodiac} (${elementEn} ${zodiacEn})`;
      }
    }
    
    if (yearPillarEl && cycleBadge) {
      yearPillarEl.textContent = cycleBadge.textContent;
    }
    
    const monthPillar = getMonthPillar(currentDate);
    if (monthPillarEl) {
      monthPillarEl.textContent = monthPillar.full;
    }
    
    if (solarTermEl) {
      solarTermEl.textContent = settings.language === 'english' ? term.currentEn : term.current;
    }
    
    if (lunarLeapIndicator) {
      if (lunar.status === 'accurate' && lunar.isLeap) {
        lunarLeapIndicator.textContent = translateMonth(lunar.month - 1, true);
        lunarLeapIndicator.style.display = 'flex';
      } else {
        lunarLeapIndicator.style.display = 'none';
      }
    }
    
    if (rangeWarning) {
      if (!lunarTable[currentYear]) {
        rangeWarning.textContent = t(
          `⚠️ ${currentYear} 超出范围 (1900-2100)`,
          `⚠️ ${currentYear} out of range (1900-2100)`
        );
        rangeWarning.style.display = 'flex';
      } else {
        rangeWarning.style.display = 'none';
      }
    }
  }

  function renderCalendar() {
    if (!daysContainer) return;
    
    daysContainer.innerHTML = '';
    
    const firstDay = new Date(currentYear, currentMonth - 1, 1);
    const lastDay = new Date(currentYear, currentMonth, 0);
    const daysInMonth = lastDay.getDate();
    const startOffset = firstDay.getDay();
    
    for (let i = 0; i < startOffset; i++) {
      const empty = document.createElement('div');
      empty.className = 'day-cell empty';
      daysContainer.appendChild(empty);
    }
    
    for (let d = 1; d <= daysInMonth; d++) {
      const cellDate = new Date(currentYear, currentMonth - 1, d);
      const lunar = gregorianToLunar(cellDate);
      const dayPillar = getDayPillar(cellDate);
      const term = getSolarTerm(cellDate);
      
      const cell = document.createElement('div');
      cell.className = 'day-cell';
      
      if (cellDate.toDateString() === new Date().toDateString()) {
        cell.classList.add('today');
      }
      if (lunar.status === 'accurate' && lunar.isLeap) {
        cell.classList.add('leap-month');
      }
      if (dayPillar.elementColor) {
        cell.classList.add(`${dayPillar.elementColor}-element`);
      }
      
      cell.dataset.date = cellDate.toISOString();
      cell.dataset.year = currentYear;
      cell.dataset.month = currentMonth;
      cell.dataset.day = d;
      
      let lunarDisplay = '—';
      if (lunar.status === 'accurate') {
        lunarDisplay = translateDay(lunar.day);
      }
      
      const dayOfYear = Math.floor((cellDate - new Date(currentYear, 0, 1)) / (1000*60*60*24)) + 1;
      const isTermDay = term.currentTerm && Math.abs(dayOfYear - term.currentTerm.offset) < 2;
      
      cell.innerHTML = `
        <div class="gregorian-date">${d}</div>
        <div class="lunar-date">${lunarDisplay}</div>
        <div class="stem-branch">${dayPillar.full}</div>
        ${isTermDay ? `<span class="solar-term-indicator">${term.current.slice(0,2)}</span>` : ''}
      `;
      
      cell.addEventListener('click', () => selectDate(cellDate));
      daysContainer.appendChild(cell);
    }
    
    const lunar = gregorianToLunar(new Date(currentYear, currentMonth - 1, 1));
    if (lunar.status === 'accurate') {
      if (lunarMonthName) {
        lunarMonthName.textContent = translateMonth(lunar.month - 1, lunar.isLeap);
      }
      
      const monthPillar = getMonthPillar(new Date(currentYear, currentMonth - 1, 15));
      if (monthStemBranch) {
        monthStemBranch.textContent = monthPillar.full;
      }
      
      if (monthDays) {
        monthDays.textContent = t(`${daysInMonth}天`, `${daysInMonth} days`);
      }
      
      const terms = solarTerms[currentYear] || [];
      const monthTerms_list = terms.filter(t => {
        const termDate = new Date(currentYear, 0, t.offset);
        return termDate.getMonth() + 1 === currentMonth;
      }).map(t => settings.language === 'english' ? t.en : t.zh);
      
      if (monthTerms) {
        monthTerms.textContent = monthTerms_list.join(' · ') || '—';
      }
    } else {
      if (lunarMonthName) lunarMonthName.textContent = '—';
      if (monthStemBranch) monthStemBranch.textContent = '—';
      if (monthDays) monthDays.textContent = '—';
      if (monthTerms) monthTerms.textContent = '—';
    }
  }

  function selectDate(date) {
    selectedDate = new Date(date);
    
    document.querySelectorAll('.day-cell').forEach(cell => {
      cell.classList.remove('active-day');
    });
    
    const selectedCell = Array.from(document.querySelectorAll('.day-cell')).find(cell => 
      cell.dataset.date === date.toISOString()
    );
    if (selectedCell) {
      selectedCell.classList.add('active-day');
    }
    
    updateInfoPanel(date);
  }

  function updateInfoPanel(date) {
    if (!infoGregorian) return;
    
    const lunar = gregorianToLunar(date);
    const yearPillarData = getYearPillar(date.getFullYear());
    const monthPillarData = getMonthPillar(date);
    const dayPillarData = getDayPillar(date);
    const term = getSolarTerm(date);
    const auspicious = getAuspicious(date);
    
    // Gregorian
    infoGregorian.textContent = date.toLocaleDateString(settings.language === 'chinese' ? 'zh-CN' : 'en-US', { 
      year: 'numeric', month: 'long', day: 'numeric' 
    });
    
    if (infoWeekday) {
      const weekday = date.getDay();
      const weekdays = settings.language === 'chinese' 
        ? ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
        : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const weekdaysBilingual = ["周日 (Sun)", "周一 (Mon)", "周二 (Tue)", "周三 (Wed)", "周四 (Thu)", "周五 (Fri)", "周六 (Sat)"];
      
      if (settings.language === 'bilingual') {
        infoWeekday.textContent = weekdaysBilingual[weekday];
      } else {
        infoWeekday.textContent = weekdays[weekday];
      }
    }
    
    // Lunar
    if (lunar.status === 'accurate') {
      if (infoLunarMonth) {
        infoLunarMonth.textContent = translateMonth(lunar.month - 1, lunar.isLeap);
      }
      if (infoLunarDay) {
        infoLunarDay.textContent = translateDay(lunar.day);
      }
      if (infoIsLeap) {
        infoIsLeap.textContent = lunar.isLeap ? t('是', 'Yes') : t('否', 'No');
      }
      if (infoYearDays) {
        infoYearDays.textContent = lunar.yearData?.totalDays || '—';
      }
    } else {
      if (infoLunarMonth) infoLunarMonth.textContent = lunar.message;
      if (infoLunarDay) infoLunarDay.textContent = '—';
      if (infoIsLeap) infoIsLeap.textContent = '—';
      if (infoYearDays) infoYearDays.textContent = '—';
    }
    
    // Pillars
    const pillarsSection = document.getElementById('pillarsSection');
    if (pillarsSection) {
      if (settings.showPillars) {
        pillarsSection.classList.remove('hidden');
        if (pillarYear) pillarYear.textContent = yearPillarData.full;
        if (pillarMonth) pillarMonth.textContent = monthPillarData.full;
        if (pillarDay) pillarDay.textContent = dayPillarData.full;
        if (pillarHour) pillarHour.textContent = t('子时', '11pm-1am');
        
        if (pillarYearElement) {
          const elementEn = ["Wood", "Fire", "Earth", "Metal", "Water"][Math.floor(stems.indexOf(yearPillarData.stem) / 2)];
          pillarYearElement.textContent = t(yearPillarData.element, elementEn);
        }
        
        if (pillarDayZodiac) {
          const zodiacEn = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"][branches.indexOf(dayPillarData.branch)];
          pillarDayZodiac.textContent = t(dayPillarData.zodiac, zodiacEn);
        }
        
        if (pillarYinYang) {
          pillarYinYang.textContent = t(dayPillarData.yinYang, dayPillarData.yinYang === '阳' ? 'Yang' : 'Yin');
        }
      } else {
        pillarsSection.classList.add('hidden');
      }
    }
    
    // Solar terms
    const solarTermSection = document.getElementById('solarTermSection');
    if (solarTermSection) {
      if (settings.showSolarTerms) {
        solarTermSection.classList.remove('hidden');
        if (currentTerm) {
          currentTerm.textContent = settings.language === 'english' ? term.currentEn : term.current;
        }
        if (nextTerm) {
          nextTerm.textContent = settings.language === 'english' ? term.nextEn : term.next;
        }
        if (termProgress) {
          termProgress.style.width = `${term.progress}%`;
        }
        if (termDates && term.currentTerm && term.nextTerm) {
          const currentDate = new Date(date.getFullYear(), 0, term.currentTerm.offset);
          const nextDate = new Date(date.getFullYear(), 0, term.nextTerm.offset);
          termDates.textContent = `${term.current} ${currentDate.getMonth()+1}/${currentDate.getDate()} → ${term.next} ${nextDate.getMonth()+1}/${nextDate.getDate()}`;
        }
      } else {
        solarTermSection.classList.add('hidden');
      }
    }
    
    // Auspicious
    if (auspiciousSection) {
      if (settings.showAuspicious && settings.detailLevel === 'complete') {
        auspiciousSection.classList.remove('hidden');
        if (suitable) {
          suitable.textContent = translateList(auspicious.suitable);
        }
        if (unsuitable) {
          unsuitable.textContent = translateList(auspicious.unsuitable);
        }
        if (auspiciousDirection) {
          auspiciousDirection.textContent = t('宜东 · 忌西', 'East · Avoid West');
        }
      } else {
        auspiciousSection.classList.add('hidden');
      }
    }
    
    // Range warning
    if (rangeWarningSection && rangeWarningMessage) {
      if (lunar.status !== 'accurate') {
        rangeWarningSection.classList.remove('hidden');
        rangeWarningMessage.textContent = lunar.status === 'pre1900' 
          ? t('1900年以前日期为估算', 'Pre-1900 dates are estimates')
          : t('2100年以后日期为估算', 'Post-2100 dates are estimates');
      } else {
        rangeWarningSection.classList.add('hidden');
      }
    }
    
    if (dataSourceNote) {
      dataSourceNote.textContent = lunar.status === 'accurate' 
        ? t('数据: 紫金山天文台 · 节气近似 ±1日', 'Data: Purple Mountain Obs. · Solar terms ±1 day')
        : t('⚠️ 此日期为占位显示, 精确数据限1900-2100', '⚠️ Placeholder, accurate data 1900-2100 only');
    }
  }

  // ==============================
  // NAVIGATION
  // ==============================

  function prevMonthFn() {
    if (currentMonth === 1) {
      currentYear--;
      currentMonth = 12;
    } else {
      currentMonth--;
    }
    currentDate = new Date(currentYear, currentMonth - 1, 1);
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
  }

  function nextMonthFn() {
    if (currentMonth === 12) {
      currentYear++;
      currentMonth = 1;
    } else {
      currentMonth++;
    }
    currentDate = new Date(currentYear, currentMonth - 1, 1);
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
  }

  function prevYearFn() {
    currentYear--;
    currentDate = new Date(currentYear, currentMonth - 1, 1);
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
  }

  function nextYearFn() {
    currentYear++;
    currentDate = new Date(currentYear, currentMonth - 1, 1);
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
  }

  function goToToday() {
    currentDate = new Date();
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth() + 1;
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
  }

  // ==============================
  // SETTINGS
  // ==============================

  function updateSettings() {
    if (detailLevel) settings.detailLevel = detailLevel.value;
    if (languagePreference) settings.language = languagePreference.value;
    if (showSolarTerms) settings.showSolarTerms = showSolarTerms.checked;
    if (showZodiac) settings.showZodiac = showZodiac.checked;
    if (showAuspicious) settings.showAuspicious = showAuspicious.checked;
    if (showPillars) settings.showPillars = showPillars.checked;
    if (compactMode) settings.compactMode = compactMode.checked;
    if (ultraCompact) settings.ultraCompact = ultraCompact.checked;
    
    updateCompactModes();
    updateAllLabels();
    
    renderCalendar();
    if (selectedDate) {
      updateInfoPanel(selectedDate);
    }
    updateHeader();
    
    showToast(t('设置已更新', 'Settings updated'));
  }

  // ==============================
  // INITIALIZATION
  // ==============================

  function init() {
    currentDate = new Date();
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth() + 1;
    
    updateAllLabels();
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
    
    if (settingsToggle && settingsMenu) {
      settingsToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsMenu.classList.toggle('hidden');
      });
      
      document.addEventListener('click', (e) => {
        if (!settingsToggle.contains(e.target) && !settingsMenu.contains(e.target)) {
          settingsMenu.classList.add('hidden');
        }
      });
    }
    
    if (detailLevel) detailLevel.addEventListener('change', updateSettings);
    if (languagePreference) languagePreference.addEventListener('change', updateSettings);
    if (showSolarTerms) showSolarTerms.addEventListener('change', updateSettings);
    if (showZodiac) showZodiac.addEventListener('change', updateSettings);
    if (showAuspicious) showAuspicious.addEventListener('change', updateSettings);
    if (showPillars) showPillars.addEventListener('change', updateSettings);
    if (compactMode) compactMode.addEventListener('change', updateSettings);
    if (ultraCompact) ultraCompact.addEventListener('change', updateSettings);
    
    if (prevYear) prevYear.addEventListener('click', prevYearFn);
    if (prevMonth) prevMonth.addEventListener('click', prevMonthFn);
    if (nextMonth) nextMonth.addEventListener('click', nextMonthFn);
    if (nextYear) nextYear.addEventListener('click', nextYearFn);
    if (toggleToday) toggleToday.addEventListener('click', goToToday);
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevMonthFn();
      else if (e.key === 'ArrowRight') nextMonthFn();
      else if (e.key === 'ArrowUp') prevYearFn();
      else if (e.key === 'ArrowDown') nextYearFn();
    });
    
    updateSettings();
    
    showToast(t('ChronoForge · 天时 已加载', 'ChronoForge · Tian Shi loaded'));
  }

  // Start
  init();
  
});
