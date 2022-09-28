function Valid() {
    this.check = function (value, divError, mess) {
        if (value.trim() === "") {
            getEle(divError).innerHTML = mess
            getEle(divError).style.display = 'block'
            return false;
        }
        getEle(divError).innerHTML = ""
        getEle(divError).style.display = 'none'
        return true;
    }

    this.checkLengthNumber = function (value, divError, mess, min, max) {
        if (value.length >= min && value.length <= max) {
            getEle(divError).innerHTML = ""
            getEle(divError).style.display = 'none'
            return true
        }
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = 'block'
        return false;
    }

    this.checkNumber = function (value, divError, mess, min, max) {
        if (value >= min && value <= max) {
            getEle(divError).innerHTML = ""
            getEle(divError).style.display = 'none'
            return true
        }
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = 'block'
        return false;
    }

    this.checkLetter = function (value, divError, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        if (value.match(letter)) {
            getEle(divError).innerHTML = ""
            getEle(divError).style.display = 'none'
            return true
        }
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = 'block'
        return false;
    }

    this.checkDate = function (value, divError, mess) {
        var date = "^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$"
        if (value.match(date)) {
            getEle(divError).innerHTML = ""
            getEle(divError).style.display = 'none'
            return true
        }
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = 'block'
        return false;
    }

    this.checkEmail = function (value, divError, mess) {
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (value.match(email)) {
            getEle(divError).innerHTML = ""
            getEle(divError).style.display = 'none'
            return true
        }
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = 'block'
        return false;
    }

    this.checkPass = function (value, divError, mess) {
        var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/
        if (value.match(pass)) {
            getEle(divError).innerHTML = ""
            getEle(divError).style.display = 'none'
            return true
        }
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = 'block'
        return false;
    }

    this.checkPosition = function (idSelect, divError, mess) {
        if (getEle(idSelect).selectedIndex !== 0) {
            getEle(divError).innerHTML = ""
            getEle(divError).style.display = 'none'
            return true;
        }
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = 'block'
        return false;
    }

    this.checkCoincide = function (value, divError, mess, arr) {
        var isExist = false;
        for (i = 0; i < arr.length; i++) {
            var nv = arr[i];
            if (nv.tknv === value) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            getEle(divError).innerHTML = mess;
            getEle(divError).style.display = 'block'
            return false
        }
        getEle(divError).innerHTML = '';
        getEle(divError).style.display = 'none'
        return true;
    }
}

