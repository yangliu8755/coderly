// 链表的逆置 
// 算法需要判断严谨性
function Node(value){
   this.value = value;
   this.next = null;
}

const node1 = new Node(1);
const node2= new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function trave(node){
   if(node==null){
      return
   }
  console.log(node.value);
   if(node.next === null){
      return node;
   }
   return trave(node.next)

}
function reverse(node){
  if(node == null){
     return 
  }
  if(node.next.next === null){
      const newNode = node.next;
        node.next.next = node;
        node.next = null;
       return newNode;
  }
   const result = reverse(node.next);
   node.next.next = node;
   node.next = null;
   return result;
   
}
const newNode = reverse();
trave(newNode);