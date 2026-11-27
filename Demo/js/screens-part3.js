/**
 * CỤM 05 (36–40): MÀN PHỤ
 * CỤM 06 (41–56): LỚP PHỦ VÀ THÔNG BÁO
 */

window.OVERLAY_DEFAULT_PARENT = {
  41: 24, 42: 14, 43: 14, 44: 28,
  45: 6, 46: 6, 47: 35, 48: 31,
  49: 8, 50: 7, 51: 7, 52: 6,
  53: 14, 54: 31, 55: 32, 56: 34
};

window.renderOverlayBase = function (defaultParentId, overlayContent) {
  const parentId = APP_STATE.overlayParent || defaultParentId;
  const baseHtml = window.SCREENS[parentId].render()
    .replace(/^<div class="screen-canvas[^"]*">/, '')
    .replace(/<\/div>$/, '');
  return `<div class="screen-canvas">${baseHtml}${overlayContent}</div>`;
};

window.renderPickerSheet = function (defaultParent, title, subtitle, options, stateKey, onSelectAction) {
  const current = APP_STATE[stateKey];
  return renderOverlayBase(defaultParent, `
    <div class="overlay-backdrop" onclick="closeOverlay()">
      <div class="bottom-sheet" onclick="event.stopPropagation()">
        <div class="sheet-handle"></div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <div class="t-h3">${title}</div>
            ${subtitle ? `<div class="t-cap" style="margin-top:2px;">${subtitle}</div>` : ''}
          </div>
          <button class="icon-circle-btn sm sunken" onclick="closeOverlay()">${SVG.x(16)}</button>
        </div>
        <div class="list-card">
          ${options.map(opt => {
            const sel = String(current) === String(opt.val);
            return `<div class="list-row" style="background:${sel ? 'var(--brand-soft)' : '#FFFFFF'};" onclick="${onSelectAction}(${JSON.stringify(opt.val).replace(/"/g, '&quot;')})">
              <span style="font-size:15.5px; font-weight:${sel ? '600' : '500'}; color:${sel ? 'var(--brand-primary)' : 'var(--text-primary)'};">${opt.label}</span>
              ${sel ? `<span style="color:var(--brand-primary);">${SVG.check(18)}</span>` : ''}
            </div>`;
          }).join('')}
        </div>
        <button class="btn btn-primary" onclick="closeOverlay()">Xong</button>
      </div>
    </div>
  `);
};

window.renderToastOverlay = function (defaultParent, text) {
  return renderOverlayBase(defaultParent, `
    <div class="toast-pill" style="cursor:pointer;" onclick="closeOverlay()" title="Chạm để đóng thông báo">
      <div style="display:flex; align-items:center; gap:10px;">
        <span class="toast-check">${SVG.check(14)}</span>
        <span>${text}</span>
      </div>
    </div>
  `);
};

