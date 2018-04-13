---
layout: post
title:  "BacktotheBasic - 이진트리(Binary Tree)"
subtitle: "자료구조-이진트리"
slug: "task-basic-008-binarytree"
description: "이진트리에 대해서 알아보고 이진트리를 구현해보자"
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
 ## 이진트리(Binary Tree)

 모든 노드가 최대 2개의 자식을 가질 수 있는 트리로 수식계산이나 검색에 사용됨.
- 수식이진트리(Expression Binary Tree) :  수식을 트리 형태로 표현하여 계산
- 이진 탐색트리(Binary Search Tree) : 빠른 데이터 검색을 가능하게 함.

이진트리는 컴파일러나 검색등에 사용되는 특수 자료 구조로 높은 성능을 위해서는 트리의 노드들을 가능한 완전한 모습으로 배치해야함.

### 이진 트리의 형태

- 포화 이진트리(Full Binary Tree): 모든 노드가 2개의 CHILD를 가짐(DEGREE = 2),  모든 잎노드가 같은 깊이에 존재함.
![포화 이진트리](/assets/posts_con/tree/full_binary_tree.jpg)
- 완전 이진트리(Complete Binary Tree): 포화 이진트리 전단계 트리고, 잎 노드들이 트리의 왼쪽 부터 차곡차곡 채워져있음.
![완전이진트리](/assets/posts_con/tree/complete_binary_tree.jpg)
- 높이 균형트리(Height Balanced Tree): 루트 노드를 기준으로 왼쪽하위 트리와 오른쪽 하위 트리의 높이가 1이상 차이 나지 않는 트리
- 완전 높이 균형트리(Completely Height Balanced Tree) : 루트 노드를 기준으로 왼쪽 하위 트리와 오른쪽 하위 트리의 높이가 같은 트리

### 이진트리의 순회
![포화 이진트리](/assets/posts_con/tree/full_binary_tree.jpg)
-  전위 순회 : 루트 노드에서 잎노드 까지 아래 방향으로 순회 A>B>C>D>E>F>G
   중첩된 괄호로 표현할 수 있음! (A (B(C,D)),(E (F,G)))
- 중위 순회 : 왼쪽 하위 트리 부터 시작해서 루트를 거쳐 오른쪽 하위 트리 방향으로 순회 C>B>D>A>F>E>G
  수식 트리에 이용된다.
- 후위 순회: 전위순회의 반대로! 아래에서 위로 C>D>B>F>G>E>A


  수식 표현 트리를 중위 순회화 후위 순회 방법으로 읽어보자 재미난 결과가 나옴
  ![포화 이진트리](/assets/posts_con/tree/traversal.jpg)

후위 순회 방법으로 이진 트리를 읽으면 이전에 열심히 만들었던 후위 표기법이 나타난다.

이진트리의 구현


BinaryTree.java
<a class="btn btn-code" data-toggle="collapse" href="#btree">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="btree">
<div class="card">
{% highlight java %}
package task.structure;
class BTreeNode<T>{
	private T data;
	private BTreeNode<T> left;
	public BTreeNode(T data){
		this.data = data;
		this.left = null;
		this.right = null;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public BTreeNode<T> getLeft() {
		return left;
	}

	public void setLeft(BTreeNode<T> left) {
		this.left = left;
	}

	public BTreeNode<T> getRight() {
		return right;
	}

	public void setRight(BTreeNode<T> right) {
		this.right = right;
	}

	private BTreeNode<T> right;


}

public class BinaryTree implements Tree<BTreeNode<Object>>{
	private BTreeNode<Object> root;
	public BinaryTree() {
		this.root = null;
	}
	public BinaryTree(BTreeNode<Object> input){
		this.root = input;
	}


