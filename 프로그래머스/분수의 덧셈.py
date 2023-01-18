'''
1. 분수들을 통분하고 더해준다.
2. 유클리드 호제법을 사용하여 분자와 분모의 최대공약수를 구한다.
3. 구한 최대공약수를 분자와 분모에 나누고 리스트에 값을 순서대로 추가한다.
'''

def solution(numer1, denom1, numer2, denom2):
    answer = []
    n1 = numer1*denom2
    n2 = numer2*denom1
    n = n1+n2
    d = denom1*denom2
    r = 1
    x = n
    y = d
    while True :
        r = x%y
        if r == 0:
            break
        else:
            x = y
            y = r
    answer.append(int(n/y))
    answer.append(int(d/y))
    return answer
