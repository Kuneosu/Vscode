import random

# 랜덤으로 휴대폰 번호를 생성하는 함수
def generate_random_phone_number():
    number = "010"
    for _ in range(8):
        number += str(random.randint(0, 9))
    return number


# 중복 제거를 위해 set 으로 저장
phone_numbers = set()

# 100개의 휴대폰 번호를 출력
while len(phone_numbers) < 100:
    phone_number = generate_random_phone_number()
    phone_numbers.add(phone_number)

for number in phone_numbers:
    print(number)