Object.assign(window.SCREENS, {
  // 36 · Lịch ngày công · Tháng 10
  36: {
    cluster: '05 · Màn phụ',
    title: '36 · Lịch ngày công · Tháng 10',
    render: () => {
      const cells = [
        { d: 28, dim: true }, { d: 29, dim: true }, { d: 30, dim: true }, { d: 1, ot: '+2h' }, { d: 2, leave: true, ot: 'Phép' }, { d: 3 }, { d: 4, ot: '+4h' },
        { d: 5 }, { d: 6, ot: '+3h' }, { d: 7, ot: '+2h' }, { d: 8 }, { d: 9, ot: '+2h' }, { d: 10 }, { d: 11, sun: true },
        { d: 12 }, { d: 13 }, { d: 14, ot: '+2h' }, { d: 15, ot: '+3h' }, { d: 16 }, { d: 17 }, { d: 18, ot: '+4h' },
        { d: 19 }, { d: 20, ot: '+2h' }, { d: 21 }, { d: 22, ot: '+3h' }, { d: 23, ot: '+2h' }, { d: 24 }, { d: 25, sun: true },
        { d: 26 }, { d: 27, ot: '+3h' }, { d: 28, ot: '+3h' }, { d: 29 }, { d: 30, ot: '+3h', today: true }, { d: 31 }, { d: 1, dim: true },
        { d: 2, dim: true }, { d: 3, dim: true }, { d: 4, dim: true }, { d: 5, dim: true }, { d: 6, dim: true }, { d: 7, dim: true }, { d: 8, dim: true }
      ];
      return `<div class="screen-canvas">
        ${renderStatusBar(false)}
        <div class="scr-body">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h1 class="t-h1">Ngày công</h1>
            <button class="icon-circle-btn" onclick="openOverlayOn(36, 41)">${SVG.share(18)}</button>
          </div>

          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
            <button class="icon-circle-btn sm" style="opacity:0.4;">${SVG.chevronL(18)}</button>
            <div style="text-align:center;">
              <div class="t-sub">Tháng 10, 2026</div>
              <div class="t-cap">Kỳ lương 01/10 – 31/10</div>
            </div>
            <button class="icon-circle-btn sm" onclick="go(13)">${SVG.chevronR(18)}</button>
          </div>

          <div class="card" style="padding:12px 16px; display:grid; grid-template-columns:repeat(3,1fr); text-align:center; margin-bottom:12px;">
            <div><div class="t-h3">26</div><div class="t-cap">ngày công</div></div>
            <div style="border-left:1px solid var(--border-default); border-right:1px solid var(--border-default);"><div class="t-h3">38 giờ</div><div class="t-cap">tăng ca</div></div>
            <div><div class="t-h3">1</div><div class="t-cap">ngày phép</div></div>
          </div>

          <div class="card" style="padding:14px 12px;">
            <div class="cal-grid">
              <div class="cal-dow">T2</div><div class="cal-dow">T3</div><div class="cal-dow">T4</div><div class="cal-dow">T5</div><div class="cal-dow">T6</div><div class="cal-dow">T7</div><div class="cal-dow sun">CN</div>
              ${cells.map(c => `<div class="cal-cell ${c.dim ? 'dim' : ''} ${c.sun ? 'sun' : ''} ${c.leave ? 'leave' : ''} ${c.today ? 'today' : ''}" onclick="go(14)">
                <span>${c.d}</span>${c.ot ? `<span class="ot">${c.ot}</span>` : ''}
              </div>`).join('')}
            </div>
            <div style="display:flex; justify-content:space-around; border-top:1px solid var(--border-default); margin-top:12px; padding-top:10px; font-size:12px; color:var(--text-secondary);">
              <span>● Đi làm</span>
              <span><b style="color:var(--brand-primary)">+2h</b> Tăng ca</span>
              <span><b style="color:var(--warning)">■</b> Nghỉ phép</span>
              <span><b style="color:var(--brand-primary)">●</b> Đang chọn</span>
            </div>
          </div>

          <div class="card" style="margin-top:12px; cursor:pointer;" onclick="go(14)">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <span class="t-sub">Thứ Sáu, 30/10</span>
              <span class="pill pill-success">Đã ghi ca chính</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:14px; margin-bottom:6px;">
              <span style="color:var(--text-secondary);">Ca ngày</span><b>07:30 – 16:30</b>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:14px;">
              <span style="color:var(--text-secondary);">Tăng ca</span><b>3 giờ · 150%</b>
            </div>
          </div>
        </div>
        ${renderTabBar('cal')}
        ${renderHomeBar(false)}
      </div>`;
    }
  },

  // 37 · Thông báo · Đã đọc hết
  37: {
    cluster: '05 · Màn phụ',
    title: '37 · Thông báo · Đã đọc hết',
    render: () => renderNotificationList(true)
  },

  // 38 · Chi tiết · Tăng ca ngày thường · Đủ 12 ngày
  38: {
    cluster: '05 · Màn phụ',
    title: '38 · Chi tiết · Tăng ca ngày thường · Đủ 12 ngày',
    render: () => renderWeekdayDetailScreen(true)
  },

  // 39 · Căn cứ pháp lý · Điều 98
  39: {
    cluster: '05 · Màn phụ',
    title: '39 · Căn cứ pháp lý · Điều 98',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div class="top-nav">
          <button class="icon-circle-btn" onclick="goBack(26)">${SVG.chevronL()}</button>
          <div class="top-nav-title">Căn cứ pháp lý</div>
          <div style="width:40px;"></div>
        </div>

        <h2 class="t-h2">Điều 98. Tiền lương làm thêm giờ, làm việc vào ban đêm</h2>
        <div class="t-cap" style="margin-top:6px;">Bộ luật Lao động 2019 · Luật số 45/2019/QH14</div>

        <div class="card" style="margin-top:16px; display:flex; flex-direction:column; gap:10px;">
          <div style="font-size:12px; font-weight:600; color:var(--brand-primary); text-transform:uppercase;">Khoản 1 · Làm thêm giờ</div>
          <div style="display:flex; gap:8px; align-items:center;"><span style="width:6px;height:6px;border-radius:50%;background:var(--brand-primary);flex-shrink:0;"></span><span style="font-size:15.5px;font-weight:500;">Ngày thường: ít nhất 150%</span></div>
          <div style="display:flex; gap:8px; align-items:center;"><span style="width:6px;height:6px;border-radius:50%;background:var(--brand-primary);flex-shrink:0;"></span><span style="font-size:15.5px;font-weight:500;">Ngày nghỉ hằng tuần: ít nhất 200%</span></div>
          <div style="display:flex; gap:8px; align-items:flex-start;"><span style="width:6px;height:6px;border-radius:50%;background:var(--brand-primary);flex-shrink:0;margin-top:8px;"></span><span style="font-size:15.5px;font-weight:500;">Ngày nghỉ lễ, Tết, ngày nghỉ có hưởng lương: ít nhất 300%</span></div>
          <div class="t-cap" style="color:var(--text-secondary);">Chưa kể tiền lương của ngày lễ, Tết, ngày nghỉ có hưởng lương đối với người hưởng lương ngày.</div>
        </div>

        <div class="card" style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
          <div style="font-size:12px; font-weight:600; color:var(--brand-primary); text-transform:uppercase;">Khoản 2 · Làm việc ban đêm</div>
          <div style="display:flex; gap:8px; align-items:center;"><span style="width:6px;height:6px;border-radius:50%;background:var(--brand-primary);flex-shrink:0;"></span><span style="font-size:15.5px;font-weight:500;">Được trả thêm ít nhất 30% tiền lương</span></div>
          <div class="t-cap" style="color:var(--text-secondary);">Tính theo tiền lương của công việc đang làm vào ban ngày.</div>
        </div>

        <div class="card" style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
          <div style="font-size:12px; font-weight:600; color:var(--brand-primary); text-transform:uppercase;">Khoản 3 · Làm thêm giờ vào ban đêm</div>
          <div style="display:flex; gap:8px; align-items:center;"><span style="width:6px;height:6px;border-radius:50%;background:var(--brand-primary);flex-shrink:0;"></span><span style="font-size:15.5px;font-weight:500;">Ngoài khoản 1 và 2, được trả thêm 20%</span></div>
          <div class="t-cap" style="color:var(--text-secondary);">Tính trên tiền lương của công việc làm vào ban ngày của ngày làm việc đó.</div>
        </div>

        <div class="card-sunken" style="margin-top:12px;">
          <div style="font-size:13px; color:var(--text-secondary); line-height:1.45;">
            Nội dung được tóm tắt cho dễ đọc. Khi cần dẫn chứng chính thức, hãy dùng toàn văn của Bộ luật.
          </div>
        </div>
      </div>
      <div class="scr-footer">
        <button class="btn btn-primary" onclick="goBack(26)">Đã hiểu</button>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 40 · Chính sách quyền riêng tư
  40: {
    cluster: '05 · Màn phụ',
    title: '40 · Chính sách quyền riêng tư',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div class="top-nav">
          <button class="icon-circle-btn" onclick="goBack(5)">${SVG.x()}</button>
          <div class="top-nav-title">Quyền riêng tư</div>
          <div style="width:40px;"></div>
        </div>

        <h1 class="t-h1">Chính sách quyền riêng tư</h1>
        <div class="t-cap" style="margin-top:6px;">Cập nhật ngày 01/11/2026</div>

        <div style="display:flex; flex-direction:column; gap:12px; margin-top:16px;">
          ${[
            ['Dữ liệu được lưu ở đâu', 'Giờ công, ảnh chấm công, phiếu lương và đề nghị bạn soạn đều được lưu trên điện thoại của bạn. Công Bằng không gửi các dữ liệu này lên máy chủ.'],
            ['Công Bằng dùng số điện thoại để làm gì', 'Chỉ để khôi phục dữ liệu khi bạn đổi máy, nếu bạn bật sao lưu mã hoá. Số điện thoại không được chia sẻ cho công ty hay bên thứ ba.'],
            ['Khi nào dữ liệu rời khỏi máy', 'Chỉ khi bạn tự bấm chia sẻ, ví dụ gửi bảng đối chiếu qua Zalo hoặc email.'],
            ['Quyền của bạn', 'Bạn có thể xuất toàn bộ dữ liệu hoặc xoá sạch bất cứ lúc nào trong mục Tài khoản.']
          ].map(([h, p]) => `<div class="card">
            <div class="t-sub">${h}</div>
            <div class="t-body-m" style="margin-top:6px;">${p}</div>
          </div>`).join('')}
        </div>
      </div>
      <div class="scr-footer">
        <button class="btn btn-primary" onclick="goBack(5)">Đã hiểu</button>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 41 · Lớp phủ · Bảng chia sẻ
  41: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '41 · Lớp phủ · Bảng chia sẻ',
    render: () => renderOverlayBase(24, `
      <div class="overlay-backdrop" onclick="closeOverlay()">
        <div class="bottom-sheet" onclick="event.stopPropagation()">
          <div class="sheet-handle"></div>
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="icon-tile lg sunken">${SVG.file(20)}</div>
            <div style="flex:1;">
              <div class="t-sub">Bảng đối chiếu tháng 10</div>
              <div class="t-cap">PDF · 2 trang · 184 KB</div>
            </div>
            <button class="icon-circle-btn sm sunken" onclick="closeOverlay()">${SVG.x(16)}</button>
          </div>

          <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px; text-align:center; padding:6px 0;">
            ${[
              ['Zalo', '#0068FF', '#FFFFFF', 'Zalo'],
              ['Tin nhắn', '#1C7A4D', '#FFFFFF', 'MSG'],
              ['Email', '#ECEBE5', '#15201C', 'Mail'],
              ['Lưu ảnh', '#ECEBE5', '#15201C', 'Save']
            ].map(([lbl, bg, fg, code]) => `<div style="display:flex; flex-direction:column; align-items:center; gap:6px; cursor:pointer;" onclick="closeOverlay()">
              <div style="width:56px; height:56px; border-radius:16px; background:${bg}; color:${fg}; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700;">
                ${code === 'Zalo' ? 'Zalo' : code === 'MSG' ? SVG.bell(22) : code === 'Mail' ? SVG.file(22) : SVG.download(22)}
              </div>
              <span style="font-size:12px; color:var(--text-secondary);">${lbl}</span>
            </div>`).join('')}
          </div>

          <div style="background:var(--bg-sunken); border-radius:16px; overflow:hidden;">
            ${[
              ['Sao chép', SVG.copy(18)],
              ['Lưu vào Tệp', SVG.folder(18)],
              ['In', SVG.printer(18)]
            ].map(([lbl, ic], idx) => `<div onclick="closeOverlay()" style="padding:14px 16px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; ${idx > 0 ? 'border-top:1px solid var(--border-default);' : ''}">
              <span style="font-size:15.5px; font-weight:500;">${lbl}</span>
              <span style="color:var(--text-secondary);">${ic}</span>
            </div>`).join('')}
          </div>
        </div>
      </div>
    `)
  },

  // 42 · Lớp phủ · Bảng thao tác
  42: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '42 · Lớp phủ · Bảng thao tác',
    render: () => renderOverlayBase(14, `
      <div class="overlay-backdrop" style="padding:12px;" onclick="closeOverlay()">
        <div style="width:100%; display:flex; flex-direction:column; gap:10px; padding-bottom:18px;" onclick="event.stopPropagation()">
          <div style="background:#FFFFFF; border-radius:18px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.2);">
            ${[
              ['Chia sẻ', SVG.share(18), 'closeOverlay()', false],
              ['Xuất file PDF', SVG.file(18), 'closeOverlay()', false],
              ['Sửa thông tin', SVG.edit(18), 'closeOverlay()', false],
              ['Xoá', SVG.trash(18), 'go(43)', true]
            ].map(([lbl, ic, act, danger], idx) => `<div onclick="${act}" style="padding:16px 18px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; ${idx > 0 ? 'border-top:1px solid var(--border-default);' : ''} color:${danger ? 'var(--danger)' : 'var(--text-primary)'};">
              <span style="font-size:16px; font-weight:500;">${lbl}</span>
              ${ic}
            </div>`).join('')}
          </div>
          <button onclick="closeOverlay()" style="height:56px; border-radius:18px; border:none; background:#FFFFFF; color:var(--brand-primary); font-family:inherit; font-size:17px; font-weight:600; cursor:pointer; box-shadow:0 8px 24px rgba(0,0,0,0.16);">Huỷ</button>
        </div>
      </div>
    `)
  },

  // 43 · Lớp phủ · Hộp thoại xác nhận xoá
  43: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '43 · Lớp phủ · Hộp thoại xác nhận xoá',
    render: () => renderOverlayBase(14, `
      <div class="overlay-backdrop center" onclick="closeOverlay()">
        <div style="width:300px; background:#FFFFFF; border-radius:20px; overflow:hidden; text-align:center; box-shadow:0 20px 50px rgba(0,0,0,0.3);" onclick="event.stopPropagation()">
          <div style="padding:22px 18px 18px;">
            <div class="t-sub">Xoá dữ liệu ngày này?</div>
            <div style="font-size:13.5px; color:var(--text-secondary); line-height:1.45; margin-top:8px;">
              Giờ công, ảnh chấm công và ghi chú của ngày 21/11 sẽ bị xoá khỏi máy. Không thể hoàn tác.
            </div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; border-top:1px solid var(--border-default);">
            <button onclick="closeOverlay()" style="height:48px; border:none; border-right:1px solid var(--border-default); background:transparent; font-family:inherit; font-size:16px; font-weight:500; color:var(--text-secondary); cursor:pointer;">Huỷ</button>
            <button onclick="closeOverlay()" style="height:48px; border:none; background:transparent; font-family:inherit; font-size:16px; font-weight:600; color:var(--danger); cursor:pointer;">Xoá</button>
          </div>
        </div>
      </div>
    `)
  },

  // 44 · Lớp phủ · Thông báo đồng bộ
  44: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '44 · Lớp phủ · Thông báo đồng bộ',
    render: () => renderToastOverlay(28, 'Đã đồng bộ với VssID lúc 21:05')
  },

  // 45 · Lớp phủ · Chọn số ngày công chuẩn
  45: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '45 · Lớp phủ · Chọn số ngày công chuẩn',
    render: () => renderPickerSheet(
      6,
      'Số ngày công chuẩn',
      'Theo hợp đồng hoặc nội quy công ty',
      [
        { val: 24, label: '24 ngày' },
        { val: 26, label: '26 ngày' },
        { val: 30, label: '30 ngày (lương theo ngày)' },
        { val: 'Khác', label: 'Khác' }
      ],
      'workDaysStandard',
      'pickWorkDays'
    )
  },

  // 46 · Lớp phủ · Chọn giờ làm mỗi ngày
  46: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '46 · Lớp phủ · Chọn giờ làm mỗi ngày',
    render: () => renderPickerSheet(
      6,
      'Giờ làm mỗi ngày',
      'Không tính giờ tăng ca',
      [
        { val: 7, label: '7 giờ' },
        { val: 8, label: '8 giờ' },
        { val: 'Khác', label: 'Khác' }
      ],
      'hoursPerDay',
      'pickHoursPerDay'
    )
  },

  // 47 · Lớp phủ · Chọn trả vào kỳ lương
  47: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '47 · Lớp phủ · Chọn trả vào kỳ lương',
    render: () => renderPickerSheet(
      35,
      'Trả vào kỳ lương',
      '',
      [
        { val: 'Tháng 11/2026', label: 'Tháng 11/2026' },
        { val: 'Tháng 12/2026', label: 'Tháng 12/2026' },
        { val: 'Chưa hẹn ngày', label: 'Chưa hẹn ngày' }
      ],
      'payPeriod',
      'pickPayPeriod'
    )
  },

  // 48 · Lớp phủ · Chọn gửi đề nghị đến
  48: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '48 · Lớp phủ · Chọn gửi đề nghị đến',
    render: () => renderPickerSheet(
      31,
      'Gửi đề nghị đến',
      '',
      [
        { val: 'Phòng Nhân sự', label: 'Phòng Nhân sự' },
        { val: 'Công đoàn cơ sở', label: 'Công đoàn cơ sở' },
        { val: 'Tổ trưởng', label: 'Tổ trưởng' }
      ],
      'requestRecipient',
      'pickRecipient'
    )
  },

  // 49 · Lớp phủ · Chọn hệ số tăng ca ngày thường
  49: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '49 · Lớp phủ · Chọn hệ số tăng ca ngày thường',
    render: () => renderPickerSheet(
      8,
      'Hệ số tăng ca ngày thường',
      'Chỉ chọn mức cao hơn nếu công ty trả cao hơn luật',
      [
        { val: '150% (mức tối thiểu)', label: '150% (mức tối thiểu)' },
        { val: '170%', label: '170%' },
        { val: '200%', label: '200%' }
      ],
      'weekdayRateLabel',
      'pickWeekdayRate'
    )
  },

  // 50 · Lớp phủ · Chọn nghỉ giữa ca
  50: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '50 · Lớp phủ · Chọn nghỉ giữa ca',
    render: () => renderPickerSheet(
      7,
      'Nghỉ giữa ca',
      'Thời gian nghỉ không tính lương',
      [
        { val: '30 phút', label: '30 phút' },
        { val: '45 phút', label: '45 phút' },
        { val: '60 phút', label: '60 phút' },
        { val: '90 phút', label: '90 phút' }
      ],
      'breakMinutes',
      'pickBreakMinutes'
    )
  },

  // 51 · Lớp phủ · Chọn ca làm mặc định
  51: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '51 · Lớp phủ · Chọn ca làm mặc định',
    render: () => renderPickerSheet(
      7,
      'Ca làm mặc định',
      '',
      [
        { val: 'Ca ngày · 07:30 – 16:30', label: 'Ca ngày · 07:30 – 16:30' },
        { val: 'Ca chiều · 14:00 – 22:00', label: 'Ca chiều · 14:00 – 22:00' },
        { val: 'Ca đêm · 22:00 – 06:00', label: 'Ca đêm · 22:00 – 06:00' }
      ],
      'defaultShiftLabel',
      'pickDefaultShift'
    )
  },

  // 52 · Lớp phủ · Bàn phím chữ
  52: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '52 · Lớp phủ · Bàn phím chữ',
    render: () => {
      const r1 = ['q','w','e','r','t','y','u','i','o','p'];
      const r2 = ['a','s','d','f','g','h','j','k','l'];
      const r3 = ['z','x','c','v','b','n','m'];
      const keyBtn = (ch) => `<button onclick="closeOverlay()" style="height:42px; flex:1; border:none; border-radius:6px; background:#FFFFFF; box-shadow:0 1px 0 rgba(0,0,0,0.3); font-size:20px; color:#000; cursor:pointer; font-family:inherit;">${ch}</button>`;
      return renderOverlayBase(6, `
        <div class="overlay-backdrop" style="background:rgba(15,23,20,0.22);" onclick="closeOverlay()">
          <div style="width:100%; background:#D2D5DB; padding:6px 4px 28px; display:flex; flex-direction:column; gap:8px;" onclick="event.stopPropagation()">
            <div style="display:grid; grid-template-columns:repeat(3,1fr); text-align:center; padding:4px 0; font-size:15px; color:#111;">
              <span>được</span><span style="border-left:1px solid #B6BAC2; border-right:1px solid #B6BAC2;">đúng</span><span>đề nghị</span>
            </div>
            <div style="display:flex; gap:5px; padding:0 3px;">${r1.map(keyBtn).join('')}</div>
            <div style="display:flex; gap:5px; padding:0 18px;">${r2.map(keyBtn).join('')}</div>
            <div style="display:flex; gap:5px; padding:0 3px;">
              <button style="width:42px; height:42px; border:none; border-radius:6px; background:#ABB0BA; font-size:18px;">⇧</button>
              ${r3.map(keyBtn).join('')}
              <button style="width:42px; height:42px; border:none; border-radius:6px; background:#ABB0BA; font-size:18px;">⌫</button>
            </div>
            <div style="display:flex; gap:6px; padding:0 3px;">
              <button style="width:44px; height:42px; border:none; border-radius:6px; background:#ABB0BA; font-size:14px; font-weight:500;">123</button>
              <button style="width:40px; height:42px; border:none; border-radius:6px; background:#ABB0BA; font-size:17px;">☺</button>
              <button onclick="closeOverlay()" style="flex:1; height:42px; border:none; border-radius:6px; background:#FFFFFF; box-shadow:0 1px 0 rgba(0,0,0,0.3); font-size:15px; font-family:inherit; cursor:pointer;">dấu cách</button>
              <button onclick="closeOverlay()" style="width:92px; height:42px; border:none; border-radius:6px; background:#0A84FF; color:#FFFFFF; font-size:16px; font-weight:600; font-family:inherit; cursor:pointer;">Xong</button>
            </div>
          </div>
        </div>
      `);
    }
  },

  // 53 · Lớp phủ · Xem ảnh chấm công
  53: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '53 · Lớp phủ · Xem ảnh chấm công',
    render: () => {
      const hrs = ['2h','3h','0h','2h','3h','2h','0h','3h','2h','2h','0h','3h','2h','3h'];
      return `<div class="screen-canvas bg-black">
        ${renderStatusBar(true)}
        <div style="padding:8px 20px; display:flex; align-items:center; justify-content:space-between;">
          <button class="icon-circle-btn dark-glass" onclick="closeOverlay()">${SVG.x()}</button>
          <div style="text-align:center;">
            <div class="t-sub" style="color:#FFFFFF;">Ảnh chấm công</div>
            <div style="font-size:12.5px; color:rgba(255,255,255,0.7);">21/11/2026 · 17:01</div>
          </div>
          <button class="icon-circle-btn dark-glass" onclick="go(41)">${SVG.share(18)}</button>
        </div>

        <div style="flex:1; display:flex; align-items:center; justify-content:center; padding:20px;">
          <div style="width:340px; background:#FFFFFF; color:var(--text-primary); border-radius:10px; padding:18px 16px; box-shadow:0 20px 50px rgba(0,0,0,0.5);">
            <div style="font-size:9.5px; font-weight:700; text-align:center; padding-bottom:10px; border-bottom:1.5px solid #15201C;">
              BẢNG CHẤM CÔNG TỔ MAY 3 · THÁNG 11/2026
            </div>
            <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:6px; margin-top:14px;">
              ${hrs.map((h, i) => `<div style="border:1px solid #D1D5DB; border-radius:4px; padding:8px 4px; text-align:center;">
                <div style="font-size:8px; color:var(--text-muted);">N${i + 1}</div>
                <div style="font-size:11px; font-weight:600; color:#2B5FBF; margin-top:4px;">${h}</div>
              </div>`).join('')}
            </div>
            <div style="margin-top:18px; padding-top:10px; border-top:1px dashed #D1D5DB; display:flex; justify-content:space-between; font-size:9px; color:var(--text-secondary);">
              <span>Họ tên: Nguyễn Thị Hoa (TP-03127)</span>
              <span>Xác nhận tổ trưởng: Đã ký</span>
            </div>
          </div>
        </div>

        <div style="text-align:center; font-size:14px; font-weight:500; color:rgba(255,255,255,0.85); padding-bottom:8px;">1 / 1</div>
        ${renderHomeBar(true)}
      </div>`;
    }
  },

  // 54 · Lớp phủ · Đã sao chép nội dung đề nghị
  54: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '54 · Lớp phủ · Đã sao chép nội dung đề nghị',
    render: () => renderToastOverlay(31, 'Đã sao chép nội dung đề nghị')
  },

  // 55 · Lớp phủ · Đã lưu bảng đối chiếu vào Tệp
  55: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '55 · Lớp phủ · Đã lưu bảng đối chiếu vào Tệp',
    render: () => renderToastOverlay(32, 'Đã lưu bảng đối chiếu vào Tệp')
  },

  // 56 · Lớp phủ · Đã đặt nhắc lại lúc 8:00 ngày mai
  56: {
    cluster: '06 · Lớp phủ và thông báo',
    title: '56 · Lớp phủ · Đã đặt nhắc lại lúc 8:00 ngày mai',
    render: () => renderToastOverlay(34, 'Đã đặt nhắc lại lúc 8:00 ngày mai')
  }
});
