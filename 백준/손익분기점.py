def bep(a,b,c):
    if c != b :
        answer = int(a / (c-b)+1)
    else : 
        answer = -1
    if answer < 0 :
        answer = -1
    return answer

a,b,c = map(int,input().split())
print(bep(a,b,c))
    
