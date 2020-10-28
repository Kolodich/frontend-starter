const fs = require('fs');
const paths = require("../paths.json");
const config = require("../config.json");

function createBlocks(){
  createFilesByPath(paths.src.block.pathFolder, layoutTypes.block);
 }
 
 function createPages(){
  createFilesByPath(paths.src.page.pathFolder, layoutTypes.page);
 }
 
 function createBlockAndPages() {
  createPages();
  createBlocks();
 }

let fileExtension = [".html", ".scss", ".js"];
let layoutTypes = { page: "page", block: "block" };

function createFilesByPath(path, layoutType) {
 let filePaths = path;
 let dirs = fs.readdirSync(filePaths);
 deleteJunks(dirs);
 dirs = dirs.filter(function (el) {return el != null;});
 for(i = 0; i < dirs.length;i++){
  let allFilePath = `${filePaths}${dirs[i]}/${
    layoutType==layoutTypes.block ? "_"+dirs[i] : dirs[i]
  }`;
  if(fs.existsSync(allFilePath+fileExtension[0]) === false && fs.existsSync(allFilePath+fileExtension[1]) === false && fs.existsSync(allFilePath+fileExtension[2]) === false){
    fileExtension.forEach(elem => {
      let writedText = ``;
      writedText = writeText(dirs[i], layoutType, elem);
      fs.appendFileSync(allFilePath+elem, writedText,(err)=>{if(err) throw err;});   
    });
  } 
 } 
} 

function deleteJunks(dirs) {
  dirs.forEach((elem, index) => {
   if(dirs[index].indexOf(".html")>=0 && dirs[index].indexOf(".js")>=0 && dirs[index].indexOf(".scss")>=0) delete dirs[index]; 
  });
 }

function writeText(dirName, layoutType, fileType) {
  let text = ``;
  if(layoutType==layoutTypes.block){
    if(fileType==".html"){
      text = addText(config.createBlocksAndPages.module.page);
    }
    else if(fileType==".scss"){
      text = addText(config.createBlocksAndPages.module.style);
    }
    else if(fileType==".js"){
      text = addText(config.createBlocksAndPages.module.script);
    }      
  }
  else if(layoutType=layoutTypes.page){
    if(fileType==".html"){
      text = addText(config.createBlocksAndPages.view.page);
    }
    else if(fileType==".scss"){
      text = addText(config.createBlocksAndPages.view.style);
    }
    else if(fileType==".js"){
      text = addText(config.createBlocksAndPages.view.script);
    }      
  }
  return text;
}

function addText(textArray) {
  let completeText = '';
  textArray.forEach(pieceOfText => {
    completeText += pieceOfText+"\n";
  });
  return completeText;
}

module.exports.createBlockAndPages = createBlockAndPages;
module.exports.createBlock = createBlocks;
module.exports.createPage = createPages;
