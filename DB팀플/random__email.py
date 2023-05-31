import random
import string

# 랜덤으로 이메일을 생성하는 함수
def generate_random_email():
    domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "example.com"]
    username_length = random.randint(5, 10)
    domain = random.choice(domains)
    
    username = ''.join(random.choices(string.ascii_letters + string.digits, k=username_length))
    email = f"{username}@{domain}"
    
    return email

# 중복 제거를 위해 set 으로 저장
emails = set()

# 100개의 이메일 출력
while len(emails) < 100:
    email = generate_random_email()
    emails.add(email)
    
for e in emails:
    print(e)