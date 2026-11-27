/**
 * CÔNG BẰNG APP - INTERACTIVE ENGINE & 56-SCREEN NAVIGATOR
 */

const CLUSTERS = [
  { id: 'c1', name: '01 · Làm quen · Thiết lập lần đầu', range: [1, 8] },
  { id: 'c2', name: '02 · Hằng ngày · Ghi giờ công', range: [9, 16] },
  { id: 'c3', name: '03 · Phiếu lương · Đối chiếu', range: [17, 27] },
  { id: 'c4', name: '04 · BHXH & Hành động', range: [28, 35] },
  { id: 'c5', name: '05 · Màn phụ', range: [36, 40] },
  { id: 'c6', name: '06 · Lớp phủ và thông báo', range: [41, 56] }
];

function pad2(n) {
  return String(n).padStart(2, '0');
}

function renderSidebar(filterText = '') {
  const container = document.getElementById('sidebar-list');
  const q = filterText.trim().toLowerCase();
  let html = '';

  CLUSTERS.forEach(cl => {
    const items = [];
    for (let id = cl.range[0]; id <= cl.range[1]; id++) {
      const scr = window.SCREENS[id];
      if (!scr) continue;
      if (!q || scr.title.toLowerCase().includes(q) || cl.name.toLowerCase().includes(q)) {
        items.push({ id, title: scr.title });
      }
    }
    if (!items.length) return;
    html += `<div class="cluster-heading"><span>${cl.name}</span><span class="cnt">${items.length}</span></div>`;
    items.forEach(item => {
      const cleanName = item.title.replace(/^\d+\s*·\s*/, '');
      const active = APP_STATE.currentScreen === item.id ? 'active' : '';
      html += `<button class="nav-item ${active}" data-id="${item.id}" onclick="go(${item.id}, true)">
        <span class="nav-num">${pad2(item.id)}</span>
        <span class="nav-label">${cleanName}</span>
      </button>`;
    });
  });

  container.innerHTML = html || `<div style="padding:20px; text-align:center; font-size:13px; color:#86948F;">Không tìm thấy màn hình phù hợp</div>`;
}

