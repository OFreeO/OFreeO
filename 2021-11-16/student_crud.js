function MyStudent(n, a, num) {
    this.name = n
    this.age = a
    this.number = num
    this.regist = function () {
        alert(this.name + "학생 등록 완료")
    }
}


// window - DOM객체
//DOM 은 document object model
//window 는 우리가 웹 브라우저에서 이영하는 창

window.onload = function () {
    let Name = document.querySelector('#name')
    let Age = document.querySelector('#age')
    let Num = document.querySelector('#num')

    let Create = document.querySelector('#create')
    let Read = document.querySelector('#read')
    let Update = document.querySelector('#update')
    let Delete = document.querySelector('#delete')

    let consolelog = document.querySelector('#consolelog')

    let students = []
    Create.onclick = function () {
        for (let item of students) {
            if (Num.value == item.number) {
                alert("중복 학생 존재")
                return
            }
        }
        let tempStudent = new MyStudent(Name.value, Age.value, Num.value)

        students.push(tempStudent)
        tempStudent.regist()
        console.log(students)
    }

    Read.onclick = function () {
        for (let item of students) {
            if (Num.value == item.number) {
                alert(`${item.number}번 학생은 ${item.name}이며 ${item.age}살이다`)
                return
            }
        }
    }
    Update.onclick = function () {
        for (let item of students) {
            if (Num.value == item.number) {
                item.name = Name.value
                item.age = Age.value
            }
        }
    }
    Delete.onclick = function () {
        for (let i = 0; i < students.length; i++) {
            if (Num.value == students[i].number)
                students.splice(i, 1)
        }
    }
    consolelog.onclick = function () {
        console.log(students)
    }
}
