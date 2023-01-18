import re
def solution(babbling):
    answer = 0
    zoca = ["aya","ye","woo","ma"]
    for word in babbling:
        for i in zoca:
            word = re.sub(i," ",word)
        word = word.replace(" ","")
        if(word==""):
            answer +=1    
    return answer

b = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]
print(solution(b))

