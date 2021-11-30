import requests
from bs4 import BeautifulSoup

url = "http://www.danawa.com/"
res = requests.get(url)
res.raise_for_status()

print(res.text)
# soup = BeautifulSoup(res.text, "lxml")
# print(soup.title)