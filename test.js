// function getUserId (callback) {
//     setTimeout((id = 40) => {
//         callback(id);
//     }, 2000)
// }
//
// function getUserEmailById (id, callback) {
//     setTimeout(() => {
//         const users = [
//             {
//                 id: 10,
//                 email: "test@test.com"
//             },
//             {
//                 id: 11,
//                 email: "test2@test.com"
//             }
//         ];
//     })
// }
//
// const data = new Promise((resolve, reject) => {
//     try {
//         getUserId((id) => {
//             resolve(id);
//         });
//     }catch(e) {
//         reject(e);
//     }
// });
//
// console.log(0);
//
// data.then((id) => {
//     console.log('then ',id);
//     return new Promise((resolve, reject) => {
//         getUserEmailById(id, (data) => {
//             resolve(data);
//         })
//     })
//         .then((data) => {
//             console.log('then 2 ',data);
//         })
// }).catch((err) => {
//     console.log(err.message);
// })

// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
//
// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network Error' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('done');
//     })

const url = 'https://jsonplaceholder.typicode.com/posts?_page=2&_limit=10';

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err));
console.log("hi")

function getBody(res) {
    console.log(res)
}