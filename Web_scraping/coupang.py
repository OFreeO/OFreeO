import requests
import re
from bs4 import BeautifulSoup


url = "https://www.coupang.com/np/search?component=&q=%EB%85%B8%ED%8A%B8%EB%B6%81&channel=user"
headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36"}
res = requests.get(url, headers=headers)
res.raise_for_status()
soup = BeautifulSoup(res.text, "lxml")
# print(res.text)

items = soup.find_all("li", attrs={"class":re.compile("^search-product")})
# price = soup.find_all("li", attrs={"class":re.compile("^search-product")})

for item in items:
    name = item.find("div", attrs = {"class" : "name"}).get_text()
    price = item.find("strong", attrs = {"class" : "price-value"}).get_text()
    rate = item.find("em", attrs = {"class" : "rating"})
    if rate:
        rate = rate.get_text()
    else:
        rate = "평점 없음"
    rate_cnt = item.find("span", attrs = {"class" : "rating-total-count"})
    if rate_cnt:
        rate_cnt = rate_cnt.get_text()
    else:
        rate_cnt = "평점 없음"
    link = item.find("a", attrs = {"class" : "search-product-link"})['href']
    link = "https://www.coupang.com"+link
    print("이름 : {0}name\n가격 : {1}\n평점 : {2}\n평점 수 : {3}".format(name, price, rate, rate_cnt))
    print("구매링크 : {0}".format(link))
    print()
print("끝")

