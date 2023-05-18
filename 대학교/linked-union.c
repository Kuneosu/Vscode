#include <stdio.h>
#include <stdlib.h>

// 노드를 나타내는 구조체
typedef struct node
{
    int data;            // 노드가 저장하는 값
    struct node *next;   // 다음 노드를 가리키는 포인터
    struct node *parent; // 노드의 부모 노드를 가리키는 포인터
} Node;

// 초기화 함수: 각 노드의 부모를 자기 자신으로 설정
void initialize(Node *node)
{
    node->parent = node;
}

// 루트 노드를 찾는 함수
Node *find_root(Node *node)
{
    Node *root = node;
    while (root->parent != root)
    {
        root = root->parent;
    }

    // 경로 압축
    Node *temp;
    while (node->parent != node)
    {
        temp = node->parent;
        node->parent = root;
        node = temp;
    }
    return root;
}

// node1 과 node2 를 합침
void union_sets(Node *node1, Node *node2)
{
    Node *root1 = find_root(node1);
    Node *root2 = find_root(node2);
    if (root1 == root2)
    {
        return;
    }
    root2->parent = root1;
}

int main()
{
    int v, e, a, b;

    // 노드의 개수(v)와 간선의 개수(e) 입력 받기
    printf("노드의 개수와 간선의 개수를 입력하세요 => ");
    scanf("%d %d", &v, &e);

    // 각 노드를 동적으로 생성하고 초기화
    Node *nodes = (Node *)malloc(sizeof(Node) * v);
    for (int i = 0; i < v; i++)
    {
        nodes[i].data = i + 1;
        nodes[i].next = NULL;
        initialize(&nodes[i]);
    }

    // 간선의 개수 만큼 Union 연산 수행
    for (int i = 0; i < e; i++)
    {
        printf("Union 시킬 노드를 입력하세요 => ");
        scanf("%d %d", &a, &b);
        union_sets(&nodes[a - 1], &nodes[b - 1]);
    }

    // 각 노드의 부모 노드 출력
    for (int i = 0; i < v; i++)
    {
        printf("Node %d의 부모노드 : %d\n", nodes[i].data, find_root(&nodes[i])->data);
    }

    // 동적으로 할당한 메모리 해제
    free(nodes);

    return 0;
}
