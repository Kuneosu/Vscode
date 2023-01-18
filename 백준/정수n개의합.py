'''
1. 정수 n 개를 입력받아 리스트 a 에 저장한다.
2. 리스트 a 에 있는 정수들의 합을 구한 후 출력한다.
'''

a = []
n = int(input())
for i in range(n):
    num = int(input())
    a.append(num)

def solve(a):
    sum = 0
    for i in a:
        sum += i
    return sum 

print(solve(a))
    
