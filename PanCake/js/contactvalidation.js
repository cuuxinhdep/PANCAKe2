document.addEventListener('DOMContentLoaded', function () {
    // Hàm để kiểm tra tính hợp lệ của form
    function validateForm() {
        const form = document.getElementById('detailsForm');
        const inputs = form.querySelectorAll('input[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                isValid = false;
            } else {
                input.classList.add('is-valid');
                input.classList.remove('is-invalid');
            }
        });

        return isValid;
    }

    // Thêm sự kiện click cho nút Submit
    document.getElementById('submitButton').addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form submit
        if (validateForm()) {
            alert('Submission successful');
        }
    });

    // Thêm sự kiện focus cho các ô input để xóa lỗi khi người dùng nhập
    document.querySelectorAll('#detailsForm input').forEach(input => {
        input.addEventListener('focus', function () {
            this.classList.remove('is-invalid');
            this.classList.remove('is-valid');
        });
    });
});
