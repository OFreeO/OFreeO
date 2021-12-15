$(
    function () {
        // alert(new Student('권용규','남자',1).toString())
        //모든코드 한번에 변경 ctrl + F2
        const name = $('#name')
        const gender = $('#gender')
        const beonho = $('#beonho')

        const print = $('#print')
        const reset = $('#reset')
        const print_order_by = $('#print_order_by')

        const information = $('#information')

        function resetInfo() {
            // information.innerHTML = ''
            information.html('')
        }
        reset.on('click', function () {
            resetInfo()
            students = []
        })
        print.on('click', function () {
            const student = new Student(name.val(), gender.val(), Number(beonho.val()))

            let newStudentInfo = $('<h1></h1>')
            newStudentInfo.text(student.toString())
            if (student.성별 == "남") {
                newStudentInfo.css('background-color','springgreen').
                                css('color','blue')
                // newStudentInfo.style.backgroundColor = 'springgreen'
                // newStudentInfo.style.color = 'blue'

            } else {
                newStudentInfo.css('background-color','black').
                css('color','pink')
                // newStudentInfo.style.backgroundColor = 'black'
                // newStudentInfo.style.color = 'pink'
            }
            information.append(newStudentInfo)
        })
        print_order_by.on('click', function () {

            const idx = students.findIndex(
                function (item) {
                return item.번호 === Number(beonho.val())
                }
            )
            if (idx != -1)
            {
                alert("번호 중복")
                return
            }
            resetInfo()
            students.push(new Student(name.val(), gender.val(), Number(beonho.val())))

            student.sort(function (a, b) {
                return a.번호 - b.번호
            })
            for (let i = 0; i < students.length; i++) {
                let newStudentInfo = $('<h1></h1>')
                newStudentInfo.text(students[i].toString())
                if (student[i].성별 == "남") {
                    newStudentInfo.css('background-color','springgreen').
                                    css('color','blue')
                    // newStudentInfo.style.backgroundColor = 'springgreen'
                    // newStudentInfo.style.color = 'blue'
                } else {
                    newStudentInfo.css('background-color','black').
                    css('color','pink')
                    // newStudentInfo.style.backgroundColor = 'black'
                    // newStudentInfo.style.color = 'pink'
                }
                information.append(newStudentInfo)
            }
        })
    })