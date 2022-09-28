function DSNV() {
    this.arr = [];
    this.addNV = function (sv) {
        this.arr.push(sv)
    }

    this.locateNV = function (tknv) {
        var index = -1;
        this.arr.forEach(function (nv, i) {
            if (nv.tknv === tknv) {
                index = i;
            }
        });
        return index;
    }

    this.deleteNV = function (tknv) {
        var index = this.locateNV(tknv)
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    }

    this.findNV = function (keyword) {
        var arrFind = [];
        this.arr.forEach(function (nv) {
            var xepLoai = nv.xepLoai.toLowerCase();
            var txtKeyword = keyword.toLowerCase();
            if (xepLoai.indexOf(txtKeyword) > -1) {
                arrFind.push(nv)
            }
        })
        return arrFind;
    }

    this.getInfoNV = function (tknv) {
        var index = this.locateNV(tknv);
        if (index !== -1) {
            return this.arr[index]
        }
        return null;
    }

    this.updateNV = function (nv) {
        var index = this.locateNV(nv.tknv)
        if (index !== -1) {
            this.arr[index] = nv;
        }
    }
}