function renderCurrentScreen() {
  const id = APP_STATE.currentScreen;
  const scr = window.SCREENS[id];
  if (!scr) return;

  const stage = document.getElementById('iphone-screen');
  stage.innerHTML = scr.render();

  document.getElementById('sim-cluster').textContent = scr.cluster;
  document.getElementById('sim-title').textContent = scr.title;
  document.getElementById('sim-index').textContent = `${pad2(id)} / 56`;

  document.querySelectorAll('.nav-item').forEach(btn => {
    const isAct = Number(btn.dataset.id) === id;
    btn.classList.toggle('active', isAct);
    if (isAct) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

window.go = function (id, resetOverlayParent = false) {
  if (!window.SCREENS[id]) return;
  if (resetOverlayParent || id <= 40) {
    APP_STATE.overlayParent = null;
  }
  if (APP_STATE.currentScreen !== id) {
    APP_STATE.history.push(APP_STATE.currentScreen);
  }
  APP_STATE.currentScreen = id;
  if (APP_STATE.viewMode !== 'sim') {
    setViewMode('sim');
  }
  renderCurrentScreen();
};

window.goBack = function (fallbackId) {
  APP_STATE.overlayParent = null;
  const prev = APP_STATE.history.pop();
  const target = (prev && prev !== APP_STATE.currentScreen) ? prev : fallbackId;
  APP_STATE.currentScreen = target;
  renderCurrentScreen();
};

window.openOverlayOn = function (parentId, overlayId) {
  APP_STATE.overlayParent = parentId;
  APP_STATE.history.push(parentId);
  APP_STATE.currentScreen = overlayId;
  renderCurrentScreen();
};

window.closeOverlay = function () {
  const backTo = APP_STATE.overlayParent || window.OVERLAY_DEFAULT_PARENT[APP_STATE.currentScreen] || 10;
  APP_STATE.overlayParent = null;
  APP_STATE.currentScreen = backTo;
  renderCurrentScreen();
};

window.prevScreen = function () {
  const next = APP_STATE.currentScreen > 1 ? APP_STATE.currentScreen - 1 : 56;
  go(next, true);
};

window.nextScreen = function () {
  const next = APP_STATE.currentScreen < 56 ? APP_STATE.currentScreen + 1 : 1;
  go(next, true);
};

window.filterSidebar = function (val) {
  renderSidebar(val);
};

/* Interactive Handlers */
window.tapPhoneDigit = function (d) {
  if (APP_STATE.phoneTyped.length < 10) {
    APP_STATE.phoneTyped += d;
    renderCurrentScreen();
  }
};
window.tapPhoneBack = function () {
  APP_STATE.phoneTyped = APP_STATE.phoneTyped.slice(0, -1);
  renderCurrentScreen();
};
window.fillDemoPhone = function () {
  APP_STATE.phoneTyped = '0912345678';
  renderCurrentScreen();
};
window.submitPhone = function () {
  go(4);
};

window.tapOtpDigit = function (d) {
  if (APP_STATE.otpTyped.length < 6) {
    APP_STATE.otpTyped += d;
    renderCurrentScreen();
    if (APP_STATE.otpTyped.length === 6) {
      setTimeout(() => { if (APP_STATE.currentScreen === 4) go(5); }, 250);
    }
  }
};
window.tapOtpBack = function () {
  APP_STATE.otpTyped = APP_STATE.otpTyped.slice(0, -1);
  renderCurrentScreen();
};
window.fillDemoOtp = function () {
  APP_STATE.otpTyped = '482916';
  renderCurrentScreen();
};

window.tapOcrDigit = function (d) {
  if (APP_STATE.ocrEditTyped.length < 7) {
    APP_STATE.ocrEditTyped += d;
    renderCurrentScreen();
  }
};
window.tapOcrBack = function () {
  APP_STATE.ocrEditTyped = APP_STATE.ocrEditTyped.slice(0, -1);
  renderCurrentScreen();
};

window.setShiftType = function (val) {
  APP_STATE.shiftType = val;
  renderCurrentScreen();
};

window.toggleWorkDay = function (d) {
  APP_STATE.workWeekDays[d] = !APP_STATE.workWeekDays[d];
  renderCurrentScreen();
};

window.toggleState = function (key) {
  APP_STATE[key] = !APP_STATE[key];
  renderCurrentScreen();
};

window.setLogShift = function (val) {
  APP_STATE.logShift = val;
  renderCurrentScreen();
};

window.stepOvertime = function (delta) {
  const next = APP_STATE.overtimeHours + delta;
  if (next >= 0 && next <= 8) {
    APP_STATE.overtimeHours = next;
    renderCurrentScreen();
  }
};

window.toggleFlash = function () {
  APP_STATE.flashOn = !APP_STATE.flashOn;
  renderCurrentScreen();
};

window.setCameraMode = function (mode) {
  APP_STATE.cameraMode = mode;
  renderCurrentScreen();
};

window.toggleBhxhYear = function (yr) {
  APP_STATE.bhxhOpen[yr] = !APP_STATE.bhxhOpen[yr];
  renderCurrentScreen();
};

window.setTone = function (tone) {
  APP_STATE.requestTone = tone;
  renderCurrentScreen();
};

window.setCompanyResponse = function (val) {
  APP_STATE.companyResponse = val;
  renderCurrentScreen();
};

window.pickWorkDays = function (val) {
  if (typeof val === 'number') APP_STATE.workDaysStandard = val;
  renderCurrentScreen();
};
window.pickHoursPerDay = function (val) {
  if (typeof val === 'number') APP_STATE.hoursPerDay = val;
  renderCurrentScreen();
};
window.pickPayPeriod = function (val) {
  APP_STATE.payPeriod = val;
  renderCurrentScreen();
};
window.pickRecipient = function (val) {
  APP_STATE.requestRecipient = val;
  renderCurrentScreen();
};
window.pickWeekdayRate = function (val) {
  APP_STATE.weekdayRateLabel = val;
  renderCurrentScreen();
};
window.pickBreakMinutes = function (val) {
  APP_STATE.breakMinutes = val;
  renderCurrentScreen();
};
window.pickDefaultShift = function (val) {
  APP_STATE.defaultShiftLabel = val;
  renderCurrentScreen();
};

/* View Mode & Gallery */
window.setViewMode = function (mode) {
  APP_STATE.viewMode = mode;
  document.getElementById('btn-mode-sim').classList.toggle('active', mode === 'sim');
  document.getElementById('btn-mode-grid').classList.toggle('active', mode === 'grid');
  document.getElementById('simulator-view').classList.toggle('hidden', mode !== 'sim');
  document.getElementById('gallery-view').classList.toggle('active', mode === 'grid');
  if (mode === 'grid') {
    renderGallery();
  } else {
    fitPhoneToViewport();
  }
};

window.filterGallery = function (cid) {
  APP_STATE.galleryFilter = cid;
  renderGallery();
};

function renderGallery() {
  const filtersEl = document.getElementById('gallery-filters');
  const contentEl = document.getElementById('gallery-content');

  const pills = [{ id: 'all', label: 'Tất cả (56)' }].concat(
    CLUSTERS.map(c => ({
      id: c.id,
      label: `${c.name.split('·')[0].trim()} (${c.range[1] - c.range[0] + 1})`
    }))
  );

  filtersEl.innerHTML = pills.map(p =>
    `<button class="filter-chip ${APP_STATE.galleryFilter === p.id ? 'active' : ''}" onclick="filterGallery('${p.id}')">${p.label}</button>`
  ).join('');

  const savedParent = APP_STATE.overlayParent;
  APP_STATE.overlayParent = null;

  let html = '';
  CLUSTERS.forEach(cl => {
    if (APP_STATE.galleryFilter !== 'all' && APP_STATE.galleryFilter !== cl.id) return;
    html += `<div class="gallery-section">
      <div class="gallery-section-title">${cl.name} · (${cl.range[1] - cl.range[0] + 1} màn hình)</div>
      <div class="gallery-grid">`;
    for (let id = cl.range[0]; id <= cl.range[1]; id++) {
      const scr = window.SCREENS[id];
      if (!scr) continue;
      const cleanName = scr.title.replace(/^\d+\s*·\s*/, '');
      const activeCls = APP_STATE.currentScreen === id ? 'active-card' : '';
      html += `<div class="gallery-card ${activeCls}" onclick="go(${id}, true)">
        <div class="gallery-thumb-box">
          <div class="gallery-thumb-inner">${scr.render()}</div>
        </div>
        <div class="gallery-card-label">
          <span class="g-num">${pad2(id)}</span>
          <span class="g-name">${cleanName}</span>
        </div>
      </div>`;
    }
    html += `</div></div>`;
  });

  APP_STATE.overlayParent = savedParent;
  contentEl.innerHTML = html;
}

window.toggleDesignModal = function (open) {
  document.getElementById('design-modal').classList.toggle('open', open);
};

function fitPhoneToViewport() {
  const wrap = document.getElementById('phone-scale-wrap');
  const view = document.getElementById('simulator-view');
  const bar = view ? view.querySelector('.sim-meta-bar') : null;
  if (!wrap || !view || APP_STATE.viewMode !== 'sim') return;
  const barH = bar ? bar.offsetHeight : 56;
  const availH = view.clientHeight - barH - 54;
  const availW = view.clientWidth - 48;
  const scale = Math.min(1, availH / 894, availW / 422);
  const clamped = Math.max(0.5, scale);
  wrap.style.transform = `scale(${clamped.toFixed(3)})`;
  wrap.style.height = `${Math.round(894 * clamped)}px`;
}

document.addEventListener('keydown', e => {
  if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
  if (e.key === 'ArrowRight') nextScreen();
  if (e.key === 'ArrowLeft') prevScreen();
});

window.addEventListener('resize', fitPhoneToViewport);

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar('');
  renderCurrentScreen();
  fitPhoneToViewport();
});
