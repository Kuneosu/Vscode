#include <stdio.h>

void move_tower(int a,int b,int c);
int counter(int arr[][20], int a,int c,int x,int z);
void index_p(int a,int b,int c,int** x,int** y,int z);
int comp(int arr[][20],int source,int dest);
void move(int arr[][20],int source,int dest);

int move_count;
int count;
int n; // 1번 장대 최초 원판 갯수 ( 1 <= n <= 20 )
int i; // 2번 장대 원판 갯수
int j; // 3번 장대 원판 갯수

int arr[3][20]; // 장대 3개 배열 생성

int main()
{
    count = 1;
    while (count<=20){ // 20번 반복
        i = 0;
        j = 0;
        n = count;
        move_count = 0;

        /* 배열 초기화, 배열의 모든 값에 21 할당*/
        for(int i=0;i<3;i++){
            for(int j=0;j<20;j++){
                arr[i][j]=21;
            }
        }

        /* 초기 원판 값 입력 */
        for(int i=count,j=0;i>0;i--,j++){
            arr[0][j] = i;
        }

        /* 2의 count제곱 구하기 */
        int square = 1;
        for(int i=0;i<count;i++){
            square *= 2;
        }

        /* 탑 옮기기 수행 */
        move_tower(0,2,1);
        printf("%d개 원판일 때 : %d번 (2^count-1 = %d\n",count,move_count,square-1);
        count++;
    }
    return 0;
}

/* 원판 옮기기 
매개변수 : 배열 arr 
리턴값 : void */
void move_tower(int a,int b,int c){
    /* 해당 배열 짝을 맞추기 위한 포인터 생성 */
    int* x = NULL,* y = NULL, * z =NULL;
    index_p(a,b,c,&x,&y,&z);
    if(x==NULL||y==NULL||z==NULL){ // Warning 방지
        return;
    }

    /* 갯수 기준은 이전 c에서 이동해야할 숫자보다 작은 숫자 */
    int a_counter = counter(arr,a,c,*x,*z);
    int temp; // 재귀 함수 실행 후 다른곳에서 옮겨오거나 옮겨간 원판 갯수

    while(a_counter>0){
        if(a_counter %2 == 1){ // 홀수라면 이동해야할 방향으로 이동
            //가능하면 이동
            if((*y > 0 && arr[a][*x-1] < arr[b][*y-1])||*y==0){
                move_count++;
                move(arr,a,b);
                a_counter--; // 카운터(갯수) 감소
            }else{ // 불가능하면 기준을 바꿔서 다시 수행
                temp = *x;
                move_tower(b,c,a);
                a_counter += (*x-temp);
            }
        }
    }
}