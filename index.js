// var languages = [
//     'javascript',
//     'PHP',
//     'Java',
// ];
 
// languages.slice(1, 2)

// console.log(languages.slice(-2, -1))

// console.log(languages.indexOf('PHP'))

// var myString = 'giang'

// console.log(myString.split(''))

// console.log(languages.join(' '))

// console.log(languages.splice(1, 2, 'Dart'))
// console.log(languages)

// function showDialog() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString)
// }
// showDialog("Xin chào các bạn!" , ' Hello world', 1, 2, 3);


// function showMessage (message) {
//     var fullName = 'Giang Nguyen';
//     console.log(fullName);

//     function showMessage2 () {
//          console.log('Xin chào các bạn!');
//     }

//     showMessage2();

//     console.log(message)
// }

// showMessage('Mai này con lớn lên!');

// // Object contructor

// function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar =avatar;
//   this.age = 18;
// }

// var author = new User('Giang', 'Nguyễn', ' Avatar');
// var user = new User('Sơn', 'Nguyễn', ' Avatar');

// User.prototype.className = 'F8'

// User.prototype.getFirstName = function () {
//     return this.firstName;
// }

// User.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

// User.prototype.getClassName = function () {
//     return this.className;
// }

// console.log(author.getFirstName());

// console.log( typeof user.getFullName());

// console.log( user.getClassName())

// var date = new Date();
// var day = date.getDay();
// var month = date.getMonth();
// var year = date.getFullYear();

// console.log(date);

// //câu lệnh rẽ nhánh switch
// var date = 2;

// switch(date ) {
//     case 2:
//         console.log('Hôm nay là thứ 2!')
//         break;
//     case 3:
//         console.log('Hôm nay là thứ 3!')
//         break;
//     case 4:
//         console.log('Hôm nay là thứ 4!')
//         break;
//     case 5:
//         console.log('Hôm nay là thứ 5!')
//         break;
//     default:
//         console.log('Không biết!')
// }

// toán tử 3 ngôi
var course = {
    name: 'Javascrpit',
    coin: 0
}

var result = course.coin > 0 ? `${course.coin} Coins`: 'Miễn phí';

// console.log(result)

// var a =1;
// var b = 2;

// var c = b > 3 ? b : a;

// console.log(c)

// vòng lặp
for(var i = 0; i < 100; i++) {
    // console.log(i);
}

// vòng for in : lấy ra key của đố tượng
// for of lấy ra value của đối tượng

var myInfo = {
    name: 'giang',
    age: 21,
    address: 'thái bình',
    
}
var array = [
    'javascript',
    'PHP',
    'java',
    'Python'
]

// console.log(array);

// map()

var courses = [
    {
        id: 1 , 
        name: 'javascrpit',
        coin: 250
    },

    {
        id: 2 , 
        name: 'HTML ,CSS',
        coin: 250
    },

    {
        id: 31 , 
        name: 'Java',
        coin: 250
    },

    {
        id: 4 , 
        name: 'Python',
        coin: 250
    },

    {
        id: 5 , 
        name: 'Dart',
        coin: 250
    },
];

var newArr = courses.map(function (course, index) {
    return '<h2>course.name</h2>';
});

// console.log(newArr.join('  '))


var total = courses.reduce(function (accmulate, currentValue ) {
    return accmulate.concat(currentValue.name) ;
}, [])

// console.log( total);

// ví dụ 1:
var depthArr = [1, 2, 3, [4, 5], 6, [7, 8, 9], 10];

var flatArr = depthArr.reduce(function (newArr, depthItem) {
    return newArr.concat(depthItem);
}, []);

// console.log(flatArr)

// ví dụ 2:

var topics = [
    {
        topic: 'font-end',
        course: [
            {
                id: 1,
                name: 'javascrpt',
            },
            {
                id: 2,
                name: 'HTML, CSS',
            }
        ],
        coin: 0
    },
    {
        topic: 'font-end',
        course: [
            {
                id: 1,
                name: 'javascrpt',
            },
            {
                id: 2,
                name: 'HTML, CSS',
            }
        ],
        coin: 3
    },
    {
        topic: 'back-end',
        course: [
            {
                id: 1,
                name: 'PHP',
            },
            {
                id: 2,
                name: 'NodeJS',
            }
        ],
        coin: 200
    },
]

