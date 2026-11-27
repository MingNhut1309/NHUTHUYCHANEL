/**
 * CỤM 03 (17–27): PHIẾU LƯƠNG & ĐỐI CHIẾU
 * CỤM 04 (28–35): BHXH & HÀNH ĐỘNG
 */

window.renderMiniPayslip = function (detected = false, blurred = false) {
  return `<div style="width:244px; background:#FFFFFF; color:var(--text-primary); border-radius:8px; padding:12px 13px; box-shadow:0 12px 30px rgba(0,0,0,0.45); position:relative; ${blurred ? 'filter:blur(1.4px); opacity:0.88;' : ''}">
    <div style="text-align:center; border-bottom:1px solid #E5E7EB; padding-bottom:6px; margin-bottom:6px;">
      <div style="font-size:7px; font-weight:600; color:var(--text-muted);">CÔNG TY TNHH MAY THÀNH PHÁT</div>
      <div style="font-size:11px; font-weight:700; margin-top:1px;">PHIẾU LƯƠNG THÁNG 10/2026</div>
      <div style="font-size:7.5px; color:var(--text-secondary); margin-top:2px;">Họ tên: Nguyễn Thị Hoa · Mã NV: TP-03127 · Tổ may 3</div>
    </div>
    <div style="display:flex; flex-direction:column; gap:3.5px; font-size:8.5px;">
      <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">Ngày công thực tế</span><b>26</b></div>
      <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">Lương ngày công</span><b>5.600.000</b></div>
      <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">Giờ tăng ca ngày thường</span><b>26</b></div>
      <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">Tiền tăng ca ngày thường</span><b>1.050.000</b></div>
      <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">Giờ tăng ca Chủ nhật</span><b>8</b></div>
      <div style="display:flex; justify-content:space-between; ${detected ? 'background:rgba(91,227,164,0.28); padding:1px 3px; border-radius:3px;' : ''}"><span style="color:var(--text-secondary);">Tiền tăng ca Chủ nhật</span><b>323.077</b></div>
      <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">Phụ cấp chuyên cần</span><b>300.000</b></div>
      <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">BHXH 8% · BHYT 1,5% · BHTN 1%</span><b>− 588.000</b></div>
      <div style="border-top:1px solid #15201C; padding-top:4px; margin-top:2px; display:flex; justify-content:space-between; font-weight:700;">
        <span style="color:var(--text-secondary);">THỰC LÃNH</span><span>6.685.077</span>
      </div>
    </div>
    <div style="display:flex; justify-content:space-between; font-size:7px; color:var(--text-muted); margin-top:10px;">
      <span>Người lập biểu</span><span>Kế toán trưởng</span>
    </div>
  </div>`;
};

