let myarray1 = []
let myarray2 = [1,2,3,'a','aaa',myarray1]
myarray1[0] = 111 //0번째에 아무것도 없으면 자동으로 들어감
myarray1[1] = 222 //1번째에 없으면 들어감

for(let i in myarray1)
    console.log(myarray1[i])

for(let i in myarray2)
    console.log(myarray2[i])

let str = "안녕하세요"

console.log(str[2])//하 출력
console.log(str.length)
console.log(myarray1.length)
console.log(myarray2.length)