import random

filepath = 'jumin.txt'
f = open(filepath,'w')

def generate_jumin():
    birth_year = random.randint(1950, 2023)  # 생년도 범위
    birth_year_str = str(birth_year)[-2:]  # 생년도에서 뒤의 2자리 가져오기
    
    birth_month = random.randint(1, 12)  # 월 범위
    birth_month_str = str(birth_month).zfill(2)  # 2자리로 맞추고 앞에 0을 채움
    
    if birth_month in [1, 3, 5, 7, 8, 10, 12]:
        birth_day = random.randint(1, 31)  # 31일까지 있는 달
    elif birth_month in [4, 6, 9, 11]:
        birth_day = random.randint(1, 30)  # 30일까지 있는 달
    else:
        birth_day = random.randint(1, 28)  # 2월은 28일까지 있는 경우
    
    birth_day_str = str(birth_day).zfill(2)  # 2자리로 맞추고 앞에 0을 채움
    
    if birth_year >= 1900 and birth_year <= 1999:
        random_num = random.randint(1, 2) * 1000000  # 1 또는 2로 시작하는 7자리 수
    else:
        random_num = random.randint(3, 4) * 1000000  # 3 또는 4로 시작하는 7자리 수
        
    random_num += random.randint(0, 999999)  # 나머지 6자리 랜덤 숫자
    random_num_str = str(random_num).zfill(7)  # 7자리로 맞추고 앞에 0을 채움
    
    jumin = birth_year_str + birth_month_str + birth_day_str +'-'+ random_num_str
    return jumin

# 함수 호출하여 주민등록번호 생성

jumin_numbers = set()

# 100개의 휴대폰 번호를 출력
while len(jumin_numbers) < 300:
    jumin_number = generate_jumin()
    jumin_numbers.add(jumin_number)

i = 1
for number in jumin_numbers:
    f.write(f'{i} : {number}\n')
    i= i+1

f.close