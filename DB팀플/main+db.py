# 오라클 DB와 연결한다.
# pip install cx_Oracle 필요
import cx_Oracle
from email import *
from phone import *
from name import *
from price import *
from person_num import *


def main() :
    # Oracle DB 연결 정보 설정
    dsn_tns = cx_Oracle.makedsn('localhost', 'port','xe')
    username = 'username'
    password = 'password'

    # Oracle DB 연결
    connection = cx_Oracle.connect(username, password, dsn_tns)

    print("법률 회사 업무 시스템 DB 입력기 입니다.")
    print("사용할 기능을 선택하세요. 1: 데이터 입력 / 2: 데이터 확인 / 3: 데이터 삭제 / 0: 시스템 종료 => ",end="")
    first_input = input();
    if first_input == '1':
        insert(connection)
    elif first_input == '2':
        print("데이터 확인")
    elif first_input == '3':
        print("데이터 삭제")
    elif first_input == '0':
        False
    else :
        print("잘못된 입력 값 입니다.")

## insert into 고객 (고객번호, 이름,이메일,연락처) values ('c_num','c_name','c_email','c_phone')
def insert(connection) :
    filed = ['이혼/가정' , '상속/유언' , '채권채무' , '형사/범죄' , '교통사고', '노무', '부동산', '지적재산권', '세무', '국제/외국인', '의료', '기업법무', '행정사건', '재판/분쟁', '민사/기타']
    print("데이터 입력을 시작합니다. 데이터를 입력할 테이블을 선택해주세요.")
    print("1: 고객 / 2: 변호사 / 3: 법원 / 4: 당사자 / 5: 사건 / 6: 참여,변호 => ",end="")
    insert_input = input()
    cursor = connection.cursor()
    # 고객 정보 입력
    if insert_input == '1': # 연결된 Oracle DB와 작업 수행

        print("고객 정보를 입력합니다.")
        print("고객번호 : ",end="")
        c_num = input()
        c_num = "C" + c_num
        print("이름 : ",end="")
        c_name = input()
        print("이메일 : ",end="")
        c_email = input()
        print("연락처 : ",end="")
        c_phone = input()
        insert_sql = (f"insert into 고객 (고객번호, 이름, 이메일, 연락처) values ('{c_num}','{c_name}','{c_email}','{c_phone}')")
        
         # SQL 쿼리 실행
        print(insert_sql)
        cursor.execute(insert_sql)
        connection.commit()

        # Oracle DB 연결 종료
        
    # 변호사 정보 입력
    elif insert_input == '2':
        print("변호사 정보를 입력합니다.")
        print("변호사번호 : ",end="")
        l_num = input()
        l_num = "L" + l_num
        print("이름 : ",end="")
        l_name = input()
        print("이메일 : ",end="")
        l_email = input()
        print("연락처 : ",end="")
        l_phone = input()
        print('전문분야 {1-이혼/가정 , 2-상속/유언 , 3-채권채무 , 4-형사/범죄 , 5-교통사고 , 6-노무, 7-부동산, 8-지적재산권, 9-세무, 10-국제/외국인, 11-의료, 12-기업법무, 13-행정사건, 14-재판/분쟁, 15-민사/기타} : ',end="")
        l_filed = int(input())
        l_filed = filed[l_filed-1]
        print('착수금 : ',end="")
        l_price = input()
        insert_sql = (f"insert into 변호사 (변호사번호, 이름, 이메일, 연락처, 전문분야, 착수금) values ('{l_num}','{l_name}','{l_email}','{l_phone}','{l_filed}','{l_price}')")
        print(insert_sql)
        cursor.execute(insert_sql)
        connection.commit()
    # 법원 정보 입력
    elif insert_input == '3' :
        print('법원 정보를 입력합니다.')
        print("법원명 : ",end="")
        court_name = input()
        print("연락처 : ",end="")
        court_phone = input()
        print("주소 : ",end="")
        court_address = input()
        insert_sql = (f"insert into 법원 (법원명, 연락처, 주소) values ('{court_name}','{court_phone}','{court_address}')")
        print(insert_sql)
        cursor.execute(insert_sql)
        connection.commit()
    # 당사자 정보 입력
    elif insert_input == '4' :
        print('당사자 정보를 입력합니다.')
        print("당사자번호 : ",end="")
        party_number = input()
        party_number = "P"+party_number
        print("이름 : ",end="")
        party_name = input()
        print("이메일 : ",end="")
        party_email = input()
        print("연락처 : ",end="")
        party_phone = input()
        print("주민등록번호 : ",end="")
        party_personal = input()
        print("거주지 : ",end="")
        party_address = input()
        print("당사자유형 : ",end="")
        party_type = input()
        
        insert_sql = (f"insert into 당사자 (당사자번호, 이름, 이메일, 연락처, 주민등록번호, 거주지, 당사자유형) values ('{party_number}','{party_name}','{party_email}','{party_phone}','{party_personal}','{party_address}','{party_type}')")
        print(insert_sql)
        cursor.execute(insert_sql)
        connection.commit()
    elif insert_input == '5' :
        print('사건 정보를 입력합니다. 사건 종류를 선택하세요.')
        print('{1-이혼/가정 , 2-상속/유언 , 3-채권채무 , 4-형사/범죄 , 5-교통사고 , 6-노무, 7-부동산, 8-지적재산권, 9-세무, 10-국제/외국인, 11-의료, 12-기업법무, 13-행정사건, 14-재판/분쟁, 15-민사/기타}')
        case_filed = int(input())
        case_filed = filed[case_filed-1]
        print("전문분야가 일치하는 변호사를 선택해주세요.")
        print('변호사번호 : ',end="")
        case_lawyer = input()
        case_lawyer = "L" + case_lawyer
        
        print("고객번호 : ",end="")
        case_customer = input()
        case_customer = "C"+ case_customer
        
        print("상담번호 : ",end="")
        counsel_number = input()
        counsel_number = "R"+ counsel_number
        
        print("상담일자 (XX/XX/XX): ",end="")
        case_date = input()
        
        create_counsel = (f"insert into 상담 (상담번호,상담일시,상담종류,고객번호,변호사번호) values ('{counsel_number}','{case_date}','{case_filed}','{case_customer}','{case_lawyer}')")
        cursor.execute(create_counsel)
        connection.commit()
        
        print("당사자 번호 : ",end="")
        case_party = input()
        case_party = "P" + case_party
        
        print("관할법원 : ",end="")
        case_court = input()
        
        progress = ['소장접수완료','증거물제출','공판기일확정','보정중','1심 재판 진행중','2심 재판 진행중','3심 재판 진행중','재판종료','항소 소장 접수 완료']
        print("사건의 현재 진행 상황을 선택해주세요. {1-소장접수완료, 2-증거물제출, 3-공판기일확정, 4-보정중, 5-1심 재판 진행중, 6-2심 재판 진행중, 7-3심 재판 진행중, 8-재판종료, 9-항소 소장 접수 완료}")
        case_progress = int(input())
        case_progress = progress[case_progress-1]
        
        print("사건번호 : ",end="")
        case_number = input()
        
        print("사건명 : ",end="")
        case_name = input()
        
        case_enddate = '00-01-01'
        case_win = 'null'
        if case_progress == "재판종료":
            print("재판마감일 : ",end="")
            case_enddate = input()
            print("승패여부 : ",end="")
            case_win = input()
        
        create_case = (f"insert into 사건 (사건번호, 사건명, 상태, 사건등록일, 사건마감일, 사건종류, 위임번호, 위임일자, 관할법원, 승패여부) values ('{case_number}','{case_name}','{case_progress}','{case_date}','{case_enddate}','{case_filed}','{case_customer}','{case_date}','{case_court}','{case_win}')")
        print(create_case)
        cursor.execute(create_case)
        connection.commit()
        
        create_par = (f"insert into 참여 (사건번호, 당사자번호) values ('{case_number}','{case_party}')")
        cursor.execute(create_par)
        connection.commit()
        
        create_law = (f"insert into 변호 (사건번호, 변호사번호) values ('{case_number}','{case_lawyer}')")
        cursor.execute(create_law)
        connection.commit()
        
        ## 방금 생성한 사건번호가 DB에 반영되어있지 않아 참여 테이블에서 FK로 받아오지 못하고 있음.
        
    connection.close()
        
while True:
    main()



# 반복한다.