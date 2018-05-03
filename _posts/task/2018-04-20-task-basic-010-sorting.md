---
layout: post
title:  "BacktotheBasic - 소팅(버블정렬/삽입정렬)"
subtitle: "자료구조-이진트리"
slug: "task-basic-001-sorting "
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
 ## 버블정렬

 왜 버블정렬이라고 하는걸까?
 알고리즘이 데이터를 저열하는 과정이 마치 물속에서 일어난 거품이 수면으로 올라오는 모습과 같다는 의미로 버블 정렬(BubbleSort) 라고 한다.
 데이터가 순회를 하면서 이웃 요소끼리의 교환을 통해 정렬을 수행함.


<a class="btn btn-code" data-toggle="collapse" href="#bubble">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="bubble">
<div class="card">
{% highlight java %}
package task.structure;
public class Sort {
 	public Sort() {

	}
	public static void main(String[] args) {
		int[] dataarr= {6,4,2,1,5,3};
		dataarr = BubbleSort(dataarr);

		for(int i = 0; i <dataarr.length ; i++){
			System.out.print(dataarr[i]);
		}
		System.out.println();
	}

	public static int[] BubbleSort(int[] arr){
		int cnt = 0;
		int len = arr.length;
		for(int i = 0; i <len ; i++){
			for(int j=0; j < len - (i+1); j++){
				cnt +=1;
				if(arr[j] > arr[j+1]){
					int temp = arr[j+1];
					arr[j+1] = arr[j];
					arr[j]= temp;
				}
			}
		}
		System.out.println(cnt);
		return arr;
	}
}
{% endhighlight %}
</div>
</div>
</div>


[6|4|2|1|5|3]

1. 6 > 4 ? *change* : stay --> [4|6|2|1|5|3]
2. 6 > 2 ? *change* : stay --> [4|2|6|1|5|3]
3. 6 > 1 ? *change* : stay --> [4|2|1|6|5|3]
4. 6 > 3 ? *change* : stay --> [4|2|1|5|6|3]
5. 6 > 3 ? *change* : stay --> [4|2|1|5|3|6]
6. 4 > 2 ? *change* : stay --> [2|4|1|5|3|6]
7. 4 > 1 ? *change* : stay --> [2|1|4|5|3|6]
7. 4 > 5 ? change : *stay* --> [2|1|4|5|3|6]
8. 5 > 3 ? *change* : stay --> [2|1|4|3|5|6]
9. 5 > 6 ? change : *stay* --> [2|1|4|3|5|6]
.
.
n개를 정렬해야 한다면 이렇게 n(n-1)/2 번의 비교를 해야 함.

만약에 {2,1.3,4,5,6 } 이런 배열을 sorting한다면 ?

[213456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>
[123456]<br>

2와 1을 바꾼 후에 더 이상 정렬을 할필요가 없는데도 루프를 돌면서 비교를 수행한다.
정렬이 되어 있는경우 루프를 취소하고 빠져나오도록 하기 위해서는 어떻게 해야 할까?

플래그를 한번 달아봤다. 순환 중 change가 되지 않으면 더이상 정렬하지 않아도 되는것으로 판단하도록 했다.

<a class="btn btn-code" data-toggle="collapse" href="#upgrage">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="upgrade">
<div class="card">
{% highlight java %}
public static int[] BubbleSort(int[] arr){
		int cnt = 0;
		int len = arr.length;
		boolean flag= true;
		for(int i = 0; i <len ; i++){
			if(flag){
				flag = false;
				for(int j=0; j < len - (i+1); j++){
					cnt +=1;
					if(arr[j] > arr[j+1]){
						flag = true;
						int temp = arr[j+1];
						arr[j+1] = arr[j];
						arr[j]= temp;
						System.out.println("change" + arr[j+1] + "<->" +temp);
					}

					System.out.println( arr[j] + " / "+ arr[j+1] + "-->"+ printArray(arr));

				}
			}

		}
		System.out.println(cnt);
		return arr;
	}

{% endhighlight %}
</div>
</div>
</div>


<pre>
change7<->2
2 / 7-->[2713456]
change7<->1
1 / 7-->[2173456]
change7<->3
3 / 7-->[2137456]
change7<->4
4 / 7-->[2134756]
change7<->5
5 / 7-->[2134576]
change7<->6
6 / 7-->[2134567]
change2<->1
1 / 2-->[1234567]
2 / 3-->[1234567]
3 / 4-->[1234567]
4 / 5-->[1234567]
1 / 2-->[1234567]
2 / 3-->[1234567]
3 / 4-->[1234567]
4 / 5-->[1234567]
15
[1234567]
</pre>


## 삽입 정렬

설명...


<a class="btn btn-code" data-toggle="collapse" href="#insert">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="insert">
<div class="card">
 {% highlight java %}
 public static void main(String[] args) {
		int[] dataarr= {5,1,6,4,2,3};
	//	dataarr = BubbleSort(dataarr);
		dataarr = insertionSort(dataarr);
		System.out.println(printArray(dataarr));
	}
 public static int[] insertionSort(int[] arr){
   int cnt = 0;
   int len = arr.length;
   for(int i = 1; i < len ; i++){
     if(arr[i-1] > arr[i]){//오른쪽이 더 작으면
       int num = arr[i];
       int j = 0;
       while(num > arr[j]){
         j++; //1
       }
       System.out.println( num + "have to insert to" + j );
       arr = change(i, j, arr);
     }

   }
   System.out.println(cnt);
   return arr;
 }

 public static int[] change(int oldi, int newi, int[] arr){
   int temp = arr[oldi];
   for(int i = oldi; i > newi; i--){
     arr[i] = arr[i-1];
   }
   arr[newi] = temp;
   return arr;
 }
 {% endhighlight %}
</div>
</div>
</div>
