const fsLibrary  = require('fs');

let w= "google.com";
let a= "noura";
let p= "123"; 
let w1= "yahoo.com";
let a1= "sone";
let p1= "789"; 


////
function printArr(arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);    
    }
}

////formulate data for file
function pushToArrayOfData(website, acc, pass){
    let myData= [];
    myData.push(website);
    myData.push(acc);
    myData.push(pass);
    return myData;
  //save password, acc and website
}

/////save data to file
function saveDataToFile(website, acc, pass){
    data="";

    if(readAndSearch(website)!= -1){
        let myData= pushToArrayOfData(website, acc, pass);

        for (let index = 1; index < myData.length+1; index++) {
            if(index%3==0 )
                data = data.concat(myData[index-1] + "\t");   
                else
                data = data.concat(myData[index-1] + " ");

        }

        fsLibrary.appendFile("data.txt", data,function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }else
    console.log('data already exists in the file.\n');
    
}

function read(){
    let content= ""
    fsLibrary.readFile('data.txt','utf8', function read(err, data) {
        if (err) {
            throw err;
        }
        const content = data;
        return content;

    });
    return content;   

}


function readAndSearch(targetWebsite){
    let data= ""
    data=read();

    let bo= data.includes(targetWebsite, 0);

    console.log("bo= "+ bo);
    if(bo = true){
        return -1;//website already exists in the file no need to save it
    }else
    return 1; //not in the file can be saved
}

function caller(){
    alert("From calling another js")
}

saveDataToFile(w, a, p);
saveDataToFile(w1,a1,p1);
