---
layout: post
title:  "BacktotheBasic - 스택(stack)_2-LinkedList를 이용한 스택구현"
subtitle: "LinkedList를 이용한 스택구현"
slug: "task-basic-003-LinkedListStack"
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

##*LinkedListStack*

LinkedList를 이용한 Stack을 구현해 보자.

LinkedList를 이용한 stack구현은 [#Post# basic - 리스트(list)](/task/2018/03/03/task-basic-001-list.html)
에서 만들어 둔 LinkedList를 사용하였다.
빈스택에 대한 예외 처리와 스택에 존재하지 않는 데이터에대한 예외처리를 추가해서 수정해 보았다.
먼저 task.structure.exception에 RuntimeException을 상속 받는 NotFoundException과 IsEmptyException을 만들어 주었다.

{% highlight java%}
package task.structure.exception;

public class IsEmptyException extends RuntimeException{

	private static final long serialVersionUID = 4375849368517949982L;

	public IsEmptyException() {
		super();
	}
	public IsEmptyException(String message){
		super(message);
	}
}
{% endhighlight %}

 NotFoundException도 동일하게 만들어준다.

remove() 메소드를 수정 해준다.
remove(Object input)메소드는 object로 매개변수가 들어오기 때문에 indexOf를 거치게 되는데 이때 리스트에 데이터가 존재하지 않으면 -1을 리턴받는다.
그래서 index가 -1인 경우 NotFoundException을 던진다.
remove(int index)의 경우 -1인경우 IsEmptyException을 던지도록 하였다.
호출할때 list.size -1 로 호출 할꺼니까.. 빈 스택의 경우 리스트의 size 가 0 이고 매개변수는 -1이 된다.

{% highlight java%}

@Override
public String remove(int index){
  if(index == -1){
    throw new IsEmptyException();
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
  if(index == -1){
    throw new NotFoundException();
  }else{
    return remove(index);
  }
}

{% endhighlight %}

### 스택의 생성

{% highlight java %}
public class LinkedListStack extends LinkedList implements Stack{

 private LinkedList myList;
 private Node top;

 public LinkedListStack() {
   this.myList = new LinkedList();
   this.top = this.myList.tail;
 }
}
{% endhighlight %}
링크드 리스트를 생성할때는 용량을 결정 짓는 매개변수를 필요로 하지 않는다. 즉, 용량에 제한이 없다.

생성된 링크드 리스트 스택은 하나의 링크드 리스트형 변수와 top이라는 Node형 변수를 갖는다.

top노드는 가장 상위 노드를 가리키고 링크드 리스트의 tail을 바라본다.

내가 지금읽고 있는 책은 자료구조를 C로 구현한거라 tail을 가리키는 포인터인 top이 필요하긴 한데,

java에서는 굳이 top변수가 필요한가에 대한 의문이 생겼지만, 일단은 자료 구조를 이해하기 위해서는 명시적으로 지정해 주는거니까
만들어 두었다.

### push()와 pop() 그리고 peek()

{% highlight java %}
@Override
public void push(Object input) {
  this.myList.add(input);
  this.top = this.myList.tail;
}

@Override
public Object pop() {
  Node popNode = this.top;
  try{
    this.myList.remove((this.myList.size -1));
    this.top = this.myList.tail;
    return popNode.getData();
  }catch (IsEmptyException e) {
    return null;
  }
}

@Override
public Object peek() {
  return this.top;
}
{% endhighlight%}

top변수를 만들어 줘서인지 명시적으로 딱~!!!! 하고 보인다. top변수를 만들어 주는게 더 좋은 선택일까나..

여튼  주의 할점은 스택에서 객체를 꺼내거나 넣고 난 뒤에는 반드시~ top에 tail을 다시 넣어 줘야 한다는 점이다.

빈리스트일경우에는 null을 반환하도록 예외처리를 해주었다.

peek 메소드에서는 remove를 하지 않고 그냥 top에 있는 node를 보여주기만 하면 된다.


LinkedListStack.java<a class="btn btn-code" data-toggle="collapse" href="#linked-list-stack">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="linked-list-stack">
<div class="card">
 {% highlight java %}
 package task.structure;

import task.structure.exception.IsEmptyException;

public class LinkedListStack extends LinkedList implements Stack{

	private LinkedList myList;
	private Node top;

	public LinkedListStack() {
		this.myList = new LinkedList();
		this.top = this.myList.tail;
	}

	@Override
	public Object pop() {

		Node popNode = this.top;
		try{
			this.myList.remove((this.myList.size -1));
			this.top = this.myList.tail;
			return popNode.getData();
		}catch (IsEmptyException e) {
			return null;
		}

	}

	@Override
	public Object peek() {
		return this.top;
	}

	@Override
	public boolean empty() {
		if(this.myList.size > 0){
			return false;
		}else{
			return true;
		}
	}

	@Override
	public int search(Object input) {
		return this.myList.indexOf(input);
	}

	@Override
	public void push(Object input) {
		this.myList.add(input);
		this.top = this.myList.tail;
	}

	public String toString(){
		return this.myList.toString();
	}

	public static void main(String[] args) {
		LinkedListStack myLinkedstack = new LinkedListStack();
		myLinkedstack.push("1");
		System.out.println(myLinkedstack.toString()); //[1]
		myLinkedstack.push("2");
		myLinkedstack.push("3");
		myLinkedstack.push("4");
		System.out.println(myLinkedstack.toString()); //[1,2,3,4]
		myLinkedstack.push("5");
		System.out.println( "search 3 : " + myLinkedstack.search("3") ); //search 3 : 2
		System.out.println(myLinkedstack.pop());//5
		System.out.println(myLinkedstack.pop());//4
		System.out.println(myLinkedstack.pop());//3
		System.out.println(myLinkedstack.toString());//[1,2]
		System.out.println(myLinkedstack.peek().toString()); //2
		System.out.println(myLinkedstack.toString());//[1,2]
		System.out.println(myLinkedstack.pop());//2
		System.out.println(myLinkedstack.pop());//1
		System.out.println(myLinkedstack.toString());//[]
		System.out.println(myLinkedstack.pop());//null
		System.out.println(myLinkedstack.toString());//[]

	}
}
 {% endhighlight %}
 			</div>
 		</div>
 	</div>

  ###스택의 사용
