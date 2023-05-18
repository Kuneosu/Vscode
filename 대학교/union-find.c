#include <stdio.h>

#define MAX_V 1000

int parent[MAX_V + 1];

// x가 속한 집합의 루트를 반환
int find_parent(int x)
{
    if (parent[x] != x)
        parent[x] = find_parent(parent[x]);
    return parent[x];
}

// a와 b가 속한 집합을 합침
void union_sets(int a, int b)
{
    a = find_parent(a);
    b = find_parent(b);
    if (a < b)
        parent[b] = a;
    else
        parent[a] = b;
}

int main()
{
    int v, e, a, b;
    // 노드의 개수(v)와 간선의 개수(e) 입력 받기
    printf("노드의 개수와 간선의 개수를 입력하세요 => ");
    scanf("%d %d", &v, &e);

    // 부모 테이블 초기화
    for (int i = 1; i <= v; i++)
        parent[i] = i;

    // 간선의 개수 만큼 Union 연산 수행
    for (int i = 0; i < e; i++)
    {
        printf("Union 시킬 노드를 입력하세요 => ");
        scanf("%d %d", &a, &b);
        union_sets(a, b);
    }

    // 각 원소가 속한 집합 출력
    printf("각 원소가 속한 집합: ");
    for (int i = 1; i <= v; i++)
        printf("%d ", find_parent(i));
    printf("\n");

    // 부모 테이블 출력
    printf("부모 테이블: ");
    for (int i = 1; i <= v; i++)
        printf("%d ", parent[i]);
    printf("\n");

    return 0;
}