/**
 * CÔNG BẰNG APP - REUSABLE UI COMPONENTS, SVG ICONS & INTERACTIVE STATE
 */

window.APP_STATE = {
  currentScreen: 1,
  history: [],
  viewMode: 'sim', // 'sim' | 'grid'
  galleryFilter: 'all',

  // Interactive form & flow state
  phoneDigits: '0912345678',
  phoneTyped: '',
  otpTyped: '',
  ocrEditTyped: '',

  companyName: 'Cty TNHH May Thành Phát',
  salaryBasic: 5600000,
  workDaysStandard: 26,
  hoursPerDay: 8,

  shiftType: 'Ca ngày', // Ca ngày | Ca đêm | Xoay ca
  defaultShiftLabel: 'Ca ngày · 07:30 – 16:30',
  breakMinutes: '60 phút',
  weekdayRateLabel: '150% (mức tối thiểu)',
  workWeekDays: { T2: true, T3: true, T4: true, T5: true, T6: true, T7: true, CN: false },
  dailyReminder: true,
  payslipReminder: true,
  encryptedBackup: false,

  // Home & Overtime logging
  logShift: 'Ca ngày',
  overtimeHours: 3, // 0..8
  flashOn: false,
  cameraMode: 'Phiếu giấy',

  // BHXH accordions
  bhxhOpen: { 2025: false, 2024: false, 2023: false },

  // Compose & Response
  requestRecipient: 'Phòng Nhân sự',
  requestTone: 'polite', // 'polite' | 'short'
  companyResponse: 'Đồng ý bổ sung toàn bộ',
  payPeriod: 'Tháng 11/2026'
};

