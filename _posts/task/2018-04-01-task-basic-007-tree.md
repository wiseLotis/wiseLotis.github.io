---
layout: post
title:  "BacktotheBasic - 트리(Tree)"
subtitle: "자료구조-트리"
slug: "task-basic-007-tree"
description: "트리를 구현해보자"
categories: task
tags: [task, home]
comments: true
image: "/assets/posts_con/cover_task.jpg"
google: true
sitemap :
 changefreq: daily
 priority: 1.0
feed : true
---
 ## 트리

트리는 나무를 닮은 자료 구조이다.(마치 나무를 거꾸로 뒤집어 놓은것처럼 표현함. or 왼쪽에서 오른쪽 or 오른쪽에서 왼쪽)

컴퓨터 과학에서 트리는 굉장히 높은 활용도를 가진 자료구고 임.
1. 운영체제의 파일시스템
2. HTML, XML문서의 DOM(Document Object Model)
3. 검색엔진과 데이터 베이스 (*탐색트리)

### 구성요소
![트리 이미지](/assets/posts_con/tree/tree.png)

1. 뿌리(root) - 자료구조의 가장위에 있는 노드
2. 가지(Branch) - 뿌리와 잎 사이에 있는 노드
3. 잎(Leaf) == 단말(Terminal) 노드 - 가장 끝에 있는 노드

DOM도 트리 구조이기 때문에 javascript 사용할때 이미 트리의 주요 용어, 명칭들을 사용했을 것이다.
A는 B의 부모(parent), E와 F는 B의 자식(children),  F는 E의 형제(sibling)이다.

경로(path),깊이(depth),차수(degree) 는 javascript를 이용하면서 잘 안쓰는 말인데

![트리설명-경로,깊이,차수](/assets/posts_con/tree/tree_01.png)

path는 A에서 만약  K노드를 찾아가려고 한다면
"D,J,K" 가 H 까지의 경로가 됨.

depth(==level==height)는 루트 노드에서 해당 노드 까지의 경로의 길이를 뜻함.

degree는 자식노드의 개수를 말한다.

### 트리표현하기
![트리 이미지](/assets/posts_con/tree/tree.png)
트리 표현 방법은 아래와 같음.
1. 중첩된 괄호(Nested Parenthesis)
  - 읽기는 다소 어렵지만 트리를 하나의 공식처럼 표현할 수 있음.
  A(B(E)(F(G)(H))G(H)I(J(K)))

2. 중첩된 집합(Nested Set)
  - 트리가 하위 트리의 집합이라는 관계를 잘 표현할 수있지만 잘 사용하지 않는다.

3. 들여쓰기(Indentation) - 가장많이 사용!!!!!!
  - 자료의 계층적인 특징을 가장 잘 나타냄.
  - 윈도우 탐색기의 폴더가 가장 대표적인 예

### 노드표현법 - 부모, 자식, 형제노드를 서로 연결짓는 방법

1. N-링크(N-Link) 표현법

![트리 이미지](/assets/posts_con/tree/n-link.jpg)

- 차수가 N인경우 노드가 N개의 링크를 가지고 있어 각각 자식 노드를 가리키도록 구성
- 차수(degree) 가 노드마다 달라지는 트리에 적용이 어려움. (폴더 트리)
- 폴더의 차수가 수백 수천개일 수 있음. 복잡한 트리를 더 복잡하게/!?

2. 왼쪽자식-오른쪽형제표현법(LCRS: Left Child Right Sibling)

![트리 이미지](/assets/posts_con/tree/lcrs.jpg)

- 어느 한 노드의 자식노드를 얻기 위해서는 왼쪽 자식노드에 대한 정보만있으면 됨.
이 자식노드에 대한 정보를 다 얻고, 오른쪽 형제 노드의 주소를 계속 얻으면 모든 자식 노드를 얻을 수 있음.

### 구현

먼저 인터페이스를 만들었다.
{% highlight java %}

 package task.structure;

public interface Tree<T> {
  public T getRoot();
	public T getChild(T parent, int index);
	public int getDegree(T parent);
	public void addChildNode(T parent, T child);
	public void addNext(T Prev, T next);
	public boolean isLeaf(T node);
}
{% endhighlight %}


