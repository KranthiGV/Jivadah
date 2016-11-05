"""
curl "http://symptoms.webmd.com/scapp/SymptomCheckerAPI.svc/symptoms" --1.0 -H "Host: symptoms.webmd.com" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0" -H "Accept: application/json, text/javascript, */*; q=0.01" -H "Accept-Language: en-GB,en;q=0.5" --compressed -H "Content-Type: application/json; charset=utf-8" -H "X-Requested-With: XMLHttpRequest" -H "Referer: http://symptoms.webmd.com/" -H "Content-Length: 92" -H "Cookie: brand=mywebmd; VisitorId=348d3784-be6e-4542-8bb6-bd98eeef6e82; refpath=; webmd_geoLoc=; AMCV_16AD4362526701720A490D45"%"40AdobeOrg=-227196251"%"7CMCIDTS"%"7C17111"%"7CMCMID"%"7C49184994224783848761385409207527573916"%"7CMCAID"%"7CNONE"%"7CMCOPTOUT-1478338561s"%"7CNONE; ui={"%"22expmatch"%"22:1"%"2C"%"22vtime"%"22:24638856}; WBMD_SC=[rot13n]{"%"22crefba"%"22:{"%"22vq"%"22:"%"226"%"22"%"2C"%"22svefgAnzr"%"22:"%"22Zr"%"22"%"2C"%"22traqre"%"22:6"%"2C"%"22eryngvbafuvc"%"22:67"%"2C"%"22zBO"%"22:65"%"2C"%"22qBO"%"22:0"%"2C"%"22lBO"%"22:6431}"%"2C"%"22vfFnivatFlzcgbzf"%"22:snyfr"%"2C"%"22unirFubjaUryc"%"22:gehr"%"2C"%"22fryrpgrqObqlCneg"%"22:ahyy"%"2C"%"22flzcgbzf"%"22:[]}; AMCVS_16AD4362526701720A490D45"%"40AdobeOrg=1; s_cc=true; ck_consent=true; nls2={"%"22a"%"22:0}; ads_sess={"%"22pim"%"22:{"%"22c"%"22:"%"22pimc_1x"%"22"%"2C"%"22t"%"22:"%"22pimt_1478331365076x"%"22}}; turn=7717027814846333008|161105|y; s_sq="%"5B"%"5BB"%"5D"%"5D; olen=1200; ASP.NET_SessionId=lkmggw0pji3zp2pjectsmawv" -H "Connection: keep-alive"

"""

import requests
import json

url = "http://symptoms.webmd.com/scapp/SymptomCheckerAPI.svc/symptoms"
headers = {
    'Host': 'symptoms.webmd.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'en-GB,en;q=0.5',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Referer': 'http://symptoms.webmd.com/',
    'Content-Length': '92',
    'Connection': 'keep-alive',
}
cookies = {
    'brand': 'mywebmd',
    'VisitorId': '348d3784-be6e-4542-8bb6-bd98eeef6e82',
    'refpath': '',
    'webmd_geoLoc': '',
    'AMCV_16AD4362526701720A490D45%40AdobeOrg': '-227196251%7CMCIDTS%7C17111%7CMCMID%7C49184994224783848761385409207527573916%7CMCAID%7CNONE%7CMCOPTOUT-1478338561s%7CNONE',
    'ui': '{%22expmatch%22:1%2C%22vtime%22:24638856}',
    'WBMD_SC': '[rot13n]{%22crefba%22:{%22vq%22:%226%22%2C%22svefgAnzr%22:%22Zr%22%2C%22traqre%22:6%2C%22eryngvbafuvc%22:67%2C%22zBO%22:65%2C%22qBO%22:0%2C%22lBO%22:6431}%2C%22vfFnivatFlzcgbzf%22:snyfr%2C%22unirFubjaUryc%22:gehr%2C%22fryrpgrqObqlCneg%22:ahyy%2C%22flzcgbzf%22:[]}',
    'AMCVS_16AD4362526701720A490D45%40AdobeOrg': '1',
    's_cc': 'true',
    'ck_consent': 'true',
    'nls2': '{%22a%22:0}',
    'ads_sess': '{%22pim%22:{%22c%22:%22pimc_1x%22%2C%22t%22:%22pimt_1478331365076x%22}}',
    'turn': '7717027814846333008|161105|y',
    's_sq': '%5B%5BB%5D%5D',
    'olen': '1200',
    'ASP.NET_SessionId': 'lkmggw0pji3zp2pjectsmawv',
}

http_proxy  = "http://172.30.0.22:3128"
https_proxy = "http://172.30.0.22:3128"
ftp_proxy   = "http://172.30.0.22:3128"
proxyDict = {
              "http"  : http_proxy,
              "https" : https_proxy,
              "ftp"   : ftp_proxy
            }


"""
M: 30, 1 to 68
F: 30, 1 to 64

"""

for i in range(1,65):
    data = {
        "request":{"user":{"age":30,"gender":"F","zip":"","vid":""},"locale":"us","bodypartid":i}
    }
    r = requests.post(url, json = data, headers=headers, cookies=cookies, proxies=proxyDict)

    if r.status_code == requests.codes.ok:
        print("Success!")
        with open('data/F_30_'+str(i)+'.json', 'w') as f:
             json.dump(r.json(), f)
    else:
        print(r.status_code)


"""
    # Writing JSON data
with open('data.json', 'w') as f:
     json.dump(data, f)

# Reading data back
with open('data.json', 'r') as f:
     data = json.load(f)

"""
