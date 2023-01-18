'''
1. 단어를 입력받는다.
2. 단어를 순회하면서 현재 단어를 스택에 저장하고
다음 단어와 스택의 단어가 일치하면 패스 일치하지 않으면
스택의 단어를 과거 단어 리스트로 집어 넣는다.
3. 과거 단어 리스트를 순회하며
현재 인덱스의 단어가 리스트 안에 2개 이상인지 판별한다.
4. 2개 이상인 단어가 있으면 그룹 단어가 아니다.
'''
    
def group_checker(s):
    answer = 0
    now = s[0]
    past = []
    for i in s :
        if i != now :
            past.append(now)
            now = i
    past.append(now)
    for i in past :
        if past.count(i) >= 2:
            answer = 0
            break
        else :
            answer = 1
    return answer

n = int(input())
g_word = 0
for i in range(n):
    s = input()
    g_word += group_checker(s)
print(g_word)