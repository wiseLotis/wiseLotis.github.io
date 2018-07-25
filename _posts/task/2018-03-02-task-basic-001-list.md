---
layout: post
title:  "BacktotheBasic - 리스트(list)"
subtitle: ""
slug: "task-basic-001-list"
description: " "
categories: task
tags: [task]
comments: true
image: "/assets/posts_con/cover_task.jpg"
google: true
sitemap :
 changefreq: daily
 priority: 1.0
feed : true
---

1. 배열과 리스트의 차이점

 배열은 선언 시 크기를 지정해야 하며, 지정한 크기를 바꿀 수 없다.
 배열을 너무 작게 선언하면 일을 할 수가 없고 크게 선언하게 되면 메모리 낭비가 생긴다.
또한 특정 데이터 삽입/삭제시 shift연산이 평균 데이터의 수/2 만큼 일어난다.

![image](/assets/posts_con/linkedlist/array.png)

리스트와 배열의 가장 큰 차이점은 유연하게 크기를 바꿀 수 있다는 점이다.

크기를 지정할 필요가 없이 유연하게 크기를 바꿀 수 있으며, 삽입 삭제 연산이 편리한 반면 다음 노드나 이전 노드를 기록하기 위한 추가적인 메모리가 필요하다는 단점이 있다.  

리스트의 종류는 크게 두가지로 나눌 수 있는데  ArrayList는 배열을 기반으로 구현한 리스트이고 LinkedList는 메모리 동적 할당을 기반으로 구현한 리스트이다.

또 링크드 리스트는 네가지로 나눌 수 있다.  

- LinkedList(링크드리스트)
- DoubleLinkedList(더블링크드리스트)
- CircularLinkedList(환형 링크드리스트)
- CircularDoublyLinkedList(환형 더블링크드리스트)

![image](/assets/posts_con/linkedlist/type_linked_list.png)

LinkedList를 구현해 보았다.
LinkedList 구현에 앞서서 인터페이스를 하나 만들었다.

<a class='btn btn-code' data-toggle="collapse" href="#basic">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="basic">
	<div class="card">
{% highlight java %}
package task.structure;

public interface List {
	public String add(Object input);
	public String add(int index, Object input);
	public Object get(int index);
	public int getSize();
	public int indexOf(Object input);
	public String remove(int index);
	public String remove(Object data);
	public String toString();

}
{% endhighlight %}
</div>
</div>
</div>

가장 먼저 링크드 리스트를 구현해 보았다.
링크드 리스트는 리스트라는 인터페이스를 구현 한다.  
리스트는 head와 tail 노드를 가지고 있고, 배열과 다르게 리스트의 경우 노드의 수를 알아 내기 위해서는 n개의 노드라면 n개의 루프를 수행해야 n을 알아 낼 수 있기 때문에(next->next->next) 이를 해결 하기 위해서 size 라는 정수형 변수를 선언해주었다.

{% highlight java %}


public class LinkedList implements List{

	public Node head,tail;
	public int size = 0;

	public LinkedList() {

	}
}

{% endhighlight %}

클래스명에 마우스를 놓아 두고 F2 번을 누른 후 Add unimpolemented methods 를 누르면 사용하면 구현해야 하는 메소드를 자동으로 생성해 준다. (모르는 사람들을 위해서...  )

![image](/assets/posts_con/linkedlist/list_001.png)

소스 설명은.. 나중에..  

추가 및 삽입

![image](/assets/posts_con/linkedlist/linkedlist_add.png)

삭제

![image](/assets/posts_con/linkedlist/linkedlist_delete.png)



LinkedList.java
<a class='btn btn-code' data-toggle="collapse" href="#linkedList">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="linkedList">
	<div class="card">
		{% highlight java %}

package task.structure;


public class LinkedList implements List{

	public Node head,tail;
	public int size = 0;

	public LinkedList() {

	}


	public class Node {

		private Object data;
		private Node nextnode;

		public Node(Object data) {
			this.data = data;
			this.nextnode = null;
		}
		public Node getNextnode() {
			return this.nextnode;
		}

		public void setNextnode(Node nextnode) {
			this.nextnode = nextnode;
		}

		public Object getData() {
			return this.data;
		}

		public String toString(){
			return String.valueOf(this.data);
		}
	}

	public class ListIterator {
		private Node next;
		private Node lastReturn;
		private int nextIndex;

