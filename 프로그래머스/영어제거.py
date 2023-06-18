def solution(numbers):
    table = {'one':'1','two':'2','three':'3','four':'4','five':'5','six':'6','seven':'7','eight':'8','nine':'9','zero':'0'}
    for key, value in table.items():
        numbers = numbers.replace(key,value)
    return int(numbers)

n = "onetwothreefourfivesixseveneightnine"
solution(n)