// duyệt qua tất cả phần tử của mảng
topics.forEach(function (course, index) {
    // console.log(index, course);
});

// kiểm tra tất cả phần tử phải thỏa mãn điều kiện 
var isFree = topics.every(function (course) {
   return course.coin === 0;
});

// console.log(!isFree);

// chỉ cần 1 phần tử thỏa mãn điều kiện
var isFree2 = topics.some(function (course) {
    return course.coin === 0;
 });

//  console.log(isFree2);

// tìm kiếm 1 phần tử 

var topic = topics.find(function (course, index) {
    return course.topic === 'font-end';
}) ;

// console.log(topic);

// tìm kiesm tất cả ohaafn tử thỏa mãn
var topic2 = topics.filter(function (course, index) {
    return course.topic === 'font-end';
}) ;

// console.log(topic2);

// thay đổi element của aray

var newTopic = topics.map(function (topic, index, originArray) {
    return `<h2>${topic.topic}</h2>`;
});

// console.log(newTopic.join(' '));

// nhận về giá trị duy nhất khi xử lí 
var coursesList = topics.reduce((a, b) => a.concat(b.course), []);

// console.log(coursesList)

// includes method
var nameCourse = courses.map(course => course.name);

// console.log(nameCourse);

// console.log(nameCourse.includes('HTML ,CSS', 3));

// Callback
function myFunction(param) {
    param('Học lập trình');
}

function myCallBack(value) {
    console.log('value : ', value)
}

// myFunction(myCallBack);

// var random = Math.floor(Math.random() * 100);

// if(random < 5) {
//     console.log('thành công !');
// }


// var array = [1, 2, 3, 2, 3, 5, 6, 2];



// function loc() {
//     var newArray = [];
//     newArray = array.filter(function (item){
//         return newArray.includes(item) ? '' : newArray.push(item);
//     });

//     return newArray;
// }

// console.log(loc());
// DOM HTML - document object model


// var headingNode = document.getElementById('header');

// console.log(headingNode);

// var headingNodes = document.getElementsByClassName('heading');

// // console.log(headingNodes);

// var divTag = document.getElementsByTagName('div');

// // console.log(divTag);

// var headingNodea = document.querySelector(".testName .heading__2");

// console.log(headingNodea);

// console.log(document.forms.testForm);

// var boxNode = document.querySelectorAll(".box-1 li");
// console.log(boxNode);

// // console.log(boxNode.querySelector('li'));

// // //     var headerNode = document.querySelector('.box-1');

// // //     console.log(headerNode);

// // //     console.log(headerNode.querySelectorAll('li'))

// // //     console.log(document.getElementsByClassName('heading'))

// // //     console.log(document.anchors);

// // //     console.log(document.images);

// var headingElement = document.querySelector('h1');

// // headingElement.setAttribute('title', 'heading');

// // headingElement.name = 'heading';

// // console.log(headingElement.getAttribute('class'));

// // console.log(headingElement.innerText);

// // console.log(headingElement.textContent);

// // headingElement.innerHTML = '<h2>giang</h2>';

// // console.log(headingElement.outerHTML);

// // Object.assign(headingElement.style, {
// //     color: 'red',
// // });

// // console.log(headingElement.style.color);

// // setInterval(() => {
// //     headingElement.classList.toggle('red');
// // }, )

// // headingElement.classList.add('red');

// // headingElement.classList.remove('red');

// // console.log(headingElement.classList.contains('red'));

// // // DOM events

// headingElement.onclick = function () {
//     console.log(Math.random());
// }

// var inputElement = document.querySelector('input[type="text"]');

// document.onkeypress = function(e) {

//     switch(e.which) {
//         case 27:
//             console.log('EXIT');
//             break;
//         case 49:
//             console.log('số 1');
//             break;
//     }
// }


// var aElements = document.querySelectorAll('a');

// for(var i=0; i<aElements.length; ++i){
//     aElements[i].onclick = function(e){
//         if(!e.target.href.startsWith('https://google.com.vn')){
//             e.preventDefault();
//         }
//     }
// }

// var ulElement = document.querySelector('ul');

// ulElement.onmousedown =  function(e) {
//     e.preventDefault();
// }

// ulElement.onclick = 
//     function(e) {
//         console.log(e.target);
//     }

