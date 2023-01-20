from collections import Counter
def solution(array):
    count = Counter(array)
    tnuoc = {v:k for k,v in count.items()} 
    vals = count.values()
    maxval = max(vals)
    if list(vals).count(maxval) >= 2:
        answer = -1
    else:
        answer = tnuoc.get(maxval)
    return answer
        