		public ListIterator() {
			this.next = head;
			this.nextIndex = 0;
		}

		public Object next(){
			this.lastReturn = this.next;
			this.next = this.next.getNextnode();
			nextIndex ++;
			return lastReturn.getData();
		}

		public Boolean hasNext(){
			return nextIndex < getSize();
		}

	}
	public ListIterator listIterator(){
		return new ListIterator();
	}
	@Override
	public String add(Object input){
		 return add(size,input);
	}

	@Override
	public String add(int index, Object input){
		Node newnode = new Node(input);  
		newnode.setNextnode(null);
		if(index == 0){
			newnode.setNextnode(head);
			head =newnode;
			if(head.getNextnode() == null){
				tail = head;
			}
		}else{
			Node prev = (Node) get(index-1);
			if(prev.getNextnode() == null){
				//append
				tail.setNextnode(newnode);
				tail = newnode;
			}else{
				//insert
				newnode.setNextnode(prev.getNextnode());
				prev.setNextnode(newnode);
			}
		}
		size++;
		return toString();
 	}


	@Override
	public Object get(int index){
		try {
			Node x= head;
			for(int i = 0; i < index ; i++){
				x = x.getNextnode();
			}
			return x;
		} catch (Exception e) {
			throw e;
		}
	}



	@Override
	public int getSize(){
		return size;
	}

	@Override
	public int indexOf(Object input){
		Node x = head;
		for(int i = 0 ; i < size ; i++){
			if(x.getData() == input){
				return i;  
			}else{
				x = x.getNextnode();
			}
		}
		return -1;
	}

	@Override
	public String remove(int index){
		if(index == -1){
			return "! no data to delete";  
		}
		if(index == 0){
			head = head.getNextnode();
		}else{
      Node prev = (Node) get(index-1);
			Node del = (Node) get(index);
			prev.setNextnode(del.getNextnode());  

			if(del.equals(tail)){
				tail = prev;
			}
		}
		size--;
		return toString();
	}

	@Override
	public String remove(Object input){
		int index = indexOf(input);
		return remove(index);
	}

	@Override
	public String toString(){
		if(size == 0){
			return "[]";
		}
		String str= "[";
		Node x = head;
		for(int i = 1; i<size ; i++){
			str += x.getData().toString()+",";
			x = x.getNextnode();
		}
		str += x.getData();
		return str+="]";
	}

	public String setToString(String str){

		String[] strarr = str.split(",");
		for(int i = 0; i < strarr.length; i++){
			add(strarr[i]);
				}

		return toString();

	}

	public static void main(String[] args) {
		LinkedList newlist = new LinkedList();
		System.out.println(newlist.add("1st"));
		System.out.println(newlist.add("2nd"));
		System.out.println(newlist.getSize());		
		System.out.println(newlist.add(0,"-1"));
		System.out.println(newlist.indexOf("1st"));
		System.out.println(newlist.indexOf("hello"));
		System.out.println(newlist.remove(1));
		System.out.println(newlist.remove(0));
		System.out.println(newlist.add("3rd"));
		System.out.println(newlist.add("4th"));
		System.out.println(newlist.get(2).toString());

		LinkedList newlist2 = new LinkedList();
		System.out.println(newlist2.setToString("1,2,3,4,5,6")		);

		System.out.println(newlist2.remove("8")		);

		LinkedList.ListIterator itr = newlist.listIterator();  
		while(itr.hasNext()){
			System.out.println(itr.next().toString());
		}
	}


}
{% endhighlight %}

</div>
</div>
</div>

<!-- <a class='btn btn-code' data-toggle="collapse" href="#basic">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="basic">
	<div class="card">
{% highlight java %}
{% endhighlight %}
</div>
</div>
</div> -->

DoublelinkedList.java
<a class='btn btn-code' data-toggle="collapse" href="#DoubleLinkedList">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="DoubleLinkedList">
	<div class="card">
{% highlight java %}
package task.structure;

public class DoubleLinkedList extends LinkedList implements List{

	public DoubleLinkedList() {
		// TODO Auto-generated constructor stub
	}

	class doubleNode extends Node{

		private doubleNode prevnode;

		public doubleNode(Object data) {
			super(data);
		}

		public doubleNode getPrevnode() {
			return prevnode;
		}

		public void setPrevnode(doubleNode prevnode) {
			this.prevnode = prevnode;
		}

	}

