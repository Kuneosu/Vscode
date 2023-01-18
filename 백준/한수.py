'''
매개변수 n 을 입력받고
n 이 100 보다 작을때는 n 을 리턴
n 이 100 보다 클때는 100보다 큰 한수의 개수를 구한 후 99를 더해서 리턴하는 함수
(1부터 99까지는 모두 한수이기 때문)
(한수를 구할때는 각 자리수의 공차를 구해 공차가 같으면 한수로 취급)
'''

def han(n):
    count = 0
    if n < 100 :
        count = n
    else :
        for i in range (100,n+1):
            f_num = int(str(i)[0])
            s_num = int(str(i)[1])
            t_num = int(str(i)[2])
            f_diff = s_num-f_num # 첫 번째 자리수와 두 번째 자리수의 공차
            s_diff = t_num-s_num # 두 번째 자리수와 세 번째 자리수의 공차
            if f_diff == s_diff:
                count += 1
        count += 99
    return count

n = int(input())
print(han(n))