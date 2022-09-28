var formatNumber = new Intl.NumberFormat('VN-vn')
function NhanVien(_tk, _name, _email, _password, _datepicker, _luongCB, _chucvu, _gioLam,) {
    this.tknv = _tk
    this.name = _name
    this.email = _email
    this.password = _password
    this.datepicker = _datepicker
    this.luongCB = _luongCB
    this.chucvu = _chucvu
    this.gioLam = _gioLam
    this.tongLuong = 0
    this.xepLoai = ''
    if (this.chucvu === "Sếp") {
        this.tongLuong = formatNumber.format(parseFloat(this.luongCB) * 3)
    }
    else if (this.chucvu === "Trưởng phòng") {
        this.tongLuong = formatNumber.format(parseFloat(this.luongCB) * 2)
    }
    else if (this.chucvu === "Nhân viên") {
        this.tongLuong = formatNumber.format(parseFloat(this.luongCB) * 1)
    }
    if (this.gioLam < 160) {
        this.xepLoai = "Trung bình"
    }
    else if (this.gioLam < 176) {
        this.xepLoai = "Khá"
    }
    else if (this.gioLam < 192) {
        this.xepLoai = "Giỏi"
    }
    else {
        this.xepLoai = "Xuất sắc"
    }
}