	@Override
	public Object get(int index){
		try {
			if(size/2 < index){
				doubleNode x = (doubleNode) tail;
				for(int i = size-1; i > index; i--){
					x = x.getPrevnode();
				}
				return x;
			}else{
				Node x= head;
				for(int i = 0; i < index ; i++){
					x = x.getNextnode();
				}
				return x;
			}
		} catch (Exception e) {
			throw e;
		}
	}

	public String add(int index, Object input){
		doubleNode newnode = new doubleNode(input);
		newnode.setPrevnode(null);
		newnode.setNextnode(null);
		if(index == 0 ){
			newnode.setNextnode(head);
			head = newnode;
			if(head.getNextnode() == null){
				tail = head;
			}
		}else{
			doubleNode prev = (doubleNode) get(index-1);
			if(prev.getNextnode() == null){
				prev.setNextnode(newnode);
				newnode.setPrevnode(prev);
			}else{
				doubleNode next = (doubleNode) prev.getNextnode();
				newnode.setNextnode(next);
				newnode.setPrevnode(prev);
				prev.setNextnode(newnode);
				next.setPrevnode(newnode);
			}
		}
		size++;
		return toString();

	}


	public String remove(int index){

		doubleNode node = (doubleNode) get(index);

		if(index == -1){
			return "no data to delete " ;
		}

		if(index == 0){
			// head를 삭제
			 doubleNode tobe = (doubleNode) head.getNextnode();
			 tobe.setPrevnode(null);
			 head = tobe;
		}else if(node.getNextnode() == null){
      doubleNode prev = (doubleNode) node.getPrevnode();
  			prev.setNextnode(null);
  			tail = prev;
		}else{
			doubleNode prev = (doubleNode) node.getPrevnode();
			doubleNode next = (doubleNode) node.getNextnode();
			prev.setNextnode(next);
			next.setPrevnode(prev);
		}
		size--;
		return toString();
	}

	public static void main(String[] args) {
		DoubleLinkedList newlist = new DoubleLinkedList();
		System.out.println(newlist.add("1st"));
		System.out.println(newlist.add("2nd"));
		System.out.println(newlist.add("3rd"));
		System.out.println("size: " + newlist.getSize());
		System.out.println("index1: "+newlist.get(1));

		System.out.println("iterator ");
		LinkedList.ListIterator itr = newlist.listIterator();
		while(itr.hasNext()){
			System.out.println(itr.next().toString());
		}

		System.out.println("remove index1:    "+ newlist.remove(1));
		System.out.println("add 2nd index1 ...");
		System.out.println(newlist.add(1,"2nd"));
		System.out.println("set to string ... 1,2,3,4,5,6");
		DoubleLinkedList newlist2 = new DoubleLinkedList();
		System.out.println(newlist2.setToString("1,2,3,4,5,6"));
		System.out.println("index3 : " + newlist2.get(3).toString());
		System.out.println("insert 0 to index0 : " +  newlist2.add(0,"0"));
		System.out.println("remove data 7 :"+  newlist2.remove("7"));
		System.out.println(newlist2.toString());

	}

}

{% endhighlight %}
</div>
</div>
</div>

CircularLinkedList.java
<a class='btn btn-code' data-toggle="collapse" href="#CircularLinkedList">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="CircularLinkedList">
	<div class="card">
{% highlight java %}
package task.structure;


public class CircularLinkedList extends LinkedList implements List{

	public CircularLinkedList() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String add(int index, Object input){
		if(index == 0){
			Node newNode = new Node(input);
			newNode.setNextnode(head);
			head = newNode;  
			if(head.getNextnode() == null){
				tail = head;
			}
			if(tail.getNextnode() == null){
				tail.setNextnode(head);
			}
		}else{
			Node newnode = new Node(input);
			Node prev = (Node) get(index-1);
			if(prev.getNextnode() == null){
				//append
				newnode.setNextnode(null);
				tail.setNextnode(newnode);
				tail = newnode;
			}else{
				//insert
				newnode.setNextnode(prev.getNextnode());
				prev.setNextnode(newnode);
			}
		}
		size++;
		return toString();
	}


	@Override
	public Object get(int index){
		try {
			Node x= head;
			for(int i = 0; i < index ; i++){
				x = x.getNextnode();
			}
			return x;
		} catch (Exception e) {
			throw e;
		}
	}