<br><br>
LCRSTree.java
<a class="btn btn-code" data-toggle="collapse" href="#tree">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="tree">
<div class="card">
{% highlight java %}
package task.structure;

public class LCRSTree implements Tree<LCRSTreeNode<Object>>{
	private LCRSTreeNode<Object> root;

	public LCRSTree() {
		this.root  = null;
	}
	public LCRSTree(LCRSTreeNode<Object> input){
		this.root = input;
	}
	public static void main(String[] args) {
		LCRSTreeNode<Object> a_node = new LCRSTreeNode<Object>("A");
		LCRSTreeNode<Object> b_node  = new LCRSTreeNode<Object>("B");
		LCRSTreeNode<Object> c_node  = new LCRSTreeNode<Object>("C");
		LCRSTreeNode<Object> d_node  = new LCRSTreeNode<Object>("D");
		LCRSTreeNode<Object> e_node  = new LCRSTreeNode<Object>("E");
		LCRSTreeNode<Object> f_node  = new LCRSTreeNode<Object>("F");
		LCRSTreeNode<Object> g_node  = new LCRSTreeNode<Object>("G");
		LCRSTree myTree = new LCRSTree(a_node);
		myTree.addChildNode(a_node, b_node);
		myTree.addChildNode(a_node, d_node);
		myTree.addChildNode(b_node, e_node);
		myTree.addChildNode(b_node, f_node);
		myTree.addChildNode(d_node, g_node);
		myTree.addNext(b_node, c_node);
		System.out.println(myTree.toString());
		System.out.println(myTree.getChild(a_node, 1).getData().toString());
		System.out.println(myTree.isLeaf(a_node));
		System.out.println(myTree.isLeaf(g_node));

	}

	public String toString(){
		return toString(getRoot(), 0);
	}
	public String toString(LCRSTreeNode<Object> node, int depth){
		String result = "";
		for(int i=0; i <depth; i++){
			result += "  ";
		}
		result += node.getData().toString() + "\n";

		if(node.getLeftChild() != null ){
			result += toString(node.getLeftChild(), depth+1);
		}
		if(node.getRightSibling() != null){
			result += toString(node.getRightSibling(), depth);
		}
		return result;
	}

	@Override
	public LCRSTreeNode<Object> getRoot() {
		// TODO Auto-generated method stub
		return this.root;
	}


	@Override
	public int getDegree(LCRSTreeNode<Object> parent) {
		System.out.print(parent.getData().toString()+ "_getDegree : ");
		int cnt=1;
		LCRSTreeNode<Object> x = parent;
		LCRSTreeNode<Object> sibling = x.getRightSibling();
		while(sibling != null){
			cnt += 1;
			sibling = sibling.getRightSibling();
		}
		System.out.println(cnt);
		return cnt;
	}
	@Override
	public void addChildNode(LCRSTreeNode<Object> parent, LCRSTreeNode<Object> child) {
		LCRSTreeNode<Object> lastchild = parent.getLeftChild();
		if(lastchild == null){
			parent.setLeftChild(child);
		}else{
			while(lastchild.getRightSibling() != null){
				lastchild = lastchild.getRightSibling();
			}
			lastchild.setRightSibling(child);
		}
	}

	@Override
	public void addNext(LCRSTreeNode<Object> prev, LCRSTreeNode<Object> next) {
		LCRSTreeNode<Object> temp = prev.getRightSibling();
		next.setRightSibling(temp);
		prev.setRightSibling(next);
	}

	@Override
	public boolean isLeaf(LCRSTreeNode<Object> node) {
		return node.getLeftChild() == null;
	}

	@Override
	public LCRSTreeNode<Object> getChild(LCRSTreeNode<Object> parent, int index) {
		LCRSTreeNode<Object> node = parent.getLeftChild();
		for(int i = 0; i <index ; i++){
			node = node.getRightSibling();
		}
		return node;
	}

}
{% endhighlight %}
</div>
</div>
</div>


main 결과

<pre>
  A
  B
    E
    F
  C
  D
    G

C
false
true
</pre>
