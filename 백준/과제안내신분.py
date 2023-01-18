
# 1. 1부터 30까지의 정수가 들어있는 리스트를 생성한다.
# 2. 28개의 정수를 입력받음과 동시에 위의 리스트에서 제거한다.
# 3. 남은 정수를 오름차순으로 출력한다.

num = []
for i in range(30):
    num.append(i+1)

for i in range (28):
    n = int(input())
    num.remove(n)
    
num.sort()

for i in num:
    print(i)