	public static void main(String[] args) {
		CircularLinkedList newlist = new CircularLinkedList();
		newlist.add("1st");
		System.out.println(newlist.toString());
		newlist.add("2nd");
		newlist.add("3st");
		System.out.println(newlist.toString());
		System.out.println(newlist.getSize());
		System.out.println(newlist.get(1));

		LinkedList.ListIterator itr = newlist.listIterator();
		while(itr.hasNext()){
			System.out.println(itr.next().toString());
		}

		System.out.println(newlist.remove(2));

		CircularLinkedList newlist2 = new CircularLinkedList();
		System.out.println(newlist2.setToString("1,2,3,4,5,6"));
		System.out.println("index3 = " + newlist2.get(3).toString());
		System.out.println("newlist2 size: " +  newlist2.getSize());
		newlist2.remove(0);
		System.out.println("newlist2 size: " +  newlist2.getSize());
		System.out.println(newlist2.remove("7"));
		System.out.println(newlist.toString());

	}

}

{% endhighlight %}
</div>
</div>
</div>


CircularDoubleLinkedList.java
<a class='btn btn-code' data-toggle="collapse" href="#CircularDoublyLinkedList">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="CircularDoublyLinkedList">
	<div class="card">
{% highlight java %}
package task.structure;

public class CircularDoubleLinkedList extends DoubleLinkedList implements List{

	public CircularDoubleLinkedList() {
		// TODO Auto-generated constructor stub
	}


	public String add(int index, Object input){
		doubleNode newnode = new doubleNode(input);
		newnode.setPrevnode(null);
		newnode.setNextnode(null);

		if(index == 0){
			newnode.setNextnode(head);
			head = newnode;  
			if(head.getNextnode() == null){
				tail = head;
			}
			if(tail.getNextnode() == null){
				tail.setNextnode(head);
			}
		}else{
			doubleNode prev = (doubleNode) get(index-1);
			if(prev.getNextnode() == head){
				//append
				tail.setNextnode(newnode);
				newnode.setPrevnode((doubleNode)tail);
				newnode.setNextnode(head); // 추가됨.
				tail = newnode;

			}else{
				//insert
				doubleNode next = (doubleNode) prev.getNextnode();
				newnode.setNextnode(next);
				newnode.setPrevnode(prev);
				prev.setNextnode(newnode);
				next.setPrevnode(newnode);
			}
		}
		size++;
		return toString();
	}

	public String remove(int index){

		doubleNode node = (doubleNode) get(index);

		if(index == -1){
			return "no data to delete " ;
		}

		if(index == 0){
			// head를 삭제
			 doubleNode tobe = (doubleNode) head.getNextnode();
			 tobe.setPrevnode((doubleNode) tail);
			 head = tobe;
		}else if(node.getNextnode() == head){
			//tail 삭제
			doubleNode prev = (doubleNode) node.getPrevnode();
			prev.setNextnode(head);
			tail = prev;
		}else{
			doubleNode prev = (doubleNode) node.getPrevnode();
			doubleNode next = (doubleNode) node.getNextnode();
			prev.setNextnode(next);
			next.setPrevnode(prev);
		}

		size--;
		return toString();
	}


	public static void main(String[] args) {
		System.out.println("CircularDoubleLinkedList");
		CircularDoubleLinkedList newlist = new CircularDoubleLinkedList();
		System.out.println(newlist.add("1st"));
		System.out.println(newlist.add("2nd"));
		System.out.println(newlist.add("3rd"));
		System.out.println("size: " + newlist.getSize());
		System.out.println("index1: "+newlist.get(1));

		System.out.println("iterator ");
		LinkedList.ListIterator itr = newlist.listIterator();
		while(itr.hasNext()){
			System.out.println(itr.next().toString());
		}

		System.out.println("remove index1:    "+ newlist.remove(1));
		System.out.println("add 2nd index1 ...");
		System.out.println(newlist.add(1,"2nd"));
		System.out.println("set to string ... 1,2,3,4,5,6");
		CircularDoubleLinkedList newlist2 = new CircularDoubleLinkedList();
		System.out.println(newlist2.setToString("1,2,3,4,5,6"));
		System.out.println("index3 : " + newlist2.get(3).toString());
		System.out.println("insert 0 to index0 : " +  newlist2.add(0,"0"));
		System.out.println("remove data 7 :"+  newlist2.remove("7"));
		System.out.println(newlist2.toString());

	}

}

{% endhighlight %}
</div>
</div>
</div>
