let img_box = document.getElementById('img_box')
        let qrimage = document.getElementById('qrimage')
        let qrtext = document.getElementById('qrtext')
        let error = document.querySelectorAll('.error')
        function generateQR() {
            if (qrtext.value.length > 0) {

                qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
                img_box.classList.add('show-img')
            }
            else
            return alert('enter text to generate QRcode');
        }