# DEMO TRIỂN KHAI GIAO DIỆN CODE — ỨNG DỤNG CÔNG BẰNG (56 MÀN HÌNH)
## Yêu cầu (8) Phác thảo và triển khai code · Môn Thiết kế và Tích hợp Giao diện (ADM401)

---

### 1. TỔNG QUAN DỰ ÁN
* **Nguồn thiết kế:** Chuyển thể trực tiếp từ file Figma `CongBangApp.fig` (Canvas *Giao diện hoàn thiện*).
* **Quy mô hiện thực:** **56 màn hình hoàn chỉnh** (vượt mức tối thiểu **50 màn hình** theo yêu cầu đồ án), chuẩn kích thước **iPhone 17 (402 × 874 pt)**.
* **Công nghệ:** HTML5, CSS3 (Design Tokens chuẩn Figma Variables, Flexbox, Grid, Dynamic Island & Safe Area iOS), JavaScript ES6 thuần (chạy trực tiếp không cần build/server).

---

### 2. HƯỚNG DẪN CHẠY VÀ TRÌNH BÀY DEMO
1. Mở trực tiếp file **`index.html`** bằng trình duyệt bất kỳ (Chrome, Edge, Safari, Firefox).
2. **Hai chế độ trình bày trên thanh công cụ phía trên:**
   * **Trình bày iPhone 17:** Trình diễn tương tác từng màn hình trên khung máy ảo iPhone 17 — bấm nút, nhập bàn phím số/OTP, tăng giảm giờ tăng ca (`+` / `−`), đổi giọng văn đề nghị, mở/đóng bảng BHXH theo năm, mở các lớp phủ chọn thông số (`41–56`).
   * **Toàn cảnh 56 màn hình:** Xem toàn bộ 56 màn hình cùng lúc chia theo 6 cụm chức năng (lọc nhanh từng cụm, bấm vào bất kỳ màn hình nào để phóng to vào khung iPhone 17).
3. **Phím tắt trình chiếu:** Dùng phím mũi tên `←` / `→` để chuyển nhanh giữa 56 màn hình.

---

### 3. DANH MỤC 56 MÀN HÌNH ĐÃ TRIỂN KHAI
* **Cụm 01 · Làm quen & Thiết lập lần đầu (01 – 08 · 8 màn hình):**
  * `01` Splash · `02` Chào mừng · `03` Đăng nhập · Số điện thoại · `04` Đăng nhập · Mã OTP · `05` Quyền riêng tư · `06` Thiết lập · Lương · `07` Thiết lập · Ca làm · `08` Thiết lập · Hệ số tăng ca
* **Cụm 02 · Hằng ngày & Ghi giờ công (09 – 16 · 8 màn hình):**
  * `09` Nhắc ghi giờ · Màn hình khoá · `10` Trang chủ · `11` Ghi giờ (bảng trượt) · `12` Trang chủ · Đã lưu giờ · `13` Lịch ngày công (Tháng 11) · `14` Chi tiết ngày công · `15` Thông báo · `16` Tài khoản & cài đặt
* **Cụm 03 · Phiếu lương & Đối chiếu (17 – 27 · 11 màn hình):**
  * `17` Phiếu lương · Danh sách · `18` Chụp phiếu lương · Căn khung · `19` Chụp phiếu lương · Đã nhận diện · `20` Phiếu lương · Đang đối chiếu · `21` Phiếu lương · Ảnh bị mờ · `22` Kiểm tra số đã đọc · `23` Sửa số đã đọc · `24` Kết quả đối chiếu · `25` Chi tiết · Tăng ca ngày thường · `26` Chi tiết · Tăng ca Chủ nhật · `27` Phiếu lương · Tháng 9 khớp
* **Cụm 04 · BHXH & Hành động (28 – 35 · 8 màn hình):**
  * `28` Bảo hiểm xã hội · `29` BHXH · Chi tiết tháng · `30` Cách xử lý từng bước · `31` Soạn đề nghị · `32` Xem trước bảng đối chiếu · `33` Đã chuẩn bị xong · `34` Theo dõi đề nghị · `35` Ghi phản hồi của công ty
* **Cụm 05 · Màn phụ (36 – 40 · 5 màn hình):**
  * `36` Lịch ngày công · Tháng 10 · `37` Thông báo · Đã đọc hết · `38` Chi tiết · Tăng ca ngày thường · Đủ 12 ngày · `39` Căn cứ pháp lý · Điều 98 · `40` Chính sách quyền riêng tư
* **Cụm 06 · Lớp phủ và thông báo (41 – 56 · 16 màn hình):**
  * `41` Bảng chia sẻ · `42` Bảng thao tác · `43` Hộp thoại xác nhận xoá · `44` Thông báo đồng bộ VssID · `45` Chọn số ngày công chuẩn · `46` Chọn giờ làm mỗi ngày · `47` Chọn trả vào kỳ lương · `48` Chọn gửi đề nghị đến · `49` Chọn hệ số tăng ca ngày thường · `50` Chọn nghỉ giữa ca · `51` Chọn ca làm mặc định · `52` Bàn phím chữ · `53` Xem ảnh chấm công · `54` Đã sao chép nội dung đề nghị · `55` Đã lưu bảng đối chiếu vào Tệp · `56` Đã đặt nhắc lại lúc 8:00 ngày mai
