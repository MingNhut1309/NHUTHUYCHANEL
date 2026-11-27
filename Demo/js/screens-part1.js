/**
 * CỤM 01 (01–08): LÀM QUEN & THIẾT LẬP LẦN ĐẦU
 * CỤM 02 (09–16): HẰNG NGÀY & GHI GIỜ CÔNG
 */

window.SCREENS = window.SCREENS || {};

Object.assign(window.SCREENS, {
  // 01 · Splash
  1: {
    cluster: '01 · Làm quen · Thiết lập lần đầu',
    title: '01 · Splash',
    render: () => `<div class="screen-canvas bg-emerald" onclick="go(2)" style="cursor:pointer;">
      ${renderStatusBar(true)}
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:24px; text-align:center;">
        <div style="width:96px; height:96px; border-radius:27px; background:#FFFFFF; display:flex; align-items:center; justify-content:center; box-shadow:0 16px 36px rgba(0,0,0,0.22); position:relative; overflow:hidden;">
          ${SVG.logo(82, false)}
        </div>
        <div class="t-h1" style="margin-top:20px; color:#FFFFFF;">Công Bằng</div>
        <div style="font-size:14px; color:rgba(255,255,255,0.86); margin-top:6px;">Đúng giờ công · Đủ tiền lương</div>
      </div>
      <div style="text-align:center; font-size:12px; color:rgba(255,255,255,0.62); padding-bottom:6px;">Chạm để tiếp tục</div>
      ${renderHomeBar(true)}
    </div>`
  },

  // 02 · Chào mừng
  2: {
    cluster: '01 · Làm quen · Thiết lập lần đầu',
    title: '02 · Chào mừng',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body" style="padding-top:6px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
          <div style="width:32px; height:32px; border-radius:9px; background:var(--brand-primary); display:flex; align-items:center; justify-content:center;">
            ${SVG.logo(24, true)}
          </div>
          <span class="t-sub">Công Bằng</span>
        </div>

        <div style="background:var(--bg-sunken); border-radius:22px; padding:18px 16px; position:relative; min-height:278px; display:flex; flex-direction:column; justify-content:space-between; margin-bottom:20px;">
          <div class="card" style="padding:14px; border-radius:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:12px; color:var(--text-muted); font-weight:500;">Phiếu lương tháng 10</span>
              <span class="pill pill-warning">Tính thiếu</span>
            </div>
            <div style="font-size:14px; font-weight:500; margin-top:6px;">Tăng ca Chủ nhật</div>
            <div class="t-h2" style="margin-top:2px;">150% → 200%</div>
            <div style="font-size:13px; font-weight:600; color:var(--warning); margin-top:4px;">Cần bổ sung 107.692đ</div>
          </div>

          <div class="card" style="padding:12px 14px; border-radius:16px; margin-top:10px; display:flex; align-items:center; gap:12px;">
            <div class="icon-tile sm success">${SVG.shield(18)}</div>
            <div style="flex:1;">
              <div style="font-size:12px; color:var(--text-muted); font-weight:500;">BHXH đã ghi nhận</div>
              <div style="font-size:17px; font-weight:600;">40 / 44 tháng</div>
              <div style="height:6px; background:var(--bg-sunken); border-radius:3px; margin-top:6px; overflow:hidden;">
                <div style="width:90%; height:100%; background:var(--success); border-radius:3px;"></div>
              </div>
            </div>
          </div>

          <div style="align-self:flex-end; margin-top:10px; background:var(--brand-primary); color:#FFFFFF; font-size:12px; font-weight:600; padding:7px 12px; border-radius:999px; display:inline-flex; align-items:center; gap:5px;">
            ${SVG.check(13)} Đã đối chiếu 23 khoản
          </div>
        </div>

        <h1 class="t-hero" style="font-size:36px;">Lương của bạn<br>đã đủ chưa?</h1>
        <p class="t-body" style="color:var(--text-secondary); margin-top:10px;">
          Ghi giờ làm mỗi ngày, chụp phiếu lương mỗi tháng. Công Bằng chỉ ra khoản nào có thể bị thiếu và cách đề nghị công ty trả bù.
        </p>

        <div style="margin-top:auto; padding-top:16px;">
          <button class="btn btn-primary" onclick="go(3)">Bắt đầu thiết lập</button>
          <div class="t-cap" style="text-align:center; margin-top:10px;">Dữ liệu chỉ lưu trên điện thoại của bạn</div>
        </div>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 03 · Đăng nhập · Số điện thoại
  3: {
    cluster: '01 · Làm quen · Thiết lập lần đầu',
    title: '03 · Đăng nhập · Số điện thoại',
    render: () => {
      const typed = APP_STATE.phoneTyped;
      const display = typed ? typed : 'Số điện thoại';
      return `<div class="screen-canvas">
        ${renderStatusBar(false)}
        <div class="scr-body" style="padding-bottom:10px;">
          <div class="top-nav">
            <button class="icon-circle-btn" onclick="goBack(2)">${SVG.chevronL()}</button>
            <div style="flex:1"></div>
          </div>
          <h1 class="t-h1">Nhập số điện thoại</h1>
          <p class="t-body-m" style="margin-top:8px;">
            Số điện thoại dùng để khôi phục dữ liệu khi bạn đổi máy. Không cần email hay mật khẩu.
          </p>

          <div style="display:flex; gap:10px; margin-top:24px;">
            <div class="field-box" style="width:94px; justify-content:center; gap:6px; cursor:default;">
              <span style="display:inline-flex; width:20px; height:14px; border-radius:2px; background:#DA251D; align-items:center; justify-content:center; color:#FF0; font-size:10px;">★</span>
              <span>+84</span>
            </div>
            <div class="field-box" style="flex:1; border-color:${typed ? 'var(--brand-primary)' : 'var(--border-default)'}; color:${typed ? 'var(--text-primary)' : 'var(--text-muted)'};" onclick="fillDemoPhone()">
              <span>${display}</span>
              ${!typed ? '<span style="font-size:12px; color:var(--brand-primary); font-weight:600;">Điền mẫu</span>' : ''}
            </div>
          </div>

          <p class="t-cap" style="margin-top:14px; line-height:1.5;">
            Khi tiếp tục, bạn đồng ý với <span style="color:var(--brand-primary); font-weight:600; cursor:pointer;" onclick="go(40)">Điều khoản sử dụng</span> và <span style="color:var(--brand-primary); font-weight:600; cursor:pointer;" onclick="go(40)">Chính sách quyền riêng tư</span> của Công Bằng.
          </p>

          <div style="margin-top:auto; padding-top:16px;">
            <button class="btn btn-primary" onclick="submitPhone()">Tiếp tục</button>
          </div>
        </div>
        ${renderNumpad('tapPhoneDigit', 'tapPhoneBack')}
        ${renderHomeBar(false)}
      </div>`;
    }
  },

  // 04 · Đăng nhập · Mã OTP
  4: {
    cluster: '01 · Làm quen · Thiết lập lần đầu',
    title: '04 · Đăng nhập · Mã OTP',
    render: () => {
      const otp = APP_STATE.otpTyped;
      const boxes = Array.from({ length: 6 }, (_, i) => {
        const ch = otp[i] || '';
        const isCurrent = i === otp.length;
        return `<div style="width:52px; height:58px; border-radius:14px; background:#FFFFFF; border:2px solid ${ch ? 'var(--brand-primary)' : isCurrent ? 'var(--brand-primary)' : 'var(--border-default)'}; display:flex; align-items:center; justify-content:center; font-size:24px; font-weight:700;">${ch}</div>`;
      }).join('');
      return `<div class="screen-canvas">
        ${renderStatusBar(false)}
        <div class="scr-body" style="padding-bottom:10px;">
          <div class="top-nav">
            <button class="icon-circle-btn" onclick="goBack(3)">${SVG.chevronL()}</button>
            <div style="flex:1"></div>
          </div>
          <h1 class="t-h1">Nhập mã 6 số</h1>
          <p class="t-body-m" style="margin-top:8px;">
            Mã đã gửi qua tin nhắn tới <b>0912 345 678</b>.
            <span style="color:var(--brand-primary); font-weight:600; cursor:pointer;" onclick="go(3)">Đổi số</span>
          </p>

          <div style="display:flex; justify-content:space-between; gap:6px; margin-top:26px;" onclick="fillDemoOtp()">
            ${boxes}
          </div>

          <div class="t-cap" style="text-align:center; margin-top:18px;">
            Gửi lại mã sau <b>0:42</b> · <span style="color:var(--brand-primary); font-weight:600; cursor:pointer;" onclick="fillDemoOtp()">Tự điền OTP</span>
          </div>

          <div style="margin-top:auto; padding-top:16px;">
            <button class="btn btn-primary" onclick="go(5)">Xác nhận</button>
          </div>
        </div>
        ${renderNumpad('tapOtpDigit', 'tapOtpBack')}
        ${renderHomeBar(false)}
      </div>`;
    }
  },

  // 05 · Quyền riêng tư
  5: {
    cluster: '01 · Làm quen · Thiết lập lần đầu',
    title: '05 · Quyền riêng tư',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body" style="padding-top:18px;">
        <div style="width:88px; height:88px; border-radius:26px; background:var(--brand-soft); color:var(--brand-primary); display:flex; align-items:center; justify-content:center; margin-bottom:20px;">
          ${SVG.shield(40)}
        </div>
        <h1 class="t-h1">Dữ liệu của bạn<br>chỉ nằm trên máy bạn</h1>

        <div style="display:flex; flex-direction:column; gap:18px; margin-top:24px;">
          <div style="display:flex; gap:14px; align-items:flex-start;">
            <div class="icon-tile lg white" style="border:1px solid var(--border-default); color:var(--brand-primary);">${SVG.eyeOff(20)}</div>
            <div>
              <div class="t-sub">Công ty không xem được</div>
              <div class="t-body-m" style="margin-top:4px;">Giờ công, phiếu lương và đề nghị bạn soạn không được gửi đi đâu nếu bạn không bấm chia sẻ.</div>
            </div>
          </div>
          <div style="display:flex; gap:14px; align-items:flex-start;">
            <div class="icon-tile lg white" style="border:1px solid var(--border-default); color:var(--brand-primary);">${SVG.lock(20)}</div>
            <div>
              <div class="t-sub">Không hỏi mật khẩu</div>
              <div class="t-body-m" style="margin-top:4px;">Không cần mật khẩu ngân hàng hay tài khoản VssID. Bạn chỉ nhập những gì muốn đối chiếu.</div>
            </div>
          </div>
          <div style="display:flex; gap:14px; align-items:flex-start;">
            <div class="icon-tile lg white" style="border:1px solid var(--border-default); color:var(--danger);">${SVG.trash(20)}</div>
            <div>
              <div class="t-sub">Xoá sạch trong một chạm</div>
              <div class="t-body-m" style="margin-top:4px;">Vào Cài đặt, chọn Xoá dữ liệu. Không lưu bản sao nào trên máy chủ.</div>
            </div>
          </div>
        </div>

        <div style="margin-top:auto; padding-top:20px; display:flex; flex-direction:column; gap:8px;">
          <button class="btn btn-primary" onclick="go(6)">Tôi hiểu, tiếp tục</button>
          <button class="btn btn-text" onclick="go(40)">Đọc chính sách đầy đủ</button>
        </div>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 06 · Thiết lập · Lương
  6: {
    cluster: '01 · Làm quen · Thiết lập lần đầu',
    title: '06 · Thiết lập · Lương',
    render: () => {
      const st = APP_STATE;
      const hourly = Math.round(st.salaryBasic / (st.workDaysStandard * st.hoursPerDay));
      return `<div class="screen-canvas">
        ${renderStatusBar(false)}
        <div class="scr-body">
          <div class="top-nav">
            <button class="icon-circle-btn" onclick="goBack(5)">${SVG.chevronL()}</button>
            <div style="flex:1"></div>
            <span style="font-size:14px; font-weight:500; color:var(--text-muted);">1/3</span>
          </div>

          <h1 class="t-h1">Lương trong hợp đồng<br>của bạn</h1>
          <p class="t-body-m" style="margin-top:8px;">
            Xem trong hợp đồng lao động hoặc phiếu lương gần nhất. Bạn có thể sửa lại bất cứ lúc nào.
          </p>

          <div class="card-soft" style="margin-top:16px; display:flex; align-items:center; gap:12px; cursor:pointer;" onclick="go(18)">
            <div class="icon-tile white" style="color:var(--brand-primary);">${SVG.camera(20)}</div>
            <div style="flex:1;">
              <div style="font-size:14px; font-weight:600; color:var(--brand-primary);">Chụp hợp đồng để tự điền</div>
              <div class="t-cap" style="color:var(--text-secondary);">Nhanh hơn, ít nhập sai hơn</div>
            </div>
            <span style="color:var(--brand-primary);">${SVG.chevronR(18)}</span>
          </div>

          <div style="margin-top:16px;">
            <label class="field-label">Công ty</label>
            <div class="field-box" onclick="openOverlayOn(6, 52)">
              <span>${st.companyName}</span>
            </div>
          </div>

          <div style="margin-top:14px;">
            <label class="field-label">Lương cơ bản mỗi tháng</label>
            <div class="field-box" onclick="openOverlayOn(6, 52)">
              <span>${st.salaryBasic.toLocaleString('vi-VN')}</span>
              <span style="color:var(--text-muted);">đ</span>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:14px;">
            <div>
              <label class="field-label">Ngày công chuẩn</label>
              <div class="field-box" onclick="openOverlayOn(6, 45)">
                <span>${st.workDaysStandard} ngày</span>
                <span style="color:var(--text-muted);">${SVG.chevronD(16)}</span>
              </div>
            </div>
            <div>
              <label class="field-label">Giờ làm / ngày</label>
              <div class="field-box" onclick="openOverlayOn(6, 46)">
                <span>${st.hoursPerDay} giờ</span>
                <span style="color:var(--text-muted);">${SVG.chevronD(16)}</span>
              </div>
            </div>
          </div>

          <div class="card-sunken" style="margin-top:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:14px; font-weight:500; color:var(--text-secondary);">Lương 1 giờ của bạn</span>
              <span class="t-h3">${fmtVND(hourly)}</span>
            </div>
            <div class="t-cap" style="margin-top:6px;">
              = ${fmtVND(st.salaryBasic)} ÷ ${st.workDaysStandard} ngày ÷ ${st.hoursPerDay} giờ. Con số này là cơ sở để tính mọi khoản tăng ca.
            </div>
          </div>
        </div>
        <div class="scr-footer">
          <button class="btn btn-primary" onclick="go(7)">Tiếp tục</button>
        </div>
        ${renderHomeBar(false)}
      </div>`;
    }
  },

  // 07 · Thiết lập · Ca làm
  7: {
    cluster: '01 · Làm quen · Thiết lập lần đầu',
    title: '07 · Thiết lập · Ca làm',
    render: () => {
      const st = APP_STATE;
      const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
      return `<div class="screen-canvas">
        ${renderStatusBar(false)}
        <div class="scr-body">
          <div class="top-nav">
            <button class="icon-circle-btn" onclick="goBack(6)">${SVG.chevronL()}</button>
            <div style="flex:1"></div>
            <span style="font-size:14px; font-weight:500; color:var(--text-muted);">2/3</span>
          </div>

          <h1 class="t-h1">Ca làm thường ngày</h1>
          <p class="t-body-m" style="margin-top:8px;">
            Dùng làm mặc định mỗi khi ghi giờ. Hôm nào khác thì bạn sửa riêng hôm đó.
          </p>

          <div style="margin-top:18px;">
            <label class="field-label">Loại ca</label>
            <div class="seg-control">
              ${['Ca ngày', 'Ca đêm', 'Xoay ca'].map(s => `<button class="seg-btn ${st.shiftType === s ? 'active' : ''}" onclick="setShiftType('${s}')">${s}</button>`).join('')}
            </div>
          </div>

          <div style="margin-top:16px;">
            <label class="field-label">Giờ làm</label>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div class="card" style="padding:12px 14px; cursor:pointer;" onclick="openOverlayOn(7, 51)">
                <div class="t-cap">Vào ca</div>
                <div class="t-h2" style="margin-top:4px;">${st.shiftType === 'Ca đêm' ? '22:00' : st.shiftType === 'Xoay ca' ? '14:00' : '07:30'}</div>
              </div>
              <div class="card" style="padding:12px 14px; cursor:pointer;" onclick="openOverlayOn(7, 51)">
                <div class="t-cap">Ra ca</div>
                <div class="t-h2" style="margin-top:4px;">${st.shiftType === 'Ca đêm' ? '06:00' : st.shiftType === 'Xoay ca' ? '22:00' : '16:30'}</div>
              </div>
            </div>
          </div>

          <div class="card" style="margin-top:12px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="openOverlayOn(7, 50)">
            <div>
              <div style="font-size:16px; font-weight:500;">Nghỉ giữa ca</div>
              <div class="t-cap">11:30 – 12:30 · không tính lương</div>
            </div>
            <div style="display:flex; align-items:center; gap:6px; font-size:14px; font-weight:500; color:var(--text-secondary);">
              <span>${st.breakMinutes}</span>${SVG.chevronR(16)}
            </div>
          </div>

          <div style="margin-top:16px;">
            <label class="field-label">Ngày đi làm trong tuần</label>
            <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:6px;">
              ${days.map(d => {
                const on = st.workWeekDays[d];
                return `<button onclick="toggleWorkDay('${d}')" style="height:44px; border-radius:12px; border:1px solid ${on ? 'var(--brand-primary)' : 'var(--border-default)'}; background:${on ? 'var(--brand-primary)' : '#FFFFFF'}; color:${on ? '#FFFFFF' : 'var(--text-secondary)'}; font-family:inherit; font-size:14px; font-weight:600; cursor:pointer;">${d}</button>`;
              }).join('')}
            </div>
          </div>

          <div class="card-sunken" style="margin-top:16px;">
            <div style="font-size:13px; color:var(--text-secondary); line-height:1.45;">
              8 giờ mỗi ngày, 48 giờ mỗi tuần. Giờ làm vượt mức này được tính là tăng ca.
            </div>
          </div>
        </div>
        <div class="scr-footer">
          <button class="btn btn-primary" onclick="go(8)">Tiếp tục</button>
        </div>
        ${renderHomeBar(false)}
      </div>`;
    }
  },

  // 08 · Thiết lập · Hệ số tăng ca
  8: {
    cluster: '01 · Làm quen · Thiết lập lần đầu',
    title: '08 · Thiết lập · Hệ số tăng ca',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div class="top-nav">
          <button class="icon-circle-btn" onclick="goBack(7)">${SVG.chevronL()}</button>
          <div style="flex:1"></div>
          <span style="font-size:14px; font-weight:500; color:var(--text-muted);">3/3</span>
        </div>

        <h1 class="t-h1">Tiền tăng ca được<br>tính thế nào?</h1>
        <p class="t-body-m" style="margin-top:8px;">
          Mặc định theo mức tối thiểu tại Điều 98, Bộ luật Lao động 2019. Chỉ sửa nếu công ty trả cao hơn.
        </p>

        <div class="list-card" style="margin-top:16px;">
          <div class="list-row" onclick="openOverlayOn(8, 49)">
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="icon-tile sunken">${SVG.clock(18)}</div>
              <div>
                <div style="font-size:16px; font-weight:500;">Ngày thường</div>
                <div class="t-cap">Sau giờ làm chính</div>
              </div>
            </div>
            <div style="text-align:right;">
              <div class="t-sub">${APP_STATE.weekdayRateLabel.split(' ')[0]}</div>
              <div class="t-cap">40.385đ/giờ</div>
            </div>
          </div>
          <div class="list-row" onclick="openOverlayOn(8, 49)">
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="icon-tile sunken">${SVG.sun(18)}</div>
              <div>
                <div style="font-size:16px; font-weight:500;">Ngày nghỉ hằng tuần</div>
                <div class="t-cap">Thường là Chủ nhật</div>
              </div>
            </div>
            <div style="text-align:right;">
              <div class="t-sub">200%</div>
              <div class="t-cap">53.846đ/giờ</div>
            </div>
          </div>
          <div class="list-row" onclick="openOverlayOn(8, 49)">
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="icon-tile sunken">${SVG.calendar(18)}</div>
              <div>
                <div style="font-size:16px; font-weight:500;">Ngày lễ, Tết</div>
                <div class="t-cap">Chưa gồm lương ngày lễ</div>
              </div>
            </div>
            <div style="text-align:right;">
              <div class="t-sub">300%</div>
              <div class="t-cap">80.769đ/giờ</div>
            </div>
          </div>
          <div class="list-row" onclick="openOverlayOn(8, 49)">
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="icon-tile sunken">${SVG.moon(18)}</div>
              <div>
                <div style="font-size:16px; font-weight:500;">Làm ban đêm</div>
                <div class="t-cap">Từ 22:00 đến 06:00</div>
              </div>
            </div>
            <div style="text-align:right;">
              <div class="t-sub">+30%</div>
              <div class="t-cap">+8.077đ/giờ</div>
            </div>
          </div>
        </div>

        <div class="card-sunken" style="margin-top:12px;">
          <div style="font-size:13px; color:var(--text-secondary); line-height:1.45;">
            Ví dụ: tăng ca 2 giờ tối thứ Tư<br><b>= 2 × 40.385đ = 80.769đ</b>
          </div>
        </div>

        <div class="card" style="margin-top:12px; display:flex; align-items:center; justify-content:space-between; gap:12px;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="icon-tile soft">${SVG.bell(19)}</div>
            <div>
              <div style="font-size:16px; font-weight:500;">Nhắc ghi giờ mỗi ngày</div>
              <div class="t-cap">Lúc 17:00, sau khi tan ca</div>
            </div>
          </div>
          <button class="ios-switch ${APP_STATE.dailyReminder ? 'on' : ''}" onclick="toggleState('dailyReminder')">
            <span class="ios-switch-knob"></span>
          </button>
        </div>
      </div>
      <div class="scr-footer">
        <button class="btn btn-primary" onclick="go(10)">Hoàn tất thiết lập</button>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 09 · Nhắc ghi giờ · Màn hình khoá
  9: {
    cluster: '02 · Hằng ngày · Ghi giờ công',
    title: '09 · Nhắc ghi giờ · Màn hình khoá',
    render: () => `<div class="screen-canvas bg-lockscreen">
      ${renderStatusBar(true)}
      <div style="flex:1; padding:24px 16px 20px; display:flex; flex-direction:column; align-items:center;">
        <div style="font-size:20px; font-weight:600; color:rgba(255,255,255,0.92); margin-top:12px;">Thứ Bảy, 21 tháng 11</div>
        <div style="font-size:88px; font-weight:700; line-height:1; letter-spacing:-0.03em; margin-top:4px;">17:02</div>

        <div style="width:100%; margin-top:auto; display:flex; flex-direction:column; gap:10px;">
          <div style="background:rgba(255,255,255,0.92); color:var(--text-primary); border-radius:22px; padding:14px 16px; display:flex; gap:12px; align-items:flex-start; cursor:pointer; box-shadow:0 12px 30px rgba(0,0,0,0.35);" onclick="go(11)">
            <div style="width:38px; height:38px; border-radius:10px; background:var(--brand-primary); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              ${SVG.logo(28, true)}
            </div>
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between; font-size:13px;">
                <b>Công Bằng</b>
                <span style="color:var(--text-secondary);">bây giờ</span>
              </div>
              <div style="font-size:14px; font-weight:600; margin-top:3px;">Tan ca rồi, hôm nay có tăng ca không?</div>
              <div style="font-size:13.5px; color:var(--text-secondary); margin-top:2px;">Chạm để ghi giờ, mất khoảng 10 giây.</div>
            </div>
          </div>

          <div style="background:rgba(255,255,255,0.82); color:var(--text-primary); border-radius:20px; padding:12px 16px; display:flex; gap:12px; align-items:center; cursor:pointer;" onclick="go(17)">
            <div style="width:32px; height:32px; border-radius:8px; background:var(--brand-soft); color:var(--brand-primary); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              ${SVG.receipt(17)}
            </div>
            <div style="font-size:14px; font-weight:500;">Còn 14 ngày đến kỳ nhận lương 05/12</div>
          </div>
        </div>

        <div style="width:100%; display:flex; justify-content:space-between; padding:28px 22px 6px;">
          <button class="icon-circle-btn dark-glass" style="width:50px; height:50px;" onclick="go(10)">${SVG.flash(21, false)}</button>
          <button class="icon-circle-btn dark-glass" style="width:50px; height:50px;" onclick="go(18)">${SVG.camera(21)}</button>
        </div>
      </div>
      ${renderHomeBar(true)}
    </div>`
  },

  // 10 · Trang chủ
  10: {
    cluster: '02 · Hằng ngày · Ghi giờ công',
    title: '10 · Trang chủ',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body" style="padding-top:6px;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px;">
          <div>
            <div class="t-cap">Thứ Bảy, 21 tháng 11</div>
            <div class="t-h2">Chào chị Hoa</div>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="icon-circle-btn" onclick="go(15)" style="position:relative;">
              ${SVG.bell(19)}
              <span style="position:absolute; top:9px; right:10px; width:7px; height:7px; border-radius:50%; background:var(--danger);"></span>
            </button>
            <button class="avatar" style="width:40px; height:40px; border:none; cursor:pointer; font-size:14px;" onclick="go(16)">TH</button>
          </div>
        </div>

        <div class="home-hero" style="cursor:pointer;" onclick="go(13)">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:14px; font-weight:500; opacity:0.9;">Lương tạm tính tháng 11</span>
            <span class="hero-badge">Đến hôm nay</span>
          </div>
          <div style="font-size:36px; font-weight:700; letter-spacing:-0.02em; margin-top:6px;">4.146.154đ</div>
          <div class="hero-bar"><div class="hero-bar-fill" style="width:65%;"></div></div>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
            <div><div class="t-sub">17/26</div><div style="font-size:12px; opacity:0.8;">ngày công</div></div>
            <div><div class="t-sub">12 giờ</div><div style="font-size:12px; opacity:0.8;">tăng ca</div></div>
            <div><div class="t-sub">05/12</div><div style="font-size:12px; opacity:0.8;">ngày nhận lương</div></div>
          </div>
        </div>

        <div class="card" style="margin-top:16px; display:flex; flex-direction:column; gap:14px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="t-sub">Hôm nay</span>
            <span class="t-cap">Tổ may 3</span>
          </div>
          <div style="display:flex; align-items:center; gap:12px; cursor:pointer;" onclick="go(14)">
            <div class="icon-tile success">${SVG.check(18)}</div>
            <div style="flex:1;">
              <div style="font-size:16px; font-weight:500;">Ca ngày · 07:30 – 16:30</div>
              <div class="t-cap">8 giờ chính · đã ghi lúc 16:42</div>
            </div>
            <span style="color:var(--text-muted);">${SVG.chevronR(17)}</span>
          </div>
          <div style="border-top:1px solid var(--border-default); padding-top:12px; display:flex; align-items:center; gap:12px;">
            <div class="icon-tile warn">${SVG.clock(18)}</div>
            <div style="flex:1;">
              <div style="font-size:16px; font-weight:500;">Có tăng ca hôm nay?</div>
              <div class="t-cap">Ghi ngay để không quên</div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="go(11)">Ghi giờ</button>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin:18px 0 10px;">
          <span class="t-sub">Cần bạn xem</span>
          <span class="t-cap">2 việc</span>
        </div>

        <div class="card" style="padding:14px; display:flex; align-items:center; gap:12px; cursor:pointer; margin-bottom:10px;" onclick="go(24)">
          <div class="icon-tile lg warn">${SVG.receipt(20)}</div>
          <div style="flex:1;">
            <div class="t-cap">Phiếu lương tháng 10</div>
            <div class="t-sub">Có thể thiếu 269.231đ</div>
          </div>
          <span style="color:var(--text-muted);">${SVG.chevronR(18)}</span>
        </div>

        <div class="card" style="padding:14px; display:flex; align-items:center; gap:12px; cursor:pointer;" onclick="go(28)">
          <div class="icon-tile lg danger">${SVG.shield(20)}</div>
          <div style="flex:1;">
            <div class="t-cap">Bảo hiểm xã hội</div>
            <div class="t-sub">3 tháng chưa được ghi nhận</div>
          </div>
          <span style="color:var(--text-muted);">${SVG.chevronR(18)}</span>
        </div>
      </div>
      ${renderTabBar('home')}
      ${renderHomeBar(false)}
    </div>`
  },

  // 11 · Ghi giờ (bảng trượt)
  11: {
    cluster: '02 · Hằng ngày · Ghi giờ công',
    title: '11 · Ghi giờ (bảng trượt)',
    render: () => `<div class="screen-canvas">
      ${window.SCREENS[10].render().replace(/^<div class="screen-canvas">/, '').replace(/<\/div>$/, '')}
      ${renderLogHoursSheet(true)}
    </div>`
  },

  // 12 · Trang chủ · Đã lưu giờ
  12: {
    cluster: '02 · Hằng ngày · Ghi giờ công',
    title: '12 · Trang chủ · Đã lưu giờ',
    render: () => {
      const st = APP_STATE;
      const exactHourly = st.salaryBasic / (st.workDaysStandard * st.hoursPerDay);
      const otMoney = Math.round(exactHourly * 1.5 * st.overtimeHours);
      const totalTemp = 4146154 + otMoney;
      const outHour = 16.5 + st.overtimeHours;
      const outStr = `${String(Math.floor(outHour)).padStart(2, '0')}:${outHour % 1 === 0.5 ? '30' : '00'}`;
      return `<div class="screen-canvas">
        ${renderStatusBar(false)}
        <div class="toast-pill">
          <div style="display:flex; align-items:center; gap:10px;">
            <span class="toast-check">${SVG.check(14)}</span>
            <span>Đã lưu giờ công ngày 21/11</span>
          </div>
          <span style="color:var(--accent-gold); font-weight:600; cursor:pointer;" onclick="go(11)">Hoàn tác</span>
        </div>
        <div class="scr-body" style="padding-top:6px;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px;">
            <div>
              <div class="t-cap">Thứ Bảy, 21 tháng 11</div>
              <div class="t-h2">Chào chị Hoa</div>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="icon-circle-btn" onclick="go(15)">${SVG.bell(19)}</button>
              <button class="avatar" style="width:40px; height:40px; border:none; cursor:pointer; font-size:14px;" onclick="go(16)">TH</button>
            </div>
          </div>

          <div class="home-hero" style="cursor:pointer;" onclick="go(13)">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:14px; font-weight:500; opacity:0.9;">Lương tạm tính tháng 11</span>
              <span class="hero-badge">Đến hôm nay</span>
            </div>
            <div style="font-size:36px; font-weight:700; letter-spacing:-0.02em; margin-top:6px;">${fmtVND(totalTemp)}</div>
            <div class="hero-bar"><div class="hero-bar-fill" style="width:68%;"></div></div>
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
              <div><div class="t-sub">17/26</div><div style="font-size:12px; opacity:0.8;">ngày công</div></div>
              <div><div class="t-sub">${12 + st.overtimeHours} giờ</div><div style="font-size:12px; opacity:0.8;">tăng ca</div></div>
              <div><div class="t-sub">05/12</div><div style="font-size:12px; opacity:0.8;">ngày nhận lương</div></div>
            </div>
          </div>

          <div class="card" style="margin-top:16px; display:flex; flex-direction:column; gap:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="t-sub">Hôm nay</span>
              <span class="t-cap">Tổ may 3</span>
            </div>
            <div style="display:flex; align-items:center; gap:12px; cursor:pointer;" onclick="go(14)">
              <div class="icon-tile success">${SVG.check(18)}</div>
              <div style="flex:1;">
                <div style="font-size:16px; font-weight:500;">Ca ngày · 07:30 – 16:30</div>
                <div class="t-cap">8 giờ chính · đã ghi lúc 16:42</div>
              </div>
              <span style="color:var(--text-muted);">${SVG.chevronR(17)}</span>
            </div>
            <div style="border-top:1px solid var(--border-default); padding-top:12px; display:flex; align-items:center; gap:12px; cursor:pointer;" onclick="go(14)">
              <div class="icon-tile success">${SVG.check(18)}</div>
              <div style="flex:1;">
                <div style="font-size:16px; font-weight:500;">Tăng ca · 16:30 – ${outStr}</div>
                <div class="t-cap">${st.overtimeHours} giờ × 150% · +${fmtVND(otMoney)}</div>
              </div>
              <span style="color:var(--text-muted);">${SVG.chevronR(17)}</span>
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin:18px 0 10px;">
            <span class="t-sub">Cần bạn xem</span>
            <span class="t-cap">2 việc</span>
          </div>

          <div class="card" style="padding:14px; display:flex; align-items:center; gap:12px; cursor:pointer; margin-bottom:10px;" onclick="go(24)">
            <div class="icon-tile lg warn">${SVG.receipt(20)}</div>
            <div style="flex:1;"><div class="t-cap">Phiếu lương tháng 10</div><div class="t-sub">Có thể thiếu 269.231đ</div></div>
            <span style="color:var(--text-muted);">${SVG.chevronR(18)}</span>
          </div>

          <div class="card" style="padding:14px; display:flex; align-items:center; gap:12px; cursor:pointer;" onclick="go(28)">
            <div class="icon-tile lg danger">${SVG.shield(20)}</div>
            <div style="flex:1;"><div class="t-cap">Bảo hiểm xã hội</div><div class="t-sub">3 tháng chưa được ghi nhận</div></div>
            <span style="color:var(--text-muted);">${SVG.chevronR(18)}</span>
          </div>
        </div>
        ${renderTabBar('home')}
        ${renderHomeBar(false)}
      </div>`;
    }
  },

  // 13 · Lịch ngày công (Tháng 11)
  13: {
    cluster: '02 · Hằng ngày · Ghi giờ công',
    title: '13 · Lịch ngày công',
    render: () => {
      const cells = [
        { d: 26, dim: true }, { d: 27, dim: true }, { d: 28, dim: true }, { d: 29, dim: true }, { d: 30, dim: true }, { d: 31, dim: true }, { d: 1, dim: true },
        { d: 2 }, { d: 3, ot: '+2h' }, { d: 4 }, { d: 5, ot: '+2h' }, { d: 6 }, { d: 7 }, { d: 8, sun: true },
        { d: 9 }, { d: 10, leave: true, ot: 'Phép' }, { d: 11 }, { d: 12, ot: '+3h' }, { d: 13 }, { d: 14 }, { d: 15, sun: true },
        { d: 16 }, { d: 17, ot: '+2h' }, { d: 18 }, { d: 19, ot: '+3h' }, { d: 20 }, { d: 21, today: true }, { d: 22, sun: true },
        { d: 23 }, { d: 24 }, { d: 25 }, { d: 26 }, { d: 27 }, { d: 28 }, { d: 29, sun: true },
        { d: 30 }, { d: 1, dim: true }, { d: 2, dim: true }, { d: 3, dim: true }, { d: 4, dim: true }, { d: 5, dim: true }, { d: 6, dim: true }
      ];
      return `<div class="screen-canvas">
        ${renderStatusBar(false)}
        <div class="scr-body">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h1 class="t-h1">Ngày công</h1>
            <button class="icon-circle-btn" onclick="openOverlayOn(13, 41)">${SVG.share(18)}</button>
          </div>

          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
            <button class="icon-circle-btn sm" onclick="go(36)">${SVG.chevronL(18)}</button>
            <div style="text-align:center;">
              <div class="t-sub">Tháng 11, 2026</div>
              <div class="t-cap">Kỳ lương 01/11 – 30/11</div>
            </div>
            <button class="icon-circle-btn sm" style="opacity:0.4;">${SVG.chevronR(18)}</button>
          </div>

          <div class="card" style="padding:12px 16px; display:grid; grid-template-columns:repeat(3,1fr); text-align:center; margin-bottom:12px;">
            <div><div class="t-h3">17</div><div class="t-cap">ngày công</div></div>
            <div style="border-left:1px solid var(--border-default); border-right:1px solid var(--border-default);"><div class="t-h3">12 giờ</div><div class="t-cap">tăng ca</div></div>
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
              <span><b style="color:var(--brand-primary)">●</b> Hôm nay</span>
            </div>
          </div>

          <div class="card" style="margin-top:12px; cursor:pointer;" onclick="go(14)">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <span class="t-sub">Thứ Bảy, 21/11</span>
              <span class="pill pill-success">Đã ghi ca chính</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:14px; margin-bottom:6px;">
              <span style="color:var(--text-secondary);">Ca ngày</span><b>07:30 – 16:30</b>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:14px;">
              <span style="color:var(--text-secondary);">Tăng ca</span><b>Chưa ghi</b>
            </div>
          </div>
        </div>
        ${renderTabBar('cal')}
        ${renderHomeBar(false)}
      </div>`;
    }
  },

  // 14 · Chi tiết ngày công
  14: {
    cluster: '02 · Hằng ngày · Ghi giờ công',
    title: '14 · Chi tiết ngày công',
    render: () => `<div class="screen-canvas">
      ${renderStatusBar(false)}
      <div class="scr-body">
        <div class="top-nav">
          <button class="icon-circle-btn" onclick="goBack(13)">${SVG.chevronL()}</button>
          <div class="top-nav-title">Thứ Bảy, 21/11</div>
          <button class="icon-circle-btn" onclick="openOverlayOn(14, 42)">${SVG.dots()}</button>
        </div>

        <div class="card" style="display:flex; flex-direction:column; gap:14px;">
          ${[
            ['07:30', 'Vào ca', 'Ca ngày · Tổ may 3'],
            ['11:30', 'Nghỉ giữa ca', '60 phút, không tính lương'],
            ['16:30', 'Hết giờ làm chính', '8 giờ × 26.923đ'],
            ['19:30', 'Ra về', 'Tăng ca 3 giờ × 150%']
          ].map(([t, a, b], idx) => `<div style="display:flex; gap:12px; align-items:flex-start;">
            <span style="width:44px; font-size:14px; font-weight:500; color:var(--text-secondary); padding-top:2px;">${t}</span>
            <div style="width:10px; height:10px; border-radius:50%; background:${idx === 3 ? 'var(--brand-primary)' : '#B8C2BD'}; margin-top:6px; flex-shrink:0;"></div>
            <div>
              <div style="font-size:16px; font-weight:500;">${a}</div>
              <div class="t-cap">${b}</div>
            </div>
          </div>`).join('')}
        </div>

        <div class="card" style="margin-top:12px; display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; justify-content:space-between;"><span class="t-body-m">Lương giờ chính</span><b>215.385đ</b></div>
          <div style="display:flex; justify-content:space-between;"><span class="t-body-m">Tiền tăng ca</span><b>121.154đ</b></div>
          <div style="border-top:1px solid var(--border-default); padding-top:10px; display:flex; justify-content:space-between;"><span style="font-weight:500;">Ước tính trong ngày</span><b class="t-sub">336.539đ</b></div>
        </div>

        <div class="card" style="margin-top:12px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span class="t-sub">Ảnh bảng chấm công</span>
            <span class="t-cap">1 ảnh</span>
          </div>
          <div style="display:flex; gap:12px; align-items:center;">
            <div onclick="openOverlayOn(14, 53)" style="width:108px; height:76px; border-radius:12px; background:var(--bg-sunken); border:1px solid var(--border-default); padding:8px; display:flex; flex-direction:column; justify-content:space-between; cursor:pointer;">
              <div style="font-size:9px; font-weight:700; color:var(--text-secondary);">CHẤM CÔNG</div>
              <div style="height:4px; background:#D4D1C7; border-radius:2px;"></div>
              <div style="height:4px; width:70%; background:#D4D1C7; border-radius:2px;"></div>
              <div style="font-size:11px; color:var(--text-muted); font-weight:600;">17:01</div>
            </div>
            <div onclick="go(18)" style="width:76px; height:76px; border-radius:12px; border:1.5px dashed var(--border-default); display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-muted); font-size:12px; cursor:pointer;">
              ${SVG.plus(18)}<span style="margin-top:2px;">Thêm</span>
            </div>
          </div>
          <div style="font-size:13px; color:var(--text-secondary); margin-top:10px;">Tăng ca theo lệnh tổ trưởng, đơn hàng gấp</div>
        </div>
      </div>

      <div class="scr-footer" style="flex-direction:row; gap:10px;">
        <button class="btn btn-secondary" style="flex:1;" onclick="go(11)">Sửa giờ</button>
        <button class="btn btn-danger" style="flex:1;" onclick="openOverlayOn(14, 43)">Xoá ngày</button>
      </div>
      ${renderHomeBar(false)}
    </div>`
  },

  // 15 · Thông báo
  15: {
    cluster: '02 · Hằng ngày · Ghi giờ công',
    title: '15 · Thông báo',
    render: () => renderNotificationList(false)
  },

  // 16 · Tài khoản & cài đặt
  16: {
    cluster: '02 · Hằng ngày · Ghi giờ công',
    title: '16 · Tài khoản & cài đặt',
    render: () => {
      const st = APP_STATE;
      return `<div class="screen-canvas">
        ${renderStatusBar(false)}
        <div class="scr-body">
          <div class="top-nav">
            <button class="icon-circle-btn" onclick="goBack(10)">${SVG.chevronL()}</button>
            <div class="top-nav-title">Tài khoản</div>
            <div style="width:40px;"></div>
          </div>

          <div class="card" style="display:flex; align-items:center; gap:14px; cursor:pointer;" onclick="go(6)">
            <div class="avatar" style="width:56px; height:56px; font-size:18px;">TH</div>
            <div style="flex:1;">
              <div class="t-sub">Nguyễn Thị Hoa</div>
              <div class="t-cap">Tổ may 3 · Cty May Thành Phát</div>
            </div>
            <span style="color:var(--text-muted);">${SVG.chevronR(18)}</span>
          </div>

          <div class="t-lbl" style="margin:18px 4px 8px;">Thông tin lương</div>
          <div class="list-card">
            <div class="list-row" onclick="go(6)">
              <span>Lương cơ bản</span>
              <span style="color:var(--text-muted); font-weight:500;">${fmtVND(st.salaryBasic)} ›</span>
            </div>
            <div class="list-row" onclick="go(7)">
              <span>Ca làm mặc định</span>
              <span style="color:var(--text-muted); font-weight:500;">07:30 – 16:30 ›</span>
            </div>
            <div class="list-row" onclick="go(8)">
              <span>Hệ số tăng ca</span>
              <span style="color:var(--text-muted); font-weight:500;">Theo luật ›</span>
            </div>
          </div>

          <div class="t-lbl" style="margin:18px 4px 8px;">Nhắc nhở</div>
          <div class="list-card">
            <div class="list-row" onclick="toggleState('dailyReminder')">
              <span>Nhắc ghi giờ lúc 17:00</span>
              <button class="ios-switch ${st.dailyReminder ? 'on' : ''}"><span class="ios-switch-knob"></span></button>
            </div>
            <div class="list-row" onclick="toggleState('payslipReminder')">
              <span>Nhắc chụp phiếu lương</span>
              <button class="ios-switch ${st.payslipReminder ? 'on' : ''}"><span class="ios-switch-knob"></span></button>
            </div>
          </div>

          <div class="t-lbl" style="margin:18px 4px 8px;">Dữ liệu</div>
          <div class="list-card">
            <div class="list-row" onclick="go(28)">
              <span>Kết nối VssID</span>
              <span style="color:var(--success); font-weight:600;">Đã kết nối ›</span>
            </div>
            <div class="list-row" onclick="toggleState('encryptedBackup')">
              <span>Sao lưu mã hoá</span>
              <button class="ios-switch ${st.encryptedBackup ? 'on' : ''}"><span class="ios-switch-knob"></span></button>
            </div>
            <div class="list-row" onclick="openOverlayOn(16, 41)">
              <span>Xuất toàn bộ dữ liệu</span>
              <span style="color:var(--text-muted);">›</span>
            </div>
            <div class="list-row" onclick="openOverlayOn(16, 43)">
              <span style="color:var(--danger); font-weight:500;">Xoá dữ liệu trên máy</span>
              <span style="color:var(--text-muted);">›</span>
            </div>
          </div>

          <div class="t-cap" style="text-align:center; margin-top:16px;">Công Bằng 1.0.0</div>
        </div>
        ${renderHomeBar(false)}
      </div>`;
    }
  }
});

window.renderNotificationList = function (allRead) {
  const dot = (unread) => (!allRead && unread)
    ? `<span style="width:8px; height:8px; border-radius:50%; background:var(--brand-primary); flex-shrink:0; margin-top:6px;"></span>`
    : '';
  return `<div class="screen-canvas">
    ${renderStatusBar(false)}
    <div class="scr-body">
      <div class="top-nav">
        <button class="icon-circle-btn" onclick="goBack(10)">${SVG.chevronL()}</button>
        <div class="top-nav-title">Thông báo</div>
        <button class="icon-circle-btn" style="opacity:${allRead ? '0.35' : '1'};" onclick="go(37)" title="Đánh dấu đã đọc hết">${SVG.check(18)}</button>
      </div>

      <div class="t-lbl" style="margin:4px 4px 8px;">Hôm nay</div>
      <div class="card" style="padding:14px; display:flex; gap:12px; align-items:flex-start; cursor:pointer;" onclick="go(11)">
        <div class="icon-tile warn">${SVG.clock(19)}</div>
        <div style="flex:1;">
          <div style="font-size:14px; font-weight:600;">Tan ca rồi, hôm nay có tăng ca không?</div>
          <div style="font-size:13px; color:var(--text-secondary); margin-top:3px;">Ghi giờ ngay để cuối tháng đối chiếu chính xác.</div>
          <div class="t-cap" style="margin-top:6px;">17:02</div>
        </div>
        ${dot(true)}
      </div>

      <div class="t-lbl" style="margin:16px 4px 8px;">Hôm qua</div>
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div class="card" style="padding:14px; display:flex; gap:12px; align-items:flex-start; cursor:pointer;" onclick="go(24)">
          <div class="icon-tile warn">${SVG.receipt(19)}</div>
          <div style="flex:1;">
            <div style="font-size:14px; font-weight:600;">Phiếu lương tháng 10 có 2 khoản chưa khớp</div>
            <div style="font-size:13px; color:var(--text-secondary); margin-top:3px;">Có thể bạn bị thiếu 269.231đ tiền tăng ca.</div>
            <div class="t-cap" style="margin-top:6px;">20:14</div>
          </div>
          ${dot(true)}
        </div>
        <div class="card" style="padding:14px; display:flex; gap:12px; align-items:flex-start; cursor:pointer;" onclick="go(28)">
          <div class="icon-tile danger">${SVG.shield(19)}</div>
          <div style="flex:1;">
            <div style="font-size:14px; font-weight:600;">VssID vừa cập nhật dữ liệu</div>
            <div style="font-size:13px; color:var(--text-secondary); margin-top:3px;">3 tháng (06 đến 08/2026) công ty chưa nộp BHXH.</div>
            <div class="t-cap" style="margin-top:6px;">08:30</div>
          </div>
        </div>
      </div>

      <div class="t-lbl" style="margin:16px 4px 8px;">Tuần trước</div>
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div class="card" style="padding:14px; display:flex; gap:12px; align-items:flex-start; cursor:pointer;" onclick="go(17)">
          <div class="icon-tile soft">${SVG.calendar(19)}</div>
          <div style="flex:1;">
            <div style="font-size:14px; font-weight:600;">Còn 14 ngày đến kỳ nhận lương</div>
            <div style="font-size:13px; color:var(--text-secondary); margin-top:3px;">Nhận lương xong nhớ chụp phiếu lương nhé.</div>
            <div class="t-cap" style="margin-top:6px;">Thứ Hai</div>
          </div>
        </div>
        <div class="card" style="padding:14px; display:flex; gap:12px; align-items:flex-start; cursor:pointer;" onclick="go(27)">
          <div class="icon-tile success">${SVG.check(19)}</div>
          <div style="flex:1;">
            <div style="font-size:14px; font-weight:600;">Phiếu lương tháng 9 đã khớp</div>
            <div style="font-size:13px; color:var(--text-secondary); margin-top:3px;">Các khoản tăng ca và bảo hiểm đều đúng.</div>
            <div class="t-cap" style="margin-top:6px;">12/10</div>
          </div>
        </div>
      </div>
    </div>
    ${renderHomeBar(false)}
  </div>`;
};