window.SVG = {
  logo: (size = 64, onDarkBg = false) => {
    const stroke = onDarkBg ? '#FFFFFF' : '#0D5C48';
    return `<svg width="${size}" height="${size}" viewBox="0 0 96 96" fill="none">
      <g stroke="${stroke}" stroke-width="6.3" stroke-linecap="round">
        <line x1="48" y1="18.75" x2="48" y2="29.25"/>
        <line x1="66.75" y1="48" x2="77.25" y2="48"/>
        <line x1="48" y1="66.75" x2="48" y2="77.25"/>
        <line x1="18.75" y1="48" x2="29.25" y2="48"/>
      </g>
      <g stroke="${stroke}" stroke-width="5.1" stroke-linecap="round">
        <line x1="66.84" y1="58.88" x2="73.33" y2="62.62"/>
        <line x1="58.88" y1="66.84" x2="62.62" y2="73.33"/>
        <line x1="37.12" y1="66.84" x2="33.38" y2="73.33"/>
        <line x1="29.16" y1="58.88" x2="22.66" y2="62.62"/>
        <line x1="29.16" y1="37.12" x2="22.66" y2="33.38"/>
        <line x1="37.12" y1="29.16" x2="33.38" y2="22.66"/>
      </g>
      <path d="M38 49L46 56.5L60.5 40.5" stroke="${stroke}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M67.5 24L69.1 28.9L74 30.5L69.1 32.1L67.5 37L65.9 32.1L61 30.5L65.9 28.9Z" fill="#E8B54A"/>
    </svg>`;
  },
  chevronL: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  chevronR: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`,
  chevronD: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  x: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  check: (s = 16) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`,
  bell: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  share: (s = 19) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`,
  dots: (s = 19) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`,
  refresh: (s = 19) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
  camera: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  flash: (s = 19, on = false) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${on ? '#E8B54A' : 'none'}" stroke="${on ? '#E8B54A' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  image: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  shield: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
  lock: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  eyeOff: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  trash: (s = 19) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  clock: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  sun: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  moon: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  warn: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  file: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  book: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  home: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  calendar: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  receipt: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/></svg>`,
  copy: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  folder: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  printer: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  edit: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  download: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  plus: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  minus: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`
};

window.renderStatusBar = function (dark = false, overlay = false) {
  return `<div class="ios-status ${dark ? 'dark' : ''} ${overlay ? 'overlay-pos' : ''}">
    <span>9:41</span>
    <div class="dynamic-island"></div>
    <div class="status-icons">
      <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
        <rect x="0" y="7" width="3" height="5" rx="0.8"/>
        <rect x="4.5" y="5" width="3" height="7" rx="0.8"/>
        <rect x="9" y="2.5" width="3" height="9.5" rx="0.8"/>
        <rect x="13.5" y="0" width="3" height="12" rx="0.8"/>
      </svg>
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
        <path d="M1.5 4.2a9.5 9.5 0 0 1 13 0"/>
        <path d="M4.2 7a5.8 5.8 0 0 1 7.6 0"/>
        <circle cx="8" cy="10" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
        <rect x="0.6" y="0.6" width="21" height="10.8" rx="2.8" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
        <rect x="2.2" y="2.2" width="17.8" height="7.6" rx="1.5" fill="currentColor"/>
        <path d="M23 4v4a1.5 1.5 0 0 0 0-4z" fill="currentColor" fill-opacity="0.45"/>
      </svg>
    </div>
  </div>`;
};

window.renderHomeBar = function (dark = false, overlay = false) {
  return `<div class="ios-home ${dark ? 'dark' : ''} ${overlay ? 'overlay-pos' : ''}"><div class="ios-home-pill"></div></div>`;
};

window.renderTabBar = function (active) {
  const tabs = [
    { id: 'home', label: 'Hôm nay', icon: SVG.home(21), target: 10 },
    { id: 'cal', label: 'Ngày công', icon: SVG.calendar(21), target: 13 },
    { id: 'slip', label: 'Phiếu lương', icon: SVG.receipt(21), target: 17 },
    { id: 'bhxh', label: 'BHXH', icon: SVG.shield(21), target: 28 }
  ];
  return `<nav class="ios-tabbar">
    ${tabs.map(t => `<button class="tab-btn ${active === t.id ? 'active' : ''}" onclick="go(${t.target})">
      ${t.icon}<span>${t.label}</span>
    </button>`).join('')}
  </nav>`;
};

window.fmtVND = function (n) {
  return Math.round(n).toLocaleString('vi-VN') + 'đ';
};

window.renderNumpad = function (onDigitFn, onBackspaceFn, extraBtnHtml = '') {
  const keys = [
    ['1', ''], ['2', 'ABC'], ['3', 'DEF'],
    ['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO'],
    ['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ']
  ];
  return `<div class="numpad">
    ${keys.map(([d, sub]) => `<button class="num-key" onclick="${onDigitFn}('${d}')">
      <span class="d">${d}</span>${sub ? `<span class="sub">${sub}</span>` : ''}
    </button>`).join('')}
    ${extraBtnHtml || '<div></div>'}
    <button class="num-key" onclick="${onDigitFn}('0')"><span class="d">0</span></button>
    <button class="num-key fn" onclick="${onBackspaceFn}()" aria-label="Xoá">⌫</button>
  </div>`;
};

window.renderLogHoursSheet = function (isOpen) {
  if (!isOpen) return '';
  const st = APP_STATE;
  const exactHourly = st.salaryBasic / (st.workDaysStandard * st.hoursPerDay);
  const otMoney = Math.round(exactHourly * 1.5 * st.overtimeHours);
  const outHour = 16.5 + st.overtimeHours;
  const outStr = `${String(Math.floor(outHour)).padStart(2, '0')}:${outHour % 1 === 0.5 ? '30' : '00'}`;

  return `<div class="overlay-backdrop" onclick="if(event.target===this) go(10)">
    <div class="bottom-sheet" onclick="event.stopPropagation()">
      <div class="sheet-handle"></div>
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <div class="t-h3">Ghi giờ hôm nay</div>
          <div class="t-cap" style="margin-top:2px;">Thứ Bảy, 21/11/2026 · Ngày thường</div>
        </div>
        <button class="icon-circle-btn sm sunken" onclick="go(10)">${SVG.x(16)}</button>
      </div>

      <div class="seg-control">
        <button class="seg-btn ${st.logShift === 'Ca ngày' ? 'active' : ''}" onclick="setLogShift('Ca ngày')">Ca ngày</button>
        <button class="seg-btn ${st.logShift === 'Ca đêm' ? 'active' : ''}" onclick="setLogShift('Ca đêm')">Ca đêm</button>
      </div>

      <div class="card-sunken" style="display:flex; flex-direction:column; gap:10px;">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <div style="background:#FFFFFF; border-radius:12px; padding:10px 12px;">
            <div class="t-cap">Vào ca</div>
            <div class="t-h2">${st.logShift === 'Ca đêm' ? '22:00' : '07:30'}</div>
          </div>
          <div style="background:#FFFFFF; border-radius:12px; padding:10px 12px;">
            <div class="t-cap">Ra ca</div>
            <div class="t-h2">${st.logShift === 'Ca đêm' ? '06:00' : outStr}</div>
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:13px; color:var(--text-secondary);">
          <span>Giờ làm chính: <b>8 giờ</b></span>
          <span>Nghỉ giữa ca: <b>− 1 giờ</b></span>
        </div>
        <div style="border-top:1px solid var(--border-default); padding-top:10px; display:flex; align-items:center; justify-content:space-between;">
          <div>
            <div style="font-size:14px; font-weight:600;">Tăng ca · 150%</div>
            <div style="font-size:13px; font-weight:600; color:var(--brand-primary); margin-top:2px;">
              ${st.overtimeHours === 0 ? 'Không có tăng ca' : '≈ ' + fmtVND(otMoney)}
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <button class="icon-circle-btn sm" onclick="stepOvertime(-1)">${SVG.minus(16)}</button>
            <span style="min-width:52px; text-align:center; font-size:17px; font-weight:700;">${st.overtimeHours} giờ</span>
            <button class="icon-circle-btn sm" style="background:var(--brand-primary); color:#fff; border-color:var(--brand-primary);" onclick="stepOvertime(1)">${SVG.plus(16)}</button>
          </div>
        </div>
      </div>

      <div class="card" style="padding:12px 14px; display:flex; align-items:center; gap:12px;" onclick="go(18)">
        <div class="icon-tile sunken">${SVG.camera(19)}</div>
        <div style="flex:1;">
          <div style="font-size:15px; font-weight:600;">Thêm ảnh bảng chấm công</div>
          <div class="t-cap">Không bắt buộc · giúp đối chiếu chắc chắn hơn</div>
        </div>
        <span style="color:var(--text-muted);">${SVG.chevronR(18)}</span>
      </div>

      <button class="btn btn-primary" onclick="go(12)">Lưu ngày công</button>
    </div>
  </div>`;
};
