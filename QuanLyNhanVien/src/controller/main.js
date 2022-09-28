function getEle(id) {
    return document.getElementById(id)
}
var dsnv = new DSNV();
loadData();
var valid = new Valid();

function getInfo(isAdd) {
    var tknv = getEle('tknv').value;
    var name = getEle('name').value;
    var email = getEle('email').value;
    var password = getEle('password').value;
    var datepicker = getEle('datepicker').value;
    var luongCB = getEle('luongCB').value;
    var chucvu = getEle('chucvu').value;
    var gioLam = getEle('gioLam').value;
    var isValid = true;

    if (isAdd) {
        isValid &= valid.check(tknv, 'tbTKNV', '(*) Vui lòng nhập lại số tài khoản') && valid.checkLengthNumber(tknv, 'tbTKNV', '(*) Vui lòng nhập từ 4-6 ký tự', 4, 6) && valid.checkCoincide(tknv, 'tbTKNV', '(*) Đã trùng tài khoản xin nhập lại', dsnv.arr)
    }

    isValid &= valid.check(name, 'tbTen', '(*) Vui lòng nhập tên') && valid.checkLetter(name, 'tbTen', '(*) Vui lòng nhập tên định dạng chữ');

    isValid &= valid.check(email, 'tbEmail', '(*) Vui lòng nhập email') && valid.checkEmail(email, 'tbEmail', '(*) Vui lòng nhập đúng định dạng email');

    isValid &= valid.check(password, 'tbMatKhau', '(*) Vui lòng nhập mật khẩu') && valid.checkLengthNumber(password, 'tbMatKhau', '(*) Mật khẩu từ 6-10 ký tự', 6, 10) && valid.checkPass(password, 'tbMatKhau', '(*) Mật khẩu nên chứa 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt');

    isValid &= valid.check(datepicker, 'tbNgay', '(*) Vui lòng nhập ngày làm') && valid.checkDate(datepicker, 'tbNgay', '(*) mm/dd/yyy');

    isValid &= valid.check(luongCB, 'tbLuongCB', '(*) Vui lòng nhập mức lương') && valid.checkNumber(luongCB, 'tbLuongCB', '(*) Vui lòng nhập mức lương từ 1.000.000-20.000.000 đồng', 1000000, 20000000);

    isValid &= valid.checkPosition('chucvu', 'tbChucVu', '(*) Vui lòng chọn chức vụ')

    isValid &= valid.check(gioLam, 'tbGiolam', '(*) Vui lòng nhập số giờ đã làm') && valid.checkNumber(gioLam, 'tbGiolam', '(*) Số giờ làm từ 80-200h ', 80, 200)

    if (isValid) {
        var nv = new NhanVien(tknv, name, email, password, datepicker, luongCB, chucvu, gioLam)
        return nv
    }
    return null;
}

getEle('btnThemNV').addEventListener('click', function () {
    var nv = getInfo(true);
    if (nv) {
        dsnv.addNV(nv)
        createTable(dsnv.arr)
        saveData()
    }
})

function createTable(data) {
    var content = ''
    data.forEach(function (nv) {
        content += `
        <tr>
            <td>${nv.tknv}</td>
            <td>${nv.name}</td>
            <td>${nv.email}</td>
            <td>${nv.datepicker}</td>
            <td>${nv.chucvu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
            <button onclick="Delete('${nv.tknv}')" class="btn btn-danger">Xóa</button>
            <button onclick="Update('${nv.tknv}')" data-toggle="modal" data-target="#myModal" class="btn btn-success">Cập nhật</button>
            </td>
        </tr>`
    });
    getEle('tableDanhSach').innerHTML = content;
}

function saveData() {
    var dataStr = JSON.stringify(dsnv.arr);
    localStorage.setItem('DSNV', dataStr);
}

function loadData() {
    if (localStorage.getItem('DSNV')) {
        var dataStr = localStorage.getItem("DSNV");
        dsnv.arr = JSON.parse(dataStr);
        createTable(dsnv.arr);
    }
}

getEle('searchName').addEventListener('keyup', function () {
    var keyword = getEle('searchName').value;
    var arrFind = dsnv.findNV(keyword);
    createTable(arrFind);
})

function Delete(tknv) {
    dsnv.deleteNV(tknv);
    createTable(dsnv.arr);
    saveData();
}

function Update(tknv) {
    var nv = dsnv.getInfoNV(tknv);
    if (nv) {
        getEle('tknv').value = nv.tknv
        getEle('tknv').disabled = true;
        getEle('name').value = nv.name;
        getEle('email').value = nv.email;
        getEle('password').value = nv.password;
        getEle('datepicker').value = nv.datepicker;
        getEle('luongCB').value = nv.luongCB;
        getEle('chucvu').value = nv.chucvu;
        getEle('gioLam').value = nv.gioLam;
    }
    getEle('btnThemNV').style.display = "none"
    document.getElementsByClassName('sp-thongbao').display = 'none';
}

getEle('btnThem').addEventListener('click', function () {
    getEle('tknv').value = ''
    getEle('tknv').disabled = false;
    getEle('name').value = ''
    getEle('email').value = ''
    getEle('password').value = ''
    getEle('datepicker').value = ''
    getEle('luongCB').value = ''
    getEle('chucvu').checked = ''
    getEle('gioLam').value = ''
    getEle('btnThemNV').style.display = 'block'
    document.getElementsByClassName('sp-thongbao').display = 'none';
})

getEle('btnCapNhat').addEventListener('click', function () {
    var nv = getInfo(false);
    dsnv.updateNV(nv);
    createTable(dsnv.arr);
    saveData();
})