// Bài 2. Tạo 1 mảng chứa 5 phần tử số, sau đó tính tổng và trung bình cộng của các phần tử trong mảng
let sum = 0;
const arr = [2,4,6,8,10];
for (let i = 0; i< arr.length; i++) {
    sum += arr[i];
}
const avg = sum/ arr.length;
console.log(`Tổng của các phần tử trong mảng là: ${sum}`);
console.log(`Trung bình cộng của các phần tử trong mảng là: ${avg}`);