// document.querySelector('div').onclick =
//     function(e) {
//         console.log('DIV');
//     }

//     function viec1 () {
//         console.log('click here!');
//     }

// // event listenner

// function viec2 () {

//     console.log('viec 2');
// }

// function viec3 () {
//     console.log(Math.floor(Math.random()*10));
// }

// var btnElement = document.querySelector('button');

// btnElement.addEventListener('click', viec2);
// btnElement.addEventListener('click', viec1);
// btnElement.addEventListener('click', viec3);

// setTimeout(() => {
//     btnElement.removeEventListener('click', viec2)
// }, 3000)


// ulElement.addEventListener('mousedown', (e) => {
//     e.preventDefault();
// } );

//  var liElement = document.querySelectorAll('li')

// function event1() {
//     for(var i = 0; i < liElement.length; ++i) {
//         console.log(liElement[i]);
//     }
// }

// ulElement.addEventListener('click', event1)

// setTimeout(() => {
//    ulElement.removeEventListener('click', event1);
// }, 3000)

// JSON
/**
 * là 1 định dạng dữ liệu (chuỗi)
 * JSON giúp thể hiện: Number, Null, Array, Object
 * parse / stringify
 */

var json = '["JavaScript", "PHP"]';
// var json = '{"name":"Giang Nguyen", "age": 20, "gender": "male"}';
// console.log(JSON.parse(json));

// promise
/**
 * Sync(đồng bộ):chạy theo luồng tuần tự
 * Async(bất đồng bộ): setTimeout, setInterval, fetch, XMLHttpRequest, file reading,
 * request animation frame
 * 
 * Callback hell
 * Pyramid of doom
 */

// trạng thái promise
// 1. pendding
// 2. Fulfilled
// 3. Rejected

var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // logic
        // thành công resolve()
        // thất bại: reject()
        resolve();
    }
);

// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms);
//     })
// }

// sleep(1000)
//     .then (function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then (function() {
//         console.log(2);
//         return new Promise(
//             function (resolve, reject) {
//               reject(' có lỗi !')
//             }
//         )
//     })
//     .then (function() {
//         console.log(3);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all
// example

var users = [
    {
        id: 1,
        name: 'Giang Nguyen'
    },
    {
        id: 2,
        name: 'Son Nguyen'
    },
    {
        id: 3,
        name: 'Hung Tran'
    },
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Hoc JavaScript tai F8!'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Hay lắm !'
    },
    {
        id: 3,
        user_id: 3,
        content: 'Good luck!'
    },
]

// Fake API

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000)
    })
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        })
        setTimeout(function() {
            resolve(result);
        }, 1000);
    })
}

getComments()
    .then(function(comments) {
       var userIds = comments.map(function(comments) {
           return comments.user_id;
       })

       return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments
                };
            });
    })
    .then (function (data) {
       
        var commetsBlock = document.getElementById('comment_block');
        var html = '';

        data.comments.forEach(function(comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        })

        // commetsBlock.innerHTML = html;
    })

// fetch

// var postApi = 'https://jsonplaceholder.typicode.com/posts';
// fetch(postApi)
//     .then(response => response.json())
//     .then (json => { 
//         var html = '';
//         var result = json.map(function (post) {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`
//         })

//         html = result.join(' ')

//         document.getElementById('post_block').innerHTML = html;
//     }
//     )

// var userApi = 'https://jsonplaceholder.typicode.com/users';
// fetch(userApi)
//     .then(response => response.json())
//     .then (json => {
//         var html = '';
//         var result = json.map(function(user) {
//             return `<li>
//                 <div>name : ${user.name}</div>
//                 <div>username : ${user.username}</div>
//                 <div>email : ${user.email}</div>
//             </li>`
//         })

//        html = result.join(' ');

//     //    document.getElementById('user_block').innerHTML = html;

//     })

// var usersApi = 'http://localhost:3000/users';
// // fetch(usersApi)
// //     .then(response => response.json())
// //     .then(json => {
// //         var html = '' ;
// //         var result = json.map(function(user) {
// //            return ` 
// //                 <li>
// //                     <img src = "${user.image}"></img>
// //                     <div>Name: ${user.name}</div>
// //                     <div>Gender: ${user.gender}</div>
// //                 </li>
// //             `
// //         })
// //         html = result.join(' ');
// //         // document.getElementById('user_block').innerHTML = html;
// //     })




