'''
1. 문제의 d(n)을 함수 d 로 구현한다.
2. 1부터 10000까지의 숫자를 모두 d 함수에 적용시켜 생성자가 되는 숫자들을 구해 생성자 리스트에 저장한다. (init_list)
3. 1부터 10000까지 1씩 증가하며 생성자 리스트에 없는 숫자는 출력한다.
'''
#1
def d(n):
    sum = 0
    for i in n:
        sum += int(i)
    return sum +int(n)

#2
init_list = []
for i in range (1,10001):
    init_list.append(d(str(i)))
    
#3
for i in range (1,10001):
    if i not in init_list:
        print(i)