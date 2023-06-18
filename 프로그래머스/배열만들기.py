def solution(l, r):
    answer = []
    for i in range(l,r+1):
        check = 1
        for s in str(i):
            if s == '5' or s== '0':
                pass
            else:
                check = 0
        if check == 1:
            answer.append(i)
    if len(answer) == 0:
        answer.append(-1)
    return answer
