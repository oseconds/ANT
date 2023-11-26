# 디지털아트 프로그래밍 기말 프로젝트

**"밀고 당기기의 시적허용"**

## 저널링 슬라이드

[오영서_기말프로젝트](https://docs.google.com/presentation/d/1tHYqxrmMxCJi4WolTrAYjIlzXc_LJ0rmFNPloDS_ewE/edit?usp=sharing)

---

## 구상

### 밀고 당기기

자연과 일상에서의 밀고 당기는 현상들은 어떤게 있을까 생각하다 중력이나 부력같은 직설적인 힘 말고
꽃향기에 끌리는 벌, 가로등에 부딪히는 나방, 모기향을 피워 모기를 쫓는등의 조금은 더 간접적인 밀고 당김등을 코드로 구현해보면 재미있겠다 생각했다
그래서 저번 과제에서 구상만 했던 개미 군체 시뮬레이터의 아이디어를 발전시켜서  
개미 이야기를 풀어보려한다

### 객체 역할 설정

1. 개미 : 랜덤하게 움직이는 파티클, 첫번째로 생성된 파티클을 그 이후에 생성되는 파티클들이 쫓아 따라간다.

2. 개미 지옥: 범위 안에 들어온 개미를 끌어당긴다.

3. 볼펜: 개미가 싫어하는 성분. 볼펜이 그어진 곳은 개미가 넘거나 다가가지 못한다.

## [개미](#L22)



### clone()


줄지어 이동하는 개미를 표현하기 위해 
기존 파티클시스템 코드에서 

```javascript 
 clone() {
   let newPosition = this.position.copy();
   newPosition.sub(this.velocity.copy()); 
   return new Particle(newPosition, this.velocity.copy());
 }  
 ```

클론 속성을 추가해서 줄지어 생성되게 했다

<img width="484" alt="image" src="https://github.com/oseconds/ANT/assets/123317581/15906667-ed89-4be9-9c7a-b9c36f1f7067">

그런데 생각보다 쉽지않다    
처음으로 생성되는 파티클이 랜덤하게 움직이면서 그 후에 생성되는 파티클들을 줄지어 따라가게 만드려면     
간단히 생각하면 딜레이를 줘서 반복하면 될것같은데 랜덤하게 계속 변화하는 벡터를 계속 관찰하고 따라가게 하는 방법을 찾고있다