// function start() {
//     getUsers(renderUsers);
//     handleCreateForm();
// }
// start();

// // functions

// function getUsers(callback) {
//     fetch(usersApi)
//         .then(response => response.json())
//         .then(callback);
// }

// function createUsers(data, callback) {
//     fetch(usersApi, {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json',
//           },
//         body: JSON.stringify(data)
//     })
//         .then( response => response.json())
//         .then (callback)
// }

// function renderUsers(users) {
//     var listUsersBlock = document.getElementById('list-users');

//     var htmls = users.map(function (user) {
//         return `
//             <li class="user-item-${user.id}">
//                 <p>${user.name}</p>
//                 <p>${user.gender}</p>
//                 <button onclick="handleDeleteUsers(${user.id})">Xóa</button>
//                 <button onclick="updateUsers(${user.id}s)">Sửa</button>
//             </li>
//         `;
//     })

//     listUsersBlock.innerHTML = htmls.join('');
// }

// function handleDeleteUsers(id) {
//     fetch(usersApi + '/' + id, {
//         method: 'delete',
//         headers: {
//             'Content-Type': 'application/json',
//           }
//     })
//         .then (response => response.json())
//         .then(function() {
//             var userItem = document.querySelector('.user-item-' + id);
//             if(userItem) {
//                 userItem.remove();
//             }
//         })
// }

// function updateUsers(id, data, callback) {
//     fetch(usersApi + '/' + id, {
//         method: 'put',
//         headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//     })
//         .then (response => response.json())
//         .then(callback)
// }

// function handleUpdateUsers() {
//     var btnElement = document.querySelector('.btn');
//     btnElement.addEventListener('click' , function () {
//         var name = document.querySelector('input[name= "name"]').value;
//         var gender = document.querySelector('input[gender= "gender"]').value;
        
//         var formData = {
//             name: name,
//             gender: gender
//         }

//         updateUsers(formData, function() {
//             getUsers(renderUsers);
//         });
//      })
// }

// function handleCreateForm() {
//     var btnElement = document.querySelector('.btn');
//     btnElement.addEventListener('click' , function () {
//         var name = document.querySelector('input[name= "name"]').value;
//         var gender = document.querySelector('input[gender= "gender"]').value;
        
//         var formData = {
//             name: name,
//             gender: gender
//         }

//         createUsers(formData, function() {
//             getUsers(renderUsers);
//         });
//      })
// }


// ES6
// Let / const /var
/**
 * 1. Var/ Let, Const: Scope, hosting
 * 2. Const/ Let, Var: Assignment
 */

// template
// enhanced object literal
const fieldName = 'name';
const fieldPrice = 'price';

var course = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000,
    getName() {
        return this.name
    }
}

console.log(course.getName())


// classes
// function course(name, price) {
//     this.name= name,
//     this.price = price
// }

class Course {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }
}
 
const phpCourse = new Course('PHP' , 1000)
const jsCourse = new Course('Javascript' , 1200)

console.log(phpCourse, jsCourse)

console.log(jsCourse.getName());
console.log(jsCourse.getPrice());

// Default parameter values
function logger(log, type = 'log') {
    console[type](log)
}

logger('Message...', 'warn')

// destructuring
var array = ['Javascript', 'PHP', 'Ruby']

var [a, ...rest] = array

// console.log(a, rest)

var course = {
    name: 'Javascrpit',
     price: 1000,
     image: 'image',
     children: {
         name: 'ReactJS'
     }
}

var { name: parentName, children: { name: childrenName } } = course

function logger1({ name, price, ...strings }) {
    console.log(name)
}

logger1({
    name: 'Javascrpit',
    price: 1000,
    description: 'content'
})

// spread
var mang1 = ['Javascript', 'PHP', 'Dart']
var mang2 = ['C++', '#C', 'Ruby']

var mang3 = [...mang2, ...mang1]

console.log(mang3)

// Tagged template literals
function hightlight([first, ...strings], ...values) {
    return values.reduce((acc, cur) => [...acc, `<span>${cur}</span>`, strings.shift()].join('')
    ,[first])
}

var brand = 'F8'
var course = 'Javscript'

const html = hightlight`Học lập trình ${course} tại ${brand} !`

console.log(html)

// modules
