import random
import string

filepath = 'email.txt'
f = open(filepath,"w")


# 랜덤으로 이메일을 생성하는 함수
def generate_random_email():
    domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "naver.com", "daum.net"]
    username_length = random.randint(5, 10)
    domain = random.choice(domains)
    
    username = ''.join(random.choices(string.ascii_letters + string.digits, k=username_length))
    email = f"{username}@{domain}"
    
    return email

# 중복 제거를 위해 set 으로 저장
emails = set()

# 100개의 이메일 출력
while len(emails) < 300:
    email = generate_random_email()
    emails.add(email)

i = 1
for e in emails:
    f.write(f"{i} : {e}\n")
    i = i+1
    
f.close