	public static void main(String[] args) {
		BTreeNode<Object> a_node = new BTreeNode<Object>("+");
		BTreeNode<Object> b_node  = new BTreeNode<Object>("*");
		BTreeNode<Object> c_node  = new BTreeNode<Object>("1");
		BTreeNode<Object> d_node  = new BTreeNode<Object>("2");
		BTreeNode<Object> e_node  = new BTreeNode<Object>("-");
		BTreeNode<Object> f_node  = new BTreeNode<Object>("8");
		BTreeNode<Object> g_node  = new BTreeNode<Object>("7");
		BinaryTree myTree = new BinaryTree(a_node);
		try {
			myTree.addChildNode(a_node, b_node);
			myTree.addChildNode(a_node, e_node);
			myTree.addChildNode(b_node, c_node);
			myTree.addChildNode(b_node, d_node);
			myTree.addChildNode(e_node, f_node);
			myTree.addChildNode(e_node, g_node);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.out.println(myTree.toString("preorder"));
		System.out.println(myTree.toString("inorder"));
		System.out.println(myTree.toString("postorder"));
		//System.out.println(myTree.isLeaf(a_node));
		//System.out.println(myTree.isLeaf(g_node));
	}

	public String toString(String options){
		if("postorder".equals(options)){
			return toStringPostorder(getRoot());
		}else if("inorder".equals(options)){
			return toStringInorder(getRoot());
		}else{
			return toStringPreorder(getRoot());
		}
	}

	public String toStringPreorder(BTreeNode<Object> node ){
		String result = "";
		if(node == null){
			return "";
		}
		result +=  node.getData().toString() + "  ";
		result += toStringPreorder(node.getLeft());
		result += toStringPreorder(node.getRight());
		return result;
	}

	public String toStringInorder(BTreeNode<Object> node ){
		String result = "";
		if(node == null){
			return "";
		}
		result += toStringInorder(node.getLeft());
		result += node.getData().toString()+ "  ";
		result += toStringInorder(node.getRight());

		return result;
	}
	public String toStringPostorder(BTreeNode<Object> node ){
		String result = "";
		if(node == null){
			return "";
		}
		result += toStringPostorder(node.getLeft());
		result += toStringPostorder(node.getRight());

		result +=  node.getData().toString() + "  ";

		return result;
	}
	@Override
	public BTreeNode<Object> getRoot() {
		// TODO Auto-generated method stub
		return this.root;
	}

	@Override
	public int getDegree(BTreeNode<Object> parent) {
		int cnt = 0;
		if(parent.getLeft() != null){
			cnt +=1;
		}

		if(parent.getRight() != null ){
			cnt +=1;
		}
		return cnt;
	}

	public void addChildNode(BTreeNode<Object> parent, BTreeNode<Object> child) throws Exception {
		if(parent.getLeft() == null){
			parent.setLeft(child);
			return;
		}

		if(parent.getRight() == null){
			parent.setRight(child);
			return;
		}

		throw new Exception("더이상 이노드에 자식노드를 추가할 수 없습니다. degree 2 이상입니다.");

	}

	@Override
	public boolean isLeaf(BTreeNode<Object> node) {

		return (node.getLeft() == null) && (node.getRight() == null);
	}

	@Override
	public BTreeNode<Object> getChild(BTreeNode<Object> parent, int index) {
		if(index == 0){
			return parent.getLeft();
		}else{
			return parent.getRight();
		}
	}
}
package task.structure;
class BTreeNode<T>{
	private T data;
	private BTreeNode<T> left;
	public BTreeNode(T data){
		this.data = data;
		this.left = null;
		this.right = null;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public BTreeNode<T> getLeft() {
		return left;
	}

	public void setLeft(BTreeNode<T> left) {
		this.left = left;
	}

	public BTreeNode<T> getRight() {
		return right;
	}

	public void setRight(BTreeNode<T> right) {
		this.right = right;
	}

	private BTreeNode<T> right;


}

public class BinaryTree implements Tree<BTreeNode<Object>>{
	private BTreeNode<Object> root;
	public BinaryTree() {
		this.root = null;
	}
	public BinaryTree(BTreeNode<Object> input){
		this.root = input;
	}


	public static void main(String[] args) {
		BTreeNode<Object> a_node = new BTreeNode<Object>("+");
		BTreeNode<Object> b_node  = new BTreeNode<Object>("*");
		BTreeNode<Object> c_node  = new BTreeNode<Object>("1");
		BTreeNode<Object> d_node  = new BTreeNode<Object>("2");
		BTreeNode<Object> e_node  = new BTreeNode<Object>("-");
		BTreeNode<Object> f_node  = new BTreeNode<Object>("8");
		BTreeNode<Object> g_node  = new BTreeNode<Object>("7");
		BinaryTree myTree = new BinaryTree(a_node);
		try {
			myTree.addChildNode(a_node, b_node);
			myTree.addChildNode(a_node, e_node);
			myTree.addChildNode(b_node, c_node);
			myTree.addChildNode(b_node, d_node);
			myTree.addChildNode(e_node, f_node);
			myTree.addChildNode(e_node, g_node);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.out.println(myTree.toString("preorder"));
		System.out.println(myTree.toString("inorder"));
		System.out.println(myTree.toString("postorder"));
		//System.out.println(myTree.isLeaf(a_node));
		//System.out.println(myTree.isLeaf(g_node));
	}

	public String toString(String options){
		if("postorder".equals(options)){
			return toStringPostorder(getRoot());
		}else if("inorder".equals(options)){
			return toStringInorder(getRoot());
		}else{
			return toStringPreorder(getRoot());
		}
	}

	public String toStringPreorder(BTreeNode<Object> node ){
		String result = "";
		if(node == null){
			return "";
		}
		result +=  node.getData().toString() + "  ";
		result += toStringPreorder(node.getLeft());
		result += toStringPreorder(node.getRight());
		return result;
	}

	public String toStringInorder(BTreeNode<Object> node ){
		String result = "";
		if(node == null){
			return "";
		}
		result += toStringInorder(node.getLeft());
		result += node.getData().toString()+ "  ";
		result += toStringInorder(node.getRight());

		return result;
	}
	public String toStringPostorder(BTreeNode<Object> node ){
		String result = "";
		if(node == null){
			return "";
		}
		result += toStringPostorder(node.getLeft());
		result += toStringPostorder(node.getRight());

		result +=  node.getData().toString() + "  ";

		return result;
	}
	@Override
	public BTreeNode<Object> getRoot() {
		// TODO Auto-generated method stub
		return this.root;
	}

	@Override
	public int getDegree(BTreeNode<Object> parent) {
		int cnt = 0;
		if(parent.getLeft() != null){
			cnt +=1;
		}

		if(parent.getRight() != null ){
			cnt +=1;
		}
		return cnt;
	}

	public void addChildNode(BTreeNode<Object> parent, BTreeNode<Object> child) throws Exception {
		if(parent.getLeft() == null){
			parent.setLeft(child);
			return;
		}

		if(parent.getRight() == null){
			parent.setRight(child);
			return;
		}

		throw new Exception("더이상 이노드에 자식노드를 추가할 수 없습니다. degree 2 이상입니다.");

	}

	@Override
	public boolean isLeaf(BTreeNode<Object> node) {

		return (node.getLeft() == null) && (node.getRight() == null);
	}

	@Override
	public BTreeNode<Object> getChild(BTreeNode<Object> parent, int index) {
		if(index == 0){
			return parent.getLeft();
		}else{
			return parent.getRight();
		}
	}
}

{% endhighlight %}
</div>
</div>
</div>


그럼 연산식을 입력받아서, 후위 표기식으로 바꾸고, 후위 표기식을 트리로 정렬해 보자
