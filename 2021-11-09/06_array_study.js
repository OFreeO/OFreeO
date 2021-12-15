let aa = [1, 2, '삼', 4]

aa.push('오5')//맨 끝에 값을 추가함
for (let item of aa)
    console.log(item)

aa[aa.length] = 6//맨끝에 값 추가하는 방법 2

for (let item of aa)
    console.log(item)

aa[10] = 10
console.log(aa)
console.log(aa.length)

//특정 요소 제거하기
aa.splice(0, 1)//가장 첫번째꺼 하나를 제거
console.log('-----0번째 제거됨-----')
for (let item of aa)
    console.log(item)


aa.splice(1, 3)//두번째([1]번째)부터 시작해서 3개 지움
console.log('-----3개를 지움----')
for (let item of aa)
    console.log(item)

//index(위치) 모름
//특정 위치의 값을 지우고 싶을때
//만약 숫자 6을 찾아서 지울때
//indexof : 특정 값의 인덱스 값을 구함

const myindex = aa.indexOf(6)
console.log("6의 위치 : " + myindex)
aa.splice(myindex, 1)
console.log('----6 지움----')
for (let item of aa)
    console.log(item)


//특정 위치에 요소 추가하기
//뭔가 추가하기 위한 splice인 경우
//중앙에 0 을 입력해야함
aa.splice(2, 0, 1000)
console.log('----[2]번째에 1000추가----')
for (let item of aa)
    console.log(item)