"""
1. 정수 n 을 입력 받는다. (n<=1000)
2. n 개의 정수를 입력 받는다. (<= 100)
3. 입력받은 정수 중 가장 큰 수를 찾는다. (m)
4. 입력받은 정수들에 m*100을 나눈다.
5. 위의 수를 모두 더한다.
6. n 으로 나눈다.
"""

#1
n = int(input())

#2
b = input().split()
b = list(map(int,b))

#3
m = max(b)

#4
m = m*100
j = 0
for i in b:
    b[j]= i*10000/m
    j+=1

#5
sum = 0
for i in b:
    sum += i

#6
print(sum/n)
    