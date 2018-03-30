---
layout: post
title:  "basic - 스택(stack)_3-LinkedList를 이용한 스택 활용"
subtitle: "LinkedList를 이용한 스택을 활용하여 계산기 만들어 보기"
slug: "task-basic-004-LinkedListStack2"
description: "폴리쉬표기법(후위표기법)을 사용하여 스택을 이용한 사칙연산 계산기 만들기"
categories: task
tags: [task, home]
comments: true
image: "/assets/posts_con/cover_task.jpg"
---

## 중위 표기법 과 후위 표기법
<pre>
1 2 33 / + 9 13 \*-
</pre>

아주 이상한 모양의 식이다. 이 식은 후위 표기법을 이용하여 표기한 식으로
중위 표기법으로 표기를 한다면 아래와 같다 .
<pre>
1+ 2/33 - 9*13
</pre>

규칙은 연산자를 피연산자 뒤에 위치 시키는 것이다. 이 헷깔리는 표기법은 스택에 넣는다고 생각하면 엄청 쉽게 느껴진다.
피연산자(숫자)는 순차적으로 스택에 넣고 연산자(+,-,\*,/)를 만나면 스택에서 피연산자를 꺼내서 계산한 후 결과를 다시 스택에 넣으면 된다.
주의 할점은 두번째 꺼내는게 앞에 연산자를 기준으로 왼쪽으로 간다.
2 33 / 이면 33/2 가 아니고 2/33 이 되는것이다.

여튼 구현하는게 무지하게 쉬울 줄 알았는데 중위 표기법을 후위 표기법으로 바꿀때 조금 시간이 걸렸다.

Anyway, 컴퓨터가 좋아하는 후위 표기법 계산기이다.

중위 표기법으로 입력을 받아서 후위 표기법으로 변경 후 계산을 하는 프로그램이다

이전 포스트에서 만들어 둔 자료 구조(링크드리스트, 스택)을 이용하여 구현하였다.

음.. 요주의 인물은 postfix() 메소드이다.
이놈이 나를 너무 헷깔리게 만들었다. 1의 자리만 계산할거가 아니니까..
그런데 컴퓨터가 좋아하는 계산식을 만든답시고 matches 를 쓰는게 좋은 방법일까~?
그냥 charAt을 써서 해도 됐을텐데..더 컴퓨터도 사람도 좋아하는 코드를 작성하려면 어떻게 해야 할지 고민 해봐야겠다.

Calculator.java
<a class="btn btn-code active" data-toggle="collapse" href="#calcul">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="calcul">
<div class="card">
 {% highlight java %}

 package task.structure.test;

import java.util.Scanner;

import task.structure.LinkedList;
import task.structure.LinkedListStack;

public class Calculator {

private LinkedListStack stack;
private LinkedList opList;
private String exp;

public Calculator() {
  this.stack = new LinkedListStack();
  this.opList = new LinkedList();
}
public Calculator(String exp) {
  this.stack= new LinkedListStack();
  this.opList = new LinkedList();
  this.exp = exp;
}

public void setExperession(String exp){
  this.exp = exp;
}

public String postfix(){
  String result = "";
  String[] expArr = this.exp.split("");//글자를 하나씩하나씩 쪼갬
  for(int i = 0; i < expArr.length; i++){
    String now = expArr[i];

    if(now.matches("[\\d|\\.]")){
       result +=now;

    }else if(now.matches("[\\+|\\-|\\*|/|\\(|\\{|\\)|\\}]")){
      result += " ";//연산자인 경우 숫자를 구분하기 위해 빈칸을 넣어준다.
      if(this.stack.empty()){
        this.stack.push(now);

      }else if(now.matches("[\\(|\\{]")){
        this.stack.push(now); // 일단 넣어준다.

      }else if(now.matches("[\\)|\\}]")){

        while(!this.stack.empty()){
           String top = this.stack.pop().toString(); // 여는 괄호가 나올때까지 pop 빼낸다.
           if("(".equals(top)){
             break;
           }
            result +=  top;
        }

      }else{
        String top = this.stack.peek().toString();
        while(!this.stack.empty() && getPriority(top)>=getPriority(now)){
          result +=this.stack.pop().toString(); //나보다 우선순위가 높은 연산자를 빼낸다.
          result +=" "; // 이걸 해줘야 함...
        }

        this.stack.push(now);
      }
    }
  }
  while(!this.stack.empty()){
    result += " " + stack.pop();
  }
  System.out.println(result);
  return result;
}

public Object getResult(){
  String[] postfixExp = postfix().split("\\s");
  for(int j= 0; j < postfixExp.length ;  j++){
    String now = postfixExp[j];
    if(now.matches("[\\d|\\.]+")){
       //System.out.println("push- " + now);
       this.stack.push(now);

    }else if(now.matches("[+|\\-|*|/]")){
      Integer num2 =  Integer.parseInt(this.stack.pop().toString());
      //System.out.println("pop-" + num2);
      Integer num1 = Integer.parseInt(this.stack.pop().toString());
      //System.out.println("pop-" + num1);
      Integer result = (Integer) calculation(num1, num2, now);
      this.stack.push(result.toString());
      //System.out.println("push-" + result);
    }
  }
  return this.stack.pop().toString();
}

public Object calculation(Integer num1,Integer num2,String op){
  if("+".equals(op)){
    return  num1 + num2;
  }else if("-".equals(op)){
    return num1 - num2;
  }else if("*".equals(op)){
    return num1 * num2;
  }else if("/".equals(op)){
    return num1 / num2;
  }

  return null;
}

public int getPriority(String str){
  System.out.println("getPriority");
  int priority = 0;
  switch(str){
  case "+":
  case "-":
    priority = 1;
    break;
  case "*":
  case "/":
    priority = 2;
    break;
  }
  return priority;
}

public static void main(String[] args) {
  Scanner sc = new Scanner(System.in);
  System.out.println("수식을 입력해 주세요");
  String exp = sc.next();
  Calculator cir = new Calculator(exp);
  System.out.println(cir.getResult());

}
}
 {% endhighlight %}
 			</div>
 		</div>
 	</div>