Object.assign(window.SCREENS, {
  // 17 · Phiếu lương · Danh sách
  17: {
    cluster: '03 · Phiếu lương · Đối chiếu',
    title: '17 · Phiếu lương · Danh sách',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
          <h1 class="t-h1">Phiếu lương</h1>
          <button class="icon-circle-btn" onclick="openOverlayOn(17, 42)">${SVG.dots()}</button>
        </div>

        <div class="card-soft" style="display:flex; flex-direction:column; gap:14px;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="icon-tile lg white" style="color:var(--brand-primary);">${SVG.calendar(20)}</div>
            <div>
              <div class="t-sub">Kỳ lương tháng 11</div>
              <div class="t-cap" style="color:var(--text-secondary);">Nhận lương ngày 05/12 · còn 14 ngày</div>
            </div>
          </div>
          <button class="btn btn-primary" onclick="go(18)">${SVG.camera(19)} Chụp phiếu lương</button>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-top:12px;">
          <div class="card" style="padding:12px 10px; text-align:center;">
            <div class="t-h3">10</div>
            <div class="t-cap" style="font-size:11.5px;">phiếu đã đối chiếu</div>
          </div>
          <div class="card" style="padding:12px 10px; text-align:center;">
            <div class="t-h3" style="color:var(--success);">9</div>
            <div class="t-cap" style="font-size:11.5px;">phiếu khớp</div>
          </div>
          <div class="card" style="padding:12px 10px; text-align:center;">
            <div class="t-h3" style="color:var(--warning);">1</div>
            <div class="t-cap" style="font-size:11.5px;">có chênh lệch</div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin:18px 2px 10px;">
          <span class="t-sub">Lịch sử</span>
          <span class="t-cap">Năm 2026</span>
        </div>

        <div class="list-card">
          ${[
            ['T10', '6.685.077đ', 'Có thể thiếu 269.231đ', 'pill-warning', 24],
            ['T09', '6.512.308đ', 'Khớp', 'pill-success', 27],
            ['T08', '6.430.769đ', 'Khớp', 'pill-success', 27],
            ['T07', '6.596.154đ', 'Đã được trả bù 80.769đ', 'pill-brand', 27],
            ['T06', '6.350.000đ', 'Khớp', 'pill-success', 27]
          ].map(([m, amt, badge, cls, target]) => `<div class="list-row" onclick="go(${target})">
            <div style="display:flex; align-items:center; gap:12px;">
              <div style="width:48px; height:48px; border-radius:12px; background:var(--bg-sunken); display:flex; flex-direction:column; align-items:center; justify-content:center; flex-shrink:0;">
                <span style="font-size:15px; font-weight:600; line-height:1.1;">${m}</span>
                <span style="font-size:10px; color:var(--text-muted);">2026</span>
              </div>
              <div>
                <div style="font-size:15.5px; font-weight:500;">Thực lãnh ${amt}</div>
                <div style="margin-top:4px;"><span class="pill ${cls}">${badge}</span></div>
              </div>
            </div>
            <span style="color:var(--text-muted);">${SVG.chevronR(17)}</span>
          </div>`).join('')}
        </div>
      </div>
      ${renderTabBar('slip')}
      ${renderHomeBar(false)}
    </div>`
  },

  // 18 · Chụp phiếu lương · Căn khung
  18: {
    cluster: '03 · Phiếu lương · Đối chiếu',
    title: '18 · Chụp phiếu lương · Căn khung',
    render: () => renderCameraScreen(false)
  },

  // 19 · Chụp phiếu lương · Đã nhận diện
  19: {
    cluster: '03 · Phiếu lương · Đối chiếu',
    title: '19 · Chụp phiếu lương · Đã nhận diện',
    render: () => renderCameraScreen(true)
  },

  // 20 · Phiếu lương · Đang đối chiếu
  20: {
    cluster: '03 · Phiếu lương · Đối chiếu',
    title: '20 · Phiếu lương · Đang đối chiếu',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body" style="align-items:center; justify-content:center; text-align:center; padding:24px;">
        <div style="width:240px; height:210px; border-radius:28px; background:var(--bg-sunken); display:flex; align-items:center; justify-content:center; position:relative; margin-bottom:24px;">
          <div style="width:154px; height:118px; background:#FFFFFF; border-radius:12px; padding:14px; box-shadow:0 8px 20px rgba(0,0,0,0.08); display:flex; flex-direction:column; gap:8px;">
            <div style="height:8px; width:70%; background:var(--brand-soft); border-radius:4px;"></div>
            <div style="height:6px; width:100%; background:var(--bg-sunken); border-radius:3px;"></div>
            <div style="height:6px; width:85%; background:var(--bg-sunken); border-radius:3px;"></div>
            <div style="height:6px; width:92%; background:var(--warning-soft); border-radius:3px;"></div>
            <div style="height:6px; width:60%; background:var(--bg-sunken); border-radius:3px;"></div>
          </div>
          <div style="position:absolute; bottom:18px; right:26px; width:44px; height:44px; border-radius:50%; background:var(--brand-primary); color:#FFFFFF; display:flex; align-items:center; justify-content:center; box-shadow:0 6px 14px rgba(13,92,72,0.35);">
            ${SVG.check(20)}
          </div>
        </div>

        <h1 class="t-h1">Đang đối chiếu</h1>
        <p class="t-body-m" style="margin-top:8px; max-width:300px;">
          Thường mất chưa tới 10 giây. Mọi thứ được xử lý ngay trên máy.
        </p>

        <div style="width:100%; height:6px; background:var(--bg-sunken); border-radius:3px; overflow:hidden; margin:20px 0;">
          <div style="width:68%; height:100%; background:var(--brand-primary); border-radius:3px;"></div>
        </div>

        <div class="card" style="width:100%; text-align:left; display:flex; flex-direction:column; gap:14px;">
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="width:24px; height:24px; border-radius:50%; background:var(--brand-primary); color:#fff; display:inline-flex; align-items:center; justify-content:center;">${SVG.check(13)}</span>
            <span style="font-size:15px;">Đọc chữ trên phiếu lương</span>
          </div>
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="width:24px; height:24px; border-radius:50%; background:var(--brand-primary); color:#fff; display:inline-flex; align-items:center; justify-content:center;">${SVG.check(13)}</span>
            <span style="font-size:15px;">Nhận diện 10 khoản thu nhập, khấu trừ</span>
          </div>
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="width:24px; height:24px; border-radius:50%; border:2px solid var(--brand-primary); display:inline-flex; align-items:center; justify-content:center; font-size:10px; color:var(--brand-primary);">●</span>
            <span style="font-size:15px; font-weight:600;">So với 38 giờ tăng ca bạn đã ghi</span>
          </div>
          <div style="display:flex; align-items:center; gap:12px; color:var(--text-muted);">
            <span style="width:24px; height:24px; border-radius:50%; border:1.5px solid var(--border-default); display:inline-block;"></span>
            <span style="font-size:15px;">Kiểm tra theo mức tối thiểu của luật</span>
          </div>
        </div>

        <button class="btn btn-soft" style="margin-top:16px;" onclick="go(22)">Xem kết quả đọc ngay →</button>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 21 · Phiếu lương · Ảnh bị mờ
  21: {
    cluster: '03 · Phiếu lương · Đối chiếu',
    title: '21 · Phiếu lương · Ảnh bị mờ',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div class="top-nav">
          <button class="icon-circle-btn" onclick="goBack(18)">${SVG.x()}</button>
          <div class="top-nav-title"></div>
          <div style="width:40px;"></div>
        </div>

        <div style="height:238px; border-radius:20px; background:#15201C; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; margin-bottom:18px;">
          <div style="transform:scale(0.68);">${renderMiniPayslip(false, true)}</div>
          <span style="position:absolute; top:12px; right:12px; background:var(--danger); color:#FFFFFF; font-size:12px; font-weight:600; padding:5px 11px; border-radius:999px;">Độ nét 38%</span>
        </div>

        <h2 class="t-h2">Ảnh hơi mờ, máy chưa đọc được</h2>
        <p class="t-body-m" style="margin-top:6px;">
          Chữ số trên phiếu lương rất nhỏ. Bạn thử chụp lại theo mấy mẹo sau nhé.
        </p>

        <div style="display:flex; flex-direction:column; gap:12px; margin-top:18px;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="icon-tile sm white" style="border:1px solid var(--border-default);">${SVG.sun(17)}</div>
            <span style="font-size:15px;">Đứng chỗ đủ sáng, tắt đèn flash nếu bị loá</span>
          </div>
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="icon-tile sm white" style="border:1px solid var(--border-default);">${SVG.file(17)}</div>
            <span style="font-size:15px;">Đặt tờ phiếu phẳng, máy song song với mặt giấy</span>
          </div>
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="icon-tile sm white" style="border:1px solid var(--border-default);">${SVG.image(17)}</div>
            <span style="font-size:15px;">Hoặc chọn ảnh rõ hơn có sẵn trong máy</span>
          </div>
        </div>

        <div style="margin-top:auto; padding-top:18px; display:flex; flex-direction:column; gap:8px;">
          <button class="btn btn-primary" onclick="go(18)">Chụp lại</button>
          <button class="btn btn-text" onclick="go(22)">Tự nhập số liệu</button>
        </div>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 22 · Kiểm tra số đã đọc
  22: {
    cluster: '03 · Phiếu lương · Đối chiếu',
    title: '22 · Kiểm tra số đã đọc',
    render: () => renderOcrConfirmScreen(false)
  },

  // 23 · Sửa số đã đọc
  23: {
    cluster: '03 · Phiếu lương · Đối chiếu',
    title: '23 · Sửa số đã đọc',
    render: () => renderOcrConfirmScreen(true)
  },

  // 24 · Kết quả đối chiếu
  24: {
    cluster: '03 · Phiếu lương · Đối chiếu',
    title: '24 · Kết quả đối chiếu',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div class="top-nav">
          <button class="icon-circle-btn" onclick="goBack(17)">${SVG.chevronL()}</button>
          <div class="top-nav-title">Kết quả đối chiếu</div>
          <button class="icon-circle-btn" onclick="openOverlayOn(24, 41)">${SVG.share(18)}</button>
        </div>

        <div class="t-cap" style="text-align:center; margin-bottom:10px;">Phiếu lương tháng 10/2026 · đối chiếu lúc 20:14</div>

        <div class="card-warn" style="padding:18px;">
          <div style="font-size:14px; font-weight:600; color:var(--warning);">Có thể bạn đang bị trả thiếu</div>
          <div style="font-size:42px; font-weight:700; line-height:1.15; letter-spacing:-0.02em; margin-top:4px;">269.231đ</div>
          <div class="t-body-m" style="margin-top:6px;">2 khoản tăng ca chưa khớp với giờ bạn đã ghi trong tháng 10.</div>

          <div class="card" style="margin-top:14px; padding:12px 14px; border:none;">
            <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:5px;">
              <span style="color:var(--text-secondary);">Giờ tăng ca bạn đã ghi</span>
              <b>38 giờ</b>
            </div>
            <div style="height:8px; background:var(--bg-sunken); border-radius:4px; overflow:hidden; margin-bottom:10px;">
              <div style="width:100%; height:100%; background:var(--brand-primary); border-radius:4px;"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:5px;">
              <span style="color:var(--text-secondary);">Giờ tăng ca trên phiếu lương</span>
              <b>34 giờ</b>
            </div>
            <div style="height:8px; background:var(--bg-sunken); border-radius:4px; overflow:hidden;">
              <div style="width:89%; height:100%; background:var(--warning); border-radius:4px;"></div>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin:16px 2px 8px;">
          <span class="t-sub">Chưa khớp</span>
          <span class="t-cap">2 khoản</span>
        </div>

        <div style="display:flex; flex-direction:column; gap:8px;">
          <div class="card" style="padding:14px 16px; display:flex; align-items:center; justify-content:space-between; cursor:pointer;" onclick="go(25)">
            <div>
              <div style="font-size:16px; font-weight:500;">Tăng ca ngày thường</div>
              <div class="t-cap">Bạn ghi 30 giờ · phiếu ghi 26 giờ</div>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="t-sub" style="color:var(--warning);">+161.538đ</span>
              <span style="color:var(--text-muted);">${SVG.chevronR(16)}</span>
            </div>
          </div>
          <div class="card" style="padding:14px 16px; display:flex; align-items:center; justify-content:space-between; cursor:pointer;" onclick="go(26)">
            <div>
              <div style="font-size:16px; font-weight:500;">Tăng ca Chủ nhật</div>
              <div class="t-cap">Tính hệ số 150% thay vì 200%</div>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="t-sub" style="color:var(--warning);">+107.692đ</span>
              <span style="color:var(--text-muted);">${SVG.chevronR(16)}</span>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin:16px 2px 8px;">
          <span class="t-sub">Đã khớp</span>
          <span class="t-cap">4 khoản</span>
        </div>

        <div class="list-card">
          ${[
            ['Số ngày công', '26 ngày'],
            ['Lương ngày công', '5.600.000đ'],
            ['Phụ cấp chuyên cần', '300.000đ'],
            ['Khấu trừ bảo hiểm 10,5%', '588.000đ']
          ].map(([k, v]) => `<div class="list-row" style="cursor:default;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="width:22px; height:22px; border-radius:50%; background:var(--success-soft); color:var(--success); display:inline-flex; align-items:center; justify-content:center;">${SVG.check(13)}</span>
              <span style="font-size:15px;">${k}</span>
            </div>
            <span style="font-size:14px; font-weight:500; color:var(--text-muted);">${v}</span>
          </div>`).join('')}
        </div>

        <div class="card-sunken" style="margin-top:12px;">
          <div style="font-size:13px; color:var(--text-secondary); line-height:1.45;">
            Kết quả dựa trên giờ bạn tự ghi và mức tối thiểu theo luật. Hãy xem lại trước khi trao đổi với công ty.
          </div>
        </div>
      </div>

      <div class="scr-footer">
        <button class="btn btn-primary" onclick="go(30)">Xem cách xử lý</button>
        <button class="btn btn-text" onclick="go(17)">Lưu lại, xử lý sau</button>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 25 · Chi tiết · Tăng ca ngày thường
  25: {
    cluster: '03 · Phiếu lương · Đối chiếu',
    title: '25 · Chi tiết · Tăng ca ngày thường',
    render: () => renderWeekdayDetailScreen(false)
  },

  // 26 · Chi tiết · Tăng ca Chủ nhật
  26: {
    cluster: '03 · Phiếu lương · Đối chiếu',
    title: '26 · Chi tiết · Tăng ca Chủ nhật',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div class="top-nav">
          <button class="icon-circle-btn" onclick="goBack(24)">${SVG.chevronL()}</button>
          <div class="top-nav-title">Chi tiết khoản chênh lệch</div>
          <div style="width:40px;"></div>
        </div>

        <span class="pill pill-warning" style="align-self:flex-start;">Tính sai hệ số</span>
        <h2 class="t-h2" style="margin-top:8px;">Tăng ca Chủ nhật · 8 giờ</h2>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:14px;">
          <div class="card" style="padding:14px;">
            <div style="font-size:13px; color:var(--text-muted); font-weight:500;">Phiếu lương tính</div>
            <div class="t-h1" style="margin-top:4px;">150%</div>
            <div style="font-size:14px; color:var(--text-secondary); margin-top:2px;">323.077đ</div>
          </div>
          <div class="card-soft" style="padding:14px;">
            <div style="font-size:13px; color:var(--brand-primary); font-weight:500;">Theo luật, tối thiểu</div>
            <div class="t-h1" style="color:var(--brand-primary); margin-top:4px;">200%</div>
            <div style="font-size:14px; color:var(--brand-primary); font-weight:500; margin-top:2px;">430.769đ</div>
          </div>
        </div>

        <div class="card-warn" style="margin-top:12px; padding:14px 16px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:15px;">Chênh lệch cần bổ sung</span>
          <span class="t-h3" style="color:var(--warning);">+107.692đ</span>
        </div>

        <div class="card" style="margin-top:12px; display:flex; flex-direction:column; gap:10px;">
          <div class="t-sub">Cách tính</div>
          <div style="display:flex; justify-content:space-between; font-size:14.5px;"><span class="t-body-m">26.923đ/giờ × 200%</span><b>53.846đ/giờ</b></div>
          <div style="display:flex; justify-content:space-between; font-size:14.5px;"><span class="t-body-m">53.846đ × 8 giờ</span><b>430.769đ</b></div>
          <div style="display:flex; justify-content:space-between; font-size:14.5px;"><span class="t-body-m">430.769đ − 323.077đ</span><b>107.692đ</b></div>
        </div>

        <div class="card" style="margin-top:12px; display:flex; gap:12px; align-items:flex-start; cursor:pointer;" onclick="go(39)">
          <div class="icon-tile sunken">${SVG.book(18)}</div>
          <div style="flex:1;">
            <div style="font-size:14px; font-weight:600;">Điều 98 · Bộ luật Lao động 2019</div>
            <div style="font-size:13px; color:var(--text-secondary); margin-top:3px;">Làm thêm giờ vào ngày nghỉ hằng tuần được trả ít nhất bằng 200% tiền lương.</div>
            <div style="font-size:14px; font-weight:600; color:var(--brand-primary); margin-top:6px;">Xem căn cứ đầy đủ →</div>
          </div>
        </div>

        <div class="t-sub" style="margin:16px 2px 8px;">Bằng chứng bạn đã ghi</div>
        <div class="list-card">
          ${['Chủ nhật, 04/10', 'Chủ nhật, 18/10'].map(d => `<div class="list-row" onclick="openOverlayOn(26, 53)">
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="icon-tile lg sunken">${SVG.image(19)}</div>
              <div>
                <div style="font-size:15.5px; font-weight:500;">${d}</div>
                <div class="t-cap">4 giờ tăng ca · 1 ảnh chấm công</div>
              </div>
            </div>
            <span style="color:var(--text-muted);">${SVG.chevronR(17)}</span>
          </div>`).join('')}
        </div>
      </div>

      <div class="scr-footer">
        <button class="btn btn-primary" onclick="go(31)">Thêm vào đề nghị bổ sung</button>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 27 · Phiếu lương · Tháng 9 khớp
  27: {
    cluster: '03 · Phiếu lương · Đối chiếu',
    title: '27 · Phiếu lương · Tháng 9 khớp',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div class="top-nav">
          <button class="icon-circle-btn" onclick="goBack(17)">${SVG.chevronL()}</button>
          <div class="top-nav-title">Tháng 9/2026</div>
          <button class="icon-circle-btn" onclick="openOverlayOn(27, 41)">${SVG.share(18)}</button>
        </div>

        <div class="card-success" style="text-align:center; padding:22px 18px;">
          <div style="width:56px; height:56px; border-radius:50%; background:var(--success); color:#FFFFFF; display:inline-flex; align-items:center; justify-content:center; margin-bottom:12px;">
            ${SVG.check(28)}
          </div>
          <h2 class="t-h2">Phiếu lương tháng 9 khớp</h2>
          <p class="t-body-m" style="margin-top:6px;">Tất cả các khoản đều khớp với giờ bạn ghi và mức tối thiểu theo luật.</p>
          <div class="t-cap" style="margin-top:14px;">Thực lãnh</div>
          <div class="t-h1" style="margin-top:2px;">6.512.308đ</div>
        </div>

        <div class="t-sub" style="margin:18px 2px 10px;">6 khoản đã khớp</div>
        <div class="list-card">
          ${[
            ['Ngày công', '26 ngày'],
            ['Lương ngày công', '5.600.000đ'],
            ['Tăng ca ngày thường · 22 giờ', '888.462đ'],
            ['Tăng ca Chủ nhật · 4 giờ', '215.385đ'],
            ['Phụ cấp chuyên cần', '300.000đ'],
            ['Khấu trừ bảo hiểm 10,5%', '588.000đ']
          ].map(([k, v]) => `<div class="list-row" style="cursor:default;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="width:22px; height:22px; border-radius:50%; background:var(--success-soft); color:var(--success); display:inline-flex; align-items:center; justify-content:center;">${SVG.check(13)}</span>
              <span style="font-size:15px;">${k}</span>
            </div>
            <span style="font-size:14px; font-weight:500; color:var(--text-muted);">${v}</span>
          </div>`).join('')}
        </div>
      </div>

      <div class="scr-footer">
        <button class="btn btn-primary" onclick="go(17)">Xong</button>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 28 · Bảo hiểm xã hội
  28: {
    cluster: '04 · BHXH & Hành động',
    title: '28 · Bảo hiểm xã hội',
    render: () => {
      const months2026 = [
        ['T1', 'Đã đóng', 'paid'], ['T2', 'Đã đóng', 'paid'], ['T3', 'Đã đóng', 'paid'], ['T4', 'Đã đóng', 'paid'],
        ['T5', 'Đã đóng', 'paid'], ['T6', 'Chưa nộp', 'unpaid'], ['T7', 'Chưa nộp', 'unpaid'], ['T8', 'Chưa nộp', 'unpaid'],
        ['T9', 'Đã đóng', 'paid'], ['T10', 'Đang chờ', 'wait'], ['T11', 'Chưa đến', 'future'], ['T12', 'Chưa đến', 'future']
      ];
      const prevYears = [
        { y: 2025, label: '12/12 tháng', ms: ['T1','T2','T3','T4','T5','T6','T7','T8','T9','T10','T11','T12'] },
        { y: 2024, label: '12/12 tháng', ms: ['T1','T2','T3','T4','T5','T6','T7','T8','T9','T10','T11','T12'] },
        { y: 2023, label: '10/10 tháng', ms: ['T3','T4','T5','T6','T7','T8','T9','T10','T11','T12'] }
      ];
      return `<div class="screen-canvas">
        ${renderStatusBar(false)}
        <div class="scr-body">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px;">
            <div>
              <h1 class="t-h1">Bảo hiểm xã hội</h1>
              <div class="t-cap" style="margin-top:2px;">Đồng bộ từ VssID · 20/11/2026</div>
            </div>
            <button class="icon-circle-btn" onclick="openOverlayOn(28, 44)">${SVG.refresh(18)}</button>
          </div>

          <div class="card">
            <div style="display:flex; align-items:baseline; gap:8px;">
              <span class="t-hero">40</span>
              <span class="t-body-m">/ 44 tháng đã được ghi nhận</span>
            </div>
            <div style="height:8px; background:var(--bg-sunken); border-radius:4px; overflow:hidden; display:flex; margin:12px 0 10px;">
              <div style="width:88%; background:var(--success);"></div>
              <div style="width:8%; background:var(--danger);"></div>
              <div style="width:4%; background:#CBD5D1;"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:12.5px; color:var(--text-secondary);">
              <span><b style="color:var(--success);">●</b> 40 đã ghi nhận</span>
              <span><b style="color:var(--danger);">●</b> 3 chưa nộp</span>
              <span><b style="color:var(--text-muted);">●</b> 1 đang chờ</span>
            </div>
          </div>

          <div class="card-danger" style="margin-top:12px;">
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="icon-tile white" style="color:var(--danger);">${SVG.warn(20)}</div>
              <div>
                <div class="t-sub" style="color:var(--danger);">3 tháng công ty chưa nộp</div>
                <div class="t-cap" style="color:var(--text-secondary);">Tháng 06, 07, 08/2026</div>
              </div>
            </div>
            <p style="font-size:14.5px; line-height:1.45; margin:10px 0 12px;">
              Lương của bạn đã bị trừ <b>1.764.000đ</b> cho 3 tháng này, nhưng cơ quan BHXH chưa ghi nhận khoản đóng nào.
            </p>
            <button class="btn btn-danger-solid btn-sm" onclick="go(30)">Xem cách xử lý</button>
          </div>

          <div class="card" style="margin-top:12px;">
            <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px;">
              <span class="t-sub">Năm 2026</span>
              <span class="t-cap">Mức đóng 588.000đ/tháng</span>
            </div>
            <div class="bhxh-grid">
              ${months2026.map(([m, st, cls]) => `<div class="bhxh-tile ${cls}" onclick="${cls === 'unpaid' ? 'go(29)' : ''}">
                <div style="font-size:14px; font-weight:600; color:${cls === 'future' ? 'var(--text-muted)' : 'var(--text-primary)'};">${m}</div>
                <div style="font-size:11.5px; font-weight:500; margin-top:2px; color:${cls === 'paid' ? 'var(--success)' : cls === 'unpaid' ? 'var(--danger)' : cls === 'wait' ? 'var(--text-secondary)' : 'var(--text-muted)'};">${st}</div>
              </div>`).join('')}
            </div>
          </div>

          <div class="list-card" style="margin-top:12px;">
            ${prevYears.map(yr => {
              const open = APP_STATE.bhxhOpen[yr.y];
              return `<div class="list-row" style="flex-direction:column; align-items:stretch;" onclick="toggleBhxhYear(${yr.y})">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:15.5px; font-weight:600;">Năm ${yr.y}</span>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="t-cap">${yr.label}</span>
                    <span style="color:var(--text-muted);">${open ? SVG.chevronD(16) : SVG.chevronR(16)}</span>
                  </div>
                </div>
                ${open ? `<div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:10px;">
                  ${yr.ms.map(m => `<span class="pill pill-success">${m}</span>`).join('')}
                </div>` : ''}
              </div>`;
            }).join('')}
          </div>

          <div class="card-sunken" style="margin-top:12px;">
            <div style="font-size:13px; color:var(--text-secondary); line-height:1.45;">
              Tháng chưa được ghi nhận có thể khiến bạn không đủ điều kiện hưởng thai sản, ốm đau hay trợ cấp thất nghiệp.
            </div>
          </div>
        </div>
        ${renderTabBar('bhxh')}
        ${renderHomeBar(false)}
      </div>`;
    }
  },

  // 29 · BHXH · Chi tiết tháng
  29: {
    cluster: '04 · BHXH & Hành động',
    title: '29 · BHXH · Chi tiết tháng',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div class="top-nav">
          <button class="icon-circle-btn" onclick="goBack(28)">${SVG.chevronL()}</button>
          <div class="top-nav-title">Tháng 06/2026</div>
          <div style="width:40px;"></div>
        </div>

        <div class="card-danger">
          <div style="font-size:14px; font-weight:600; color:var(--danger);">Chưa được ghi nhận</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:12px 0;">
            <div class="card" style="padding:12px; border:none;">
              <div class="t-cap">Phiếu lương đã trừ</div>
              <div class="t-h3" style="margin-top:2px;">588.000đ</div>
            </div>
            <div class="card" style="padding:12px; border:none;">
              <div class="t-cap">VssID ghi nhận</div>
              <div class="t-h3" style="color:var(--danger); margin-top:2px;">0đ</div>
            </div>
          </div>
          <div style="font-size:14.5px; line-height:1.45;">
            Lương tháng 06 đã trừ phần bảo hiểm của bạn, nhưng đến 20/11/2026 cơ quan BHXH vẫn chưa nhận được khoản đóng nào cho tháng này.
          </div>
        </div>

        <div class="t-sub" style="margin:16px 2px 8px;">Phần bị trừ trên phiếu lương</div>
        <div class="list-card">
          <div class="list-row" style="cursor:default;"><span class="t-body-m">BHXH 8%</span><b>448.000đ</b></div>
          <div class="list-row" style="cursor:default;"><span class="t-body-m">BHYT 1,5%</span><b>84.000đ</b></div>
          <div class="list-row" style="cursor:default;"><span class="t-body-m">BHTN 1%</span><b>56.000đ</b></div>
          <div class="list-row" style="cursor:default; background:#FAF9F6;"><b>Phần bạn đóng</b><b>588.000đ</b></div>
        </div>

        <div class="card-sunken" style="margin-top:12px;">
          <div style="font-size:13px; color:var(--text-secondary); line-height:1.45;">
            Công ty còn phải đóng thêm phần của công ty (21,5%) là <b>1.204.000đ</b> cho tháng này.
          </div>
        </div>

        <div class="card" style="margin-top:12px; display:flex; flex-direction:column; gap:12px;">
          <div class="t-sub">Mốc thời gian</div>
          ${[
            ['05/07/2026', 'Nhận lương, đã trừ 588.000đ', false],
            ['31/07/2026', 'Hạn công ty nộp BHXH tháng 06', false],
            ['20/11/2026', 'VssID vẫn chưa ghi nhận', true]
          ].map(([d, txt, bad]) => `<div style="display:flex; gap:12px; align-items:flex-start;">
            <span style="width:8px; height:8px; border-radius:50%; background:${bad ? 'var(--danger)' : 'var(--brand-primary)'}; margin-top:6px; flex-shrink:0;"></span>
            <div>
              <div class="t-cap">${d}</div>
              <div style="font-size:14px; font-weight:500;">${txt}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>

      <div class="scr-footer">
        <button class="btn btn-primary" onclick="go(31)">Đưa vào đề nghị</button>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 30 · Cách xử lý từng bước
  30: {
    cluster: '04 · BHXH & Hành động',
    title: '30 · Cách xử lý từng bước',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div class="top-nav">
          <button class="icon-circle-btn" onclick="goBack(24)">${SVG.chevronL()}</button>
          <div class="top-nav-title">Cách xử lý</div>
          <div style="width:40px;"></div>
        </div>

        <h1 class="t-h1">3 bước để đề nghị<br>bổ sung quyền lợi</h1>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin:12px 0 16px;">
          <span class="pill pill-warning">Lương thiếu 269.231đ</span>
          <span class="pill pill-danger">BHXH chưa nộp 3 tháng</span>
        </div>

        <div class="card" style="display:flex; flex-direction:column; gap:18px;">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div style="width:32px; height:32px; border-radius:50%; background:var(--brand-primary); color:#FFFFFF; font-size:14px; font-weight:600; display:flex; align-items:center; justify-content:center; flex-shrink:0;">1</div>
            <div style="flex:1;">
              <div class="t-sub">Hỏi lại phòng Nhân sự</div>
              <div class="t-body-m" style="margin-top:4px;">Gửi bảng đối chiếu, đề nghị kiểm tra và phản hồi trong 7 ngày làm việc.</div>
              <div class="t-cap" style="margin-top:4px;">Phần lớn trường hợp được giải quyết ở bước này</div>
              <button class="btn btn-primary btn-sm" style="margin-top:10px;" onclick="go(31)">Soạn đề nghị</button>
            </div>
          </div>

          <div style="border-top:1px solid var(--border-default); padding-top:16px; display:flex; gap:12px; align-items:flex-start;">
            <div style="width:32px; height:32px; border-radius:50%; border:1.5px solid var(--border-default); color:var(--text-secondary); font-size:14px; font-weight:600; display:flex; align-items:center; justify-content:center; flex-shrink:0;">2</div>
            <div>
              <div class="t-sub" style="color:var(--text-secondary);">Nhờ Công đoàn cơ sở</div>
              <div class="t-body-m" style="margin-top:4px;">Nếu quá 7 ngày chưa có phản hồi, hoặc lời giải thích chưa thỏa đáng.</div>
              <div class="t-cap" style="margin-top:4px;">Công đoàn Cty May Thành Phát · Nhà B</div>
            </div>
          </div>

          <div style="border-top:1px solid var(--border-default); padding-top:16px; display:flex; gap:12px; align-items:flex-start;">
            <div style="width:32px; height:32px; border-radius:50%; border:1.5px solid var(--border-default); color:var(--text-secondary); font-size:14px; font-weight:600; display:flex; align-items:center; justify-content:center; flex-shrink:0;">3</div>
            <div>
              <div class="t-sub" style="color:var(--text-secondary);">Gửi cơ quan có thẩm quyền</div>
              <div class="t-body-m" style="margin-top:4px;">Hòa giải viên lao động (về tiền lương) hoặc cơ quan BHXH nơi công ty đóng (về bảo hiểm).</div>
              <div class="t-cap" style="margin-top:4px;">App hướng dẫn hồ sơ khi bạn đến bước này</div>
            </div>
          </div>
        </div>

        <div class="card" style="margin-top:12px; display:flex; gap:12px; align-items:flex-start;">
          <div class="icon-tile lg soft">${SVG.folder(20)}</div>
          <div>
            <div class="t-sub">Bộ bằng chứng của bạn</div>
            <div style="font-size:13.5px; color:var(--text-secondary); margin-top:2px;">38 lần ghi giờ · 6 ảnh · 1 phiếu lương</div>
            <div class="t-cap" style="margin-top:3px;">Chỉ lưu trên máy. Bạn quyết định gửi gì, gửi cho ai.</div>
          </div>
        </div>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 31 · Soạn đề nghị
  31: {
    cluster: '04 · BHXH & Hành động',
    title: '31 · Soạn đề nghị',
    render: () => {
      const st = APP_STATE;
      const bodyPolite = `Kính gửi ${st.requestRecipient},\n\nEm là Nguyễn Thị Hoa, mã NV TP-03127, Tổ may 3. Khi đối chiếu phiếu lương tháng 10/2026 với giờ làm thực tế, em thấy 2 khoản có thể chưa đúng:\n\n• Tăng ca ngày thường: phiếu ghi 26 giờ, em làm 30 giờ (thêm 2 giờ ngày 07/10 và 2 giờ ngày 14/10).\n• Tăng ca Chủ nhật 04/10 và 18/10 đang tính 150%, theo Điều 98 Bộ luật Lao động là ít nhất 200%.\n\nTổng chênh lệch khoảng 269.231đ. Em gửi kèm bảng đối chiếu và ảnh chấm công, mong phòng kiểm tra giúp và phản hồi trước ngày 28/11/2026.\n\nEm cảm ơn ạ.`;
      const bodyShort = `Kính gửi ${st.requestRecipient},\n\nEm là Nguyễn Thị Hoa (TP-03127, Tổ may 3). Phiếu lương tháng 10/2026 của em có thể đang thiếu 269.231đ tiền tăng ca: thiếu 4 giờ ngày thường và tính sai hệ số 2 ngày Chủ nhật. Em gửi kèm bảng đối chiếu, mong phòng kiểm tra và phản hồi trước ngày 28/11/2026.\n\nEm cảm ơn ạ.`;
      const text = st.requestTone === 'short' ? bodyShort : bodyPolite;
      return `<div class="screen-canvas">
        ${renderStatusBar(false)}
        <div class="scr-body">
          <div class="top-nav">
            <button class="icon-circle-btn" onclick="goBack(30)">${SVG.x()}</button>
            <div class="top-nav-title">Đề nghị kiểm tra lương</div>
            <div style="width:40px;"></div>
          </div>

          <div class="card" style="padding:12px 14px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="openOverlayOn(31, 48)">
            <span style="font-size:14px; color:var(--text-muted);">Gửi đến</span>
            <div style="display:flex; align-items:center; gap:6px; font-size:14px; font-weight:500;">
              <span>${st.requestRecipient} · May Thành Phát</span>
              <span style="color:var(--text-muted);">${SVG.chevronR(16)}</span>
            </div>
          </div>

          <div style="margin-top:14px;">
            <label class="field-label">Giọng văn</label>
            <div class="seg-control">
              <button class="seg-btn ${st.requestTone === 'polite' ? 'active' : ''}" onclick="setTone('polite')">Lịch sự, đầy đủ</button>
              <button class="seg-btn ${st.requestTone === 'short' ? 'active' : ''}" onclick="setTone('short')">Ngắn gọn</button>
            </div>
          </div>

          <div class="card" style="margin-top:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <span class="t-cap">Soạn sẵn từ kết quả đối chiếu</span>
              <span style="font-size:13px; font-weight:600; color:var(--brand-primary); cursor:pointer;" onclick="openOverlayOn(31, 52)">Sửa</span>
            </div>
            <div style="font-size:14.5px; line-height:1.55; white-space:pre-line; color:var(--text-primary);">${text}</div>
          </div>

          <label class="field-label" style="margin-top:14px;">Đính kèm</label>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <div class="card" style="padding:11px; display:flex; align-items:center; gap:9px; cursor:pointer;" onclick="go(32)">
              <div class="icon-tile sm sunken">${SVG.file(17)}</div>
              <div>
                <div style="font-size:13.5px; font-weight:500;">Bảng đối chiếu</div>
                <div class="t-cap" style="font-size:11.5px;">PDF · 2 trang</div>
              </div>
            </div>
            <div class="card" style="padding:11px; display:flex; align-items:center; gap:9px; cursor:pointer;" onclick="openOverlayOn(31, 53)">
              <div class="icon-tile sm sunken">${SVG.image(17)}</div>
              <div>
                <div style="font-size:13.5px; font-weight:500;">Ảnh chấm công</div>
                <div class="t-cap" style="font-size:11.5px;">4 ảnh</div>
              </div>
            </div>
          </div>
        </div>

        <div class="scr-footer">
          <button class="btn btn-primary" onclick="go(33)">Chia sẻ đề nghị</button>
          <button class="btn btn-text" onclick="openOverlayOn(31, 54)">Sao chép nội dung</button>
        </div>
        ${renderHomeBar(false)}
      </div>`;
    }
  },

  // 32 · Xem trước bảng đối chiếu
  32: {
    cluster: '04 · BHXH & Hành động',
    title: '32 · Xem trước bảng đối chiếu',
    render: () => `<div class="screen-canvas bg-sunken">
      ${renderStatusBar(false)}
      <div class="scr-body" style="align-items:center;">
        <div class="top-nav" style="width:100%;">
          <button class="icon-circle-btn" onclick="goBack(31)">${SVG.x()}</button>
          <div class="top-nav-title">Bảng đối chiếu tháng 10</div>
          <button class="icon-circle-btn" onclick="openOverlayOn(32, 41)">${SVG.share(18)}</button>
        </div>

        <div style="width:316px; background:#FFFFFF; border-radius:8px; padding:18px 16px; box-shadow:0 10px 26px rgba(0,0,0,0.12); color:var(--text-primary); margin-top:6px;">
          <div style="text-align:center;">
            <div style="font-size:7.5px; font-weight:700;">CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
            <div style="font-size:7px;">Độc lập · Tự do · Hạnh phúc</div>
            <div style="width:60px; height:1px; background:#15201C; margin:4px auto 10px;"></div>
            <div style="font-size:10.5px; font-weight:700;">BẢNG ĐỐI CHIẾU TIỀN LƯƠNG THÁNG 10/2026</div>
          </div>

          <div style="font-size:7.5px; color:var(--text-secondary); line-height:1.45; margin:10px 0;">
            Người lao động: Nguyễn Thị Hoa · Mã NV: TP-03127<br>
            Đơn vị: Tổ may 3, Cty TNHH May Thành Phát
          </div>

          <div style="border:1px solid var(--border-default); font-size:7.5px;">
            <div style="display:grid; grid-template-columns:1.8fr 1fr 1fr; background:var(--bg-sunken); font-weight:700; padding:5px 6px;">
              <span>Khoản</span><span style="text-align:right;">Tự ghi</span><span style="text-align:right;">Phiếu lương</span>
            </div>
            ${[
              ['Ngày công', '26', '26', false],
              ['Giờ tăng ca ngày thường', '30', '26', true],
              ['Hệ số tăng ca Chủ nhật', '200%', '150%', true],
              ['Tiền tăng ca ngày thường', '1.211.538', '1.050.000', true],
              ['Tiền tăng ca Chủ nhật', '430.769', '323.077', true],
              ['Phụ cấp chuyên cần', '300.000', '300.000', false],
              ['Chênh lệch đề nghị bổ sung', '269.231', '', false, true]
            ].map(([k, a, b, hl, bold]) => `<div style="display:grid; grid-template-columns:1.8fr 1fr 1fr; padding:5px 6px; border-top:1px solid var(--border-default); ${hl ? 'background:var(--warning-soft);' : ''} ${bold ? 'font-weight:700;' : ''}">
              <span>${k}</span><span style="text-align:right;">${a}</span><span style="text-align:right;">${b}</span>
            </div>`).join('')}
          </div>

          <div style="font-size:7px; color:var(--text-secondary); margin-top:10px;">
            Căn cứ: Điều 98 Bộ luật Lao động 2019. Kèm theo: 4 ảnh bảng chấm công.
          </div>

          <div style="display:flex; justify-content:space-between; font-size:7.5px; font-weight:700; margin-top:20px; padding:0 12px 20px;">
            <span>Người lao động</span><span>Đại diện phòng Nhân sự</span>
          </div>
        </div>

        <div class="t-cap" style="margin-top:12px;">Trang 1 / 2</div>
      </div>

      <div class="scr-footer">
        <button class="btn btn-primary" onclick="go(33)">Chia sẻ file PDF</button>
        <button class="btn btn-text" onclick="openOverlayOn(32, 55)">Lưu vào Tệp</button>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 33 · Đã chuẩn bị xong
  33: {
    cluster: '04 · BHXH & Hành động',
    title: '33 · Đã chuẩn bị xong',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body" style="align-items:center; justify-content:center; text-align:center; padding:24px;">
        <div style="width:112px; height:112px; border-radius:50%; background:var(--success-soft); display:flex; align-items:center; justify-content:center; margin-bottom:22px;">
          <div style="width:76px; height:76px; border-radius:50%; background:var(--brand-primary); color:#FFFFFF; display:flex; align-items:center; justify-content:center;">
            ${SVG.check(34)}
          </div>
        </div>

        <h1 class="t-h1">Đã chuẩn bị xong đề nghị</h1>
        <p class="t-body" style="color:var(--text-secondary); margin-top:10px; max-width:320px;">
          Công Bằng đã lưu bộ bằng chứng và sẽ nhắc bạn nếu chưa có phản hồi đúng hạn.
        </p>

        <div class="card" style="width:100%; text-align:left; margin-top:24px; display:flex; flex-direction:column; gap:14px;">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div style="width:24px; height:24px; border-radius:50%; background:var(--brand-primary); color:#fff; display:flex; align-items:center; justify-content:center; flex-shrink:0;">${SVG.check(13)}</div>
            <div><div style="font-size:15.5px; font-weight:500;">Hôm nay, 21/11</div><div class="t-cap">Gửi đề nghị cho phòng Nhân sự</div></div>
          </div>
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div style="width:24px; height:24px; border-radius:50%; border:2px solid var(--brand-primary); flex-shrink:0;"></div>
            <div><div style="font-size:15.5px; font-weight:500; color:var(--text-secondary);">Thứ Bảy, 28/11</div><div class="t-cap">Hạn phản hồi · app sẽ nhắc bạn</div></div>
          </div>
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div style="width:24px; height:24px; border-radius:50%; border:1.5px solid var(--border-default); flex-shrink:0;"></div>
            <div><div style="font-size:15.5px; font-weight:500; color:var(--text-secondary);">Nếu chưa được giải quyết</div><div class="t-cap">Chuyển sang bước 2: nhờ Công đoàn</div></div>
          </div>
        </div>

        <div style="width:100%; margin-top:auto; padding-top:22px; display:flex; flex-direction:column; gap:8px;">
          <button class="btn btn-primary" onclick="go(10)">Về trang chủ</button>
          <button class="btn btn-text" onclick="go(34)">Theo dõi đề nghị</button>
        </div>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 34 · Theo dõi đề nghị
  34: {
    cluster: '04 · BHXH & Hành động',
    title: '34 · Theo dõi đề nghị',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div class="top-nav">
          <button class="icon-circle-btn" onclick="goBack(33)">${SVG.chevronL()}</button>
          <div class="top-nav-title">Đề nghị tháng 11</div>
          <button class="icon-circle-btn" onclick="openOverlayOn(34, 42)">${SVG.dots()}</button>
        </div>

        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="pill pill-warning">Đang chờ phản hồi</span>
            <span class="t-cap">Gửi 21/11</span>
          </div>
          <div class="t-h3" style="margin-top:10px;">Phòng Nhân sự còn 4 ngày làm việc để trả lời</div>
          <div style="height:8px; background:var(--bg-sunken); border-radius:4px; overflow:hidden; margin:12px 0 6px;">
            <div style="width:45%; height:100%; background:var(--brand-primary); border-radius:4px;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:13px; color:var(--text-secondary);">
            <span>Ngày 3</span><span>Hạn 28/11</span>
          </div>
        </div>

        <div class="card" style="margin-top:12px; display:flex; flex-direction:column; gap:14px;">
          <div class="t-sub">Diễn biến</div>
          ${[
            ['Đã gửi đề nghị', '21/11 · Qua Zalo, kèm bảng đối chiếu PDF', true],
            ['Tổ trưởng xác nhận đã chuyển', '24/11 · Bạn tự ghi lại', true],
            ['Hạn phòng Nhân sự phản hồi', '28/11 · Sẽ nhắc bạn lúc 8:00', 'ring'],
            ['Nhờ Công đoàn cơ sở', 'Sau đó · Nếu chưa được giải quyết', false]
          ].map(([t, sub, state]) => `<div style="display:flex; gap:12px; align-items:flex-start;">
            <div style="width:22px; height:22px; border-radius:50%; background:${state === true ? 'var(--brand-primary)' : '#FFFFFF'}; border:${state === 'ring' ? '2px solid var(--brand-primary)' : state === false ? '1.5px solid var(--border-default)' : 'none'}; color:#FFFFFF; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:2px;">
              ${state === true ? SVG.check(12) : ''}
            </div>
            <div>
              <div style="font-size:15.5px; font-weight:500; color:${state === false ? 'var(--text-muted)' : 'var(--text-primary)'};">${t}</div>
              <div class="t-cap">${sub}</div>
            </div>
          </div>`).join('')}
        </div>

        <div class="card" style="margin-top:12px;">
          <div class="t-sub" style="margin-bottom:10px;">Nội dung đề nghị</div>
          <div style="display:flex; justify-content:space-between; font-size:15px; margin-bottom:6px;">
            <span class="t-body-m">Tiền tăng ca tháng 10</span><b>269.231đ</b>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:15px;">
            <span class="t-body-m">BHXH tháng 06, 07, 08</span><b>3 tháng</b>
          </div>
        </div>
      </div>

      <div class="scr-footer">
        <button class="btn btn-primary" onclick="go(35)">Ghi phản hồi của công ty</button>
        <button class="btn btn-text" onclick="openOverlayOn(34, 56)">Nhắc lại phòng Nhân sự</button>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 35 · Ghi phản hồi của công ty
  35: {
    cluster: '04 · BHXH & Hành động',
    title: '35 · Ghi phản hồi của công ty',
    render: () => {
      const st = APP_STATE;
      const opts = [
        ['Đồng ý bổ sung toàn bộ', 'Trả bù tiền và nộp bù BHXH'],
        ['Đồng ý một phần', 'Chấp nhận một số khoản nhất định'],
        ['Giải thích khác hoặc từ chối', 'Cần xem lại hoặc chuyển Công đoàn'],
        ['Chưa trả lời', 'Quá hạn nhưng chưa có phản hồi']
      ];
      return `<div class="screen-canvas">
        ${renderStatusBar(false)}
        <div class="scr-body">
          <div class="top-nav">
            <button class="icon-circle-btn" onclick="goBack(34)">${SVG.x()}</button>
            <div class="top-nav-title">Ghi phản hồi</div>
            <div style="width:40px;"></div>
          </div>

          <h1 class="t-h1">Công ty đã trả lời<br>thế nào?</h1>

          <div style="display:flex; flex-direction:column; gap:8px; margin-top:16px;">
            ${opts.map(([title, sub]) => {
              const sel = st.companyResponse === title;
              return `<div class="card" style="padding:13px 14px; border-color:${sel ? 'var(--brand-primary)' : 'var(--border-default)'}; background:${sel ? 'var(--brand-soft)' : '#FFFFFF'}; display:flex; align-items:center; justify-content:space-between; cursor:pointer;" onclick="setCompanyResponse('${title}')">
                <div>
                  <div style="font-size:15.5px; font-weight:600; color:${sel ? 'var(--brand-primary)' : 'var(--text-primary)'};">${title}</div>
                  <div class="t-cap" style="margin-top:2px;">${sub}</div>
                </div>
                <span style="width:20px; height:20px; border-radius:50%; border:2px solid ${sel ? 'var(--brand-primary)' : 'var(--border-default)'}; background:${sel ? 'var(--brand-primary)' : '#fff'}; color:#fff; display:inline-flex; align-items:center; justify-content:center;">
                  ${sel ? SVG.check(12) : ''}
                </span>
              </div>`;
            }).join('')}
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:14px;">
            <div>
              <label class="field-label">Số tiền bổ sung</label>
              <div class="field-box" onclick="openOverlayOn(35, 52)"><span>269.231đ</span></div>
            </div>
            <div>
              <label class="field-label">Trả vào kỳ</label>
              <div class="field-box" onclick="openOverlayOn(35, 47)">
                <span>${st.payPeriod.replace('/2026', '')}</span>
                <span style="color:var(--text-muted);">${SVG.chevronD(15)}</span>
              </div>
            </div>
          </div>

          <div style="margin-top:14px;">
            <label class="field-label">Ghi chú</label>
            <div class="card" style="padding:12px 14px; font-size:14.5px; line-height:1.45; cursor:pointer;" onclick="openOverlayOn(35, 52)">
              Chị Lan phòng Nhân sự hẹn trả bù trong kỳ lương tháng 11. BHXH sẽ được nộp bù trước 15/12.
            </div>
          </div>

          <div class="card-sunken" style="margin-top:12px;">
            <div style="font-size:13px; color:var(--text-secondary); line-height:1.45;">
              Khi bạn chụp phiếu lương tháng 11, app sẽ tự kiểm tra xem khoản bù đã có chưa.
            </div>
          </div>
        </div>

        <div class="scr-footer">
          <button class="btn btn-primary" onclick="go(10)">Lưu phản hồi</button>
        </div>
        ${renderHomeBar(false)}
      </div>`;
    }
  }
});

window.renderCameraScreen = function (detected) {
  const st = APP_STATE;
  const modes = ['Phiếu giấy', 'Ảnh chụp màn hình', 'PDF'];
  return `<div class="screen-canvas bg-black">
    ${renderStatusBar(true)}
    <div style="padding:6px 20px 10px; display:flex; align-items:center; justify-content:space-between; z-index:5;">
      <button class="icon-circle-btn dark-glass" onclick="goBack(17)">${SVG.x()}</button>
      <span class="t-sub" style="color:#FFFFFF;">Chụp phiếu lương</span>
      <button class="icon-circle-btn dark-glass" onclick="toggleFlash()">${SVG.flash(18, st.flashOn)}</button>
    </div>

    <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:12px 20px; position:relative;">
      <div style="position:relative; padding:18px; border-radius:16px;">
        <!-- 4 Corner Brackets -->
        <span style="position:absolute; top:0; left:0; width:24px; height:24px; border-top:3px solid ${detected ? '#5BE3A4' : '#FFFFFF'}; border-left:3px solid ${detected ? '#5BE3A4' : '#FFFFFF'}; border-radius:4px 0 0 0;"></span>
        <span style="position:absolute; top:0; right:0; width:24px; height:24px; border-top:3px solid ${detected ? '#5BE3A4' : '#FFFFFF'}; border-right:3px solid ${detected ? '#5BE3A4' : '#FFFFFF'}; border-radius:0 4px 0 0;"></span>
        <span style="position:absolute; bottom:0; left:0; width:24px; height:24px; border-bottom:3px solid ${detected ? '#5BE3A4' : '#FFFFFF'}; border-left:3px solid ${detected ? '#5BE3A4' : '#FFFFFF'}; border-radius:0 0 0 4px;"></span>
        <span style="position:absolute; bottom:0; right:0; width:24px; height:24px; border-bottom:3px solid ${detected ? '#5BE3A4' : '#FFFFFF'}; border-right:3px solid ${detected ? '#5BE3A4' : '#FFFFFF'}; border-radius:0 0 4px 0;"></span>
        ${renderMiniPayslip(detected, false)}
      </div>

      <div style="margin-top:18px; padding:10px 16px; border-radius:999px; font-size:13.5px; font-weight:600; ${detected ? 'background:#5BE3A4; color:#083D30;' : 'background:rgba(255,255,255,0.14); color:#FFFFFF;'}">
        ${detected ? 'Đã nhận diện 9 dòng · Giữ yên máy' : 'Đặt cả tờ phiếu lương vào trong khung'}
      </div>
    </div>

    <div style="background:#000000; padding:12px 24px 8px; display:flex; flex-direction:column; gap:18px;">
      <div style="display:flex; justify-content:center; gap:18px; font-size:13px; font-weight:600;">
        ${modes.map(m => `<span onclick="setCameraMode('${m}')" style="cursor:pointer; padding:5px 10px; border-radius:999px; ${st.cameraMode === m ? 'background:rgba(255,255,255,0.18); color:#FFFFFF;' : 'color:rgba(255,255,255,0.55);'}">${m}</span>`).join('')}
      </div>

      <div style="display:flex; align-items:center; justify-content:space-between; padding:0 12px;">
        <button class="icon-circle-btn" style="width:48px; height:48px; background:#15201C; border-color:#2D3B35; color:#FFFFFF;" onclick="go(20)">${SVG.image(20)}</button>
        <button onclick="go(${detected ? 20 : 21})" style="width:76px; height:76px; border-radius:50%; background:transparent; border:4px solid #FFFFFF; padding:5px; cursor:pointer; display:flex; align-items:center; justify-content:center;">
          <span style="width:100%; height:100%; border-radius:50%; background:${detected ? '#5BE3A4' : '#FFFFFF'}; display:block;"></span>
        </button>
        <button onclick="go(22)" style="background:transparent; border:none; color:#FFFFFF; font-family:inherit; font-size:12px; font-weight:600; cursor:pointer; width:48px; text-align:center;">Nhập tay</button>
      </div>
    </div>
    ${renderHomeBar(true)}
  </div>`;
};

window.renderOcrConfirmScreen = function (editing) {
  const rows = [
    ['Ngày công thực tế', '26 ngày', false],
    ['Lương ngày công', '5.600.000đ', false],
    ['Giờ tăng ca ngày thường', '26 giờ', false],
    ['Tiền tăng ca ngày thường', '1.050.000đ', false],
    ['Giờ tăng ca Chủ nhật', '8 giờ', false],
    ['Tiền tăng ca Chủ nhật', '323.077đ', true],
    ['Phụ cấp chuyên cần', '300.000đ', false]
  ];
  const typed = APP_STATE.ocrEditTyped;
  return `<div class="screen-canvas">
    ${renderStatusBar(false)}
    <div class="scr-body">
      <div class="top-nav">
        <button class="icon-circle-btn" onclick="goBack(20)">${SVG.chevronL()}</button>
        <div class="top-nav-title">Kiểm tra số đã đọc</div>
        <div style="width:40px;"></div>
      </div>

      <div class="card" style="padding:12px; display:flex; align-items:center; gap:12px;">
        <div onclick="openOverlayOn(22, 53)" style="width:50px; height:64px; border-radius:8px; background:var(--bg-sunken); border:1px solid var(--border-default); display:flex; flex-direction:column; justify-content:center; padding:6px; gap:4px; cursor:pointer; flex-shrink:0;">
          <div style="height:4px; background:#C5C2B8; border-radius:2px;"></div>
          <div style="height:4px; background:#C5C2B8; border-radius:2px;"></div>
          <div style="height:4px; width:70%; background:var(--warning); border-radius:2px;"></div>
        </div>
        <div style="flex:1;">
          <div class="t-sub">Phiếu lương tháng 10/2026</div>
          <div class="t-cap">Đọc được 10 dòng · 1 dòng cần xem lại</div>
          <div style="font-size:13.5px; font-weight:600; color:var(--brand-primary); margin-top:4px; cursor:pointer;" onclick="go(18)">Chụp lại</div>
        </div>
      </div>

      <div class="t-body-m" style="margin:12px 2px;">
        Chạm vào số nếu máy đọc sai. Dòng có viền cam là dòng máy chưa chắc chắn.
      </div>

      <div class="t-lbl" style="margin:4px 4px 6px;">Thu nhập</div>
      <div class="list-card">
        ${rows.map(([k, v, warn]) => `<div class="list-row ${warn ? 'warn-row' : ''}" onclick="go(23)">
          <div style="flex:1;">
            <div style="font-size:15px; color:${warn ? 'var(--text-primary)' : 'var(--text-secondary)'};">${k}</div>
            ${warn ? `<div style="font-size:12.5px; font-weight:500; color:var(--warning); margin-top:3px;">Chữ số thứ hai bị mờ, bạn xem lại giúp nhé</div>` : ''}
          </div>
          <span style="font-size:15.5px; font-weight:600;">${v}</span>
        </div>`).join('')}
      </div>

      <div class="t-lbl" style="margin:14px 4px 6px;">Khấu trừ</div>
      <div class="list-card">
        <div class="list-row" onclick="go(23)">
          <span style="font-size:15px; color:var(--text-secondary);">BHXH · BHYT · BHTN (10,5%)</span>
          <span style="font-size:15.5px; font-weight:500;">− 588.000đ</span>
        </div>
      </div>

      <div class="card-sunken" style="margin-top:12px; display:flex; justify-content:space-between; align-items:center;">
        <span class="t-sub">Thực lãnh</span>
        <span class="t-h3">6.685.077đ</span>
      </div>
    </div>

    <div class="scr-footer">
      <button class="btn btn-primary" onclick="go(24)">Đúng rồi, đối chiếu ngay</button>
      <div class="t-cap" style="text-align:center;">Bạn vẫn có thể sửa sau khi đối chiếu</div>
    </div>
    ${renderHomeBar(false)}

    ${editing ? `<div class="overlay-backdrop" onclick="if(event.target===this) go(22)">
      <div class="bottom-sheet" style="padding:10px 0 0;" onclick="event.stopPropagation()">
        <div style="padding:0 20px; display:flex; flex-direction:column; gap:12px;">
          <div class="sheet-handle"></div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div class="t-h3">Sửa số đã đọc</div>
            <button class="icon-circle-btn sm sunken" onclick="go(22)">${SVG.x(16)}</button>
          </div>
          <div class="card-sunken" style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div class="t-cap">Ảnh gốc · Tiền tăng ca Chủ nhật</div>
              <div style="font-size:18px; font-weight:700; letter-spacing:0.06em; margin-top:2px;">3<span style="color:var(--warning);">?</span>3.077</div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="go(22)">Lưu</button>
          </div>
          <div class="field-box" style="border-color:var(--brand-primary);">
            <span style="font-weight:700; font-size:20px; color:${typed ? 'var(--text-primary)' : 'var(--text-muted)'};">${typed || 'Nhập số tiền'}</span>
            <span style="color:var(--text-muted);">đ</span>
          </div>
          <div class="t-cap">Đối chiếu lại với tờ phiếu giấy. Số bạn sửa sẽ được đánh dấu là “nhập tay”.</div>
        </div>
        ${renderNumpad('tapOcrDigit', 'tapOcrBack')}
        ${renderHomeBar(false)}
      </div>
    </div>` : ''}
  </div>`;
};

window.renderWeekdayDetailScreen = function (expanded) {
  const days = [
    ['Thứ Năm, 01/10', '2 giờ', '2 giờ', false],
    ['Thứ Ba, 06/10', '3 giờ', '3 giờ', false],
    ['Thứ Tư, 07/10', '2 giờ', '0 giờ', true],
    ['Thứ Sáu, 09/10', '2 giờ', '2 giờ', false],
    ['Thứ Tư, 14/10', '2 giờ', '0 giờ', true],
    ['Thứ Năm, 15/10', '3 giờ', '3 giờ', false]
  ];
  const extraDays = [
    ['Thứ Ba, 20/10', '2 giờ', '2 giờ', false],
    ['Thứ Năm, 22/10', '3 giờ', '3 giờ', false],
    ['Thứ Sáu, 23/10', '2 giờ', '2 giờ', false],
    ['Thứ Ba, 27/10', '3 giờ', '3 giờ', false],
    ['Thứ Tư, 28/10', '3 giờ', '3 giờ', false],
    ['Thứ Sáu, 30/10', '3 giờ', '3 giờ', false]
  ];
  const rows = expanded ? days.concat(extraDays) : days;
  return `<div class="screen-canvas">
    ${renderStatusBar(false)}
    <div class="scr-body">
      <div class="top-nav">
        <button class="icon-circle-btn" onclick="goBack(24)">${SVG.chevronL()}</button>
        <div class="top-nav-title">Chi tiết khoản chênh lệch</div>
        <div style="width:40px;"></div>
      </div>

      <span class="pill pill-warning" style="align-self:flex-start;">Thiếu giờ</span>
      <h2 class="t-h2" style="margin-top:8px;">Tăng ca ngày thường</h2>

      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-top:14px;">
        <div class="card" style="padding:12px;">
          <div class="t-cap">Bạn đã ghi</div>
          <div class="t-h2" style="margin-top:2px;">30 giờ</div>
        </div>
        <div class="card" style="padding:12px;">
          <div class="t-cap">Phiếu lương</div>
          <div class="t-h2" style="margin-top:2px;">26 giờ</div>
        </div>
        <div class="card-warn" style="padding:12px;">
          <div style="font-size:13px; color:var(--warning); font-weight:500;">Chênh lệch</div>
          <div class="t-h2" style="color:var(--warning); margin-top:2px;">4 giờ</div>
        </div>
      </div>

      <div class="list-card" style="margin-top:14px;">
        <div style="display:grid; grid-template-columns:1.6fr 1fr 1fr; padding:10px 14px; background:var(--bg-sunken); font-size:12px; font-weight:600; color:var(--text-muted);">
          <span>Ngày</span><span style="text-align:right;">Bạn ghi</span><span style="text-align:right;">Phiếu</span>
        </div>
        ${rows.map(([d, u, p, warn]) => `<div style="display:grid; grid-template-columns:1.6fr 1fr 1fr; padding:12px 14px; border-top:1px solid var(--border-default); font-size:14.5px; ${warn ? 'background:var(--warning-soft);' : ''}">
          <span>${d}</span>
          <span style="text-align:right; font-weight:500;">${u}</span>
          <span style="text-align:right; font-weight:600; color:${warn ? 'var(--warning)' : 'var(--text-primary)'};">${p}</span>
        </div>`).join('')}
        <div style="padding:12px 14px; border-top:1px solid var(--border-default); text-align:center; font-size:14px; font-weight:600; color:var(--brand-primary); cursor:pointer;" onclick="go(${expanded ? 25 : 38})">
          ${expanded ? 'Thu gọn' : 'Xem đủ 12 ngày có tăng ca'}
        </div>
      </div>

      <div class="card-warn" style="margin-top:12px; padding:14px 16px; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:15px;">4 giờ × 40.385đ</span>
        <span class="t-h3" style="color:var(--warning);">+161.538đ</span>
      </div>
    </div>

    <div class="scr-footer">
      <button class="btn btn-primary" onclick="go(31)">Thêm vào đề nghị bổ sung</button>
    </div>
    ${renderHomeBar(false)}
  </div>`;
};
