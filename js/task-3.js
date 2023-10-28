function getElementWidth(content, padding, border) {
    content = Number(content);
    padding = Number(padding);
    border = Number(border);
    console.log(Number.parseFloat(content));
    console.log(Number.parseFloat(padding));
    console.log(Number.parseFloat(border));
    

   
     const getElementWidth = content + 2 * padding + 2 * border;
    return getElementWidth;
    
  
    
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200



 // return `getElementWidth: ${content + 2 * padding + 2 * border}`

    // return console.log(`getElementWidth: ${content + 2 * padding + 2 * border}`);
    

    