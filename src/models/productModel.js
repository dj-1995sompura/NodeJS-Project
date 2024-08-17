const products = [
    {id:1, image_url:"https://www.rd.com/wp-content/uploads/2020/01/84_The-Road-by-Cormac-McCarthy-via-amazon.jpg?fit=700%2C700", title:'The Road', price:1000},
    {id:2, image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TbpEXj0Vi7ghF0l93MnsxLRpXD5nCPeJ-A&s", title:'Good sister', price:800},
    {id:3, image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pka3LzNkyCEm7JRt6rhPI4NeeYvp_jpJDQ&s", title:'The God father', price:2000},
    {id:4, image_url:"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg", title:'Lord of the Rings', price:1500},
    {id:5, image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGmCDULAw4peCWtuJB1sT0Ho4xb1tVQMkmw&s", title:'The little prince', price:500}
];

const getProducts = ()=>{
    console.log("test1");
    return products;
}

module.exports = getProducts;