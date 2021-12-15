document.addEventListener('DOMContentLoaded',
    function () {
        // alert(new Student('권용규','남자',1).toString())
        const name = document.querySelector('#name')
        const gender = document.querySelector('#gender')
        const beonho = document.querySelector('#beonho')

        const print = document.querySelector('#print')
        const reset = document.querySelector('#reset')
        const print_order_by = document.querySelector('#print_order_by')

        const information = document.querySelector('#information')

        function resetInfo() {
            information.innerHTML = ''
        }
        reset.addEventListener('click', function () {
            resetInfo()
            students = []
        })
        print.addEventListener('click', function () {
            let student = new Student(name.value, gender.value, Number(beonho.value))

            let newStudentInfo = document.createElement('h1')
            newStudentInfo.textContent = student.toString()
            if (student.성별 == "남") {
                newStudentInfo.style.backgroundColor = 'springgreen'
                newStudentInfo.style.color = 'blue'
            } else {
                newStudentInfo.style.backgroundColor = 'black'
                newStudentInfo.style.color = 'pink'
            }
            information.appendChild(newStudentInfo)
        })
        print_order_by.addEventListener('click', function () {

            const box = students.findIndex(function (item) {
                return item.번호 === Number(beonho.value)
            })
            if (item != -1) {
                alert("번호 중복")
                return
            }
            resetInfo()
            students.push(new Student(name.value, gender.value, Number(beonho.value)))

            student.sort(function (a, b) {
                return a.번호 - b.번호
            })
            for (let i = 0; i < students.length; i++) {
                if (students[i].성별 == "남") {
                    newStudentInfo.style.backgroundColor = 'springgreen'
                    newStudentInfo.style.color = 'blue'
                } else {
                    newStudentInfo.style.backgroundColor = 'black'
                    newStudentInfo.style.color = 'pink'
                }
                information.appendChild(newStudentInfo)
            }
        })

    })