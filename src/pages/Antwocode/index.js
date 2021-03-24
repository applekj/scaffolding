import React, { useEffect } from 'react'

const Antwocode = props => {

    useEffect(() => {
        const newfile = document.getElementById('newfile')
        const getObjectURL = function (file) {
            var url = null;
            if (window.createObjectURL != undefined) { // basic
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        }

        newfile.onchange = function () {
            console.log(this.files[0]);
            // console.log(getObjectURL(this.files[0]));// newfile[0]是通过input file上传的二维码图片文件
            qrcode.decode(getObjectURL(this.files[0]));
            qrcode.callback = function (imgMsg) {
                alert("二维码解析：" + imgMsg)
            }
        }
    }, [])

    return (
        <div style={{ padding: '20px 20px 0' }} >
            <input type='file' id='newfile' />
        </div>
    )
}

export default Antwocode