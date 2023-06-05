import cx_Oracle
import random
 
from phone import generate_random_phone_number
from name import generate_korean_name
from price import generate_random_number
from person_num import generate_jumin
from makeemail import generate_random_email


def main() :
    # Oracle DB 연결 정보 설정
    dsn_tns = cx_Oracle.makedsn('localhost', 'port','xe')
    username = 'username'
    password = 'password'

    # Oracle DB 연결
    connection = cx_Oracle.connect(username, password, dsn_tns)
    
    filed = ['이혼/가정' , '상속/유언' , '채권채무' , '형사/범죄' , '교통사고', '노무', '부동산', '지적재산권', '세무', '국제/외국인', '의료', '기업법무', '행정사건', '재판/분쟁', '민사/기타','null']
    region = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주']
    emails = set()
    # 300개의 이메일 생성
    while len(emails) < 320:
        email = generate_random_email()
        emails.add(email)
        
    email_list = list(emails)    
    name_list = []
    # 300개의 이름 생성
    for i in range(320):
        name = generate_korean_name()
        name_list.append(name)
    
    jumin_numbers = set()

    # 300개의 주민 번호 생성
    while len(jumin_numbers) < 320:
        jumin_number = generate_jumin()
        jumin_numbers.add(jumin_number)
        
    jumin_list = list(jumin_numbers)
    
    # 중복 제거를 위해 set 으로 저장
    phone_numbers = set()

    # 300개의 휴대폰 번호를 생성
    while len(phone_numbers) < 320:
        phone_number = generate_random_phone_number()
        phone_numbers.add(phone_number)
        
    phone_list = list(phone_numbers)
    
    cursor = connection.cursor()
    
    for i in range(0,200):
        c_num = str(i+1).zfill(3)
        c_num = 'C' + c_num
        c_name = name_list[i]
        c_email = email_list[i]
        c_phone = phone_list[i]
        insert_sql = (f"insert into 고객 (고객번호, 이름, 이메일, 연락처) values ('{c_num}','{c_name}','{c_email}','{c_phone}')")
        cursor.execute(insert_sql)
        connection.commit()
        print(insert_sql)
    
    for i in range(200,270):
        l_num = str(i+1-200).zfill(3)
        l_num = 'L'+l_num
        l_name = name_list[i]
        l_email = email_list[i]
        l_phone = phone_list[i]
        l_filed = random.choice(filed)
        l_price = generate_random_number()
        
        insert_sql = (f"insert into 변호사 (변호사번호, 이름, 이메일, 연락처, 전문분야, 착수금) values ('{l_num}','{l_name}','{l_email}','{l_phone}','{l_filed}','{l_price}')")
        print(insert_sql)
        cursor.execute(insert_sql)
        connection.commit()
    
    for i in range(0,100):
        party_number = str(i+1).zfill(3)
        party_number = 'P'+party_number
        party_name = name_list[i]
        party_email = email_list[i]
        party_phone = phone_list[i]
        party_personal = jumin_list[i]
        party_address = random.choice(region)
        party_type = random.choice(['피고(인)','원고'])
        insert_sql = (f"insert into 당사자 (당사자번호, 이름, 이메일, 연락처, 주민등록번호, 거주지, 당사자유형) values ('{party_number}','{party_name}','{party_email}','{party_phone}','{party_personal}','{party_address}','{party_type}')")
        print(insert_sql)
        cursor.execute(insert_sql)
        connection.commit()
    
    for i in range(270,320):
        party_number = str(i+1-170).zfill(3)
        party_number = 'P'+party_number
        party_name = name_list[i]
        party_email = email_list[i]
        party_phone = phone_list[i]
        party_personal = jumin_list[i]
        party_address = random.choice(region)
        party_type = random.choice(['피고(인)','원고'])
        insert_sql = (f"insert into 당사자 (당사자번호, 이름, 이메일, 연락처, 주민등록번호, 거주지, 당사자유형) values ('{party_number}','{party_name}','{party_email}','{party_phone}','{party_personal}','{party_address}','{party_type}')")
        print(insert_sql)
        cursor.execute(insert_sql)
        connection.commit()
    
    filepath = 'person.txt'
    f = open(filepath,"w")
    
    for i in range(320):
        f.write(f'{i} : {name_list[i]} , {email_list[i]} , {phone_list[i]} , {jumin_list[i]} \n')
        
    f.close
    
    connection.close()

main()