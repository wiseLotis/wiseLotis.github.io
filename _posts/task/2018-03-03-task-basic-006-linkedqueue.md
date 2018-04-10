---
layout: post
title:  "BacktotheBasic - 큐(queue)"
subtitle: "LinkedList를 이용한 스택을 활용하여 계산기 만들어 보기"
slug: "task-basic-006-linkedqueue"
description: "큐에 대해서 알아보고 큐를 구현해 보자"
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
 ## 링크드 큐

 앞전에 순환큐에대해서 살펴 보았다. 순환큐는 편리하지만 삽입과 삭제가 불편하다. 그리고 이것저것 생각할게 많다.
C언어를 사용할경우 포인터때문에 정신이 없었을것이다.
링크드 큐는 프로그래머의 직관에 따라 설계와 구현이 가능하다.
또한 한계 용량의 제한이 없다.
삽입과 삭제도 편리하다.
그렇다고 순환큐보다 무조건 좋다고 할 수는 없다.
왜냐하면 링크드 큐는 추가 될 때 마다 노드를 새로 생성해주어야 한다는 문제가 있다. 그리고 링크드 큐의 경우 다음노드를 가리키기위한 추가 메모리 할당도 필요하다.
그래서 성능은 순환 큐가 우월하다.
 따라서 큐의 크기가 예측가능하고 좋은 성능을 요구한다면 순환 큐를 써야 한다.

 링크드 큐를 구현해 보았다.
 이전에 만들었던 링크드 리스트를 상속 받아 큐를 구현해 본다.

LinkedQueue.java
<a class="btn btn-code" data-toggle="collapse" href="#linkedqueue">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="linkedqueue">
<div class="card">
 {% highlight java %}
 package task.structure;

import task.structure.exception.IsEmptyException;

public class LinkedQueue extends LinkedList implements Queue{

	private LinkedList myList;
	public LinkedQueue() {
		 this.myList = new LinkedList();
	}

	public static void main(String[] args) {
		 LinkedQueue myqueue = new LinkedQueue();
			 	myqueue.add("1");
				myqueue.add("2");
				myqueue.add("3");
				System.out.println(myqueue.toString());
				System.out.println(myqueue.getSize());
				System.out.println(myqueue.peek().toString());
				System.out.println(myqueue.pop().toString());
				System.out.println(myqueue.pop().toString());
				System.out.println(myqueue.pop().toString());
				myqueue.add("1");
				myqueue.add("2");
				myqueue.add("3");
				myqueue.add("4");
				myqueue.add("5");
				myqueue.add("6");
				System.out.println(myqueue.toString());
				System.out.println(myqueue.pop().toString());
				System.out.println(myqueue.pop().toString());
				System.out.println(myqueue.pop().toString());
				System.out.println(myqueue.pop().toString());
				System.out.println(myqueue.pop().toString());
				System.out.println(myqueue.pop().toString());
				System.out.println(myqueue.pop().toString());
				System.out.println(myqueue.pop().toString());


	}
	@Override
	public Object peek() {
		// TODO Auto-generated method stub
		return this.myList.head.getData();
	}

	@Override
	public Object pop(){
		Node popNode = this.myList.head;
		try{
			this.myList.remove(0);
			return popNode.getData();
		}catch (IsEmptyException e) {
			return null;
		}
	}

	@Override
	public String add(Object obj) {
		 return this.myList.add(obj);
	}

	@Override
	public boolean isEmpty() {
		  return this.myList.size == 0;
	}

	@Override
	public int getSize() {
		return this.myList.size;
	}
	@Override
	public void clear() {
	}

	public String toString(){
		 return this.myList.toString();
	}

	public String remove(int index){
		return this.myList.remove(index);
	}
	public String remove(Object obj){
		return this.myList.remove(obj);
	}
}

 {% endhighlight %}
</div>
</div>
</div>
