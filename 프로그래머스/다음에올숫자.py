def solution(common):
    answer = 0
    first = common[0]
    second = common[1]
    third = common[2]
    s_minus_f = second - first
    t_minus_s = third - second
    if first and second != 0:
        t_div_s = third / second
    if s_minus_f == t_minus_s:
        answer = common[-1]+s_minus_f
    else :
        answer = int(common[-1]*t_div_s)
    return answer


common = [0,0,0]
print(solution(common))