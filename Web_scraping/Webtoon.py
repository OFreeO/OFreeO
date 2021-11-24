import requests
from bs4 import BeautifulSoup

url = "http://comic.naver.com/webtoon/weekday.nhn"
res = requests.get(url)

res.raise_for_status()

# lxml 외우기
soup = BeautifulSoup(res.text, 'lxml')
# 해당 태그 가져오기
# print(soup.title)
# # 텍스트만
# print(soup.title.get_text())
# soup에서 탐지되는 첫번째 a 태그 값 가져오기
# attrs = 태그의 속성값
# print(soup.a.attrs)

# find = 해당 태그에 해당하는 처음으로 발견하는 값을 가져옴
# print(soup.find("a", attrs={"class":"Nbtn_upload"}))
# print(soup.find(attrs={"class":"Nbtn_upload"}))

rank1 = soup.find("li", attrs={"class":"rank01"})
rank2 = rank1.next_sibling.next_sibling
rank3 = rank2.next_sibling.next_sibling
print(rank3.a.get_text())
print(rank1.a.get_text())
print(rank2.a.get_text())