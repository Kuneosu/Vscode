import re
def solution(babbling):
    answer = 0
    zoca = ["aya","ye","woo","ma"]
    for word in babbling:
        print("기존word : ",end="")
        print(word)
        for i in zoca:
            print("i : ",end="")
            print(i)
            print("기존word : ",end="")
            print(word)
            word = re.sub(i,"*",word)
            print("이후word : ",end="")
            print(word)
        word = re.sub("*","",word)
        if(res==""):
            answer +=1
            print(f"answer : {answer}")
    return answer

b = ["aya", "yee", "u", "maa", "wyeoo"]
print(solution(b))



