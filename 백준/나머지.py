# 1. 10개의 숫자를 입력받아 42를 나눈 나머지를 리스트 num에 저장한다.
# 2. num 리스트를 set 으로 변환하여 snum에 저장한다.
# 3. snum에 들어있는 요소의 수를 출력한다.

num = []
for i in range(10):
    n = int(input())
    n = n%42
    num.append(n)
    
snum = list(set(num))
cnt=0
for i in snum:
    cnt += 1
print(cnt)