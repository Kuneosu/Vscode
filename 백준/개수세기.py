# 1. 정수 N 을 입력받는다. 
# 2. N 개의 정수를 입력받는다.
# 3. 찾아야 할 정수 v 를 입력한다.
# 4. 2번에서 입력받은 정수 가운데 정수 v 가 몇개 포함되어 있는지 찾아 출력한다.

n = int(input())
num = list(map(int, input().split()))
v = int(input())
cnt = 0
for i in range (n):
    if num[i] == v :
        cnt += 1
print(cnt)