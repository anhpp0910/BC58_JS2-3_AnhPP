// Bài 1: Tính tiền lương nhân viên
// input: số ngày làm
// output: tiền lương
// progress: tiền lương = số ngày làm * 100000
document.getElementById("btnBai1").onclick = function () {
  var soNgayLam = Number(document.getElementById("soNgayLam").value);
  var tienLuong = soNgayLam * 100000;
  document.getElementById("ketQuaBai1").innerHTML =
    "Tiền lương là: " + tienLuong.toLocaleString() + " VND";
};

// Bài 2: Tính giá trị trung bình
// input: 5 số thực
// output: giá trị TB của 5 số thực
// progress: giá trị TB của 5 số thực = (số thứ 1 + số thứ 2 + số thứ 3 + số thứ 4 + số thứ 5) / 5
document.getElementById("btnBai2").onclick = function () {
  var soThu1 = Number(document.getElementById("soThu1").value);
  var soThu2 = Number(document.getElementById("soThu2").value);
  var soThu3 = Number(document.getElementById("soThu3").value);
  var soThu4 = Number(document.getElementById("soThu4").value);
  var soThu5 = Number(document.getElementById("soThu5").value);
  var giaTriTB = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  document.getElementById("ketQuaBai2").innerHTML =
    "Giá trị trung bình của 5 số là: " + giaTriTB;
};

// Bài 3: Quy đổi tiền
// input: số tiền USD
// output: số tiền VND
// progress: số tiền VND = số tiền USD * 23500
document.getElementById("btnBai3").onclick = function () {
  const USD_TO_VND = 23500;
  var soTienUSD = Number(document.getElementById("soTienUSD").value);
  var soTienVND = soTienUSD * USD_TO_VND;
  document.getElementById("ketQuaBai3").innerHTML =
    soTienVND.toLocaleString() + " VND";
};

// Bài 4: Tính diện tích, chu vi hình chữ nhật
// input: chiều dài, chiều rộng
// output: chu vi, diện tích
// progress: chu vi = (chiều dài + chiều rộng) * 2
// diện tích = chiều dài * chiều rộng
document.getElementById("btnBai4").onclick = function () {
  var cDai = Number(document.getElementById("cDai").value);
  var cRong = Number(document.getElementById("cRong").value);
  var chuVi = (cDai + cRong) * 2;
  var dienTich = cDai * cRong;
  document.getElementById(
    "ketQuaBai4"
  ).innerHTML = `Chu vi là: ${chuVi} <br> Diện tích là: ${dienTich}`;
};

// Bài 5: Tính tổng 2 ký số
// input: số 2 chữ số
// output: tổng 2 ký số
// progress: tổng 2 ký số = chữ số hàng chục + chữ số hàng đơn vị
// chữ số hàng chục = Math.floor(input / 10)
// chữ số hàng đơn vị = input % 10

document.getElementById("btnBai5").onclick = function () {
  var input = Number(document.getElementById("iSo").value);
  var hangChuc = Math.floor(input / 10);
  var hangDonVi = input % 10;
  var tongKySo = hangChuc + hangDonVi;
  console.log(tongKySo);
  document.getElementById("ketQuaBai5").innerHTML =
    "Tổng 2 ký số là: " + tongKySo;
};
