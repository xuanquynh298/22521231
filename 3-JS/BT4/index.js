// Bài 4. Tạo 1 object đại diện cho 1 học sinh, với các thuộc tính như tên, tuổi, điểm trung bình, sau đó viết hàm để in ra thông tin của học sinh

// Cách 1:
const student = {name: "Xuân Quỳnh", age: 19, dtb: 10};
console.log(`Thông tin học sinh: 
    Tên: ${student.name},
    Tuổi: ${student.age},
    Điểm trung bình: ${student.dtb}
`);

// Cách 2:
// const student = {name: "Xuân Quỳnh", age: 19, dtb: 10};
// for (let key in student) {
//     console.log (key + ": " + student[key]);
// }