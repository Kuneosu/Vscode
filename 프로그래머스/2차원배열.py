import math
	
def solution(num_list,n):
    l = round(len(num_list)/n)
    answer=[]
    for i in range(l):
        answer.append(num_list[:n])
        for i in range(n):
            del num_list[0]

    return answer
